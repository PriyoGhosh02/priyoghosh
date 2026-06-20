import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Persistent 3D background.
 * - Wireframe icosahedron + galaxy particle field (B&W)
 * - Globe scale shrinks as user scrolls down, but NEVER goes below MIN_SCALE (0.35)
 * - Enhanced realistic interactions: mouse parallax, scroll-driven depth, inertial rotation,
 *   aurora particle ring, subtle breathing pulse, and normalized scroll scaling.
 * - Fixed full-viewport canvas behind content.
 * - CHANGED: initial globe size reduced (INITIAL_SCALE = 0.75)
 */
export function Scene3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    // ─────────────────────────────────────────────────────────────────────────────
    // CONFIGURATION
    // ─────────────────────────────────────────────────────────────────────────────
    const MIN_SCALE = 0.35;              // absolute lower bound, cannot go below this
    const MAX_SCROLL_EFFECT = 0.85;      // how much scroll influences scale (1 -> MIN_SCALE)
    const INITIAL_SCALE = 0.75;          // <-- new: starting globe scale (was 1.0)
    const RING_PARTICLE_COUNT = isMobile ? 800 : 1800;

    // ─── Scene / Camera / Renderer ─────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.045);

    const camera = new THREE.PerspectiveCamera(
      52,
      window.innerWidth / window.innerHeight,
      0.1,
      200,
    );
    camera.position.set(0, 0, 7);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.8));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ─── Icosahedron (wireframe) with dynamic morphing ──────────────────────────
    const geometry = new THREE.IcosahedronGeometry(2.2, isMobile ? 2 : 4);
    const basePositions = geometry.attributes.position.array.slice() as Float32Array;

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const mesh = new THREE.Mesh(geometry, wireMat);

    const coreGeo = new THREE.IcosahedronGeometry(1.38, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.045,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);

    const globeGroup = new THREE.Group();
    globeGroup.add(mesh);
    globeGroup.add(core);
    scene.add(globeGroup);

    // ─── AURORA PARTICLE RING ────────────────────────────────────────────────
    const createAuroraRing = () => {
      const count = RING_PARTICLE_COUNT;
      const radius = 2.45;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const radialOffset = (Math.random() - 0.5) * 0.28;
        const x = Math.cos(angle) * (radius + radialOffset);
        const z = Math.sin(angle) * (radius + radialOffset);
        const y = Math.sin(angle * 3) * 0.12 + (Math.random() - 0.5) * 0.1;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const brightness = 0.35 + Math.random() * 0.45;
        colors[i * 3] = brightness;
        colors[i * 3 + 1] = brightness * 0.95;
        colors[i * 3 + 2] = brightness;
      }

      const ringGeo = new THREE.BufferGeometry();
      ringGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      ringGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const ringMat = new THREE.PointsMaterial({
        size: isMobile ? 0.028 : 0.022,
        vertexColors: true,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      return new THREE.Points(ringGeo, ringMat);
    };

    const auroraRing = createAuroraRing();
    scene.add(auroraRing);

    // ─── GALAXY SPIRAL STAR FIELD ───────────────────────────────────────────
    const buildGalaxy = () => {
      const starCount = isMobile ? 3200 : 8500;
      const arms = 3;
      const armSpread = 0.58;
      const armTwist = 3.9;
      const galaxyRadius = 54;

      const pos = new Float32Array(starCount * 3);
      const cols = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount; i++) {
        const arm = i % arms;
        const t = Math.pow(Math.random(), 1.2);
        const r = t * galaxyRadius;
        const angle =
          (arm / arms) * Math.PI * 2 +
          t * armTwist +
          (Math.random() - 0.5) * armSpread * (1 - t * 0.45);

        const scatter = (1 - t) * 2.8 + 0.4;
        const x = Math.cos(angle) * r + (Math.random() - 0.5) * scatter;
        const z = Math.sin(angle) * r + (Math.random() - 0.5) * scatter;
        const y = (Math.random() - 0.5) * scatter * 0.32;

        pos[i * 3] = x;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = z;

        const brightness = THREE.MathUtils.lerp(0.95, 0.2, t * t) * (0.65 + Math.random() * 0.5);
        cols[i * 3] = brightness;
        cols[i * 3 + 1] = brightness * 0.92;
        cols[i * 3 + 2] = brightness;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(cols, 3));

      const mat = new THREE.PointsMaterial({
        size: isMobile ? 0.055 : 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.88,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      return { points: new THREE.Points(geo, mat), geo, mat };
    };

    const galaxy = buildGalaxy();
    galaxy.points.rotation.x = Math.PI * 0.2;
    galaxy.points.position.y = -3.8;
    scene.add(galaxy.points);

    // ─── NEBULA CLOUD PARTICLES ─────────────────────────────────────────────
    const buildNebula = () => {
      const count = isMobile ? 700 : 2000;
      const pos = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const r = 10 + Math.random() * 32;
        const theta = Math.random() * Math.PI * 2;
        pos[i * 3] = Math.cos(theta) * r + (Math.random() - 0.5) * 7;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
        pos[i * 3 + 2] = Math.sin(theta) * r + (Math.random() - 0.5) * 7;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: isMobile ? 0.52 : 0.38,
        transparent: true,
        opacity: 0.045,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      return { points: new THREE.Points(geo, mat), geo, mat };
    };

    const nebula = buildNebula();
    nebula.points.rotation.x = Math.PI * 0.19;
    nebula.points.position.y = -3.8;
    scene.add(nebula.points);

    // ─── OUTER SPARSE HALO ───────────────────────────────────────────────────
    const haloCount = isMobile ? 400 : 1000;
    const hGeo = new THREE.BufferGeometry();
    const hPos = new Float32Array(haloCount * 3);
    for (let i = 0; i < haloCount; i++) {
      const r = 16 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      hPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      hPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      hPos[i * 3 + 2] = r * Math.cos(phi);
    }
    hGeo.setAttribute("position", new THREE.BufferAttribute(hPos, 3));
    const hMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.016,
      transparent: true,
      opacity: 0.38,
      sizeAttenuation: true,
    });
    const halo = new THREE.Points(hGeo, hMat);
    scene.add(halo);

    // ─── INTERACTIVE STATE ───────────────────────────────────────────────────
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, vx: 0, vy: 0, lastX: 0, lastY: 0 };
    let scrollNormalized = 0;
    let targetScrollNorm = 0;
    let lastTimestamp = 0;

    const getMaxScroll = () => document.body.scrollHeight - window.innerHeight;
    let maxScroll = getMaxScroll();

    const updateScrollNormalized = () => {
      const max = getMaxScroll();
      if (max <= 0) {
        targetScrollNorm = 0;
        return;
      }
      const raw = window.scrollY / max;
      targetScrollNorm = Math.min(1.0, Math.max(0.0, raw));
    };

    const onScroll = () => updateScrollNormalized();
    const onResize = () => {
      maxScroll = getMaxScroll();
      updateScrollNormalized();
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = -(e.clientY / window.innerHeight) * 2 + 1;
      const now = performance.now();
      if (lastTimestamp && now - lastTimestamp < 100) {
        const dx = mouse.tx - mouse.lastX;
        const dy = mouse.ty - mouse.lastY;
        mouse.vx = dx * 0.9;
        mouse.vy = dy * 0.9;
      }
      mouse.lastX = mouse.tx;
      mouse.lastY = mouse.ty;
      lastTimestamp = now;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // ─── ANIMATION LOOP ──────────────────────────────────────────────────────
    const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
    const timer = new THREE.Timer();

    let raf = 0;
    const animate = () => {
      const delta = Math.min(0.033, timer.getDelta());
      const elapsed = performance.now() * 0.001;

      scrollNormalized += (targetScrollNorm - scrollNormalized) * 0.09;

      // ----- GLOBE SCALE: initial reduced size + scroll shrink + hard floor -----
      // rawScale = 1 at top, (1 - MAX_SCROLL_EFFECT) at bottom
      const rawScale = 1 - scrollNormalized * MAX_SCROLL_EFFECT;
      // Apply initial scale factor, then clamp to MIN_SCALE
      let globeScale = rawScale * INITIAL_SCALE;
      globeScale = Math.max(MIN_SCALE, globeScale);
      globeGroup.scale.setScalar(globeScale);

      // Smooth mouse with inertia
      mouse.x += (mouse.tx - mouse.x) * 0.045;
      mouse.y += (mouse.ty - mouse.y) * 0.045;
      mouse.vx *= 0.96;
      mouse.vy *= 0.96;
      const inertialX = mouse.x + mouse.vx * 0.08;
      const inertialY = mouse.y + mouse.vy * 0.08;

      // Wireframe morphing
      const arr = positionAttr.array as Float32Array;
      for (let i = 0; i < arr.length; i += 3) {
        const bx = basePositions[i];
        const by = basePositions[i + 1];
        const bz = basePositions[i + 2];
        const len = Math.hypot(bx, by, bz);
        const nx = bx / len;
        const ny = by / len;
        const nz = bz / len;
        const mouseInfluence = (inertialX * 0.5 + inertialY * 0.3);
        const noise =
          Math.sin(nx * 3.2 + elapsed * 0.55) * 0.11 +
          Math.cos(ny * 3.4 + elapsed * 0.48) * 0.11 +
          Math.sin(nz * 3.1 + elapsed * 0.62) * 0.09 +
          mouseInfluence * 0.035;
        const scale = 1 + noise;
        arr[i] = bx * scale;
        arr[i + 1] = by * scale;
        arr[i + 2] = bz * scale;
      }
      positionAttr.needsUpdate = true;

      // Core pulse
      const pulse = 1 + Math.sin(elapsed * 2.1) * 0.02;
      core.scale.setScalar(pulse);
      coreMat.opacity = 0.045 + Math.sin(elapsed * 1.9) * 0.008;

      // Rotations
      const scrollRotationFactor = scrollNormalized * 0.45;
      const mouseRotX = inertialY * 0.32;
      const mouseRotY = inertialX * 0.38;

      mesh.rotation.x = elapsed * 0.075 + mouseRotX + scrollRotationFactor * 0.2;
      mesh.rotation.y = elapsed * 0.11 + mouseRotY + scrollRotationFactor * 0.15;
      core.rotation.x = -elapsed * 0.045;
      core.rotation.y = -elapsed * 0.065;

      auroraRing.rotation.y = elapsed * 0.22 + mouseRotY * 0.9;
      auroraRing.rotation.x = Math.sin(elapsed * 0.7) * 0.08 + mouseRotX * 0.4;
      auroraRing.rotation.z = mouseRotX * 0.2;

      galaxy.points.rotation.y = elapsed * 0.011 + inertialX * 0.12;
      galaxy.points.rotation.x = Math.PI * 0.2 + inertialY * 0.06;
      nebula.points.rotation.y = elapsed * 0.007 + inertialX * 0.09;
      nebula.points.rotation.x = Math.PI * 0.19 + inertialY * 0.05;

      halo.rotation.y = elapsed * 0.018 + inertialX * 0.14;
      halo.rotation.x = inertialY * 0.12;

      // Camera dynamics
      const scrollDepth = scrollNormalized * 0.45;
      const targetCamZ = 6.2 - scrollDepth * 1.1;
      camera.position.z += (targetCamZ - camera.position.z) * 0.07;
      camera.position.x += (inertialX * 0.48 - camera.position.x) * 0.05;
      camera.position.y += (inertialY * 0.38 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      galaxy.points.position.y = -3.8 + scrollNormalized * 0.35;
      nebula.points.position.y = -3.8 + scrollNormalized * 0.28;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);

      renderer.dispose();
      geometry.dispose();
      wireMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      galaxy.geo.dispose();
      galaxy.mat.dispose();
      nebula.geo.dispose();
      nebula.mat.dispose();
      hGeo.dispose();
      hMat.dispose();
      if (auroraRing.geometry) auroraRing.geometry.dispose();
      if (auroraRing.material) auroraRing.material.dispose();

      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, oklch(1 0 0 / 0.03) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}