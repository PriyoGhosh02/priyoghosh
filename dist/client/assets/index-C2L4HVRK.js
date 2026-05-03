import{r as Ke,j as A}from"./index-BSflCf4U.js";const Xu="184",Lm=0,Fh=1,Im=2,jo=1,Um=2,ma=3,Ar=0,On=1,Ki=2,er=0,Os=1,Ta=2,Oh=3,Bh=4,Fm=5,Hr=100,Om=101,Bm=102,km=103,zm=104,Gm=200,Vm=201,Hm=202,Wm=203,Pc=204,Dc=205,Xm=206,jm=207,Ym=208,qm=209,$m=210,Km=211,Zm=212,Jm=213,Qm=214,Nc=0,Lc=1,Ic=2,js=3,Uc=4,Fc=5,Oc=6,Bc=7,wf=0,eg=1,tg=2,Fi=0,Tf=1,Af=2,Rf=3,Cf=4,Pf=5,Df=6,Nf=7,Lf=300,ns=301,Ys=302,Bl=303,kl=304,Cl=306,kc=1e3,Ji=1001,zc=1002,hn=1003,ng=1004,so=1005,bn=1006,zl=1007,Xr=1008,fi=1009,If=1010,Uf=1011,Ga=1012,ju=1013,ki=1014,Ni=1015,ir=1016,Yu=1017,qu=1018,Va=1020,Ff=35902,Of=35899,Bf=1021,kf=1022,bi=1023,rr=1026,jr=1027,zf=1028,$u=1029,is=1030,Ku=1031,Zu=1033,Yo=33776,qo=33777,$o=33778,Ko=33779,Gc=35840,Vc=35841,Hc=35842,Wc=35843,Xc=36196,jc=37492,Yc=37496,qc=37488,$c=37489,ll=37490,Kc=37491,Zc=37808,Jc=37809,Qc=37810,eu=37811,tu=37812,nu=37813,iu=37814,ru=37815,su=37816,au=37817,ou=37818,lu=37819,cu=37820,uu=37821,hu=36492,du=36494,fu=36495,pu=36283,mu=36284,cl=36285,gu=36286,ig=3200,kh=0,rg=1,_r="",ci="srgb",ul="srgb-linear",hl="linear",St="srgb",fs=7680,zh=519,sg=512,ag=513,og=514,Ju=515,lg=516,cg=517,Qu=518,ug=519,Gh=35044,Vh="300 es",Li=2e3,dl=2001;function hg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dg(){const r=fl("canvas");return r.style.display="block",r}const Hh={};function Wh(...r){const e="THREE."+r.shift();console.log(e,...r)}function Gf(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function je(...r){r=Gf(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ft(...r){r=Gf(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function _u(...r){const e=r.join(" ");e in Hh||(Hh[e]=!0,je(...r))}function fg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const pg={[Nc]:Lc,[Ic]:Oc,[Uc]:Bc,[js]:Fc,[Lc]:Nc,[Oc]:Ic,[Bc]:Uc,[Fc]:js};class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xh=1234567;const Aa=Math.PI/180,Ha=180/Math.PI;function na(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function eh(r,e){return(r%e+e)%e}function mg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function gg(r,e,t){return r!==e?(t-r)/(e-r):0}function Ra(r,e,t){return(1-t)*r+t*e}function _g(r,e,t,n){return Ra(r,e,1-Math.exp(-t*n))}function xg(r,e=1){return e-Math.abs(eh(r,e*2)-e)}function vg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Sg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Mg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yg(r,e){return r+Math.random()*(e-r)}function bg(r){return r*(.5-Math.random())}function Eg(r){r!==void 0&&(Xh=r);let e=Xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wg(r){return r*Aa}function Tg(r){return r*Ha}function Ag(r){return(r&r-1)===0&&r!==0}function Rg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Cg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Pg(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*d,l*h,o*c);break;case"YZY":r.set(l*h,o*u,l*d,o*c);break;case"ZXZ":r.set(l*d,l*h,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*u,o*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ds(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Dg={DEG2RAD:Aa,RAD2DEG:Ha,generateUUID:na,clamp:ct,euclideanModulo:eh,mapLinear:mg,inverseLerp:gg,lerp:Ra,damp:_g,pingpong:xg,smoothstep:vg,smootherstep:Sg,randInt:Mg,randFloat:yg,randFloatSpread:bg,seededRandom:Eg,degToRad:wg,radToDeg:Tg,isPowerOfTwo:Ag,ceilPowerOfTwo:Rg,floorPowerOfTwo:Cg,setQuaternionFromProperEuler:Pg,normalize:Tn,denormalize:Ds},Ph=class Ph{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;let pt=Ph;class ia{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*_;p<0&&(h=-h,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const v=Math.acos(p),y=Math.sin(v);m=Math.sin(m*v)/y,o=Math.sin(o*v)/y,l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+_*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+_*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Dh=class Dh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dh.prototype.isVector3=!0;let Y=Dh;const Gl=new Y,jh=new ia,Nh=class Nh{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],v=i[1],y=i[4],M=i[7],R=i[2],b=i[5],T=i[8];return s[0]=a*_+o*v+l*R,s[3]=a*p+o*y+l*b,s[6]=a*m+o*M+l*T,s[1]=c*_+u*v+d*R,s[4]=c*p+u*y+d*b,s[7]=c*m+u*M+d*T,s[2]=h*_+f*v+g*R,s[5]=h*p+f*y+g*b,s[8]=h*m+f*M+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vl.makeScale(e,t)),this}rotate(e){return this.premultiply(Vl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nh.prototype.isMatrix3=!0;let Qe=Nh;const Vl=new Qe,Yh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ng(){const r={enabled:!0,workingColorSpace:ul,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_r?hl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return _u("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return _u("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ul]:{primaries:e,whitePoint:n,transfer:hl,toXYZ:Yh,fromXYZ:qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Yh,fromXYZ:qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const ut=Ng();function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ps;class Lg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=fl("canvas")),ps.width=e.width,ps.height=e.height;const i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=tr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ig=0;class th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Hl(i[a].image)):s.push(Hl(i[a]))}else s=Hl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Hl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Lg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let Ug=0;const Wl=new Y;class In extends ls{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,n=Ji,i=Ji,s=bn,a=Xr,o=bi,l=fi,c=In.DEFAULT_ANISOTROPY,u=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=na(),this.name="",this.source=new th(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Lf;In.DEFAULT_ANISOTROPY=1;const Lh=class Lh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(f+1)/2,R=(m+1)/2,b=(u+h)/4,T=(d+_)/4,x=(g+p)/4;return y>M&&y>R?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=T/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=x/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=T/s,i=x/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lh.prototype.isVector4=!0;let Wt=Lh;class Fg extends ls{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new In(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new th(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends Fg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vf extends In{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Og extends In{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rl=class Rl{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,p)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rl().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ms.setFromMatrixColumn(e,0).length(),s=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bg,e,kg)}lookAt(e,t,n){const i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),ur.crossVectors(n,jn),ur.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),ur.crossVectors(n,jn)),ur.normalize(),ao.crossVectors(jn,ur),i[0]=ur.x,i[4]=ao.x,i[8]=jn.x,i[1]=ur.y,i[5]=ao.y,i[9]=jn.y,i[2]=ur.z,i[6]=ao.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],y=n[7],M=n[11],R=n[15],b=i[0],T=i[4],x=i[8],w=i[12],P=i[1],D=i[5],L=i[9],k=i[13],V=i[2],I=i[6],B=i[10],O=i[14],$=i[3],Q=i[7],N=i[11],pe=i[15];return s[0]=a*b+o*P+l*V+c*$,s[4]=a*T+o*D+l*I+c*Q,s[8]=a*x+o*L+l*B+c*N,s[12]=a*w+o*k+l*O+c*pe,s[1]=u*b+d*P+h*V+f*$,s[5]=u*T+d*D+h*I+f*Q,s[9]=u*x+d*L+h*B+f*N,s[13]=u*w+d*k+h*O+f*pe,s[2]=g*b+_*P+p*V+m*$,s[6]=g*T+_*D+p*I+m*Q,s[10]=g*x+_*L+p*B+m*N,s[14]=g*w+_*k+p*O+m*pe,s[3]=v*b+y*P+M*V+R*$,s[7]=v*T+y*D+M*I+R*Q,s[11]=v*x+y*L+M*B+R*N,s[15]=v*w+y*k+M*O+R*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],v=l*f-c*h,y=o*f-c*d,M=o*h-l*d,R=a*f-c*u,b=a*h-l*u,T=a*d-o*u;return t*(_*v-p*y+m*M)-n*(g*v-p*R+m*b)+i*(g*y-_*R+m*T)-s*(g*M-_*b+p*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=t*o-n*a,y=t*l-i*a,M=t*c-s*a,R=n*l-i*o,b=n*c-s*o,T=i*c-s*l,x=u*_-d*g,w=u*p-h*g,P=u*m-f*g,D=d*p-h*_,L=d*m-f*_,k=h*m-f*p,V=v*k-y*L+M*D+R*P-b*w+T*x;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/V;return e[0]=(o*k-l*L+c*D)*I,e[1]=(i*L-n*k-s*D)*I,e[2]=(_*T-p*b+m*R)*I,e[3]=(h*b-d*T-f*R)*I,e[4]=(l*P-a*k-c*w)*I,e[5]=(t*k-i*P+s*w)*I,e[6]=(p*M-g*T-m*y)*I,e[7]=(u*T-h*M+f*y)*I,e[8]=(a*L-o*P+c*x)*I,e[9]=(n*P-t*L-s*x)*I,e[10]=(g*b-_*M+m*v)*I,e[11]=(d*M-u*b-f*v)*I,e[12]=(o*w-a*D-l*x)*I,e[13]=(t*D-n*w+i*x)*I,e[14]=(_*y-g*R-p*v)*I,e[15]=(u*R-d*y+h*v)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,_=a*u,p=a*d,m=o*d,v=l*c,y=l*u,M=l*d,R=n.x,b=n.y,T=n.z;return i[0]=(1-(_+m))*R,i[1]=(f+M)*R,i[2]=(g-y)*R,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(h+m))*b,i[6]=(p+v)*b,i[7]=0,i[8]=(g+y)*T,i[9]=(p-v)*T,i[10]=(1-(h+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ms.set(i[0],i[1],i[2]).length();const o=ms.set(i[4],i[5],i[6]).length(),l=ms.set(i[8],i[9],i[10]).length();s<0&&(a=-a),xi.copy(this);const c=1/a,u=1/o,d=1/l;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=d,xi.elements[9]*=d,xi.elements[10]*=d,t.setFromRotationMatrix(xi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Li,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Li)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===dl)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Li,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Li)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===dl)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Rl.prototype.isMatrix4=!0;let Zt=Rl;const ms=new Y,xi=new Zt,Bg=new Y(0,0,0),kg=new Y(1,1,1),ur=new Y,ao=new Y,jn=new Y,$h=new Zt,Kh=new ia;class rs{constructor(e=0,t=0,n=0,i=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $h.makeRotationFromQuaternion(e),this.setFromRotationMatrix($h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";let Hf=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zg=0;const Zh=new Y,gs=new ia,Hi=new Zt,oo=new Y,aa=new Y,Gg=new Y,Vg=new ia,Jh=new Y(1,0,0),Qh=new Y(0,1,0),ed=new Y(0,0,1),td={type:"added"},Hg={type:"removed"},_s={type:"childadded",child:null},Xl={type:"childremoved",child:null};class Bn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new Y,t=new rs,n=new ia,i=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Qe}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(aa,oo,this.up):Hi.lookAt(oo,aa,this.up),this.quaternion.setFromRotationMatrix(Hi),i&&(Hi.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(Hi),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),_s.child=e,this.dispatchEvent(_s),_s.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hg),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,Gg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,Vg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Bn.DEFAULT_UP=new Y(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ga extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wg={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ga;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Yl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=eh(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Yl(a,s,e+1/3),this.g=Yl(a,s,e),this.b=Yl(a,s,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=ci){function n(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ci){const n=Wf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return ut.workingToColorSpace(_n.copy(this),e),Math.round(ct(_n.r*255,0,255))*65536+Math.round(ct(_n.g*255,0,255))*256+Math.round(ct(_n.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(_n.copy(this),t);const n=_n.r,i=_n.g,s=_n.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ci){ut.workingToColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,i=_n.b;return e!==ci?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+t,hr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hr),e.getHSL(lo);const n=Ra(hr.h,lo.h,t),i=Ra(hr.s,lo.s,t),s=Ra(hr.l,lo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new xt;xt.NAMES=Wf;class nh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(e),this.density=t}clone(){return new nh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xg extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vi=new Y,Wi=new Y,ql=new Y,Xi=new Y,xs=new Y,vs=new Y,nd=new Y,$l=new Y,Kl=new Y,Zl=new Y,Jl=new Wt,Ql=new Wt,ec=new Wt;class yi{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vi.subVectors(e,t),i.cross(vi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){vi.subVectors(i,t),Wi.subVectors(n,t),ql.subVectors(e,t);const a=vi.dot(vi),o=vi.dot(Wi),l=vi.dot(ql),c=Wi.dot(Wi),u=Wi.dot(ql),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Jl.setScalar(0),Ql.setScalar(0),ec.setScalar(0),Jl.fromBufferAttribute(e,t),Ql.fromBufferAttribute(e,n),ec.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Jl,s.x),a.addScaledVector(Ql,s.y),a.addScaledVector(ec,s.z),a}static isFrontFacing(e,t,n,i){return vi.subVectors(n,t),Wi.subVectors(e,t),vi.cross(Wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),vi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return yi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;xs.subVectors(i,n),vs.subVectors(s,n),$l.subVectors(e,n);const l=xs.dot($l),c=vs.dot($l);if(l<=0&&c<=0)return t.copy(n);Kl.subVectors(e,i);const u=xs.dot(Kl),d=vs.dot(Kl);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(xs,a);Zl.subVectors(e,s);const f=xs.dot(Zl),g=vs.dot(Zl);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(vs,o);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return nd.subVectors(s,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(nd,o);const m=1/(p+_+h);return a=_*m,o=h*m,t.copy(n).addScaledVector(xs,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class eo{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),uo.subVectors(this.max,oa),Ss.subVectors(e.a,oa),Ms.subVectors(e.b,oa),ys.subVectors(e.c,oa),dr.subVectors(Ms,Ss),fr.subVectors(ys,Ms),Lr.subVectors(Ss,ys);let t=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-Lr.z,Lr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,Lr.z,0,-Lr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-Lr.y,Lr.x,0];return!tc(t,Ss,Ms,ys,uo)||(t=[1,0,0,0,1,0,0,0,1],!tc(t,Ss,Ms,ys,uo))?!1:(ho.crossVectors(dr,fr),t=[ho.x,ho.y,ho.z],tc(t,Ss,Ms,ys,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Si=new Y,co=new eo,Ss=new Y,Ms=new Y,ys=new Y,dr=new Y,fr=new Y,Lr=new Y,oa=new Y,uo=new Y,ho=new Y,Ir=new Y;function tc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ir.fromArray(r,s);const o=i.x*Math.abs(Ir.x)+i.y*Math.abs(Ir.y)+i.z*Math.abs(Ir.z),l=e.dot(Ir),c=t.dot(Ir),u=n.dot(Ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qt=new Y,fo=new pt;let jg=0;class Sn extends ls{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gh,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array),i=Tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Xf extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jf extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gi extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Yg=new eo,la=new Y,nc=new Y;class Pl{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(la,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(nc)),this.expandByPoint(la.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qg=0;const oi=new Zt,ic=new Bn,bs=new Y,Yn=new eo,ca=new eo,on=new Y;class Ln extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hg(e)?jf:Xf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return ic.lookAt(e),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Yn.min,ca.min),Yn.expandByPoint(on),on.addVectors(Yn.max,ca.max),Yn.expandByPoint(on)):(Yn.expandByPoint(ca.min),Yn.expandByPoint(ca.max))}Yn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)on.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(on));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)on.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),on.add(bs)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new Y,l[x]=new Y;const c=new Y,u=new Y,d=new Y,h=new pt,f=new pt,g=new pt,_=new Y,p=new Y;function m(x,w,P){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,P),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,P),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[x].add(_),o[w].add(_),o[P].add(_),l[x].add(p),l[w].add(p),l[P].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,w=v.length;x<w;++x){const P=v[x],D=P.start,L=P.count;for(let k=D,V=D+L;k<V;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new Y,M=new Y,R=new Y,b=new Y;function T(x){R.fromBufferAttribute(i,x),b.copy(R);const w=o[x];y.copy(w),y.sub(R.multiplyScalar(R.dot(w))).normalize(),M.crossVectors(b,w);const D=M.dot(l[x])<0?-1:1;a.setXYZW(x,y.x,y.y,y.z,D)}for(let x=0,w=v.length;x<w;++x){const P=v[x],D=P.start,L=P.count;for(let k=D,V=D+L;k<V;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new Sn(h,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let $g=0;class to extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=na(),this.name="",this.type="Material",this.blending=Os,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Dc,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Ar&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pc&&(n.blendSrc=this.blendSrc),this.blendDst!==Dc&&(n.blendDst=this.blendDst),this.blendEquation!==Hr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Yi=new Y,rc=new Y,po=new Y,pr=new Y,sc=new Y,mo=new Y,ac=new Y;class Yf{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rc.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(rc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(po),o=pr.dot(this.direction),l=-pr.dot(po),c=pr.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(rc).addScaledVector(po,h),f}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const n=Yi.dot(this.direction),i=Yi.dot(Yi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,i,s){sc.subVectors(t,e),mo.subVectors(n,e),ac.crossVectors(sc,mo);let a=this.direction.dot(ac),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pr.subVectors(this.origin,e);const l=o*this.direction.dot(mo.crossVectors(pr,mo));if(l<0)return null;const c=o*this.direction.dot(sc.cross(pr));if(c<0||l+c>a)return null;const u=-o*pr.dot(ac);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pl extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const id=new Zt,Ur=new Yf,go=new Pl,rd=new Y,_o=new Y,xo=new Y,vo=new Y,oc=new Y,So=new Y,sd=new Y,Mo=new Y;class Ei extends Bn{constructor(e=new Ln,t=new pl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){So.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(oc.fromBufferAttribute(d,e),a?So.addScaledVector(oc,u):So.addScaledVector(oc.sub(t),u))}t.add(So)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(go.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(go,rd)===null||Ur.origin.distanceToSquared(rd)>(e.far-e.near)**2))&&(id.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(id),!(n.boundingBox!==null&&Ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ur)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,R=y;M<R;M+=3){const b=o.getX(M),T=o.getX(M+1),x=o.getX(M+2);i=yo(this,m,e,n,c,u,d,b,T,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=o.getX(p),y=o.getX(p+1),M=o.getX(p+2);i=yo(this,a,e,n,c,u,d,v,y,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,R=y;M<R;M+=3){const b=M,T=M+1,x=M+2;i=yo(this,m,e,n,c,u,d,b,T,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=p,y=p+1,M=p+2;i=yo(this,a,e,n,c,u,d,v,y,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Kg(r,e,t,n,i,s,a,o){let l;if(e.side===On?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Ar,o),l===null)return null;Mo.copy(o),Mo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Mo);return c<t.near||c>t.far?null:{distance:c,point:Mo.clone(),object:r}}function yo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,_o),r.getVertexPosition(l,xo),r.getVertexPosition(c,vo);const u=Kg(r,e,t,n,_o,xo,vo,sd);if(u){const d=new Y;yi.getBarycoord(sd,_o,xo,vo,d),i&&(u.uv=yi.getInterpolatedAttribute(i,o,l,c,d,new pt)),s&&(u.uv1=yi.getInterpolatedAttribute(s,o,l,c,d,new pt)),a&&(u.normal=yi.getInterpolatedAttribute(a,o,l,c,d,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Y,materialIndex:0};yi.getNormal(_o,xo,vo,h.normal),u.face=h,u.barycoord=d}return u}class Zg extends In{constructor(e=null,t=1,n=1,i,s,a,o,l,c=hn,u=hn,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=new Y,Jg=new Y,Qg=new Qe;class kr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=lc.subVectors(n,t).cross(Jg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(lc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qg.getNormalMatrix(e),i=this.coplanarPoint(lc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Pl,e_=new pt(.5,.5),bo=new Y;class qf{constructor(e=new kr,t=new kr,n=new kr,i=new kr,s=new kr,a=new kr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Li,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],v=s[12],y=s[13],M=s[14],R=s[15];if(i[0].setComponents(c-a,f-u,m-g,R-v).normalize(),i[1].setComponents(c+a,f+u,m+g,R+v).normalize(),i[2].setComponents(c+o,f+d,m+_,R+y).normalize(),i[3].setComponents(c-o,f-d,m-_,R-y).normalize(),n)i[4].setComponents(l,h,p,M).normalize(),i[5].setComponents(c-l,f-h,m-p,R-M).normalize();else if(i[4].setComponents(c-l,f-h,m-p,R-M).normalize(),t===Li)i[5].setComponents(c+l,f+h,m+p,R+M).normalize();else if(t===dl)i[5].setComponents(l,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const t=e_.distanceTo(e.center);return Fr.radius=.7071067811865476+t,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bo.x=i.normal.x>0?e.max.x:e.min.x,bo.y=i.normal.y>0?e.max.y:e.min.y,bo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _a extends to{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ad=new Zt,xu=new Yf,Eo=new Pl,wo=new Y;class To extends Bn{constructor(e=new Ln,t=new _a){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=s,e.ray.intersectsSphere(Eo)===!1)return;ad.copy(i).invert(),xu.copy(e.ray).applyMatrix4(ad);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){const p=c.getX(g);wo.fromBufferAttribute(d,p),od(wo,p,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)wo.fromBufferAttribute(d,g),od(wo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function od(r,e,t,n,i,s,a){const o=xu.distanceSqToPoint(r);if(o<t){const l=new Y;xu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $f extends In{constructor(e=[],t=ns,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qs extends In{constructor(e,t,n=ki,i,s,a,o=hn,l=hn,c,u=rr,d=1){if(u!==rr&&u!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new th(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class t_ extends qs{constructor(e,t=ki,n=ns,i,s,a=hn,o=hn,l,c=rr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kf extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class no extends Ln{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(d,2));function g(_,p,m,v,y,M,R,b,T,x,w){const P=M/T,D=R/x,L=M/2,k=R/2,V=b/2,I=T+1,B=x+1;let O=0,$=0;const Q=new Y;for(let N=0;N<B;N++){const pe=N*D-k;for(let be=0;be<I;be++){const qe=be*P-L;Q[_]=qe*v,Q[p]=pe*y,Q[m]=V,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[m]=b>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(be/T),d.push(1-N/x),O+=1}}for(let N=0;N<x;N++)for(let pe=0;pe<T;pe++){const be=h+pe+I*N,qe=h+pe+I*(N+1),ze=h+(pe+1)+I*(N+1),Ne=h+(pe+1)+I*N;l.push(be,qe,Ne),l.push(qe,ze,Ne),$+=6}o.addGroup(f,$,w),f+=$,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ih extends Ln{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new gi(s,3)),this.setAttribute("normal",new gi(s.slice(),3)),this.setAttribute("uv",new gi(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new Y,M=new Y,R=new Y;for(let b=0;b<t.length;b+=3)f(t[b+0],y),f(t[b+1],M),f(t[b+2],R),l(y,M,R,v)}function l(v,y,M,R){const b=R+1,T=[];for(let x=0;x<=b;x++){T[x]=[];const w=v.clone().lerp(M,x/b),P=y.clone().lerp(M,x/b),D=b-x;for(let L=0;L<=D;L++)L===0&&x===b?T[x][L]=w:T[x][L]=w.clone().lerp(P,L/D)}for(let x=0;x<b;x++)for(let w=0;w<2*(b-x)-1;w++){const P=Math.floor(w/2);w%2===0?(h(T[x][P+1]),h(T[x+1][P]),h(T[x][P])):(h(T[x][P+1]),h(T[x+1][P+1]),h(T[x+1][P]))}}function c(v){const y=new Y;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(v),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function u(){const v=new Y;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const M=p(v)/2/Math.PI+.5,R=m(v)/Math.PI+.5;a.push(M,1-R)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){const y=a[v+0],M=a[v+2],R=a[v+4],b=Math.max(y,M,R),T=Math.min(y,M,R);b>.9&&T<.1&&(y<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function f(v,y){const M=v*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function g(){const v=new Y,y=new Y,M=new Y,R=new Y,b=new pt,T=new pt,x=new pt;for(let w=0,P=0;w<s.length;w+=9,P+=6){v.set(s[w+0],s[w+1],s[w+2]),y.set(s[w+3],s[w+4],s[w+5]),M.set(s[w+6],s[w+7],s[w+8]),b.set(a[P+0],a[P+1]),T.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),R.copy(v).add(y).add(M).divideScalar(3);const D=p(R);_(b,P+0,v,D),_(T,P+2,y,D),_(x,P+4,M,D)}}function _(v,y,M,R){R<0&&v.x===1&&(a[y]=v.x-1),M.x===0&&M.z===0&&(a[y]=R/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ih(e.vertices,e.indices,e.radius,e.detail)}}class ml extends ih{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ml(e.radius,e.detail)}}class Dl extends Ln{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const v=m*h-a;for(let y=0;y<c;y++){const M=y*d-s;g.push(M,-v,0),_.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const y=v+c*m,M=v+c*(m+1),R=v+1+c*(m+1),b=v+1+c*m;f.push(y,M,b),f.push(M,R,b)}this.setIndex(f),this.setAttribute("position",new gi(g,3)),this.setAttribute("normal",new gi(_,3)),this.setAttribute("uv",new gi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.widthSegments,e.heightSegments)}}function $s(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(ld(i))i.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(ld(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Rn(r){const e={};for(let t=0;t<r.length;t++){const n=$s(r[t]);for(const i in n)e[i]=n[i]}return e}function ld(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function n_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Zf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const i_={clone:$s,merge:Rn};var r_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r_,this.fragmentShader=s_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=n_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class a_ extends zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o_ extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l_ extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ao=new Y,Ro=new ia,Ti=new Y;class Jf extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ao,Ro,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Ro,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ao,Ro,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Ro,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new Y,cd=new pt,ud=new pt;class ui extends Jf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,cd,ud),t.subVectors(ud,cd)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Qf extends Jf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=-90,ws=1;class c_ extends Bn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ui(Es,ws,e,t);i.layers=this.layers,this.add(i);const s=new ui(Es,ws,e,t);s.layers=this.layers,this.add(s);const a=new ui(Es,ws,e,t);a.layers=this.layers,this.add(a);const o=new ui(Es,ws,e,t);o.layers=this.layers,this.add(o);const l=new ui(Es,ws,e,t);l.layers=this.layers,this.add(l);const c=new ui(Es,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class u_ extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class h_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,je("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ih=class Ih{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Ih.prototype.isMatrix2=!0;let hd=Ih;function dd(r,e,t,n){const i=d_(n);switch(t){case Bf:return r*e;case zf:return r*e/i.components*i.byteLength;case $u:return r*e/i.components*i.byteLength;case is:return r*e*2/i.components*i.byteLength;case Ku:return r*e*2/i.components*i.byteLength;case kf:return r*e*3/i.components*i.byteLength;case bi:return r*e*4/i.components*i.byteLength;case Zu:return r*e*4/i.components*i.byteLength;case Yo:case qo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $o:case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Wc:return Math.max(r,16)*Math.max(e,8)/4;case Gc:case Hc:return Math.max(r,8)*Math.max(e,8)/2;case Xc:case jc:case qc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yc:case ll:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case eu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case tu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case nu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case iu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ru:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case su:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case au:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ou:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case lu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case cu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case uu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case hu:case du:case fu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case pu:case mu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case cl:case gu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d_(r){switch(r){case fi:case If:return{byteLength:1,components:1};case Ga:case Uf:case ir:return{byteLength:2,components:1};case Yu:case qu:return{byteLength:2,components:4};case ki:case ju:case Ni:return{byteLength:4,components:1};case Ff:case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xu}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xu);function ep(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function f_(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var p_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,g_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,__=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,b_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,A_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,R_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,O_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,k_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W_="gl_FragColor = linearToOutputTexel( gl_FragColor );",X_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,a0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:p_,alphahash_pars_fragment:m_,alphamap_fragment:g_,alphamap_pars_fragment:__,alphatest_fragment:x_,alphatest_pars_fragment:v_,aomap_fragment:S_,aomap_pars_fragment:M_,batching_pars_vertex:y_,batching_vertex:b_,begin_vertex:E_,beginnormal_vertex:w_,bsdfs:T_,iridescence_fragment:A_,bumpmap_pars_fragment:R_,clipping_planes_fragment:C_,clipping_planes_pars_fragment:P_,clipping_planes_pars_vertex:D_,clipping_planes_vertex:N_,color_fragment:L_,color_pars_fragment:I_,color_pars_vertex:U_,color_vertex:F_,common:O_,cube_uv_reflection_fragment:B_,defaultnormal_vertex:k_,displacementmap_pars_vertex:z_,displacementmap_vertex:G_,emissivemap_fragment:V_,emissivemap_pars_fragment:H_,colorspace_fragment:W_,colorspace_pars_fragment:X_,envmap_fragment:j_,envmap_common_pars_fragment:Y_,envmap_pars_fragment:q_,envmap_pars_vertex:$_,envmap_physical_pars_fragment:a0,envmap_vertex:K_,fog_vertex:Z_,fog_pars_vertex:J_,fog_fragment:Q_,fog_pars_fragment:e0,gradientmap_pars_fragment:t0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:r0,lights_pars_begin:s0,lights_toon_fragment:o0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:u0,lights_physical_fragment:h0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:p0,lights_fragment_end:m0,lightprobes_pars_fragment:g0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:S0,map_fragment:M0,map_pars_fragment:y0,map_particle_fragment:b0,map_particle_pars_fragment:E0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:T0,morphinstance_vertex:A0,morphcolor_vertex:R0,morphnormal_vertex:C0,morphtarget_pars_vertex:P0,morphtarget_vertex:D0,normal_fragment_begin:N0,normal_fragment_maps:L0,normal_pars_fragment:I0,normal_pars_vertex:U0,normal_vertex:F0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:G0,opaque_fragment:V0,packing:H0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:j0,dithering_pars_fragment:Y0,roughnessmap_fragment:q0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:K0,shadowmap_pars_vertex:Z0,shadowmap_vertex:J0,shadowmask_pars_fragment:Q0,skinbase_vertex:ex,skinning_pars_vertex:tx,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:rx,specularmap_pars_fragment:sx,tonemapping_fragment:ax,tonemapping_pars_fragment:ox,transmission_fragment:lx,transmission_pars_fragment:cx,uv_pars_fragment:ux,uv_pars_vertex:hx,uv_vertex:dx,worldpos_vertex:fx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:_x,cube_vert:xx,cube_frag:vx,depth_vert:Sx,depth_frag:Mx,distance_vert:yx,distance_frag:bx,equirect_vert:Ex,equirect_frag:wx,linedashed_vert:Tx,linedashed_frag:Ax,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Px,meshlambert_frag:Dx,meshmatcap_vert:Nx,meshmatcap_frag:Lx,meshnormal_vert:Ix,meshnormal_frag:Ux,meshphong_vert:Fx,meshphong_frag:Ox,meshphysical_vert:Bx,meshphysical_frag:kx,meshtoon_vert:zx,meshtoon_frag:Gx,points_vert:Vx,points_frag:Hx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:jx,sprite_frag:Yx},we={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Pi={basic:{uniforms:Rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Rn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Rn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new xt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Rn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Rn([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Rn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Rn([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Rn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Rn([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Rn([we.common,we.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Rn([we.lights,we.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Pi.physical={uniforms:Rn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Co={r:0,b:0,g:0},qx=new Zt,tp=new Qe;tp.set(-1,0,0,0,1,0,0,0,1);function $x(r,e,t,n,i,s){const a=new xt(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const M=v.backgroundBlurriness>0;y=e.get(y,M)}return y}function g(v){let y=!1;const M=f(v);M===null?p(a,o):M&&M.isColor&&(p(M,1),y=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,y){const M=f(y);M&&(M.isCubeTexture||M.mapping===Cl)?(c===void 0&&(c=new Ei(new no(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:$s(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qx.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(tp),c.material.toneMapped=ut.getTransfer(M.colorSpace)!==St,(u!==M||d!==M.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ei(new Dl(2,2),new zi({name:"BackgroundMaterial",uniforms:$s(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ut.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(Co,Zf(r)),t.buffers.color.setClear(Co.r,Co.g,Co.b,y,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:_,dispose:m}}function Kx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(D,L,k,V,I){let B=!1;const O=d(D,V,k,L);s!==O&&(s=O,c(s.object)),B=f(D,V,k,I),B&&g(D,V,k,I),I!==null&&e.update(I,r.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(D,L,k,V),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function u(D){return r.deleteVertexArray(D)}function d(D,L,k,V){const I=V.wireframe===!0;let B=n[L.id];B===void 0&&(B={},n[L.id]=B);const O=D.isInstancedMesh===!0?D.id:0;let $=B[O];$===void 0&&($={},B[O]=$);let Q=$[k.id];Q===void 0&&(Q={},$[k.id]=Q);let N=Q[I];return N===void 0&&(N=h(l()),Q[I]=N),N}function h(D){const L=[],k=[],V=[];for(let I=0;I<t;I++)L[I]=0,k[I]=0,V[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:V,object:D,attributes:{},index:null}}function f(D,L,k,V){const I=s.attributes,B=L.attributes;let O=0;const $=k.getAttributes();for(const Q in $)if($[Q].location>=0){const pe=I[Q];let be=B[Q];if(be===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),pe===void 0||pe.attribute!==be||be&&pe.data!==be.data)return!0;O++}return s.attributesNum!==O||s.index!==V}function g(D,L,k,V){const I={},B=L.attributes;let O=0;const $=k.getAttributes();for(const Q in $)if($[Q].location>=0){let pe=B[Q];pe===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor));const be={};be.attribute=pe,pe&&pe.data&&(be.data=pe.data),I[Q]=be,O++}s.attributes=I,s.attributesNum=O,s.index=V}function _(){const D=s.newAttributes;for(let L=0,k=D.length;L<k;L++)D[L]=0}function p(D){m(D,0)}function m(D,L){const k=s.newAttributes,V=s.enabledAttributes,I=s.attributeDivisors;k[D]=1,V[D]===0&&(r.enableVertexAttribArray(D),V[D]=1),I[D]!==L&&(r.vertexAttribDivisor(D,L),I[D]=L)}function v(){const D=s.newAttributes,L=s.enabledAttributes;for(let k=0,V=L.length;k<V;k++)L[k]!==D[k]&&(r.disableVertexAttribArray(k),L[k]=0)}function y(D,L,k,V,I,B,O){O===!0?r.vertexAttribIPointer(D,L,k,I,B):r.vertexAttribPointer(D,L,k,V,I,B)}function M(D,L,k,V){_();const I=V.attributes,B=k.getAttributes(),O=L.defaultAttributeValues;for(const $ in B){const Q=B[$];if(Q.location>=0){let N=I[$];if(N===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),N!==void 0){const pe=N.normalized,be=N.itemSize,qe=e.get(N);if(qe===void 0)continue;const ze=qe.buffer,Ne=qe.type,H=qe.bytesPerElement,ne=Ne===r.INT||Ne===r.UNSIGNED_INT||N.gpuType===ju;if(N.isInterleavedBufferAttribute){const te=N.data,me=te.stride,Re=N.offset;if(te.isInstancedInterleavedBuffer){for(let ve=0;ve<Q.locationSize;ve++)m(Q.location+ve,te.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<Q.locationSize;ve++)p(Q.location+ve);r.bindBuffer(r.ARRAY_BUFFER,ze);for(let ve=0;ve<Q.locationSize;ve++)y(Q.location+ve,be/Q.locationSize,Ne,pe,me*H,(Re+be/Q.locationSize*ve)*H,ne)}else{if(N.isInstancedBufferAttribute){for(let te=0;te<Q.locationSize;te++)m(Q.location+te,N.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let te=0;te<Q.locationSize;te++)p(Q.location+te);r.bindBuffer(r.ARRAY_BUFFER,ze);for(let te=0;te<Q.locationSize;te++)y(Q.location+te,be/Q.locationSize,Ne,pe,be*H,be/Q.locationSize*te*H,ne)}}else if(O!==void 0){const pe=O[$];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(Q.location,pe);break;case 3:r.vertexAttrib3fv(Q.location,pe);break;case 4:r.vertexAttrib4fv(Q.location,pe);break;default:r.vertexAttrib1fv(Q.location,pe)}}}}v()}function R(){w();for(const D in n){const L=n[D];for(const k in L){const V=L[k];for(const I in V){const B=V[I];for(const O in B)u(B[O].object),delete B[O];delete V[I]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;const L=n[D.id];for(const k in L){const V=L[k];for(const I in V){const B=V[I];for(const O in B)u(B[O].object),delete B[O];delete V[I]}}delete n[D.id]}function T(D){for(const L in n){const k=n[L];for(const V in k){const I=k[V];if(I[D.id]===void 0)continue;const B=I[D.id];for(const O in B)u(B[O].object),delete B[O];delete I[D.id]}}}function x(D){for(const L in n){const k=n[L],V=D.isInstancedMesh===!0?D.id:0,I=k[V];if(I!==void 0){for(const B in I){const O=I[B];for(const $ in O)u(O[$].object),delete O[$];delete I[B]}delete k[V],Object.keys(k).length===0&&delete n[L]}}}function w(){P(),a=!0,s!==i&&(s=i,c(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Zx(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Jx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==bi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const x=T===ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==fi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ni&&!x)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:R,samples:b}}function Qx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new kr,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:n,y=v*4;let M=m.clippingState||null;l.value=M,M=u(g,h,y,f);for(let R=0;R!==y;++R)M[R]=t[R];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,M=f;y!==_;++y,M+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const xr=4,fd=[.125,.215,.35,.446,.526,.582],Wr=20,ev=256,ua=new Qf,pd=new xt;let cc=null,uc=0,hc=0,dc=!1;const tv=new Y;class md{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=tv}=s;cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,uc,hc),this._renderer.xr.enabled=dc,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:ir,format:bi,colorSpace:ul,depthBuffer:!1},i=gd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nv(s)),this._blurMaterial=rv(s,e,t),this._ggxMaterial=iv(s,e,t)}return i}_compileMaterial(e){const t=new Ei(new Ln,e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,i,s){const l=new ui(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(pd),d.toneMapping=Fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ei(new no,new pl({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,m=!0):(p.color.copy(pd),m=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const R=this._cubeSize;Ts(i,M*R,y>2?R:0,R,R),d.setRenderTarget(i),m&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ns||e.mapping===Ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-xr?n-g+xr:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Ts(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,ua),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ts(e,p,m,3*_,2*_),i.setRenderTarget(e),i.render(o,ua)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Wr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Wr;p>Wr&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wr}`);const m=[];let v=0;for(let T=0;T<Wr;++T){const x=T/_,w=Math.exp(-x*x/2);m.push(w),T===0?v+=w:T<p&&(v+=2*w)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const M=this._sizeLods[i],R=3*M*(i>y-xr?i-y+xr:0),b=4*(this._cubeSize-M);Ts(t,R,b,3*M,2*M),l.setRenderTarget(t),l.render(d,ua)}}function nv(r){const e=[],t=[],n=[];let i=r;const s=r-xr+1+fd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-xr?l=fd[a-r+xr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),y=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let b=0;b<f;b++){const T=b%3*2/3-1,x=b>2?0:-1,w=[T,x,0,T+2/3,x,0,T+2/3,x+1,0,T,x,0,T+2/3,x+1,0,T,x+1,0];v.set(w,_*g*b),y.set(h,p*g*b);const P=[b,b,b,b,b,b];M.set(P,m*g*b)}const R=new Ln;R.setAttribute("position",new Sn(v,_)),R.setAttribute("uv",new Sn(y,p)),R.setAttribute("faceIndex",new Sn(M,m)),n.push(new Ei(R,null)),i>xr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function gd(r,e,t){const n=new Oi(r,e,t);return n.texture.mapping=Cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function iv(r,e,t){return new zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ev,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function rv(r,e,t){const n=new Float32Array(Wr),i=new Y(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function _d(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function xd(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class np extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $f(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new no(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:er});s.uniforms.tEquirect.value=t;const a=new Ei(i,s),o=t.minFilter;return t.minFilter===Xr&&(t.minFilter=bn),new c_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function sv(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Bl||f===kl)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new np(g.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===Bl||f===kl,_=f===ns||f===Ys;if(g||_){let p=t.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new md(r)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const v=h.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new md(r)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Bl?h.mapping=ns:f===kl&&(h.mapping=Ys),h}function l(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function av(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&_u("WebGLRenderer: "+n+" extension not supported."),i}}}function ov(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let y=0,M=v.length;y<M;y+=3){const R=v[y+0],b=v[y+1],T=v[y+2];h.push(R,b,b,T,T,R)}}else{const v=g.array;_=g.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const R=y+0,b=y+1,T=y+2;h.push(R,b,b,T,T,R)}}const p=new(g.count>=65535?jf:Xf)(h,1);p.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function lv(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=h[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function cv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function uv(r,e,t){const n=new WeakMap,i=new Wt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let M=o.attributes.position.count*y,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*R*4*d),T=new Vf(b,M,R,d);T.type=Ni,T.needsUpdate=!0;const x=y*4;for(let P=0;P<d;P++){const D=p[P],L=m[P],k=v[P],V=M*R*4*P;for(let I=0;I<D.count;I++){const B=I*x;f===!0&&(i.fromBufferAttribute(D,I),b[V+B+0]=i.x,b[V+B+1]=i.y,b[V+B+2]=i.z,b[V+B+3]=0),g===!0&&(i.fromBufferAttribute(L,I),b[V+B+4]=i.x,b[V+B+5]=i.y,b[V+B+6]=i.z,b[V+B+7]=0),_===!0&&(i.fromBufferAttribute(k,I),b[V+B+8]=i.x,b[V+B+9]=i.y,b[V+B+10]=i.z,b[V+B+11]=k.itemSize===4?i.w:1)}}h={count:d,texture:T,size:new pt(M,R)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function hv(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const dv={[Tf]:"LINEAR_TONE_MAPPING",[Af]:"REINHARD_TONE_MAPPING",[Rf]:"CINEON_TONE_MAPPING",[Cf]:"ACES_FILMIC_TONE_MAPPING",[Df]:"AGX_TONE_MAPPING",[Nf]:"NEUTRAL_TONE_MAPPING",[Pf]:"CUSTOM_TONE_MAPPING"};function fv(r,e,t,n,i){const s=new Oi(e,t,{type:r,depthBuffer:n,stencilBuffer:i,depthTexture:n?new qs(e,t):void 0}),a=new Oi(e,t,{type:ir,depthBuffer:!1,stencilBuffer:!1}),o=new Ln;o.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new gi([0,2,0,0,2,0],2));const l=new a_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ei(o,l),u=new Qf(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,_=null,p=[],m=!1;this.setSize=function(v,y){s.setSize(v,y),a.setSize(v,y);for(let M=0;M<p.length;M++){const R=p[M];R.setSize&&R.setSize(v,y)}},this.setEffects=function(v){p=v,m=p.length>0&&p[0].isRenderPass===!0;const y=s.width,M=s.height;for(let R=0;R<p.length;R++){const b=p[R];b.setSize&&b.setSize(y,M)}},this.begin=function(v,y){if(f||v.toneMapping===Fi&&p.length===0)return!1;if(_=y,y!==null){const M=y.width,R=y.height;(s.width!==M||s.height!==R)&&this.setSize(M,R)}return m===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=Fi,!0},this.hasRenderPass=function(){return m},this.end=function(v,y){v.toneMapping=g,f=!0;let M=s,R=a;for(let b=0;b<p.length;b++){const T=p[b];if(T.enabled!==!1&&(T.render(v,R,M,y),T.needsSwap!==!1)){const x=M;M=R,R=x}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},ut.getTransfer(d)===St&&(l.defines.SRGB_TRANSFER="");const b=dv[h];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(_),v.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const ip=new In,vu=new qs(1,1),rp=new Vf,sp=new Og,ap=new $f,vd=[],Sd=[],Md=new Float32Array(16),yd=new Float32Array(9),bd=new Float32Array(4);function ra(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=vd[i];if(s===void 0&&(s=new Float32Array(i),vd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ll(r,e){let t=Sd[e];t===void 0&&(t=new Int32Array(e),Sd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function pv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function xv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;bd.set(n),r.uniformMatrix2fv(this.addr,!1,bd),nn(t,n)}}function vv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;yd.set(n),r.uniformMatrix3fv(this.addr,!1,yd),nn(t,n)}}function Sv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Md.set(n),r.uniformMatrix4fv(this.addr,!1,Md),nn(t,n)}}function Mv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function Ev(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function wv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function Av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function Rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function Cv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(vu.compareFunction=t.isReversedDepthBuffer()?Qu:Ju,s=vu):s=ip,t.setTexture2D(e||s,i)}function Pv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||sp,i)}function Dv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ap,i)}function Nv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rp,i)}function Lv(r){switch(r){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return _v;case 35674:return xv;case 35675:return vv;case 35676:return Sv;case 5124:case 35670:return Mv;case 35667:case 35671:return yv;case 35668:case 35672:return bv;case 35669:case 35673:return Ev;case 5125:return wv;case 36294:return Tv;case 36295:return Av;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Iv(r,e){r.uniform1fv(this.addr,e)}function Uv(r,e){const t=ra(e,this.size,2);r.uniform2fv(this.addr,t)}function Fv(r,e){const t=ra(e,this.size,3);r.uniform3fv(this.addr,t)}function Ov(r,e){const t=ra(e,this.size,4);r.uniform4fv(this.addr,t)}function Bv(r,e){const t=ra(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function kv(r,e){const t=ra(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function zv(r,e){const t=ra(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gv(r,e){r.uniform1iv(this.addr,e)}function Vv(r,e){r.uniform2iv(this.addr,e)}function Hv(r,e){r.uniform3iv(this.addr,e)}function Wv(r,e){r.uniform4iv(this.addr,e)}function Xv(r,e){r.uniform1uiv(this.addr,e)}function jv(r,e){r.uniform2uiv(this.addr,e)}function Yv(r,e){r.uniform3uiv(this.addr,e)}function qv(r,e){r.uniform4uiv(this.addr,e)}function $v(r,e,t){const n=this.cache,i=e.length,s=Ll(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=vu:a=ip;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Kv(r,e,t){const n=this.cache,i=e.length,s=Ll(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||sp,s[a])}function Zv(r,e,t){const n=this.cache,i=e.length,s=Ll(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ap,s[a])}function Jv(r,e,t){const n=this.cache,i=e.length,s=Ll(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||rp,s[a])}function Qv(r){switch(r){case 5126:return Iv;case 35664:return Uv;case 35665:return Fv;case 35666:return Ov;case 35674:return Bv;case 35675:return kv;case 35676:return zv;case 5124:case 35670:return Gv;case 35667:case 35671:return Vv;case 35668:case 35672:return Hv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return jv;case 36295:return Yv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Jv}}class eS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lv(t.type)}}class tS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qv(t.type)}}class nS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function Ed(r,e){r.seq.push(e),r.map[e.id]=e}function iS(r,e,t){const n=r.name,i=n.length;for(fc.lastIndex=0;;){const s=fc.exec(n),a=fc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ed(t,c===void 0?new eS(o,r,e):new tS(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new nS(o),Ed(t,d)),t=d}}}class Zo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);iS(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function wd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const rS=37297;let sS=0;function aS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Td=new Qe;function oS(r){ut._getMatrix(Td,ut.workingColorSpace,r);const e=`mat3( ${Td.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(r)){case hl:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ad(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+aS(r.getShaderSource(e),o)}else return s}function lS(r,e){const t=oS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const cS={[Tf]:"Linear",[Af]:"Reinhard",[Rf]:"Cineon",[Cf]:"ACESFilmic",[Df]:"AgX",[Nf]:"Neutral",[Pf]:"Custom"};function uS(r,e){const t=cS[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Po=new Y;function hS(){ut.getLuminanceCoefficients(Po);const r=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function fS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function xa(r){return r!==""}function Rd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(r){return r.replace(mS,_S)}const gS=new Map;function _S(r,e){let t=tt[e];if(t===void 0){const n=gS.get(e);if(n!==void 0)t=tt[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Su(t)}const xS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(r){return r.replace(xS,vS)}function vS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Dd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const SS={[jo]:"SHADOWMAP_TYPE_PCF",[ma]:"SHADOWMAP_TYPE_VSM"};function MS(r){return SS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yS={[ns]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[Cl]:"ENVMAP_TYPE_CUBE_UV"};function bS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":yS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const ES={[Ys]:"ENVMAP_MODE_REFRACTION"};function wS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ES[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TS={[wf]:"ENVMAP_BLENDING_MULTIPLY",[eg]:"ENVMAP_BLENDING_MIX",[tg]:"ENVMAP_BLENDING_ADD"};function AS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":TS[r.combine]||"ENVMAP_BLENDING_NONE"}function RS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function CS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=MS(t),c=bS(t),u=wS(t),d=AS(t),h=RS(t),f=dS(t),g=fS(s),_=i.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`)):(p=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),m=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Fi?uS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,lS("linearToOutputTexel",t.outputColorSpace),hS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),a=Su(a),a=Rd(a,t),a=Cd(a,t),o=Su(o),o=Rd(o,t),o=Cd(o,t),a=Pd(a),o=Pd(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+p+a,M=v+m+o,R=wd(i,i.VERTEX_SHADER,y),b=wd(i,i.FRAGMENT_SHADER,M);i.attachShader(_,R),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(D){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(R)||"",V=i.getShaderInfoLog(b)||"",I=L.trim(),B=k.trim(),O=V.trim();let $=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,b);else{const N=Ad(i,R,"vertex"),pe=Ad(i,b,"fragment");ft("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+N+`
`+pe)}else I!==""?je("WebGLProgram: Program Info Log:",I):(B===""||O==="")&&(Q=!1);Q&&(D.diagnostics={runnable:$,programLog:I,vertexShader:{log:B,prefix:p},fragmentShader:{log:O,prefix:m}})}i.deleteShader(R),i.deleteShader(b),x=new Zo(i,_),w=pS(i,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(_,rS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=b,this}let PS=0;class DS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new NS(e),t.set(e,n)),n}}class NS{constructor(e){this.id=PS++,this.code=e,this.usedTimes=0}}function LS(r){return r===is||r===ll||r===cl}function IS(r,e,t,n,i,s){const a=new Hf,o=new DS,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,w,P,D,L,k){const V=D.fog,I=L.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=e.get(x.envMap||B,O),Q=$&&$.mapping===Cl?$.image.height:null,N=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&je("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const pe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,be=pe!==void 0?pe.length:0;let qe=0;I.morphAttributes.position!==void 0&&(qe=1),I.morphAttributes.normal!==void 0&&(qe=2),I.morphAttributes.color!==void 0&&(qe=3);let ze,Ne,H,ne;if(N){const he=Pi[N];ze=he.vertexShader,Ne=he.fragmentShader}else ze=x.vertexShader,Ne=x.fragmentShader,o.update(x),H=o.getVertexShaderID(x),ne=o.getFragmentShaderID(x);const te=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),Re=L.isInstancedMesh===!0,ve=L.isBatchedMesh===!0,Ue=!!x.map,_e=!!x.matcap,Le=!!$,ke=!!x.aoMap,Oe=!!x.lightMap,X=!!x.bumpMap,Ge=!!x.normalMap,mt=!!x.displacementMap,F=!!x.emissiveMap,Ye=!!x.metalnessMap,We=!!x.roughnessMap,nt=x.anisotropy>0,ge=x.clearcoat>0,Je=x.dispersion>0,C=x.iridescence>0,S=x.sheen>0,G=x.transmission>0,Z=nt&&!!x.anisotropyMap,ie=ge&&!!x.clearcoatMap,de=ge&&!!x.clearcoatNormalMap,se=ge&&!!x.clearcoatRoughnessMap,K=C&&!!x.iridescenceMap,ee=C&&!!x.iridescenceThicknessMap,Se=S&&!!x.sheenColorMap,Ae=S&&!!x.sheenRoughnessMap,fe=!!x.specularMap,ce=!!x.specularColorMap,xe=!!x.specularIntensityMap,Xe=G&&!!x.transmissionMap,Ze=G&&!!x.thicknessMap,U=!!x.gradientMap,le=!!x.alphaMap,J=x.alphaTest>0,ye=!!x.alphaHash,ue=!!x.extensions;let re=Fi;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(re=r.toneMapping);const oe={shaderID:N,shaderType:x.type,shaderName:x.name,vertexShader:ze,fragmentShader:Ne,defines:x.defines,customVertexShaderID:H,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ve,batchingColor:ve&&L._colorsTexture!==null,instancing:Re,instancingColor:Re&&L.instanceColor!==null,instancingMorph:Re&&L.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:_e,envMap:Le,envMapMode:Le&&$.mapping,envMapCubeUVHeight:Q,aoMap:ke,lightMap:Oe,bumpMap:X,normalMap:Ge,displacementMap:mt,emissiveMap:F,normalMapObjectSpace:Ge&&x.normalMapType===rg,normalMapTangentSpace:Ge&&x.normalMapType===kh,packedNormalMap:Ge&&x.normalMapType===kh&&LS(x.normalMap.format),metalnessMap:Ye,roughnessMap:We,anisotropy:nt,anisotropyMap:Z,clearcoat:ge,clearcoatMap:ie,clearcoatNormalMap:de,clearcoatRoughnessMap:se,dispersion:Je,iridescence:C,iridescenceMap:K,iridescenceThicknessMap:ee,sheen:S,sheenColorMap:Se,sheenRoughnessMap:Ae,specularMap:fe,specularColorMap:ce,specularIntensityMap:xe,transmission:G,transmissionMap:Xe,thicknessMap:Ze,gradientMap:U,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:J,alphaHash:ye,combine:x.combine,mapUv:Ue&&g(x.map.channel),aoMapUv:ke&&g(x.aoMap.channel),lightMapUv:Oe&&g(x.lightMap.channel),bumpMapUv:X&&g(x.bumpMap.channel),normalMapUv:Ge&&g(x.normalMap.channel),displacementMapUv:mt&&g(x.displacementMap.channel),emissiveMapUv:F&&g(x.emissiveMap.channel),metalnessMapUv:Ye&&g(x.metalnessMap.channel),roughnessMapUv:We&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:ie&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(x.sheenRoughnessMap.channel),specularMapUv:fe&&g(x.specularMap.channel),specularColorMapUv:ce&&g(x.specularColorMap.channel),specularIntensityMapUv:xe&&g(x.specularIntensityMap.channel),transmissionMapUv:Xe&&g(x.transmissionMap.channel),thicknessMapUv:Ze&&g(x.thicknessMap.channel),alphaMapUv:le&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ge||nt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Ue||le),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Ge===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:L.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:qe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:F&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ki,flipSided:x.side===On,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)w.push(P),w.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(w,x),v(w,x),w.push(r.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function y(x){const w=f[x.type];let P;if(w){const D=Pi[w];P=i_.clone(D.uniforms)}else P=x.uniforms;return P}function M(x,w){let P=u.get(w);return P!==void 0?++P.usedTimes:(P=new CS(r,w,x,i),c.push(P),u.set(w,P)),P}function R(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:R,releaseShaderCache:b,programs:c,dispose:T}}function US(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function FS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Nd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ld(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,p,m){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:m},r[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=g,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=p,v.group=m),e++,v}function l(h,f,g,_,p,m){const v=o(h,f,g,_,p,m);g.transmission>0?n.push(v):g.transparent===!0?i.push(v):t.push(v)}function c(h,f,g,_,p,m){const v=o(h,f,g,_,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||FS),n.length>1&&n.sort(f||Nd),i.length>1&&i.sort(f||Nd)}function d(){for(let h=e,f=r.length;h<f;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function OS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ld,r.set(n,[a])):i>=s.length?(a=new Ld,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function BS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new xt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function kS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let zS=0;function GS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function VS(r){const e=new BS,t=kS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const i=new Y,s=new Zt,a=new Zt;function o(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,v=0,y=0,M=0,R=0,b=0,T=0;c.sort(GS);for(let w=0,P=c.length;w<P;w++){const D=c[w],L=D.color,k=D.intensity,V=D.distance;let I=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===is?I=D.shadow.map.texture:I=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=L.r*k,d+=L.g*k,h+=L.b*k;else if(D.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(D.sh.coefficients[B],k);T++}else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const O=D.shadow,$=t.get(D);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=I,n.directionalShadowMatrix[f]=D.shadow.matrix,v++}n.directional[f]=B,f++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(L).multiplyScalar(k),B.distance=V,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,n.spot[_]=B;const O=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,O.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[_]=O.matrix,D.castShadow){const $=t.get(D);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=I,M++}_++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(L).multiplyScalar(k),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=B,p++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const O=D.shadow,$=t.get(D);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,$.shadowCameraNear=O.camera.near,$.shadowCameraFar=O.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=B,g++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(k),B.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[m]=B,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==M||x.numSpotMaps!==R||x.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=M,x.numSpotMaps=R,x.numLightProbes=T,n.version=zS++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const y=c[m];if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Id(r){const e=new VS(r),t=[],n=[],i=[];function s(h){d.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function HS(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Id(r),e.set(i,[o])):s>=a.length?(o=new Id(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jS=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],YS=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Ud=new Zt,ha=new Y,pc=new Y;function qS(r,e,t){let n=new qf;const i=new pt,s=new pt,a=new Wt,o=new o_,l=new l_,c={},u=t.maxTextureSize,d={[Ar]:On,[On]:Ar,[Ki]:Ki},h=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ln;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ei(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let m=this.type;this.render=function(b,T,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Um&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jo);const w=r.getRenderTarget(),P=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),L=r.state;L.setBlending(er),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const k=m!==this.type;k&&T.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(I=>I.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,I=b.length;V<I;V++){const B=b[V],O=B.shadow;if(O===void 0){je("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const $=O.getFrameExtents();i.multiply($),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,O.mapSize.y=s.y));const Q=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Q,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ma){if(B.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Oi(i.x,i.y,{format:is,type:ir,minFilter:bn,magFilter:bn,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new qs(i.x,i.y,Ni),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=rr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=hn,O.map.depthTexture.magFilter=hn}else B.isPointLight?(O.map=new np(i.x),O.map.depthTexture=new t_(i.x,ki)):(O.map=new Oi(i.x,i.y),O.map.depthTexture=new qs(i.x,i.y,ki)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=rr,this.type===jo?(O.map.depthTexture.compareFunction=Q?Qu:Ju,O.map.depthTexture.minFilter=bn,O.map.depthTexture.magFilter=bn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=hn,O.map.depthTexture.magFilter=hn);O.camera.updateProjectionMatrix()}const N=O.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<N;pe++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,pe),r.clear();else{pe===0&&(r.setRenderTarget(O.map),r.clear());const be=O.getViewport(pe);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),L.viewport(a)}if(B.isPointLight){const be=O.camera,qe=O.matrix,ze=B.distance||be.far;ze!==be.far&&(be.far=ze,be.updateProjectionMatrix()),ha.setFromMatrixPosition(B.matrixWorld),be.position.copy(ha),pc.copy(be.position),pc.add(jS[pe]),be.up.copy(YS[pe]),be.lookAt(pc),be.updateMatrixWorld(),qe.makeTranslation(-ha.x,-ha.y,-ha.z),Ud.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ud,be.coordinateSystem,be.reversedDepth)}else O.updateMatrices(B);n=O.getFrustum(),M(T,x,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===ma&&v(O,x),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(w,P,D)};function v(b,T){const x=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Oi(i.x,i.y,{format:is,type:ir})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(T,null,x,h,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(T,null,x,f,_,null)}function y(b,T,x,w){let P=null;const D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)P=D;else if(P=x.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const L=P.uuid,k=T.uuid;let V=c[L];V===void 0&&(V={},c[L]=V);let I=V[k];I===void 0&&(I=P.clone(),V[k]=I,T.addEventListener("dispose",R)),P=I}if(P.visible=T.visible,P.wireframe=T.wireframe,w===ma?P.side=T.shadowSide!==null?T.shadowSide:T.side:P.side=T.shadowSide!==null?T.shadowSide:d[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,P.map=T.map,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const L=r.properties.get(P);L.light=x}return P}function M(b,T,x,w,P){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===ma)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const k=e.update(b),V=b.material;if(Array.isArray(V)){const I=k.groups;for(let B=0,O=I.length;B<O;B++){const $=I[B],Q=V[$.materialIndex];if(Q&&Q.visible){const N=y(b,Q,w,P);b.onBeforeShadow(r,b,T,x,k,N,$),r.renderBufferDirect(x,null,k,N,b,$),b.onAfterShadow(r,b,T,x,k,N,$)}}}else if(V.visible){const I=y(b,V,w,P);b.onBeforeShadow(r,b,T,x,k,I,null),r.renderBufferDirect(x,null,k,I,b,null),b.onAfterShadow(r,b,T,x,k,I,null)}}const L=b.children;for(let k=0,V=L.length;k<V;k++)M(L[k],T,x,w,P)}function R(b){b.target.removeEventListener("dispose",R);for(const x in c){const w=c[x],P=b.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function $S(r,e){function t(){let U=!1;const le=new Wt;let J=null;const ye=new Wt(0,0,0,0);return{setMask:function(ue){J!==ue&&!U&&(r.colorMask(ue,ue,ue,ue),J=ue)},setLocked:function(ue){U=ue},setClear:function(ue,re,oe,he,Ve){Ve===!0&&(ue*=he,re*=he,oe*=he),le.set(ue,re,oe,he),ye.equals(le)===!1&&(r.clearColor(ue,re,oe,he),ye.copy(le))},reset:function(){U=!1,J=null,ye.set(-1,0,0,0)}}}function n(){let U=!1,le=!1,J=null,ye=null,ue=null;return{setReversed:function(re){if(le!==re){const oe=e.get("EXT_clip_control");re?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),le=re;const he=ue;ue=null,this.setClear(he)}},getReversed:function(){return le},setTest:function(re){re?te(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(re){J!==re&&!U&&(r.depthMask(re),J=re)},setFunc:function(re){if(le&&(re=pg[re]),ye!==re){switch(re){case Nc:r.depthFunc(r.NEVER);break;case Lc:r.depthFunc(r.ALWAYS);break;case Ic:r.depthFunc(r.LESS);break;case js:r.depthFunc(r.LEQUAL);break;case Uc:r.depthFunc(r.EQUAL);break;case Fc:r.depthFunc(r.GEQUAL);break;case Oc:r.depthFunc(r.GREATER);break;case Bc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ye=re}},setLocked:function(re){U=re},setClear:function(re){ue!==re&&(ue=re,le&&(re=1-re),r.clearDepth(re))},reset:function(){U=!1,J=null,ye=null,ue=null,le=!1}}}function i(){let U=!1,le=null,J=null,ye=null,ue=null,re=null,oe=null,he=null,Ve=null;return{setTest:function(ae){U||(ae?te(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(ae){le!==ae&&!U&&(r.stencilMask(ae),le=ae)},setFunc:function(ae,He,De){(J!==ae||ye!==He||ue!==De)&&(r.stencilFunc(ae,He,De),J=ae,ye=He,ue=De)},setOp:function(ae,He,De){(re!==ae||oe!==He||he!==De)&&(r.stencilOp(ae,He,De),re=ae,oe=He,he=De)},setLocked:function(ae){U=ae},setClear:function(ae){Ve!==ae&&(r.clearStencil(ae),Ve=ae)},reset:function(){U=!1,le=null,J=null,ye=null,ue=null,re=null,oe=null,he=null,Ve=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,p=!1,m=null,v=null,y=null,M=null,R=null,b=null,T=null,x=new xt(0,0,0),w=0,P=!1,D=null,L=null,k=null,V=null,I=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,$=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),O=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),O=$>=2);let N=null,pe={};const be=r.getParameter(r.SCISSOR_BOX),qe=r.getParameter(r.VIEWPORT),ze=new Wt().fromArray(be),Ne=new Wt().fromArray(qe);function H(U,le,J,ye){const ue=new Uint8Array(4),re=r.createTexture();r.bindTexture(U,re),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<J;oe++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,ye,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(le+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return re}const ne={};ne[r.TEXTURE_2D]=H(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=H(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=H(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=H(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(js),X(!1),Ge(Fh),te(r.CULL_FACE),ke(er);function te(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function me(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function Re(U,le){return h[U]!==le?(r.bindFramebuffer(U,le),h[U]=le,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=le),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=le),!0):!1}function ve(U,le){let J=g,ye=!1;if(U){J=f.get(le),J===void 0&&(J=[],f.set(le,J));const ue=U.textures;if(J.length!==ue.length||J[0]!==r.COLOR_ATTACHMENT0){for(let re=0,oe=ue.length;re<oe;re++)J[re]=r.COLOR_ATTACHMENT0+re;J.length=ue.length,ye=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,ye=!0);ye&&r.drawBuffers(J)}function Ue(U){return _!==U?(r.useProgram(U),_=U,!0):!1}const _e={[Hr]:r.FUNC_ADD,[Om]:r.FUNC_SUBTRACT,[Bm]:r.FUNC_REVERSE_SUBTRACT};_e[km]=r.MIN,_e[zm]=r.MAX;const Le={[Gm]:r.ZERO,[Vm]:r.ONE,[Hm]:r.SRC_COLOR,[Pc]:r.SRC_ALPHA,[$m]:r.SRC_ALPHA_SATURATE,[Ym]:r.DST_COLOR,[Xm]:r.DST_ALPHA,[Wm]:r.ONE_MINUS_SRC_COLOR,[Dc]:r.ONE_MINUS_SRC_ALPHA,[qm]:r.ONE_MINUS_DST_COLOR,[jm]:r.ONE_MINUS_DST_ALPHA,[Km]:r.CONSTANT_COLOR,[Zm]:r.ONE_MINUS_CONSTANT_COLOR,[Jm]:r.CONSTANT_ALPHA,[Qm]:r.ONE_MINUS_CONSTANT_ALPHA};function ke(U,le,J,ye,ue,re,oe,he,Ve,ae){if(U===er){p===!0&&(me(r.BLEND),p=!1);return}if(p===!1&&(te(r.BLEND),p=!0),U!==Fm){if(U!==m||ae!==P){if((v!==Hr||R!==Hr)&&(r.blendEquation(r.FUNC_ADD),v=Hr,R=Hr),ae)switch(U){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ta:r.blendFunc(r.ONE,r.ONE);break;case Oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ft("WebGLState: Invalid blending: ",U);break}else switch(U){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ta:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Oh:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bh:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",U);break}y=null,M=null,b=null,T=null,x.set(0,0,0),w=0,m=U,P=ae}return}ue=ue||le,re=re||J,oe=oe||ye,(le!==v||ue!==R)&&(r.blendEquationSeparate(_e[le],_e[ue]),v=le,R=ue),(J!==y||ye!==M||re!==b||oe!==T)&&(r.blendFuncSeparate(Le[J],Le[ye],Le[re],Le[oe]),y=J,M=ye,b=re,T=oe),(he.equals(x)===!1||Ve!==w)&&(r.blendColor(he.r,he.g,he.b,Ve),x.copy(he),w=Ve),m=U,P=!1}function Oe(U,le){U.side===Ki?me(r.CULL_FACE):te(r.CULL_FACE);let J=U.side===On;le&&(J=!J),X(J),U.blending===Os&&U.transparent===!1?ke(er):ke(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ye=U.stencilWrite;o.setTest(ye),ye&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),F(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function X(U){D!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),D=U)}function Ge(U){U!==Lm?(te(r.CULL_FACE),U!==L&&(U===Fh?r.cullFace(r.BACK):U===Im?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),L=U}function mt(U){U!==k&&(O&&r.lineWidth(U),k=U)}function F(U,le,J){U?(te(r.POLYGON_OFFSET_FILL),(V!==le||I!==J)&&(V=le,I=J,a.getReversed()&&(le=-le),r.polygonOffset(le,J))):me(r.POLYGON_OFFSET_FILL)}function Ye(U){U?te(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function We(U){U===void 0&&(U=r.TEXTURE0+B-1),N!==U&&(r.activeTexture(U),N=U)}function nt(U,le,J){J===void 0&&(N===null?J=r.TEXTURE0+B-1:J=N);let ye=pe[J];ye===void 0&&(ye={type:void 0,texture:void 0},pe[J]=ye),(ye.type!==U||ye.texture!==le)&&(N!==J&&(r.activeTexture(J),N=J),r.bindTexture(U,le||ne[U]),ye.type=U,ye.texture=le)}function ge(){const U=pe[N];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Je(){try{r.compressedTexImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function S(){try{r.texSubImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function G(){try{r.texSubImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function ie(){try{r.compressedTexSubImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function de(){try{r.texStorage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function se(){try{r.texStorage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function K(){try{r.texImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function ee(){try{r.texImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function Se(U){return d[U]!==void 0?d[U]:r.getParameter(U)}function Ae(U,le){d[U]!==le&&(r.pixelStorei(U,le),d[U]=le)}function fe(U){ze.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ze.copy(U))}function ce(U){Ne.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Ne.copy(U))}function xe(U,le){let J=c.get(le);J===void 0&&(J=new WeakMap,c.set(le,J));let ye=J.get(U);ye===void 0&&(ye=r.getUniformBlockIndex(le,U.name),J.set(U,ye))}function Xe(U,le){const ye=c.get(le).get(U);l.get(le)!==ye&&(r.uniformBlockBinding(le,ye,U.__bindingPointIndex),l.set(le,ye))}function Ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,pe={},h={},f=new WeakMap,g=[],_=null,p=!1,m=null,v=null,y=null,M=null,R=null,b=null,T=null,x=new xt(0,0,0),w=0,P=!1,D=null,L=null,k=null,V=null,I=null,ze.set(0,0,r.canvas.width,r.canvas.height),Ne.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:me,bindFramebuffer:Re,drawBuffers:ve,useProgram:Ue,setBlending:ke,setMaterial:Oe,setFlipSided:X,setCullFace:Ge,setLineWidth:mt,setPolygonOffset:F,setScissorTest:Ye,activeTexture:We,bindTexture:nt,unbindTexture:ge,compressedTexImage2D:Je,compressedTexImage3D:C,texImage2D:K,texImage3D:ee,pixelStorei:Ae,getParameter:Se,updateUBOMapping:xe,uniformBlockBinding:Xe,texStorage2D:de,texStorage3D:se,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:Z,compressedTexSubImage3D:ie,scissor:fe,viewport:ce,reset:Ze}}function KS(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return g?new OffscreenCanvas(C,S):fl("canvas")}function p(C,S,G){let Z=1;const ie=Je(C);if((ie.width>G||ie.height>G)&&(Z=G/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const de=Math.floor(Z*ie.width),se=Math.floor(Z*ie.height);h===void 0&&(h=_(de,se));const K=S?_(de,se):h;return K.width=de,K.height=se,K.getContext("2d").drawImage(C,0,0,de,se),je("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+de+"x"+se+")."),K}else return"data"in C&&je("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function m(C){return C.generateMipmaps}function v(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,S,G,Z,ie,de=!1){if(C!==null){if(r[C]!==void 0)return r[C];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se;Z&&(se=e.get("EXT_texture_norm16"),se||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===r.RED&&(G===r.FLOAT&&(K=r.R32F),G===r.HALF_FLOAT&&(K=r.R16F),G===r.UNSIGNED_BYTE&&(K=r.R8),G===r.UNSIGNED_SHORT&&se&&(K=se.R16_EXT),G===r.SHORT&&se&&(K=se.R16_SNORM_EXT)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.R8UI),G===r.UNSIGNED_SHORT&&(K=r.R16UI),G===r.UNSIGNED_INT&&(K=r.R32UI),G===r.BYTE&&(K=r.R8I),G===r.SHORT&&(K=r.R16I),G===r.INT&&(K=r.R32I)),S===r.RG&&(G===r.FLOAT&&(K=r.RG32F),G===r.HALF_FLOAT&&(K=r.RG16F),G===r.UNSIGNED_BYTE&&(K=r.RG8),G===r.UNSIGNED_SHORT&&se&&(K=se.RG16_EXT),G===r.SHORT&&se&&(K=se.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RG8UI),G===r.UNSIGNED_SHORT&&(K=r.RG16UI),G===r.UNSIGNED_INT&&(K=r.RG32UI),G===r.BYTE&&(K=r.RG8I),G===r.SHORT&&(K=r.RG16I),G===r.INT&&(K=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGB8UI),G===r.UNSIGNED_SHORT&&(K=r.RGB16UI),G===r.UNSIGNED_INT&&(K=r.RGB32UI),G===r.BYTE&&(K=r.RGB8I),G===r.SHORT&&(K=r.RGB16I),G===r.INT&&(K=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),G===r.UNSIGNED_INT&&(K=r.RGBA32UI),G===r.BYTE&&(K=r.RGBA8I),G===r.SHORT&&(K=r.RGBA16I),G===r.INT&&(K=r.RGBA32I)),S===r.RGB&&(G===r.UNSIGNED_SHORT&&se&&(K=se.RGB16_EXT),G===r.SHORT&&se&&(K=se.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),S===r.RGBA){const ee=de?hl:ut.getTransfer(ie);G===r.FLOAT&&(K=r.RGBA32F),G===r.HALF_FLOAT&&(K=r.RGBA16F),G===r.UNSIGNED_BYTE&&(K=ee===St?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&se&&(K=se.RGBA16_EXT),G===r.SHORT&&se&&(K=se.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function R(C,S){let G;return C?S===null||S===ki||S===Va?G=r.DEPTH24_STENCIL8:S===Ni?G=r.DEPTH32F_STENCIL8:S===Ga&&(G=r.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ki||S===Va?G=r.DEPTH_COMPONENT24:S===Ni?G=r.DEPTH_COMPONENT32F:S===Ga&&(G=r.DEPTH_COMPONENT16),G}function b(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),w(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function x(C){const S=C.target;S.removeEventListener("dispose",x),D(S)}function w(C){const S=n.get(C);if(S.__webglInit===void 0)return;const G=C.source,Z=f.get(G);if(Z){const ie=Z[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(C),Object.keys(Z).length===0&&f.delete(G)}n.remove(C)}function P(C){const S=n.get(C);r.deleteTexture(S.__webglTexture);const G=C.source,Z=f.get(G);delete Z[S.__cacheKey],a.memory.textures--}function D(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ie=0;ie<S.__webglFramebuffer[Z].length;ie++)r.deleteFramebuffer(S.__webglFramebuffer[Z][ie]);else r.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[Z]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=C.textures;for(let Z=0,ie=G.length;Z<ie;Z++){const de=n.get(G[Z]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(G[Z])}n.remove(C)}let L=0;function k(){L=0}function V(){return L}function I(C){L=C}function B(){const C=L;return C>=i.maxTextures&&je("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function O(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function $(C,S){const G=n.get(C);if(C.isVideoTexture&&nt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const Z=C.image;if(Z===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{me(G,C,S);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function Q(C,S){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){me(G,C,S);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function N(C,S){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){me(G,C,S);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function pe(C,S){const G=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){Re(G,C,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}const be={[kc]:r.REPEAT,[Ji]:r.CLAMP_TO_EDGE,[zc]:r.MIRRORED_REPEAT},qe={[hn]:r.NEAREST,[ng]:r.NEAREST_MIPMAP_NEAREST,[so]:r.NEAREST_MIPMAP_LINEAR,[bn]:r.LINEAR,[zl]:r.LINEAR_MIPMAP_NEAREST,[Xr]:r.LINEAR_MIPMAP_LINEAR},ze={[sg]:r.NEVER,[ug]:r.ALWAYS,[ag]:r.LESS,[Ju]:r.LEQUAL,[og]:r.EQUAL,[Qu]:r.GEQUAL,[lg]:r.GREATER,[cg]:r.NOTEQUAL};function Ne(C,S){if(S.type===Ni&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===zl||S.magFilter===so||S.magFilter===Xr||S.minFilter===bn||S.minFilter===zl||S.minFilter===so||S.minFilter===Xr)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,be[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,be[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,be[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,qe[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,qe[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ze[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==so&&S.minFilter!==Xr||S.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function H(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const Z=S.source;let ie=f.get(Z);ie===void 0&&(ie={},f.set(Z,ie));const de=O(S);if(de!==C.__cacheKey){ie[de]===void 0&&(ie[de]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ie[de].usedTimes++;const se=ie[C.__cacheKey];se!==void 0&&(ie[C.__cacheKey].usedTimes--,se.usedTimes===0&&P(S)),C.__cacheKey=de,C.__webglTexture=ie[de].texture}return G}function ne(C,S,G){return Math.floor(Math.floor(C/G)/S)}function te(C,S,G,Z){const de=C.updateRanges;if(de.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,G,Z,S.data);else{de.sort((Ae,fe)=>Ae.start-fe.start);let se=0;for(let Ae=1;Ae<de.length;Ae++){const fe=de[se],ce=de[Ae],xe=fe.start+fe.count,Xe=ne(ce.start,S.width,4),Ze=ne(fe.start,S.width,4);ce.start<=xe+1&&Xe===Ze&&ne(ce.start+ce.count-1,S.width,4)===Xe?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++se,de[se]=ce)}de.length=se+1;const K=t.getParameter(r.UNPACK_ROW_LENGTH),ee=t.getParameter(r.UNPACK_SKIP_PIXELS),Se=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let Ae=0,fe=de.length;Ae<fe;Ae++){const ce=de[Ae],xe=Math.floor(ce.start/4),Xe=Math.ceil(ce.count/4),Ze=xe%S.width,U=Math.floor(xe/S.width),le=Xe,J=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,Ze,U,le,J,G,Z,S.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,K),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,Se)}}function me(C,S,G){let Z=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=r.TEXTURE_3D);const ie=H(C,S),de=S.source;t.bindTexture(Z,C.__webglTexture,r.TEXTURE0+G);const se=n.get(de);if(de.version!==se.__version||ie===!0){if(t.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const J=ut.getPrimaries(ut.workingColorSpace),ye=S.colorSpace===_r?null:ut.getPrimaries(S.colorSpace),ue=S.colorSpace===_r||J===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let ee=p(S.image,!1,i.maxTextureSize);ee=ge(S,ee);const Se=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type);let fe=M(S.internalFormat,Se,Ae,S.normalized,S.colorSpace,S.isVideoTexture);Ne(Z,S);let ce;const xe=S.mipmaps,Xe=S.isVideoTexture!==!0,Ze=se.__version===void 0||ie===!0,U=de.dataReady,le=b(S,ee);if(S.isDepthTexture)fe=R(S.format===jr,S.type),Ze&&(Xe?t.texStorage2D(r.TEXTURE_2D,1,fe,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,fe,ee.width,ee.height,0,Se,Ae,null));else if(S.isDataTexture)if(xe.length>0){Xe&&Ze&&t.texStorage2D(r.TEXTURE_2D,le,fe,xe[0].width,xe[0].height);for(let J=0,ye=xe.length;J<ye;J++)ce=xe[J],Xe?U&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,ce.width,ce.height,Se,Ae,ce.data):t.texImage2D(r.TEXTURE_2D,J,fe,ce.width,ce.height,0,Se,Ae,ce.data);S.generateMipmaps=!1}else Xe?(Ze&&t.texStorage2D(r.TEXTURE_2D,le,fe,ee.width,ee.height),U&&te(S,ee,Se,Ae)):t.texImage2D(r.TEXTURE_2D,0,fe,ee.width,ee.height,0,Se,Ae,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xe&&Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,fe,xe[0].width,xe[0].height,ee.depth);for(let J=0,ye=xe.length;J<ye;J++)if(ce=xe[J],S.format!==bi)if(Se!==null)if(Xe){if(U)if(S.layerUpdates.size>0){const ue=dd(ce.width,ce.height,S.format,S.type);for(const re of S.layerUpdates){const oe=ce.data.subarray(re*ue/ce.data.BYTES_PER_ELEMENT,(re+1)*ue/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,re,ce.width,ce.height,1,Se,oe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,ee.depth,Se,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,fe,ce.width,ce.height,ee.depth,0,ce.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,ee.depth,Se,Ae,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,J,fe,ce.width,ce.height,ee.depth,0,Se,Ae,ce.data)}else{Xe&&Ze&&t.texStorage2D(r.TEXTURE_2D,le,fe,xe[0].width,xe[0].height);for(let J=0,ye=xe.length;J<ye;J++)ce=xe[J],S.format!==bi?Se!==null?Xe?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,ce.width,ce.height,Se,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,J,fe,ce.width,ce.height,0,ce.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?U&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,ce.width,ce.height,Se,Ae,ce.data):t.texImage2D(r.TEXTURE_2D,J,fe,ce.width,ce.height,0,Se,Ae,ce.data)}else if(S.isDataArrayTexture)if(Xe){if(Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,fe,ee.width,ee.height,ee.depth),U)if(S.layerUpdates.size>0){const J=dd(ee.width,ee.height,S.format,S.type);for(const ye of S.layerUpdates){const ue=ee.data.subarray(ye*J/ee.data.BYTES_PER_ELEMENT,(ye+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,ee.width,ee.height,1,Se,Ae,ue)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Se,Ae,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,Se,Ae,ee.data);else if(S.isData3DTexture)Xe?(Ze&&t.texStorage3D(r.TEXTURE_3D,le,fe,ee.width,ee.height,ee.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Se,Ae,ee.data)):t.texImage3D(r.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,Se,Ae,ee.data);else if(S.isFramebufferTexture){if(Ze)if(Xe)t.texStorage2D(r.TEXTURE_2D,le,fe,ee.width,ee.height);else{let J=ee.width,ye=ee.height;for(let ue=0;ue<le;ue++)t.texImage2D(r.TEXTURE_2D,ue,fe,J,ye,0,Se,Ae,null),J>>=1,ye>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){const J=r.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),d.add(S),J.onpaint=he=>{const Ve=he.changedElements;for(const ae of d)Ve.includes(ae.image)&&(ae.needsUpdate=!0)},J.requestPaint();return}const ye=0,ue=r.RGBA,re=r.RGBA,oe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,ye,ue,re,oe,ee),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Xe&&Ze){const J=Je(xe[0]);t.texStorage2D(r.TEXTURE_2D,le,fe,J.width,J.height)}for(let J=0,ye=xe.length;J<ye;J++)ce=xe[J],Xe?U&&t.texSubImage2D(r.TEXTURE_2D,J,0,0,Se,Ae,ce):t.texImage2D(r.TEXTURE_2D,J,fe,Se,Ae,ce);S.generateMipmaps=!1}else if(Xe){if(Ze){const J=Je(ee);t.texStorage2D(r.TEXTURE_2D,le,fe,J.width,J.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se,Ae,ee)}else t.texImage2D(r.TEXTURE_2D,0,fe,Se,Ae,ee);m(S)&&v(Z),se.__version=de.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Re(C,S,G){if(S.image.length!==6)return;const Z=H(C,S),ie=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);const de=n.get(ie);if(ie.version!==de.__version||Z===!0){t.activeTexture(r.TEXTURE0+G);const se=ut.getPrimaries(ut.workingColorSpace),K=S.colorSpace===_r?null:ut.getPrimaries(S.colorSpace),ee=S.colorSpace===_r||se===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,Ae=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let re=0;re<6;re++)!Se&&!Ae?fe[re]=p(S.image[re],!0,i.maxCubemapSize):fe[re]=Ae?S.image[re].image:S.image[re],fe[re]=ge(S,fe[re]);const ce=fe[0],xe=s.convert(S.format,S.colorSpace),Xe=s.convert(S.type),Ze=M(S.internalFormat,xe,Xe,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,le=de.__version===void 0||Z===!0,J=ie.dataReady;let ye=b(S,ce);Ne(r.TEXTURE_CUBE_MAP,S);let ue;if(Se){U&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,Ze,ce.width,ce.height);for(let re=0;re<6;re++){ue=fe[re].mipmaps;for(let oe=0;oe<ue.length;oe++){const he=ue[oe];S.format!==bi?xe!==null?U?J&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe,0,0,he.width,he.height,xe,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe,Ze,he.width,he.height,0,he.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe,0,0,he.width,he.height,xe,Xe,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe,Ze,he.width,he.height,0,xe,Xe,he.data)}}}else{if(ue=S.mipmaps,U&&le){ue.length>0&&ye++;const re=Je(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,Ze,re.width,re.height)}for(let re=0;re<6;re++)if(Ae){U?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,fe[re].width,fe[re].height,xe,Xe,fe[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ze,fe[re].width,fe[re].height,0,xe,Xe,fe[re].data);for(let oe=0;oe<ue.length;oe++){const Ve=ue[oe].image[re].image;U?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe+1,0,0,Ve.width,Ve.height,xe,Xe,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe+1,Ze,Ve.width,Ve.height,0,xe,Xe,Ve.data)}}else{U?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,xe,Xe,fe[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ze,xe,Xe,fe[re]);for(let oe=0;oe<ue.length;oe++){const he=ue[oe];U?J&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe+1,0,0,xe,Xe,he.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe+1,Ze,xe,Xe,he.image[re])}}}m(S)&&v(r.TEXTURE_CUBE_MAP),de.__version=ie.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ve(C,S,G,Z,ie,de){const se=s.convert(G.format,G.colorSpace),K=s.convert(G.type),ee=M(G.internalFormat,se,K,G.normalized,G.colorSpace),Se=n.get(S),Ae=n.get(G);if(Ae.__renderTarget=S,!Se.__hasExternalTextures){const fe=Math.max(1,S.width>>de),ce=Math.max(1,S.height>>de);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,de,ee,fe,ce,S.depth,0,se,K,null):t.texImage2D(ie,de,ee,fe,ce,0,se,K,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),We(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,ie,Ae.__webglTexture,0,Ye(S)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,ie,Ae.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(C,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){const Z=S.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,de=R(S.stencilBuffer,ie),se=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;We(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(S),de,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(S),de,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,de,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,C)}else{const Z=S.textures;for(let ie=0;ie<Z.length;ie++){const de=Z[ie],se=s.convert(de.format,de.colorSpace),K=s.convert(de.type),ee=M(de.internalFormat,se,K,de.normalized,de.colorSpace);We(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(S),ee,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(S),ee,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ee,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(C,S,G){const Z=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(S.depthTexture);if(ie.__renderTarget=S,(!ie.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),ie.__webglTexture===void 0){ie.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,S.depthTexture);const Se=s.convert(S.depthTexture.format),Ae=s.convert(S.depthTexture.type);let fe;S.depthTexture.format===rr?fe=r.DEPTH_COMPONENT24:S.depthTexture.format===jr&&(fe=r.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,S.width,S.height,0,Se,Ae,null)}}else $(S.depthTexture,0);const de=ie.__webglTexture,se=Ye(S),K=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,ee=S.depthTexture.format===jr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===rr)We(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,K,de,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,ee,K,de,0);else if(S.depthTexture.format===jr)We(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,K,de,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,ee,K,de,0);else throw new Error("Unknown depthTexture format")}function Le(C){const S=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let Z=0;Z<6;Z++)_e(S.__webglFramebuffer[Z],C,Z);else{const Z=C.texture.mipmaps;Z&&Z.length>0?_e(S.__webglFramebuffer[0],C,0):_e(S.__webglFramebuffer,C,0)}else if(G){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=r.createRenderbuffer(),Ue(S.__webglDepthbuffer[Z],C,!1);else{const ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,de)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ue(S.__webglDepthbuffer,C,!1);else{const ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,de)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(C,S,G){const Z=n.get(C);S!==void 0&&ve(Z.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Le(C)}function Oe(C){const S=C.texture,G=n.get(C),Z=n.get(S);C.addEventListener("dispose",x);const ie=C.textures,de=C.isWebGLCubeRenderTarget===!0,se=ie.length>1;if(se||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=S.version,a.memory.textures++),de){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let ee=0;ee<S.mipmaps.length;ee++)G.__webglFramebuffer[K][ee]=r.createFramebuffer()}else G.__webglFramebuffer[K]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)G.__webglFramebuffer[K]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(se)for(let K=0,ee=ie.length;K<ee;K++){const Se=n.get(ie[K]);Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&We(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<ie.length;K++){const ee=ie[K];G.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[K]);const Se=s.convert(ee.format,ee.colorSpace),Ae=s.convert(ee.type),fe=M(ee.internalFormat,Se,Ae,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),ce=Ye(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,fe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,G.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)ve(G.__webglFramebuffer[K][ee],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else ve(G.__webglFramebuffer[K],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(S)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let K=0,ee=ie.length;K<ee;K++){const Se=ie[K],Ae=n.get(Se);let fe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,Ae.__webglTexture),Ne(fe,Se),ve(G.__webglFramebuffer,C,Se,r.COLOR_ATTACHMENT0+K,fe,0),m(Se)&&v(fe)}t.unbindTexture()}else{let K=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(K,Z.__webglTexture),Ne(K,S),S.mipmaps&&S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)ve(G.__webglFramebuffer[ee],C,S,r.COLOR_ATTACHMENT0,K,ee);else ve(G.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,K,0);m(S)&&v(K),t.unbindTexture()}C.depthBuffer&&Le(C)}function X(C){const S=C.textures;for(let G=0,Z=S.length;G<Z;G++){const ie=S[G];if(m(ie)){const de=y(C),se=n.get(ie).__webglTexture;t.bindTexture(de,se),v(de),t.unbindTexture()}}}const Ge=[],mt=[];function F(C){if(C.samples>0){if(We(C)===!1){const S=C.textures,G=C.width,Z=C.height;let ie=r.COLOR_BUFFER_BIT;const de=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=n.get(C),K=S.length>1;if(K)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const ee=C.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),K){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,se.__webglColorRenderbuffer[Se]);const Ae=n.get(S[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,G,Z,0,0,G,Z,ie,r.NEAREST),l===!0&&(Ge.length=0,mt.length=0,Ge.push(r.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ge.push(de),mt.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,mt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,se.__webglColorRenderbuffer[Se]);const Ae=n.get(S[Se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,Ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ye(C){return Math.min(i.maxSamples,C.samples)}function We(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function nt(C){const S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function ge(C,S){const G=C.colorSpace,Z=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==ul&&G!==_r&&(ut.getTransfer(G)===St?(Z!==bi||ie!==fi)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",G)),S}function Je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.getTextureUnits=V,this.setTextureUnits=I,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=N,this.setTextureCube=pe,this.rebindTextures=ke,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ZS(r,e){function t(n,i=_r){let s;const a=ut.getTransfer(i);if(n===fi)return r.UNSIGNED_BYTE;if(n===Yu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===qu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ff)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Of)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===If)return r.BYTE;if(n===Uf)return r.SHORT;if(n===Ga)return r.UNSIGNED_SHORT;if(n===ju)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===Ni)return r.FLOAT;if(n===ir)return r.HALF_FLOAT;if(n===Bf)return r.ALPHA;if(n===kf)return r.RGB;if(n===bi)return r.RGBA;if(n===rr)return r.DEPTH_COMPONENT;if(n===jr)return r.DEPTH_STENCIL;if(n===zf)return r.RED;if(n===$u)return r.RED_INTEGER;if(n===is)return r.RG;if(n===Ku)return r.RG_INTEGER;if(n===Zu)return r.RGBA_INTEGER;if(n===Yo||n===qo||n===$o||n===Ko)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gc||n===Vc||n===Hc||n===Wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===jc||n===Yc||n===qc||n===$c||n===ll||n===Kc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xc||n===jc)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===qc)return s.COMPRESSED_R11_EAC;if(n===$c)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ll)return s.COMPRESSED_RG11_EAC;if(n===Kc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zc||n===Jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===au||n===ou||n===lu||n===cu||n===uu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Zc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eu)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tu)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nu)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===iu)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ru)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===su)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===au)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ou)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lu)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cu)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uu)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hu||n===du||n===fu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===hu)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===du)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pu||n===mu||n===cl||n===gu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===pu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Va?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const JS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Kf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zi({vertexShader:JS,fragmentShader:QS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ei(new Dl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tM extends ls{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new eM,m={},v=t.getContextAttributes();let y=null,M=null;const R=[],b=[],T=new pt;let x=null;const w=new ui;w.viewport=new Wt;const P=new ui;P.viewport=new Wt;const D=[w,P],L=new u_;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ne=R[H];return ne===void 0&&(ne=new jl,R[H]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(H){let ne=R[H];return ne===void 0&&(ne=new jl,R[H]=ne),ne.getGripSpace()},this.getHand=function(H){let ne=R[H];return ne===void 0&&(ne=new jl,R[H]=ne),ne.getHandSpace()};function I(H){const ne=b.indexOf(H.inputSource);if(ne===-1)return;const te=R[ne];te!==void 0&&(te.update(H.inputSource,H.frame,c||a),te.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",O);for(let H=0;H<R.length;H++){const ne=b[H];ne!==null&&(b[H]=null,R[H].disconnect(ne))}k=null,V=null,p.reset();for(const H in m)delete m[H];e.setRenderTarget(y),f=null,h=null,d=null,i=null,M=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",B),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,me=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=v.stencil?jr:rr,me=v.stencil?Va:ki);const ve={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(ve),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Oi(h.textureWidth,h.textureHeight,{format:bi,type:fi,depthTexture:new qs(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Oi(f.framebufferWidth,f.framebufferHeight,{format:bi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(H){for(let ne=0;ne<H.removed.length;ne++){const te=H.removed[ne],me=b.indexOf(te);me>=0&&(b[me]=null,R[me].disconnect(te))}for(let ne=0;ne<H.added.length;ne++){const te=H.added[ne];let me=b.indexOf(te);if(me===-1){for(let ve=0;ve<R.length;ve++)if(ve>=b.length){b.push(te),me=ve;break}else if(b[ve]===null){b[ve]=te,me=ve;break}if(me===-1)break}const Re=R[me];Re&&Re.connect(te)}}const $=new Y,Q=new Y;function N(H,ne,te){$.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(te.matrixWorld);const me=$.distanceTo(Q),Re=ne.projectionMatrix.elements,ve=te.projectionMatrix.elements,Ue=Re[14]/(Re[10]-1),_e=Re[14]/(Re[10]+1),Le=(Re[9]+1)/Re[5],ke=(Re[9]-1)/Re[5],Oe=(Re[8]-1)/Re[0],X=(ve[8]+1)/ve[0],Ge=Ue*Oe,mt=Ue*X,F=me/(-Oe+X),Ye=F*-Oe;if(ne.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ye),H.translateZ(F),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Re[10]===-1)H.projectionMatrix.copy(ne.projectionMatrix),H.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const We=Ue+F,nt=_e+F,ge=Ge-Ye,Je=mt+(me-Ye),C=Le*_e/nt*We,S=ke*_e/nt*We;H.projectionMatrix.makePerspective(ge,Je,C,S,We,nt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function pe(H,ne){ne===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ne.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let ne=H.near,te=H.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(te=p.depthFar)),L.near=P.near=w.near=ne,L.far=P.far=w.far=te,(k!==L.near||V!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,V=L.far),L.layers.mask=H.layers.mask|6,w.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;const me=H.parent,Re=L.cameras;pe(L,me);for(let ve=0;ve<Re.length;ve++)pe(Re[ve],me);Re.length===2?N(L,w,P):L.projectionMatrix.copy(w.projectionMatrix),be(H,L,me)};function be(H,ne,te){te===null?H.matrix.copy(ne.matrixWorld):(H.matrix.copy(te.matrixWorld),H.matrix.invert(),H.matrix.multiply(ne.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ne.projectionMatrix),H.projectionMatrixInverse.copy(ne.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ha*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(H){return m[H]};let qe=null;function ze(H,ne){if(u=ne.getViewerPose(c||a),g=ne,u!==null){const te=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let me=!1;te.length!==L.cameras.length&&(L.cameras.length=0,me=!0);for(let _e=0;_e<te.length;_e++){const Le=te[_e];let ke=null;if(f!==null)ke=f.getViewport(Le);else{const X=d.getViewSubImage(h,Le);ke=X.viewport,_e===0&&(e.setRenderTargetTextures(M,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(M))}let Oe=D[_e];Oe===void 0&&(Oe=new ui,Oe.layers.enable(_e),Oe.viewport=new Wt,D[_e]=Oe),Oe.matrix.fromArray(Le.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Le.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(ke.x,ke.y,ke.width,ke.height),_e===0&&(L.matrix.copy(Oe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),me===!0&&L.cameras.push(Oe)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const _e=d.getDepthInformation(te[0]);_e&&_e.isValid&&_e.texture&&p.init(_e,i.renderState)}if(Re&&Re.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let _e=0;_e<te.length;_e++){const Le=te[_e].camera;if(Le){let ke=m[Le];ke||(ke=new Kf,m[Le]=ke);const Oe=d.getCameraImage(Le);ke.sourceTexture=Oe}}}}for(let te=0;te<R.length;te++){const me=b[te],Re=R[te];me!==null&&Re!==void 0&&Re.update(me,ne,c||a)}qe&&qe(H,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ne=new ep;Ne.setAnimationLoop(ze),this.setAnimationLoop=function(H){qe=H},this.dispose=function(){}}}const nM=new Zt,op=new Qe;op.set(-1,0,0,0,1,0,0,0,1);function iM(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Zf(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,y,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===On&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===On&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),y=v.envMap,M=v.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(op),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===On&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rM(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const M=y.program;n.uniformBlockBinding(v,M)}function c(v,y){let M=i[v.id];M===void 0&&(g(v),M=u(v),i[v.id]=M,v.addEventListener("dispose",p));const R=y.program;n.updateUBOMapping(v,R);const b=e.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function u(v){const y=d();v.__bindingPointIndex=y;const M=r.createBuffer(),R=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],M=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,T=M.length;b<T;b++){const x=Array.isArray(M[b])?M[b]:[M[b]];for(let w=0,P=x.length;w<P;w++){const D=x[w];if(f(D,b,w,R)===!0){const L=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let I=0;I<k.length;I++){const B=k[I],O=_(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,L+V,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):ArrayBuffer.isView(B)?D.__data.set(new B.constructor(B.buffer,B.byteOffset,D.__data.length)):(B.toArray(D.__data,V),V+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,M,R){const b=v.value,T=y+"_"+M;if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:ArrayBuffer.isView(b)?R[T]=b.slice():R[T]=b.clone(),!0;{const x=R[T];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return R[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function g(v){const y=v.uniforms;let M=0;const R=16;for(let T=0,x=y.length;T<x;T++){const w=Array.isArray(y[T])?y[T]:[y[T]];for(let P=0,D=w.length;P<D;P++){const L=w[P],k=Array.isArray(L.value)?L.value:[L.value];for(let V=0,I=k.length;V<I;V++){const B=k[V],O=_(B),$=M%R,Q=$%O.boundary,N=$+Q;M+=Q,N!==0&&R-N<O.storage&&(M+=R-N),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=O.storage}}}const b=M%R;return b>0&&(M+=R-b),v.__size=M,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):je("WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){const y=v.target;y.removeEventListener("dispose",p);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}const sM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function aM(){return Ai===null&&(Ai=new Zg(sM,16,16,is,ir),Ai.name="DFG_LUT",Ai.minFilter=bn,Ai.magFilter=bn,Ai.wrapS=Ji,Ai.wrapT=Ji,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class oM{constructor(e={}){const{canvas:t=dg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=fi}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,p=new Set([Zu,Ku,$u]),m=new Set([fi,ki,Ga,Va,Yu,qu]),v=new Uint32Array(4),y=new Int32Array(4),M=new Y;let R=null,b=null;const T=[],x=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,L=null;this._outputColorSpace=ci;let k=0,V=0,I=null,B=-1,O=null;const $=new Wt,Q=new Wt;let N=null;const pe=new xt(0);let be=0,qe=t.width,ze=t.height,Ne=1,H=null,ne=null;const te=new Wt(0,0,qe,ze),me=new Wt(0,0,qe,ze);let Re=!1;const ve=new qf;let Ue=!1,_e=!1;const Le=new Zt,ke=new Y,Oe=new Wt,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function mt(){return I===null?Ne:1}let F=n;function Ye(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xu}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",he,!1),F===null){const z="webgl2";if(F=Ye(z,E),F===null)throw Ye(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ft("WebGLRenderer: "+E.message),E}let We,nt,ge,Je,C,S,G,Z,ie,de,se,K,ee,Se,Ae,fe,ce,xe,Xe,Ze,U,le,J;function ye(){We=new av(F),We.init(),U=new ZS(F,We),nt=new Jx(F,We,e,U),ge=new $S(F,We),nt.reversedDepthBuffer&&h&&ge.buffers.depth.setReversed(!0),Je=new cv(F),C=new US,S=new KS(F,We,ge,C,nt,U,Je),G=new sv(P),Z=new f_(F),le=new Kx(F,Z),ie=new ov(F,Z,Je,le),de=new hv(F,ie,Z,le,Je),xe=new uv(F,nt,S),Ae=new Qx(C),se=new IS(P,G,We,nt,le,Ae),K=new iM(P,C),ee=new OS,Se=new HS(We),ce=new $x(P,G,ge,de,g,l),fe=new qS(P,de,nt),J=new rM(F,Je,nt,ge),Xe=new Zx(F,We,Je),Ze=new lv(F,We,Je),Je.programs=se.programs,P.capabilities=nt,P.extensions=We,P.properties=C,P.renderLists=ee,P.shadowMap=fe,P.state=ge,P.info=Je}ye(),_!==fi&&(w=new fv(_,t.width,t.height,i,s));const ue=new tM(P,F);this.xr=ue,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=We.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=We.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(E){E!==void 0&&(Ne=E,this.setSize(qe,ze,!1))},this.getSize=function(E){return E.set(qe,ze)},this.setSize=function(E,z,q=!0){if(ue.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=E,ze=z,t.width=Math.floor(E*Ne),t.height=Math.floor(z*Ne),q===!0&&(t.style.width=E+"px",t.style.height=z+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(qe*Ne,ze*Ne).floor()},this.setDrawingBufferSize=function(E,z,q){qe=E,ze=z,Ne=q,t.width=Math.floor(E*q),t.height=Math.floor(z*q),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(_===fi){ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){je("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy($)},this.getViewport=function(E){return E.copy(te)},this.setViewport=function(E,z,q,W){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,z,q,W),ge.viewport($.copy(te).multiplyScalar(Ne).round())},this.getScissor=function(E){return E.copy(me)},this.setScissor=function(E,z,q,W){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,z,q,W),ge.scissor(Q.copy(me).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(E){ge.setScissorTest(Re=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){ne=E},this.getClearColor=function(E){return E.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,q=!0){let W=0;if(E){let j=!1;if(I!==null){const Me=I.texture.format;j=p.has(Me)}if(j){const Me=I.texture.type,Ee=m.has(Me),Te=ce.getClearColor(),Ie=ce.getClearAlpha(),Fe=Te.r,et=Te.g,it=Te.b;Ee?(v[0]=Fe,v[1]=et,v[2]=it,v[3]=Ie,F.clearBufferuiv(F.COLOR,0,v)):(y[0]=Fe,y[1]=et,y[2]=it,y[3]=Ie,F.clearBufferiv(F.COLOR,0,y))}else W|=F.COLOR_BUFFER_BIT}z&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ce.dispose(),ee.dispose(),Se.dispose(),C.dispose(),G.dispose(),de.dispose(),le.dispose(),J.dispose(),se.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",at),ue.removeEventListener("sessionend",Dt),Nt.stop()};function re(E){E.preventDefault(),Wh("WebGLRenderer: Context Lost."),D=!0}function oe(){Wh("WebGLRenderer: Context Restored."),D=!1;const E=Je.autoReset,z=fe.enabled,q=fe.autoUpdate,W=fe.needsUpdate,j=fe.type;ye(),Je.autoReset=E,fe.enabled=z,fe.autoUpdate=q,fe.needsUpdate=W,fe.type=j}function he(E){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ve(E){const z=E.target;z.removeEventListener("dispose",Ve),ae(z)}function ae(E){He(E),C.remove(E)}function He(E){const z=C.get(E).programs;z!==void 0&&(z.forEach(function(q){se.releaseProgram(q)}),E.isShaderMaterial&&se.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,q,W,j,Me){z===null&&(z=X);const Ee=j.isMesh&&j.matrixWorld.determinant()<0,Te=sn(E,z,q,W,j);ge.setMaterial(W,Ee);let Ie=q.index,Fe=1;if(W.wireframe===!0){if(Ie=ie.getWireframeAttribute(q),Ie===void 0)return;Fe=2}const et=q.drawRange,it=q.attributes.position;let Be=et.start*Fe,yt=(et.start+et.count)*Fe;Me!==null&&(Be=Math.max(Be,Me.start*Fe),yt=Math.min(yt,(Me.start+Me.count)*Fe)),Ie!==null?(Be=Math.max(Be,0),yt=Math.min(yt,Ie.count)):it!=null&&(Be=Math.max(Be,0),yt=Math.min(yt,it.count));const Gt=yt-Be;if(Gt<0||Gt===1/0)return;le.setup(j,W,Te,q,Ie);let Bt,Et=Xe;if(Ie!==null&&(Bt=Z.get(Ie),Et=Ze,Et.setIndex(Bt)),j.isMesh)W.wireframe===!0?(ge.setLineWidth(W.wireframeLinewidth*mt()),Et.setMode(F.LINES)):Et.setMode(F.TRIANGLES);else if(j.isLine){let mn=W.linewidth;mn===void 0&&(mn=1),ge.setLineWidth(mn*mt()),j.isLineSegments?Et.setMode(F.LINES):j.isLineLoop?Et.setMode(F.LINE_LOOP):Et.setMode(F.LINE_STRIP)}else j.isPoints?Et.setMode(F.POINTS):j.isSprite&&Et.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(We.get("WEBGL_multi_draw"))Et.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const mn=j._multiDrawStarts,Ce=j._multiDrawCounts,Xn=j._multiDrawCount,dt=Ie?Z.get(Ie).bytesPerElement:1,ai=C.get(W).currentProgram.getUniforms();for(let wi=0;wi<Xn;wi++)ai.setValue(F,"_gl_DrawID",wi),Et.render(mn[wi]/dt,Ce[wi])}else if(j.isInstancedMesh)Et.renderInstances(Be,Gt,j.count);else if(q.isInstancedBufferGeometry){const mn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ce=Math.min(q.instanceCount,mn);Et.renderInstances(Be,Gt,Ce)}else Et.render(Be,Gt)};function De(E,z,q){E.transparent===!0&&E.side===Ki&&E.forceSinglePass===!1?(E.side=On,E.needsUpdate=!0,rn(E,z,q),E.side=Ar,E.needsUpdate=!0,rn(E,z,q),E.side=Ki):rn(E,z,q)}this.compile=function(E,z,q=null){q===null&&(q=E),b=Se.get(q),b.init(z),x.push(b),q.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),E!==q&&E.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),b.setupLights();const W=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Me=j.material;if(Me)if(Array.isArray(Me))for(let Ee=0;Ee<Me.length;Ee++){const Te=Me[Ee];De(Te,q,j),W.add(Te)}else De(Me,q,j),W.add(Me)}),b=x.pop(),W},this.compileAsync=function(E,z,q=null){const W=this.compile(E,z,q);return new Promise(j=>{function Me(){if(W.forEach(function(Ee){C.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){j(E);return}setTimeout(Me,10)}We.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let $e=null;function jt(E){$e&&$e(E)}function at(){Nt.stop()}function Dt(){Nt.start()}const Nt=new ep;Nt.setAnimationLoop(jt),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(E){$e=E,ue.setAnimationLoop(E),E===null?Nt.stop():Nt.start()},ue.addEventListener("sessionstart",at),ue.addEventListener("sessionend",Dt),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(E,z);const q=ue.enabled===!0&&ue.isPresenting===!0,W=w!==null&&(I===null||q)&&w.begin(P,I);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(z),z=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,z,I),b=Se.get(E,x.length),b.init(z),b.state.textureUnits=S.getTextureUnits(),x.push(b),Le.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ve.setFromProjectionMatrix(Le,Li,z.reversedDepth),_e=this.localClippingEnabled,Ue=Ae.init(this.clippingPlanes,_e),R=ee.get(E,T.length),R.init(),T.push(R),ue.enabled===!0&&ue.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&Rt(Ee,z,-1/0,P.sortObjects)}Rt(E,z,0,P.sortObjects),R.finish(),P.sortObjects===!0&&R.sort(H,ne),Ge=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Ge&&ce.addToRenderList(R,E),this.info.render.frame++,Ue===!0&&Ae.beginShadows();const j=b.state.shadowsArray;if(fe.render(j,E,z),Ue===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&w.hasRenderPass())===!1){const Ee=R.opaque,Te=R.transmissive;if(b.setupLights(),z.isArrayCamera){const Ie=z.cameras;if(Te.length>0)for(let Fe=0,et=Ie.length;Fe<et;Fe++){const it=Ie[Fe];gt(Ee,Te,E,it)}Ge&&ce.render(E);for(let Fe=0,et=Ie.length;Fe<et;Fe++){const it=Ie[Fe];bt(R,E,it,it.viewport)}}else Te.length>0&&gt(Ee,Te,E,z),Ge&&ce.render(E),bt(R,E,z)}I!==null&&V===0&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),W&&w.end(P),E.isScene===!0&&E.onAfterRender(P,E,z),le.resetDefaultState(),B=-1,O=null,x.pop(),x.length>0?(b=x[x.length-1],S.setTextureUnits(b.state.textureUnits),Ue===!0&&Ae.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?R=T[T.length-1]:R=null,L!==null&&L.renderEnd()};function Rt(E,z,q,W){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ve.intersectsSprite(E)){W&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Le);const Ee=de.update(E),Te=E.material;Te.visible&&R.push(E,Ee,Te,q,Oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ve.intersectsObject(E))){const Ee=de.update(E),Te=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Oe.copy(Ee.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(Le)),Array.isArray(Te)){const Ie=Ee.groups;for(let Fe=0,et=Ie.length;Fe<et;Fe++){const it=Ie[Fe],Be=Te[it.materialIndex];Be&&Be.visible&&R.push(E,Ee,Be,q,Oe.z,it)}}else Te.visible&&R.push(E,Ee,Te,q,Oe.z,null)}}const Me=E.children;for(let Ee=0,Te=Me.length;Ee<Te;Ee++)Rt(Me[Ee],z,q,W)}function bt(E,z,q,W){const{opaque:j,transmissive:Me,transparent:Ee}=E;b.setupLightsView(q),Ue===!0&&Ae.setGlobalState(P.clippingPlanes,q),W&&ge.viewport($.copy(W)),j.length>0&&pn(j,z,q),Me.length>0&&pn(Me,z,q),Ee.length>0&&pn(Ee,z,q),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function gt(E,z,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const Be=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new Oi(1,1,{generateMipmaps:!0,type:Be?ir:fi,minFilter:Xr,samples:Math.max(4,nt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const Me=b.state.transmissionRenderTarget[W.id],Ee=W.viewport||$;Me.setSize(Ee.z*P.transmissionResolutionScale,Ee.w*P.transmissionResolutionScale);const Te=P.getRenderTarget(),Ie=P.getActiveCubeFace(),Fe=P.getActiveMipmapLevel();P.setRenderTarget(Me),P.getClearColor(pe),be=P.getClearAlpha(),be<1&&P.setClearColor(16777215,.5),P.clear(),Ge&&ce.render(q);const et=P.toneMapping;P.toneMapping=Fi;const it=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),Ue===!0&&Ae.setGlobalState(P.clippingPlanes,W),pn(E,q,W),S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me),We.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let yt=0,Gt=z.length;yt<Gt;yt++){const Bt=z[yt],{object:Et,geometry:mn,material:Ce,group:Xn}=Bt;if(Ce.side===Ki&&Et.layers.test(W.layers)){const dt=Ce.side;Ce.side=On,Ce.needsUpdate=!0,Ct(Et,q,W,mn,Ce,Xn),Ce.side=dt,Ce.needsUpdate=!0,Be=!0}}Be===!0&&(S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me))}P.setRenderTarget(Te,Ie,Fe),P.setClearColor(pe,be),it!==void 0&&(W.viewport=it),P.toneMapping=et}function pn(E,z,q){const W=z.isScene===!0?z.overrideMaterial:null;for(let j=0,Me=E.length;j<Me;j++){const Ee=E[j],{object:Te,geometry:Ie,group:Fe}=Ee;let et=Ee.material;et.allowOverride===!0&&W!==null&&(et=W),Te.layers.test(q.layers)&&Ct(Te,z,q,Ie,et,Fe)}}function Ct(E,z,q,W,j,Me){E.onBeforeRender(P,z,q,W,j,Me),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(P,z,q,W,E,Me),j.transparent===!0&&j.side===Ki&&j.forceSinglePass===!1?(j.side=On,j.needsUpdate=!0,P.renderBufferDirect(q,z,W,j,E,Me),j.side=Ar,j.needsUpdate=!0,P.renderBufferDirect(q,z,W,j,E,Me),j.side=Ki):P.renderBufferDirect(q,z,W,j,E,Me),E.onAfterRender(P,z,q,W,j,Me)}function rn(E,z,q){z.isScene!==!0&&(z=X);const W=C.get(E),j=b.state.lights,Me=b.state.shadowsArray,Ee=j.state.version,Te=se.getParameters(E,j.state,Me,z,q,b.state.lightProbeGridArray),Ie=se.getProgramCacheKey(Te);let Fe=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;const et=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=G.get(E.envMap||W.environment,et),W.envMapRotation=W.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",Ve),Fe=new Map,W.programs=Fe);let it=Fe.get(Ie);if(it!==void 0){if(W.currentProgram===it&&W.lightsStateVersion===Ee)return Yt(E,Te),it}else Te.uniforms=se.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,q,Te),E.onBeforeCompile(Te,P),it=se.acquireProgram(Te,Ie),Fe.set(Ie,it),W.uniforms=Te.uniforms;const Be=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=Ae.uniform),Yt(E,Te),W.needsLights=us(E),W.lightsStateVersion=Ee,W.needsLights&&(Be.ambientLightColor.value=j.state.ambient,Be.lightProbe.value=j.state.probe,Be.directionalLights.value=j.state.directional,Be.directionalLightShadows.value=j.state.directionalShadow,Be.spotLights.value=j.state.spot,Be.spotLightShadows.value=j.state.spotShadow,Be.rectAreaLights.value=j.state.rectArea,Be.ltc_1.value=j.state.rectAreaLTC1,Be.ltc_2.value=j.state.rectAreaLTC2,Be.pointLights.value=j.state.point,Be.pointLightShadows.value=j.state.pointShadow,Be.hemisphereLights.value=j.state.hemi,Be.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Be.spotLightMatrix.value=j.state.spotLightMatrix,Be.spotLightMap.value=j.state.spotLightMap,Be.pointShadowMatrix.value=j.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=it,W.uniformsList=null,it}function Wn(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Zo.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Yt(E,z){const q=C.get(E);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Jt(E,z){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(z.matrixWorld);for(let q=0,W=E.length;q<W;q++){const j=E[q];if(j.texture!==null&&j.boundingBox.containsPoint(M))return j}return null}function sn(E,z,q,W,j){z.isScene!==!0&&(z=X),S.resetTextureUnits();const Me=z.fog,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,Te=I===null?P.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ut.workingColorSpace,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Fe=G.get(W.envMap||Ee,Ie),et=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,it=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!q.morphAttributes.position,yt=!!q.morphAttributes.normal,Gt=!!q.morphAttributes.color;let Bt=Fi;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Bt=P.toneMapping);const Et=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,mn=Et!==void 0?Et.length:0,Ce=C.get(W),Xn=b.state.lights;if(Ue===!0&&(_e===!0||E!==O)){const Pt=E===O&&W.id===B;Ae.setState(W,E,Pt)}let dt=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Xn.state.version||Ce.outputColorSpace!==Te||j.isBatchedMesh&&Ce.batching===!1||!j.isBatchedMesh&&Ce.batching===!0||j.isBatchedMesh&&Ce.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ce.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ce.instancing===!1||!j.isInstancedMesh&&Ce.instancing===!0||j.isSkinnedMesh&&Ce.skinning===!1||!j.isSkinnedMesh&&Ce.skinning===!0||j.isInstancedMesh&&Ce.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ce.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ce.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ce.instancingMorph===!1&&j.morphTexture!==null||Ce.envMap!==Fe||W.fog===!0&&Ce.fog!==Me||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ae.numPlanes||Ce.numIntersection!==Ae.numIntersection)||Ce.vertexAlphas!==et||Ce.vertexTangents!==it||Ce.morphTargets!==Be||Ce.morphNormals!==yt||Ce.morphColors!==Gt||Ce.toneMapping!==Bt||Ce.morphTargetsCount!==mn||!!Ce.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Ce.__version=W.version);let ai=Ce.currentProgram;dt===!0&&(ai=rn(W,z,j),L&&W.isNodeMaterial&&L.onUpdateProgram(W,ai,Ce));let wi=!1,or=!1,hs=!1;const wt=ai.getUniforms(),Vt=Ce.uniforms;if(ge.useProgram(ai.program)&&(wi=!0,or=!0,hs=!0),W.id!==B&&(B=W.id,or=!0),Ce.needsLights){const Pt=Jt(b.state.lightProbeGridArray,j);Ce.lightProbeGrid!==Pt&&(Ce.lightProbeGrid=Pt,or=!0)}if(wi||O!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),wt.setValue(F,"projectionMatrix",E.projectionMatrix),wt.setValue(F,"viewMatrix",E.matrixWorldInverse);const cr=wt.map.cameraPosition;cr!==void 0&&cr.setValue(F,ke.setFromMatrixPosition(E.matrixWorld)),nt.logarithmicDepthBuffer&&wt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&wt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,or=!0,hs=!0)}if(Ce.needsLights&&(Xn.state.directionalShadowMap.length>0&&wt.setValue(F,"directionalShadowMap",Xn.state.directionalShadowMap,S),Xn.state.spotShadowMap.length>0&&wt.setValue(F,"spotShadowMap",Xn.state.spotShadowMap,S),Xn.state.pointShadowMap.length>0&&wt.setValue(F,"pointShadowMap",Xn.state.pointShadowMap,S)),j.isSkinnedMesh){wt.setOptional(F,j,"bindMatrix"),wt.setOptional(F,j,"bindMatrixInverse");const Pt=j.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),wt.setValue(F,"boneTexture",Pt.boneTexture,S))}j.isBatchedMesh&&(wt.setOptional(F,j,"batchingTexture"),wt.setValue(F,"batchingTexture",j._matricesTexture,S),wt.setOptional(F,j,"batchingIdTexture"),wt.setValue(F,"batchingIdTexture",j._indirectTexture,S),wt.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&wt.setValue(F,"batchingColorTexture",j._colorsTexture,S));const lr=q.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&xe.update(j,q,ai),(or||Ce.receiveShadow!==j.receiveShadow)&&(Ce.receiveShadow=j.receiveShadow,wt.setValue(F,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(Vt.envMapIntensity.value=z.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=aM()),or){if(wt.setValue(F,"toneMappingExposure",P.toneMappingExposure),Ce.needsLights&&Vi(Vt,hs),Me&&W.fog===!0&&K.refreshFogUniforms(Vt,Me),K.refreshMaterialUniforms(Vt,W,Ne,ze,b.state.transmissionRenderTarget[E.id]),Ce.needsLights&&Ce.lightProbeGrid){const Pt=Ce.lightProbeGrid;Vt.probesSH.value=Pt.texture,Vt.probesMin.value.copy(Pt.boundingBox.min),Vt.probesMax.value.copy(Pt.boundingBox.max),Vt.probesResolution.value.copy(Pt.resolution)}Zo.upload(F,Wn(Ce),Vt,S)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Zo.upload(F,Wn(Ce),Vt,S),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&wt.setValue(F,"center",j.center),wt.setValue(F,"modelViewMatrix",j.modelViewMatrix),wt.setValue(F,"normalMatrix",j.normalMatrix),wt.setValue(F,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const Pt=W.uniformsGroups;for(let cr=0,ds=Pt.length;cr<ds;cr++){const Uh=Pt[cr];J.update(Uh,ai),J.bind(Uh,ai)}}return ai}function Vi(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function us(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,z,q){const W=C.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),C.get(E.texture).__webglTexture=z,C.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const q=C.get(E);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const an=F.createFramebuffer();this.setRenderTarget=function(E,z=0,q=0){I=E,k=z,V=q;let W=null,j=!1,Me=!1;if(E){const Te=C.get(E);if(Te.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(F.FRAMEBUFFER,Te.__webglFramebuffer),$.copy(E.viewport),Q.copy(E.scissor),N=E.scissorTest,ge.viewport($),ge.scissor(Q),ge.setScissorTest(N),B=-1;return}else if(Te.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(Te.__hasExternalTextures)S.rebindTextures(E,C.get(E.texture).__webglTexture,C.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const et=E.depthTexture;if(Te.__boundDepthTexture!==et){if(et!==null&&C.has(et)&&(E.width!==et.image.width||E.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const Fe=C.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?W=Fe[z][q]:W=Fe[z],j=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?W=C.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[q]:W=Fe,$.copy(E.viewport),Q.copy(E.scissor),N=E.scissorTest}else $.copy(te).multiplyScalar(Ne).floor(),Q.copy(me).multiplyScalar(Ne).floor(),N=Re;if(q!==0&&(W=an),ge.bindFramebuffer(F.FRAMEBUFFER,W)&&ge.drawBuffers(E,W),ge.viewport($),ge.scissor(Q),ge.setScissorTest(N),j){const Te=C.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,Te.__webglTexture,q)}else if(Me){const Te=z;for(let Ie=0;Ie<E.textures.length;Ie++){const Fe=C.get(E.textures[Ie]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,q,Te)}}else if(E!==null&&q!==0){const Te=C.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Te.__webglTexture,q)}B=-1},this.readRenderTargetPixels=function(E,z,q,W,j,Me,Ee,Te=0){if(!(E&&E.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=C.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie){ge.bindFramebuffer(F.FRAMEBUFFER,Ie);try{const Fe=E.textures[Te],et=Fe.format,it=Fe.type;if(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Te),!nt.textureFormatReadable(et)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(it)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-W&&q>=0&&q<=E.height-j&&F.readPixels(z,q,W,j,U.convert(et),U.convert(it),Me)}finally{const Fe=I!==null?C.get(I).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,z,q,W,j,Me,Ee,Te=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=C.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie)if(z>=0&&z<=E.width-W&&q>=0&&q<=E.height-j){ge.bindFramebuffer(F.FRAMEBUFFER,Ie);const Fe=E.textures[Te],et=Fe.format,it=Fe.type;if(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Te),!nt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Be),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),F.readPixels(z,q,W,j,U.convert(et),U.convert(it),0);const yt=I!==null?C.get(I).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,yt);const Gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await fg(F,Gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Be),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.deleteBuffer(Be),F.deleteSync(Gt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,q=0){const W=Math.pow(2,-q),j=Math.floor(E.image.width*W),Me=Math.floor(E.image.height*W),Ee=z!==null?z.x:0,Te=z!==null?z.y:0;S.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Ee,Te,j,Me),ge.unbindTexture()};const zt=F.createFramebuffer(),si=F.createFramebuffer();this.copyTextureToTexture=function(E,z,q=null,W=null,j=0,Me=0){let Ee,Te,Ie,Fe,et,it,Be,yt,Gt;const Bt=E.isCompressedTexture?E.mipmaps[Me]:E.image;if(q!==null)Ee=q.max.x-q.min.x,Te=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,et=q.min.y,it=q.isBox3?q.min.z:0;else{const Vt=Math.pow(2,-j);Ee=Math.floor(Bt.width*Vt),Te=Math.floor(Bt.height*Vt),E.isDataArrayTexture?Ie=Bt.depth:E.isData3DTexture?Ie=Math.floor(Bt.depth*Vt):Ie=1,Fe=0,et=0,it=0}W!==null?(Be=W.x,yt=W.y,Gt=W.z):(Be=0,yt=0,Gt=0);const Et=U.convert(z.format),mn=U.convert(z.type);let Ce;z.isData3DTexture?(S.setTexture3D(z,0),Ce=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(S.setTexture2DArray(z,0),Ce=F.TEXTURE_2D_ARRAY):(S.setTexture2D(z,0),Ce=F.TEXTURE_2D),ge.activeTexture(F.TEXTURE0),ge.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),ge.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),ge.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const Xn=ge.getParameter(F.UNPACK_ROW_LENGTH),dt=ge.getParameter(F.UNPACK_IMAGE_HEIGHT),ai=ge.getParameter(F.UNPACK_SKIP_PIXELS),wi=ge.getParameter(F.UNPACK_SKIP_ROWS),or=ge.getParameter(F.UNPACK_SKIP_IMAGES);ge.pixelStorei(F.UNPACK_ROW_LENGTH,Bt.width),ge.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Bt.height),ge.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),ge.pixelStorei(F.UNPACK_SKIP_ROWS,et),ge.pixelStorei(F.UNPACK_SKIP_IMAGES,it);const hs=E.isDataArrayTexture||E.isData3DTexture,wt=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Vt=C.get(E),lr=C.get(z),Pt=C.get(Vt.__renderTarget),cr=C.get(lr.__renderTarget);ge.bindFramebuffer(F.READ_FRAMEBUFFER,Pt.__webglFramebuffer),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,cr.__webglFramebuffer);for(let ds=0;ds<Ie;ds++)hs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,C.get(E).__webglTexture,j,it+ds),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,C.get(z).__webglTexture,Me,Gt+ds)),F.blitFramebuffer(Fe,et,Ee,Te,Be,yt,Ee,Te,F.DEPTH_BUFFER_BIT,F.NEAREST);ge.bindFramebuffer(F.READ_FRAMEBUFFER,null),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||C.has(E)){const Vt=C.get(E),lr=C.get(z);ge.bindFramebuffer(F.READ_FRAMEBUFFER,zt),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,si);for(let Pt=0;Pt<Ie;Pt++)hs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.__webglTexture,j,it+Pt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Vt.__webglTexture,j),wt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,lr.__webglTexture,Me,Gt+Pt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,lr.__webglTexture,Me),j!==0?F.blitFramebuffer(Fe,et,Ee,Te,Be,yt,Ee,Te,F.COLOR_BUFFER_BIT,F.NEAREST):wt?F.copyTexSubImage3D(Ce,Me,Be,yt,Gt+Pt,Fe,et,Ee,Te):F.copyTexSubImage2D(Ce,Me,Be,yt,Fe,et,Ee,Te);ge.bindFramebuffer(F.READ_FRAMEBUFFER,null),ge.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else wt?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Ce,Me,Be,yt,Gt,Ee,Te,Ie,Et,mn,Bt.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(Ce,Me,Be,yt,Gt,Ee,Te,Ie,Et,Bt.data):F.texSubImage3D(Ce,Me,Be,yt,Gt,Ee,Te,Ie,Et,mn,Bt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,Be,yt,Ee,Te,Et,mn,Bt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,Be,yt,Bt.width,Bt.height,Et,Bt.data):F.texSubImage2D(F.TEXTURE_2D,Me,Be,yt,Ee,Te,Et,mn,Bt);ge.pixelStorei(F.UNPACK_ROW_LENGTH,Xn),ge.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dt),ge.pixelStorei(F.UNPACK_SKIP_PIXELS,ai),ge.pixelStorei(F.UNPACK_SKIP_ROWS,wi),ge.pixelStorei(F.UNPACK_SKIP_IMAGES,or),Me===0&&z.generateMipmaps&&F.generateMipmap(Ce),ge.unbindTexture()},this.initRenderTarget=function(E){C.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){k=0,V=0,I=null,ge.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}function lM(){const r=Ke.useRef(null);return Ke.useEffect(()=>{const e=r.current;if(!e)return;const t=window.matchMedia("(max-width: 768px)").matches,n=.35,i=.85,s=.75,a=t?800:1800,o=new Xg;o.fog=new nh(0,.045);const l=new ui(52,window.innerWidth/window.innerHeight,.1,200);l.position.set(0,0,7),l.lookAt(0,0,0);const c=new oM({antialias:!t,alpha:!0,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio,t?1.2:1.8)),c.setSize(window.innerWidth,window.innerHeight),c.setClearColor(0,0),e.appendChild(c.domElement);const u=new ml(2.2,t?2:4),d=u.attributes.position.array.slice(),h=new pl({color:16777215,wireframe:!0,transparent:!0,opacity:.2}),f=new Ei(u,h),g=new ml(1.38,1),_=new pl({color:16777215,transparent:!0,opacity:.045}),p=new Ei(g,_),m=new ga;m.add(f),m.add(p),o.add(m);const y=(()=>{const H=a,ne=2.45,te=new Float32Array(H*3),me=new Float32Array(H*3);for(let Ue=0;Ue<H;Ue++){const _e=Ue/H*Math.PI*2,Le=(Math.random()-.5)*.28,ke=Math.cos(_e)*(ne+Le),Oe=Math.sin(_e)*(ne+Le),X=Math.sin(_e*3)*.12+(Math.random()-.5)*.1;te[Ue*3]=ke,te[Ue*3+1]=X,te[Ue*3+2]=Oe;const Ge=.35+Math.random()*.45;me[Ue*3]=Ge,me[Ue*3+1]=Ge*.95,me[Ue*3+2]=Ge}const Re=new Ln;Re.setAttribute("position",new Sn(te,3)),Re.setAttribute("color",new Sn(me,3));const ve=new _a({size:t?.028:.022,vertexColors:!0,transparent:!0,opacity:.5,blending:Ta,sizeAttenuation:!0});return new To(Re,ve)})();o.add(y);const R=(()=>{const H=t?3200:8500,ne=3,te=.58,me=3.9,Re=54,ve=new Float32Array(H*3),Ue=new Float32Array(H*3);for(let ke=0;ke<H;ke++){const Oe=ke%ne,X=Math.pow(Math.random(),1.2),Ge=X*Re,mt=Oe/ne*Math.PI*2+X*me+(Math.random()-.5)*te*(1-X*.45),F=(1-X)*2.8+.4,Ye=Math.cos(mt)*Ge+(Math.random()-.5)*F,We=Math.sin(mt)*Ge+(Math.random()-.5)*F,nt=(Math.random()-.5)*F*.32;ve[ke*3]=Ye,ve[ke*3+1]=nt,ve[ke*3+2]=We;const ge=Dg.lerp(.95,.2,X*X)*(.65+Math.random()*.5);Ue[ke*3]=ge,Ue[ke*3+1]=ge*.92,Ue[ke*3+2]=ge}const _e=new Ln;_e.setAttribute("position",new Sn(ve,3)),_e.setAttribute("color",new Sn(Ue,3));const Le=new _a({size:t?.055:.04,vertexColors:!0,transparent:!0,opacity:.88,blending:Ta,sizeAttenuation:!0});return{points:new To(_e,Le),geo:_e,mat:Le}})();R.points.rotation.x=Math.PI*.2,R.points.position.y=-3.8,o.add(R.points);const T=(()=>{const H=t?700:2e3,ne=new Float32Array(H*3);for(let Re=0;Re<H;Re++){const ve=10+Math.random()*32,Ue=Math.random()*Math.PI*2;ne[Re*3]=Math.cos(Ue)*ve+(Math.random()-.5)*7,ne[Re*3+1]=(Math.random()-.5)*6,ne[Re*3+2]=Math.sin(Ue)*ve+(Math.random()-.5)*7}const te=new Ln;te.setAttribute("position",new Sn(ne,3));const me=new _a({color:16777215,size:t?.52:.38,transparent:!0,opacity:.045,blending:Ta,sizeAttenuation:!0});return{points:new To(te,me),geo:te,mat:me}})();T.points.rotation.x=Math.PI*.19,T.points.position.y=-3.8,o.add(T.points);const x=t?400:1e3,w=new Ln,P=new Float32Array(x*3);for(let H=0;H<x;H++){const ne=16+Math.random()*30,te=Math.random()*Math.PI*2,me=Math.acos(2*Math.random()-1);P[H*3]=ne*Math.sin(me)*Math.cos(te),P[H*3+1]=ne*Math.sin(me)*Math.sin(te),P[H*3+2]=ne*Math.cos(me)}w.setAttribute("position",new Sn(P,3));const D=new _a({color:16777215,size:.016,transparent:!0,opacity:.38,sizeAttenuation:!0}),L=new To(w,D);o.add(L);const k={x:0,y:0,tx:0,ty:0,vx:0,vy:0,lastX:0,lastY:0};let V=0,I=0,B=0;const O=()=>document.body.scrollHeight-window.innerHeight;O();const $=()=>{const H=O();if(H<=0){I=0;return}const ne=window.scrollY/H;I=Math.min(1,Math.max(0,ne))},Q=()=>$(),N=()=>{O(),$(),l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)},pe=H=>{k.tx=H.clientX/window.innerWidth*2-1,k.ty=-(H.clientY/window.innerHeight)*2+1;const ne=performance.now();if(B&&ne-B<100){const te=k.tx-k.lastX,me=k.ty-k.lastY;k.vx=te*.9,k.vy=me*.9}k.lastX=k.tx,k.lastY=k.ty,B=ne};window.addEventListener("mousemove",pe),window.addEventListener("scroll",Q,{passive:!0}),window.addEventListener("resize",N);const be=u.attributes.position,qe=new h_;let ze=0;const Ne=()=>{Math.min(.033,qe.getDelta());const H=performance.now()*.001;V+=(I-V)*.09;let te=(1-V*i)*s;te=Math.max(n,te),m.scale.setScalar(te),k.x+=(k.tx-k.x)*.045,k.y+=(k.ty-k.y)*.045,k.vx*=.96,k.vy*=.96;const me=k.x+k.vx*.08,Re=k.y+k.vy*.08,ve=be.array;for(let Ge=0;Ge<ve.length;Ge+=3){const mt=d[Ge],F=d[Ge+1],Ye=d[Ge+2],We=Math.hypot(mt,F,Ye),nt=mt/We,ge=F/We,Je=Ye/We,C=me*.5+Re*.3,G=1+(Math.sin(nt*3.2+H*.55)*.11+Math.cos(ge*3.4+H*.48)*.11+Math.sin(Je*3.1+H*.62)*.09+C*.035);ve[Ge]=mt*G,ve[Ge+1]=F*G,ve[Ge+2]=Ye*G}be.needsUpdate=!0;const Ue=1+Math.sin(H*2.1)*.02;p.scale.setScalar(Ue),_.opacity=.045+Math.sin(H*1.9)*.008;const _e=V*.45,Le=Re*.32,ke=me*.38;f.rotation.x=H*.075+Le+_e*.2,f.rotation.y=H*.11+ke+_e*.15,p.rotation.x=-H*.045,p.rotation.y=-H*.065,y.rotation.y=H*.22+ke*.9,y.rotation.x=Math.sin(H*.7)*.08+Le*.4,y.rotation.z=Le*.2,R.points.rotation.y=H*.011+me*.12,R.points.rotation.x=Math.PI*.2+Re*.06,T.points.rotation.y=H*.007+me*.09,T.points.rotation.x=Math.PI*.19+Re*.05,L.rotation.y=H*.018+me*.14,L.rotation.x=Re*.12;const X=6.2-V*.45*1.1;l.position.z+=(X-l.position.z)*.07,l.position.x+=(me*.48-l.position.x)*.05,l.position.y+=(Re*.38-l.position.y)*.05,l.lookAt(0,0,0),R.points.position.y=-3.8+V*.35,T.points.position.y=-3.8+V*.28,c.render(o,l),ze=requestAnimationFrame(Ne)};return Ne(),()=>{cancelAnimationFrame(ze),window.removeEventListener("mousemove",pe),window.removeEventListener("scroll",Q),window.removeEventListener("resize",N),c.dispose(),u.dispose(),h.dispose(),g.dispose(),_.dispose(),R.geo.dispose(),R.mat.dispose(),T.geo.dispose(),T.mat.dispose(),w.dispose(),D.dispose(),y.geometry&&y.geometry.dispose(),y.material&&y.material.dispose(),c.domElement.parentNode===e&&e.removeChild(c.domElement)}},[]),A.jsxs(A.Fragment,{children:[A.jsx("div",{ref:r,className:"pointer-events-none fixed inset-0 z-0","aria-hidden":"true"}),A.jsx("div",{className:"pointer-events-none fixed inset-0 z-[1]",style:{background:"radial-gradient(ellipse at 50% 40%, oklch(1 0 0 / 0.03) 0%, transparent 70%)"},"aria-hidden":"true"})]})}function cM(){const r=Ke.useRef(null),e=Ke.useRef(null),[t,n]=Ke.useState(!1);return Ke.useEffect(()=>{if(window.matchMedia("(max-width: 768px)").matches){n(!0);return}const i=r.current,s=e.current;let a=window.innerWidth/2,o=window.innerHeight/2,l=a,c=o,u=1,d=1;const h=v=>{a=v.clientX,o=v.clientY},f=()=>d=.6,g=()=>d=1,_=v=>{v.target.closest("a, button, [data-cursor='hover']")?d=2.4:d=1};window.addEventListener("mousemove",h),window.addEventListener("mousedown",f),window.addEventListener("mouseup",g),window.addEventListener("mouseover",_);let p=0;const m=()=>{l+=(a-l)*.18,c+=(o-c)*.18,u+=(d-u)*.15,i.style.transform=`translate3d(${a}px, ${o}px, 0) translate(-50%, -50%)`,s.style.transform=`translate3d(${l}px, ${c}px, 0) translate(-50%, -50%) scale(${u})`,p=requestAnimationFrame(m)};return m(),()=>{cancelAnimationFrame(p),window.removeEventListener("mousemove",h),window.removeEventListener("mousedown",f),window.removeEventListener("mouseup",g),window.removeEventListener("mouseover",_)}},[]),t?null:A.jsxs(A.Fragment,{children:[A.jsx("div",{ref:r,className:"pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full bg-white",style:{mixBlendMode:"difference"}}),A.jsx("div",{ref:e,className:"pointer-events-none fixed left-0 top-0 z-[200] h-8 w-8 rounded-full border border-white/60 transition-[border-color] duration-300",style:{mixBlendMode:"difference"}})]})}function lp(r,e,t){return Math.max(r,Math.min(e,t))}class uM{advance(e){if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(n=this.value,i=this.to,s=60*this.lerp,a=e,(function(o,l,c){return(1-c)*o+c*l})(n,i,1-Math.exp(-s*a))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const o=lp(0,this.currentTime/this.duration,1);t=o>=1;const l=t?1:this.easing(o);this.value=this.from+(this.to-this.from)*l}var n,i,s,a;this.onUpdate?.(this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:i=1,easing:s=(l=>l),onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}}class hM{constructor({wrapper:e,content:t,autoResize:n=!0,debounce:i=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=(function(s,a){let o;return function(){let l=arguments,c=this;clearTimeout(o),o=setTimeout((function(){s.apply(c,l)}),a)}})(this.resize,i),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class cp{constructor(){this.events={}}emit(e,...t){let n=this.events[e]||[];for(let i=0,s=n.length;i<s;i++)n[i](...t)}on(e,t){return this.events[e]?.push(t)||(this.events[e]=[t]),()=>{this.events[e]=this.events[e]?.filter((n=>t!==n))}}off(e,t){this.events[e]=this.events[e]?.filter((n=>t!==n))}destroy(){this.events={}}}const Fd=100/6;class dM{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=1}){this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.touchStart={x:null,y:null},this.emitter=new cp,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}onTouchStart=e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,i=-(t-this.touchStart.x)*this.touchMultiplier,s=-(n-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:e})};onTouchEnd=e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:i}=e;t*=i===1?Fd:i===2?this.windowWidth:1,n*=i===1?Fd:i===2?this.windowHeight:1,t*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}class fM{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:n=e,eventsTarget:i=n,smoothWheel:s=!0,syncTouch:a=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:l=35,duration:c,easing:u=(y=>Math.min(1,1.001-Math.pow(2,-10*y))),lerp:d=!c&&.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:g="vertical",touchMultiplier:_=1,wheelMultiplier:p=1,autoResize:m=!0,__experimental__naiveDimensions:v=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:y,deltaY:M,event:R})=>{if(R.ctrlKey)return;const b=R.type.includes("touch"),T=R.type.includes("wheel");if(this.options.syncTouch&&b&&R.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const x=y===0&&M===0,w=this.options.gestureOrientation==="vertical"&&M===0||this.options.gestureOrientation==="horizontal"&&y===0;if(x||w)return;let P=R.composedPath();if(P=P.slice(0,P.indexOf(this.rootElement)),P.find((V=>{var I,B,O,$,Q;return((I=V.hasAttribute)===null||I===void 0?void 0:I.call(V,"data-lenis-prevent"))||b&&((B=V.hasAttribute)===null||B===void 0?void 0:B.call(V,"data-lenis-prevent-touch"))||T&&((O=V.hasAttribute)===null||O===void 0?void 0:O.call(V,"data-lenis-prevent-wheel"))||(($=V.classList)===null||$===void 0?void 0:$.contains("lenis"))&&!(!((Q=V.classList)===null||Q===void 0)&&Q.contains("lenis-stopped"))})))return;if(this.isStopped||this.isLocked)return void R.preventDefault();if(this.isSmooth=this.options.syncTouch&&b||this.options.smoothWheel&&T,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();R.preventDefault();let D=M;this.options.gestureOrientation==="both"?D=Math.abs(M)>Math.abs(y)?M:y:this.options.gestureOrientation==="horizontal"&&(D=y);const L=b&&this.options.syncTouch,k=b&&R.type==="touchend"&&Math.abs(D)>5;k&&(D=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+D,Object.assign({programmatic:!1},L?{lerp:k?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const y=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-y),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:n,eventsTarget:i,smoothWheel:s,syncTouch:a,syncTouchLerp:o,touchInertiaMultiplier:l,duration:c,easing:u,lerp:d,infinite:h,gestureOrientation:g,orientation:f,touchMultiplier:_,wheelMultiplier:p,autoResize:m,__experimental__naiveDimensions:v},this.animate=new uM,this.emitter=new cp,this.dimensions=new hM({wrapper:e,content:t,autoResize:m}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=a||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new dM(i,{touchMultiplier:_,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:a=this.options.easing,lerp:o=!s&&this.options.lerp,onComplete:l,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let d;if(typeof e=="string"?d=document.querySelector(e):e?.nodeType&&(d=e),d){if(this.options.wrapper!==window){const f=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?f.left:f.top}const h=d.getBoundingClientRect();e=(this.isHorizontal?h.left:h.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=lp(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:a,lerp:o,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(d,h)=>{this.isScrolling=!0,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),h||this.emit(),h&&(this.reset(),this.emit(),l?.(this),this.__preventNextScrollEvent=!0,requestAnimationFrame((()=>{delete this.__preventNextScrollEvent})))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}function qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function up(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wa={duration:.5,overwrite:!1,delay:0},rh,fn,Lt,pi=1e8,At=1/pi,Mu=Math.PI*2,pM=Mu/4,mM=0,hp=Math.sqrt,gM=Math.cos,_M=Math.sin,un=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},sh=function(e){return typeof e>"u"},Gi=function(e){return typeof e=="object"},kn=function(e){return e!==!1},ah=function(){return typeof window<"u"},Do=function(e){return kt(e)||un(e)},dp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,xM=/random\([^)]+\)/g,vM=/,\s*/g,Od=/(?:-?\.?\d|\.)+/gi,fp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pp=/[+-]=-?[.\d]+/,SM=/[^,'"\[\]\s]+/gi,MM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,Ri,yu,oh,ii={},gl={},mp,gp=function(e){return(gl=Ks(e,ii))&&Hn},lh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xa=function(e,t){return!t&&console.warn(e)},_p=function(e,t){return e&&(ii[e]=t)&&gl&&(gl[e]=t)||ii},ja=function(){return 0},yM={suppressEvents:!0,isStart:!0,kill:!1},Jo={suppressEvents:!0,kill:!1},bM={suppressEvents:!0},ch={},Er=[],bu={},xp,Kn={},gc={},Bd=30,Qo=[],uh="",hh=function(e){var t=e[0],n,i;if(Gi(t)||kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Qo.length;i--&&!Qo[i].targetTest(t););n=Qo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new zp(e[i],n)))||e.splice(i,1);return e},$r=function(e){return e._gsap||hh(mi(e))[0]._gsap},vp=function(e,t,n){return(n=e[t])&&kt(n)?e[t]():sh(n)&&e.getAttribute&&e.getAttribute(t)||n},zn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},It=function(e){return Math.round(e*1e7)/1e7||0},ks=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},EM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},_l=function(){var e=Er.length,t=Er.slice(0),n,i;for(bu={},Er.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},dh=function(e){return!!(e._initted||e._startAt||e.add)},Sp=function(e,t,n,i){Er.length&&!fn&&_l(),e.render(t,n,!!(fn&&t<0&&dh(e))),Er.length&&!fn&&_l()},Mp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(SM).length<2?t:un(e)?e.trim():e},yp=function(e){return e},ri=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ks=function(e,t){for(var n in t)e[n]=t[n];return e},kd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},xl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ca=function(e){var t=e.parent||Ut,n=e.keyframes?wM(En(e.keyframes)):ri;if(kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},TM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},bp=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Il=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Rr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Kr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},AM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Eu=function(e,t,n,i){return e._startAt&&(fn?e._startAt.revert(Jo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},RM=function r(e){return!e||e._ts&&r(e.parent)},zd=function(e){return e._repeat?Zs(e._tTime,e=e.duration()+e._rDelay)*e:0},Zs=function(e,t){var n=Math.floor(e=It(e/t));return e&&n===e?n-1:n},vl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ul=function(e){return e._end=It(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},Fl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=It(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ul(e),n._dirty||Kr(n,e)),e},Ep=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=vl(e.rawTime(),t),(!t._dur||io(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),Kr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},Di=function(e,t,n,i){return t.parent&&Rr(t),t._start=It((sr(n)?n:n||e!==Ut?li(e,n,t):e._time)+t._delay),t._end=It(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bp(e,t,"_first","_last",e._sort?"_start":0),wu(t)||(e._recent=t),i||Ep(e,t),e._ts<0&&Fl(e,e._tTime),e},wp=function(e,t){return(ii.ScrollTrigger||lh("scrollTrigger",t))&&ii.ScrollTrigger.create(t,e)},Tp=function(e,t,n,i,s){if(ph(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!fn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&xp!==Jn.frame)return Er.push(e),e._lazy=[s,i],1},CM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},wu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},PM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&CM(e)&&!(!e._initted&&wu(e))||(e._ts<0||e._dp._ts<0)&&!wu(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=io(0,e._tDur,t),u=Zs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Zs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||fn||i||e._zTime===At||!t&&e._zTime){if(!e._initted&&Tp(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Eu(e,t,n,!0),e._onUpdate&&!n&&ei(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Rr(e,1),!n&&!fn&&(ei(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},DM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Js=function(e,t,n,i){var s=e._repeat,a=It(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:It(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Fl(e,e._tTime=e._tDur*o),e.parent&&Ul(e),n||Kr(e.parent,e),e},Gd=function(e){return e instanceof Fn?Kr(e):Js(e,e._dur)},NM={_start:0,endTime:ja,totalDuration:ja},li=function r(e,t,n){var i=e.labels,s=e._recent||NM,a=e.duration()>=pi?s.endTime(!1):e._dur,o,l,c;return un(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Pa=function(e,t,n){var i=sr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=kn(l.vars.inherit)&&l.parent;a.immediateRender=kn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Kt(t[0],a,t[s+1])},Nr=function(e,t){return e||e===0?t(e):t},io=function(e,t,n){return n<e?e:n>t?t:n},Mn=function(e,t){return!un(e)||!(t=MM.exec(e))?"":t[1]},LM=function(e,t,n){return Nr(n,function(i){return io(e,t,i)})},Tu=[].slice,Ap=function(e,t){return e&&Gi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Gi(e[0]))&&!e.nodeType&&e!==Ri},IM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return un(i)&&!t||Ap(i,1)?(s=n).push.apply(s,mi(i)):n.push(i)})||n},mi=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):un(e)&&!n&&(yu||!Qs())?Tu.call((t||oh).querySelectorAll(e),0):En(e)?IM(e,n):Ap(e)?Tu.call(e,0):e?[e]:[]},Au=function(e){return e=mi(e)[0]||Xa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mi(t,n.querySelectorAll?n:n===e?Xa("Invalid scope")||oh.createElement("div"):e)}},Rp=function(e){return e.sort(function(){return .5-Math.random()})},Cp=function(e){if(kt(e))return e;var t=Gi(e)?e:{each:e},n=Zr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return un(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,g){var _=(g||t).length,p=a[_],m,v,y,M,R,b,T,x,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,pi])[1],!w){for(T=-pi;T<(T=g[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=a[_]=[],m=l?Math.min(w,_)*u-.5:i%w,v=w===pi?0:l?_*d/w-.5:i/w|0,T=0,x=pi,b=0;b<_;b++)y=b%w-m,M=v-(b/w|0),p[b]=R=c?Math.abs(c==="y"?M:y):hp(y*y+M*M),R>T&&(T=R),R<x&&(x=R);i==="random"&&Rp(p),p.max=T-x,p.min=x,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Mn(t.amount||t.each)||0,n=n&&_<0?YM(n):n}return _=(p[h]-p.min)/p.max||0,It(p.b+(n?n(_):_)*p.v)+p.u}},Ru=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=It(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(sr(n)?0:Mn(n))}},Pp=function(e,t){var n=En(e),i,s;return!n&&Gi(e)&&(i=n=e.radius||pi,e.values?(e=mi(e.values),(s=!sr(e[0]))&&(i*=i)):e=Ru(e.increment)),Nr(t,n?kt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=pi,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||sr(a)?u:u+Mn(a)}:Ru(e))},Dp=function(e,t,n,i){return Nr(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},UM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},FM=function(e,t){return function(n){return e(parseFloat(n))+(t||Mn(n))}},OM=function(e,t,n){return Lp(e,t,0,1,n)},Np=function(e,t,n){return Nr(n,function(i){return e[~~t(i)]})},BM=function r(e,t,n){var i=t-e;return En(e)?Np(e,r(0,e.length),t):Nr(n,function(s){return(i+(s-e)%i)%i+e})},kM=function r(e,t,n){var i=t-e,s=i*2;return En(e)?Np(e,r(0,e.length-1),t):Nr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ya=function(e){return e.replace(xM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(vM);return Dp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Lp=function(e,t,n,i,s){var a=t-e,o=i-n;return Nr(s,function(l){return n+((l-e)/a*o||0)})},zM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=un(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Ks(En(e)?[]:{},e));if(!u){for(l in t)fh.call(o,e,l,"get",t[l]);s=function(g){return _h(g,o)||(a?e.p:e)}}}return Nr(n,s)},Vd=function(e,t,n){var i=e.labels,s=pi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ei=function(e,t,n){var i=e.vars,s=i[t],a=Lt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Er.length&&_l(),o&&(Lt=o),u=l?s.apply(c,l):s.call(c),Lt=a,u},va=function(e){return Rr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!fn),e.progress()<1&&ei(e,"onInterrupt"),e},Us,Ip=[],Up=function(e){if(e)if(e=!e.name&&e.default||e,ah()||e.headless){var t=e.name,n=kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ja,render:_h,add:fh,kill:iy,modifier:ny,rawVars:0},a={targetTest:0,get:0,getSetter:gh,aliases:{},register:0};if(Qs(),e!==i){if(Kn[t])return;ri(i,ri(xl(e,s),a)),Ks(i.prototype,Ks(s,xl(e,a))),Kn[i.prop=t]=i,e.targetTest&&(Qo.push(i),ch[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_p(t,i),e.register&&e.register(Hn,i,Gn)}else Ip.push(e)},Tt=255,Sa={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},_c=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},Fp=function(e,t,n){var i=e?sr(e)?[e>>16,e>>8&Tt,e&Tt]:0:Sa.black,s,a,o,l,c,u,d,h,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Sa[e])i=Sa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Tt,i&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Od),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=_c(l+1/3,s,a),i[1]=_c(l,s,a),i[2]=_c(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(fp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Od)||Sa.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Tt,a=i[1]/Tt,o=i[2]/Tt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Op=function(e){var t=[],n=[],i=-1;return e.split(wr).forEach(function(s){var a=s.match(Is)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Hd=function(e,t,n){var i="",s=(e+i).match(wr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Fp(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Op(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(wr,"1").split(Is),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(wr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},wr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Sa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),GM=/hsl[a]?\(/,Bp=function(e){var t=e.join(" "),n;if(wr.lastIndex=0,wr.test(t))return n=GM.test(t),e[1]=Hd(e[1],n),e[0]=Hd(e[0],n,Op(e[1])),!0},qa,Jn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,g=function _(p){var m=r()-i,v=p===!0,y,M,R,b;if((m>e||m<0)&&(n+=m-t),i+=m,R=i-n,y=R-a,(y>0||v)&&(b=++d.frame,h=R-d.time*1e3,d.time=R=R/1e3,a+=y+(y>=s?4:s-y),M=1),v||(l=c(_)),M)for(f=0;f<o.length;f++)o[f](R,h,b,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){mp&&(!yu&&ah()&&(Ri=yu=window,oh=Ri.document||{},ii.gsap=Hn,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(Hn.version),gp(gl||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),Ip.forEach(Up)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},qa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),qa=0,c=ja},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,v){var y=m?function(M,R,b,T){p(M,R,b,T),d.remove(y)}:p;return d.remove(p),o[v?"unshift":"push"](y),Qs(),y},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),Qs=function(){return!qa&&Jn.wake()},ht={},VM=/^[\d.\-M][\d.\-,\s]/,HM=/["']/g,WM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(HM,"").trim():+c,i=l.substr(o+1).trim();return t},XM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},jM=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[WM(t[1])]:XM(e).split(",").map(Mp)):ht._CE&&VM.test(e)?ht._CE("",e):n},YM=function(e){return function(t){return 1-e(1-t)}},Zr=function(e,t){return e&&(kt(e)?e:ht[e]||jM(e))||t},cs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return zn(e,function(o){ht[o]=ii[o]=s,ht[a=o.toLowerCase()]=n;for(var l in s)ht[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[o+"."+l]=s[l]}),s},kp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Mu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*_M((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:kp(o);return s=Mu/s,l.config=function(c,u){return r(e,c,u)},l},vc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:kp(n);return i.config=function(s){return r(e,s)},i};zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;cs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;cs("Elastic",xc("in"),xc("out"),xc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};cs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);cs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});cs("Circ",function(r){return-(hp(1-r*r)-1)});cs("Sine",function(r){return r===1?1:-gM(r*pM)+1});cs("Back",vc("in"),vc("out"),vc());ht.SteppedEase=ht.steps=ii.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-At;return function(o){return((i*io(0,a,o)|0)+s)*n}}};Wa.ease=ht["quad.out"];zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return uh+=r+","+r+"Params,"});var zp=function(e,t){this.id=mM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vp,this.set=t?t.getSetter:gh},$a=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Js(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),qa||Jn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Js(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fl(this,n),!s._dp||s.parent||Ep(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Zs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?vl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(io(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ul(this),AM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=It(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=bM);var i=fn;return fn=n,dh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Gd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(li(this,n),kn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kn(i)),this._dur||(this._zTime=-At),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-At)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=kt(n)?n:yp,l=function(){var u=i.then;i.then=null,s&&s(),kt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){va(this)},r})();ri($a.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Fn=(function(r){up(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kn(n.sortChildren),Ut&&Di(n.parent||Ut,qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&wp(qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Pa(0,arguments,this),this},t.from=function(i,s,a){return Pa(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Pa(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,li(this,a),1),this},t.call=function(i,s,a){return Di(this,Kt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Kt(i,a,li(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Ca(a).immediateRender=kn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,Ca(o).immediateRender=kn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:It(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,_,p,m,v,y,M,R,b,T;if(this!==Ut&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,M=this._start,y=this._ts,m=!y,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(h=It(u%p),u===l?(_=this._repeat,h=c):(R=It(u/p),_=~~R,_&&_===R&&(h=c,_--),h>c&&(h=c)),R=Zs(this._tTime,p),!o&&this._tTime&&R!==_&&this._tTime-R*p-this._dur<=0&&(R=_),b&&_&1&&(h=c-h,T=1),_!==R&&!this._lock){var x=b&&R&1,w=x===(b&&_&1);if(_<R&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(T?0:It(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ei(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,R=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=DM(this,It(o),It(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!R&&(ei(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=-At);break}}f=g}else{f=this._last;for(var P=i<0?i:h;f;){if(g=f._prev,(f._act||P<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(P-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(P-f._start)*f._ts,s,a||fn&&dh(f)),h!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=P?-At:At);break}}f=g}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-At)._zTime=h>=o?1:-1,this._ts))return this._start=M,Ul(this),this.render(i,s,a);this._onUpdate&&!s&&ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Rr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(ei(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(sr(s)||(s=li(this,s,i)),!(i instanceof $a)){if(En(i))return i.forEach(function(o){return a.add(o,s)}),this;if(un(i))return this.addLabel(i,s);if(kt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Di(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-pi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Kt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return un(i)?this.removeLabel(i):kt(i)?this.killTweensOf(i):(i.parent===this&&Il(this,i),i===this._recent&&(this._recent=this._last),Kr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=It(Jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=li(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Kt.delayedCall(0,s||ja,a);return o.data="isPause",this._hasPause=1,Di(this,o,li(this,i))},t.removePause=function(i){var s=this._first;for(i=li(this,i);s;)s._start===i&&s.data==="isPause"&&Rr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)vr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=mi(i),l=this._first,c=sr(s),u;l;)l instanceof Kt?EM(l._targets,o)&&(c?(!vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=li(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=Kt.to(a,ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||At,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Js(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ri({startAt:{time:li(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Vd(this,li(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Vd(this,li(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=It(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Kr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Kr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=pi,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Di(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=It(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Js(a,a===Ut&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ut._ts&&(Sp(Ut,vl(i,Ut)),xp=Jn.frame),Jn.frame>=Bd){Bd+=ni.autoSleep||120;var s=Ut._first;if((!s||!s._ts)&&ni.autoSleep&&Jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jn.sleep()}}},e})($a);ri(Fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var qM=function(e,t,n,i,s,a,o){var l=new Gn(this._pt,e,t,0,1,jp,null,s),c=0,u=0,d,h,f,g,_,p,m,v;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ya(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(mc)||[];d=mc.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?ks(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=mc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(pp.test(i)||m)&&(l.e=0),this._pt=l,l},fh=function(e,t,n,i,s,a,o,l,c,u){kt(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:kt(d)?c?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=kt(d)?c?QM:Wp:mh,g;if(un(i)&&(~i.indexOf("random(")&&(i=Ya(i)),i.charAt(1)==="="&&(g=ks(h,i)+(Mn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Cu)return!isNaN(h*i)&&i!==""?(g=new Gn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?ty:Xp,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&lh(t,i),qM.call(this,e,t,h,i,f,l||ni.stringFilter,c))},$M=function(e,t,n,i,s){if(kt(e)&&(e=Da(e,s,t,n,i)),!Gi(e)||e.style&&e.nodeType||En(e)||dp(e))return un(e)?Da(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Da(e[o],s,t,n,i);return a},Gp=function(e,t,n,i,s,a){var o,l,c,u;if(Kn[e]&&(o=new Kn[e]).init(s,o.rawVars?t[e]:$M(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Gn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Us))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},vr,Cu,ph=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!rh,M=e.timeline,R=i.easeReverse||d,b,T,x,w,P,D,L,k,V,I,B,O,$;if(M&&(!h||!s)&&(s="none"),e._ease=Zr(s,Wa.ease),e._rEase=R&&(Zr(R)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||h&&!i.stagger){if(k=p[0]?$r(p[0]).harness:0,O=k&&i[k.prop],b=xl(i,ch),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?Jo:yM),_._lazy=0),a){if(Rr(e._startAt=Kt.set(p,ri({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&kn(l),startAt:null,delay:0,onUpdate:c&&function(){return ei(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn||!o&&!f)&&e._startAt.revert(Jo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),x=ri({overwrite:!1,data:"isFromStart",lazy:o&&!_&&kn(l),immediateRender:o,stagger:0,parent:m},b),O&&(x[k.prop]=O),Rr(e._startAt=Kt.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn?e._startAt.revert(Jo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&kn(l)||l&&!g,T=0;T<p.length;T++){if(P=p[T],L=P._gsap||hh(p)[T]._gsap,e._ptLookup[T]=I={},bu[L.id]&&Er.length&&_l(),B=v===p?T:v.indexOf(P),k&&(V=new k).init(P,O||b,e,B,v)!==!1&&(e._pt=w=new Gn(e._pt,P,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(Q){I[Q]=w}),V.priority&&(D=1)),!k||O)for(x in b)Kn[x]&&(V=Gp(x,b,e,B,P,v))?V.priority&&(D=1):I[x]=w=fh.call(e,P,x,"get",b[x],B,v,0,i.stringFilter);e._op&&e._op[T]&&e.kill(P,e._op[T]),y&&e._pt&&(vr=e,Ut.killTweensOf(P,I,e.globalTime(t)),$=!e.parent,vr=0),e._pt&&l&&(bu[L.id]=1)}D&&Yp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,h&&t<=0&&M.render(pi,!0,!0)},KM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Cu=1,e.vars[t]="+=0",ph(e,o),Cu=0,l?Xa(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Ht(n)+Mn(d.e)),d.b&&(d.b=u.s+Mn(d.b))},ZM=function(e,t){var n=e[0]?$r(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ks({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},JM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(En(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Da=function(e,t,n,i,s){return kt(e)?e.call(t,n,i,s):un(e)&&~e.indexOf("random(")?Ya(e):e},Vp=uh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Hp={};zn(Vp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Hp[r]=1});var Kt=(function(r){up(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ca(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Ut,v=(En(n)||dp(n)?sr(n[0]):"length"in i)?[n]:mi(n),y,M,R,b,T,x,w,P;if(o._targets=v.length?hh(v):Xa("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||Do(c)||Do(u)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(y=o.timeline=new Fn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:v}),y.kill(),y.parent=y._dp=qi(o),y._start=0,h||Do(c)||Do(u)){if(b=v.length,w=h&&Cp(h),Gi(h))for(T in h)~Vp.indexOf(T)&&(P||(P={}),P[T]=h[T]);for(M=0;M<b;M++)R=xl(i,Hp),R.stagger=0,D&&(R.easeReverse=D),P&&Ks(R,P),x=v[M],R.duration=+Da(c,qi(o),M,x,v),R.delay=(+Da(u,qi(o),M,x,v)||0)-o._delay,!h&&b===1&&R.delay&&(o._delay=u=R.delay,o._start+=u,R.delay=0),y.to(x,R,w?w(M,x,v):0),y._ease=ht.none;y.duration()?c=u=0:o.timeline=0}else if(g){Ca(ri(y.vars.defaults,{ease:"none"})),y._ease=Zr(g.ease||i.ease||"none");var L=0,k,V,I;if(En(g))g.forEach(function(B){return y.to(v,B,">")}),y.duration();else{R={};for(T in g)T==="ease"||T==="easeEach"||JM(T,g[T],R,g.easeEach);for(T in R)for(k=R[T].sort(function(B,O){return B.t-O.t}),L=0,M=0;M<k.length;M++)V=k[M],I={ease:V.e,duration:(V.t-(M?k[M-1].t:0))/100*c},I[T]=V.v,y.to(v,I,L),L+=I.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return f===!0&&!rh&&(vr=qi(o),Ut.killTweensOf(v),vr=0),Di(m,qi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===It(m._time)&&kn(d)&&RM(qi(o))&&m.data!=="nested")&&(o._tTime=-At,o.render(Math.max(0,-u)||0)),p&&wp(qi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-At&&!u?l:i<At?0:i,h,f,g,_,p,m,v,y;if(!c)PM(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=It(d%_),d===l?(g=this._repeat,h=c):(p=It(d/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(h=c-h),p=Zs(this._tTime,_),h===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(It(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Tp(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var M=h<o;if(M!==this._inv){var R=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=R?(M?-1:1)/R:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(ei(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Eu(this,i,s,a),ei(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ei(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Eu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Rr(this,1),!s&&!(u&&!o)&&(d||o||m)&&(ei(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){qa||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ph(this,c),u=this._ease(c/this._dur),KM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Fl(this,0),this.parent||bp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?va(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,vr&&vr.vars.overwrite!==!0)._first||va(this),this.parent&&a!==this.timeline.totalDuration()&&Js(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?mi(i):o,c=this._ptLookup,u=this._pt,d,h,f,g,_,p,m;if((!s||s==="all")&&TM(o,l))return s==="all"&&(this._pt=0),va(this);for(d=this._op=this._op||[],s!=="all"&&(un(s)&&(_={},zn(s,function(v){return _[v]=1}),s=_),s=ZM(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(d[m]=s,g=h,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Il(this,p,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&va(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Pa(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Pa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Ut.killTweensOf(i,s,a)},e})($a);ri(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zn("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new Fn,t=Tu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var mh=function(e,t,n){return e[t]=n},Wp=function(e,t,n){return e[t](n)},QM=function(e,t,n,i){return e[t](i.fp,n)},ey=function(e,t,n){return e.setAttribute(t,n)},gh=function(e,t){return kt(e[t])?Wp:sh(e[t])&&e.setAttribute?ey:mh},Xp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ty=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_h=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ny=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},iy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Il(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ry=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Gn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Xp,this.d=l||this,this.set=c||mh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ry,this.m=n,this.mt=s,this.tween=i},r})();zn(uh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return ch[r]=1});ii.TweenMax=ii.TweenLite=Kt;ii.TimelineLite=ii.TimelineMax=Fn;Ut=new Fn({sortChildren:!1,defaults:Wa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=Bp;var Jr=[],el={},sy=[],Wd=0,ay=0,Sc=function(e){return(el[e]||sy).map(function(t){return t()})},Pu=function(){var e=Date.now(),t=[];e-Wd>2&&(Sc("matchMediaInit"),Jr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ri.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Sc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Wd=e,Sc("matchMedia"))},qp=(function(){function r(t,n){this.selector=n&&Au(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ay++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){kt(n)&&(s=i,i=n,n=kt);var a=this,o=function(){var c=Lt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Au(s)),Lt=a,d=i.apply(a,arguments),kt(d)&&a._r.push(d),Lt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===kt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Jr.length;a--;)Jr[a].id===this.id&&Jr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),oy=(function(){function r(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Gi(n)||(n={matches:n});var a=new qp(0,s||this.scope),o=a.conditions={},l,c,u;Lt&&!a.selector&&(a.selector=Lt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ri.matchMedia(n[c]),l&&(Jr.indexOf(a)<0&&Jr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Pu):l.addEventListener("change",Pu)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Sl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Up(i)})},timeline:function(e){return new Fn(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){un(e)&&(e=mi(e)[0]);var s=$r(e||{}).get,a=n?yp:Mp;return n==="native"&&(n=""),e&&(t?a((Kn[t]&&Kn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Kn[o]&&Kn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=mi(e),e.length>1){var i=e.map(function(u){return Hn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=Kn[t],o=$r(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Us._pt=0,d.init(e,n?u+n:u,Us,0,[e]),d.render(1,d),Us._pt&&_h(1,Us)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Hn.to(e,ri((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Zr(e.ease,Wa.ease)),kd(Wa,e||{})},config:function(e){return kd(ni,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Kn[o]&&!ii[o]&&Xa(t+" effect requires "+o+" plugin.")}),gc[t]=function(o,l,c){return n(mi(o),ri(l||{},s),c)},a&&(Fn.prototype[t]=function(o,l,c){return this.add(gc[t](o,Gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=Zr(t)},parseEase:function(e,t){return arguments.length?Zr(e,t):ht},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Fn(e),i,s;for(n.smoothChildTiming=kn(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Di(n,i,i._start-i._delay),i=s;return Di(Ut,n,0),n},context:function(e,t){return e?new qp(e,t):Lt},matchMedia:function(e){return new oy(e)},matchMediaRefresh:function(){return Jr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Pu()},addEventListener:function(e,t){var n=el[e]||(el[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=el[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:BM,wrapYoyo:kM,distribute:Cp,random:Dp,snap:Pp,normalize:OM,getUnit:Mn,clamp:LM,splitColor:Fp,toArray:mi,selector:Au,mapRange:Lp,pipe:UM,unitize:FM,interpolate:zM,shuffle:Rp},install:gp,effects:gc,ticker:Jn,updateRoot:Fn.updateRoot,plugins:Kn,globalTimeline:Ut,core:{PropTween:Gn,globals:_p,Tween:Kt,Timeline:Fn,Animation:$a,getCache:$r,_removeLinkedListItem:Il,reverting:function(){return fn},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return rh=e}}};zn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Sl[r]=Kt[r]});Jn.add(Fn.updateRoot);Us=Sl.to({},{duration:0});var ly=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},cy=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ly(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Mc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(un(s)&&(l={},zn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}cy(o,s)}}}},Hn=Sl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Mc("roundProps",Ru),Mc("modifiers"),Mc("snap",Pp))||Sl;Kt.version=Fn.version=Hn.version="3.15.0";mp=1;ah()&&Qs();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;var Xd,Sr,zs,xh,Yr,jd,vh,uy=function(){return typeof window<"u"},ar={},zr=180/Math.PI,Gs=Math.PI/180,As=Math.atan2,Yd=1e8,Sh=/([A-Z])/g,hy=/(left|right|width|margin|padding|x)/i,dy=/[\s,\(]\S/,Ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Du=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},py=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},my=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$p=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Kp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_y=function(e,t,n){return e.style[t]=n},xy=function(e,t,n){return e.style.setProperty(t,n)},vy=function(e,t,n){return e._gsap[t]=n},Sy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},My=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},yy=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ft="transform",Vn=Ft+"Origin",by=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in ar&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=$i(i,o)}):this.tfm[e]=a.x?a[e]:$i(i,e),e===Vn&&(this.tfm.zOrigin=a.zOrigin);else return Ii.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ft)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Vn,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},Zp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ey=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Sh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=vh(),(!s||!s.isStart)&&!n[Ft]&&(Zp(n),i.zOrigin&&n[Vn]&&(n[Vn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Jp=function(e,t){var n={target:e,props:[],revert:Ey,save:by};return e._gsap||Hn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Qp,Nu=function(e,t){var n=Sr.createElementNS?Sr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Sr.createElement(e);return n&&n.style?n:Sr.createElement(e)},ti=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Sh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ea(t)||t,1)||""},qd="O,Moz,ms,Ms,Webkit".split(","),ea=function(e,t,n){var i=t||Yr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(qd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?qd[a]:"")+e},Lu=function(){uy()&&window.document&&(Xd=window,Sr=Xd.document,zs=Sr.documentElement,Yr=Nu("div")||{style:{}},Nu("div"),Ft=ea(Ft),Vn=Ft+"Origin",Yr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qp=!!ea("perspective"),vh=Hn.core.reverting,xh=1)},$d=function(e){var t=e.ownerSVGElement,n=Nu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),zs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),zs.removeChild(n),s},Kd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},em=function(e){var t,n;try{t=e.getBBox()}catch{t=$d(e),n=1}return t&&(t.width||t.height)||n||(t=$d(e)),t&&!t.width&&!t.x&&!t.y?{x:+Kd(e,["x","cx","x1"])||0,y:+Kd(e,["y","cy","y1"])||0,width:0,height:0}:t},tm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&em(e))},Cr=function(e,t){if(t){var n=e.style,i;t in ar&&t!==Vn&&(t=Ft),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Sh,"-$1").toLowerCase())):n.removeAttribute(t)}},Mr=function(e,t,n,i,s,a){var o=new Gn(e._pt,t,n,0,1,a?Kp:$p);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Zd={deg:1,rad:1,turn:1},wy={grid:1,flex:1},Pr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Yr.style,l=hy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||Zd[i]||Zd[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&tm(e),(f||a==="%")&&(ar[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Ht(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Sr||!_.appendChild)&&(_=Sr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Jn.time&&!p.uncache)return Ht(s/p.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,g=e[u],v?e.style[t]=v:Cr(e,t)}else(f||a==="%")&&!wy[ti(_,"display")]&&(o.position=ti(e,"position")),_===e&&(o.position="static"),_.appendChild(Yr),g=Yr[u],_.removeChild(Yr),o.position="absolute";return l&&f&&(p=$r(_),p.time=Jn.time,p.width=_[u]),Ht(h?g*s/d:g&&s?d/g*s:0)},$i=function(e,t,n,i){var s;return xh||Lu(),t in Ii&&t!=="transform"&&(t=Ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),ar[t]&&t!=="transform"?(s=Za(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yl(ti(e,Vn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ml[t]&&Ml[t](e,t,n)||ti(e,t)||vp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Pr(e,t,s,n)+n:s},Ty=function(e,t,n,i){if(!n||n==="none"){var s=ea(t,e,1),a=s&&ti(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ti(e,"borderTopColor"))}var o=new Gn(this._pt,e.style,t,0,1,jp),l=0,c=0,u,d,h,f,g,_,p,m,v,y,M,R;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ti(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ti(e,t)||i,_?e.style[t]=_:Cr(e,t)),u=[n,i],Bp(u),n=u[0],i=u[1],h=n.match(Is)||[],R=i.match(Is)||[],R.length){for(;d=Is.exec(i);)p=d[0],v=i.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(f=parseFloat(_)||0,M=_.substr((f+"").length),p.charAt(1)==="="&&(p=ks(f,p)+M),m=parseFloat(p),y=p.substr((m+"").length),l=Is.lastIndex-y.length,y||(y=y||ni.units[t]||M,l===i.length&&(i+=y,o.e+=y)),M!==y&&(f=Pr(e,t,_,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Kp:$p;return pp.test(i)&&(o.e=0),this._pt=o,o},Jd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ay=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Jd[n]||n,t[1]=Jd[i]||i,t.join(" ")},Ry=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ar[o]&&(l=1,o=o==="transformOrigin"?Vn:Ft),Cr(n,o);l&&(Cr(n,Ft),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Za(n,1),a.uncache=1,Zp(i)))}},Ml={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Gn(e._pt,t,n,0,0,Ry);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ka=[1,0,0,1,0,0],nm={},im=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qd=function(e){var t=ti(e,Ft);return im(t)?Ka:t.substr(7).match(fp).map(Ht)},Mh=function(e,t){var n=e._gsap||$r(e),i=e.style,s=Qd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ka:s):(s===Ka&&!e.offsetParent&&e!==zs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,zs.appendChild(e)),s=Qd(e),l?i.display=l:Cr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):zs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Iu=function(e,t,n,i,s,a){var o=e._gsap,l=s||Mh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],v=l[5],y=t.split(" "),M=parseFloat(y[0])||0,R=parseFloat(y[1])||0,b,T,x,w;n?l!==Ka&&(T=f*p-g*_)&&(x=M*(p/T)+R*(-_/T)+(_*v-p*m)/T,w=M*(-g/T)+R*(f/T)-(f*v-g*m)/T,M=x,R=w):(b=em(e),M=b.x+(~y[0].indexOf("%")?M/100*b.width:M),R=b.y+(~(y[1]||y[0]).indexOf("%")?R/100*b.height:R)),i||i!==!1&&o.smooth?(m=M-c,v=R-u,o.xOffset=d+(m*f+v*_)-m,o.yOffset=h+(m*g+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=R,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Vn]="0px 0px",a&&(Mr(a,o,"xOrigin",c,M),Mr(a,o,"yOrigin",u,R),Mr(a,o,"xOffset",d,o.xOffset),Mr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+R)},Za=function(e,t){var n=e._gsap||new zp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ti(e,Vn)||"0",u,d,h,f,g,_,p,m,v,y,M,R,b,T,x,w,P,D,L,k,V,I,B,O,$,Q,N,pe,be,qe,ze,Ne;return u=d=h=_=p=m=v=y=M=0,f=g=1,n.svg=!!(e.getCTM&&tm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),i.scale=i.rotate=i.translate="none"),T=Mh(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Iu(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,T)),R=n.xOrigin||0,b=n.yOrigin||0,T!==Ka&&(D=T[0],L=T[1],k=T[2],V=T[3],u=I=T[4],d=B=T[5],T.length===6?(f=Math.sqrt(D*D+L*L),g=Math.sqrt(V*V+k*k),_=D||L?As(L,D)*zr:0,v=k||V?As(k,V)*zr+_:0,v&&(g*=Math.abs(Math.cos(v*Gs))),n.svg&&(u-=R-(R*D+b*k),d-=b-(R*L+b*V))):(Ne=T[6],qe=T[7],N=T[8],pe=T[9],be=T[10],ze=T[11],u=T[12],d=T[13],h=T[14],x=As(Ne,be),p=x*zr,x&&(w=Math.cos(-x),P=Math.sin(-x),O=I*w+N*P,$=B*w+pe*P,Q=Ne*w+be*P,N=I*-P+N*w,pe=B*-P+pe*w,be=Ne*-P+be*w,ze=qe*-P+ze*w,I=O,B=$,Ne=Q),x=As(-k,be),m=x*zr,x&&(w=Math.cos(-x),P=Math.sin(-x),O=D*w-N*P,$=L*w-pe*P,Q=k*w-be*P,ze=V*P+ze*w,D=O,L=$,k=Q),x=As(L,D),_=x*zr,x&&(w=Math.cos(x),P=Math.sin(x),O=D*w+L*P,$=I*w+B*P,L=L*w-D*P,B=B*w-I*P,D=O,I=$),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Ht(Math.sqrt(D*D+L*L+k*k)),g=Ht(Math.sqrt(B*B+Ne*Ne)),x=As(I,B),v=Math.abs(x)>2e-4?x*zr:0,M=ze?1/(ze<0?-ze:ze):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!im(ti(e,Ft)),O&&e.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Ht(f),n.scaleY=Ht(g),n.rotation=Ht(_)+o,n.rotationX=Ht(p)+o,n.rotationY=Ht(m)+o,n.skewX=v+o,n.skewY=y+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Vn]=yl(c)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?Py:Qp?rm:Cy,n.uncache=0,n},yl=function(e){return(e=e.split(" "))[0]+" "+e[1]},yc=function(e,t,n){var i=Mn(t);return Ht(parseFloat(t)+parseFloat(Pr(e,"x",n+"px",i)))+i},Cy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rm(e,t)},Or="0deg",da="0px",Br=") ",rm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,y=n.zOrigin,M="",R=m==="auto"&&e&&e!==1||m===!0;if(y&&(d!==Or||u!==Or)){var b=parseFloat(u)*Gs,T=Math.sin(b),x=Math.cos(b),w;b=parseFloat(d)*Gs,w=Math.cos(b),a=yc(v,a,T*w*-y),o=yc(v,o,-Math.sin(b)*-y),l=yc(v,l,x*w*-y+y)}p!==da&&(M+="perspective("+p+Br),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(R||a!==da||o!==da||l!==da)&&(M+=l!==da||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Br),c!==Or&&(M+="rotate("+c+Br),u!==Or&&(M+="rotateY("+u+Br),d!==Or&&(M+="rotateX("+d+Br),(h!==Or||f!==Or)&&(M+="skew("+h+", "+f+Br),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Br),v.style[Ft]=M||"translate(0, 0)"},Py=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,y=parseFloat(a),M=parseFloat(o),R,b,T,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Gs,c*=Gs,R=Math.cos(l)*d,b=Math.sin(l)*d,T=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Gs,w=Math.tan(c-u),w=Math.sqrt(1+w*w),T*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),R*=w,b*=w)),R=Ht(R),b=Ht(b),T=Ht(T),x=Ht(x)):(R=d,x=h,b=T=0),(y&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(y=Pr(f,"x",a,"px"),M=Pr(f,"y",o,"px")),(g||_||p||m)&&(y=Ht(y+g-(g*R+_*T)+p),M=Ht(M+_-(g*b+_*x)+m)),(i||s)&&(w=f.getBBox(),y=Ht(y+i/100*w.width),M=Ht(M+s/100*w.height)),w="matrix("+R+","+b+","+T+","+x+","+y+","+M+")",f.setAttribute("transform",w),v&&(f.style[Ft]=w)},Dy=function(e,t,n,i,s){var a=360,o=un(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?zr:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Yd)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Yd)%a-~~(c/a)*a)),e._pt=h=new Gn(e._pt,t,n,i,c,fy),h.e=u,h.u="deg",e._props.push(n),h},ef=function(e,t){for(var n in t)e[n]=t[n];return e},Ny=function(e,t,n){var i=ef({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ft]=t,o=Za(n,1),Cr(n,Ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ft],a[Ft]=t,o=Za(n,1),a[Ft]=c);for(l in ar)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=Mn(c),g=Mn(u),d=f!==g?Pr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Gn(e._pt,o,l,d,h-d,Du),e._pt.u=g||0,e._props.push(l));ef(o,i)};zn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Ml[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return $i(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var sm={name:"css",register:Lu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,g,_,p,m,v,y,M,R,b,T,x,w;xh||Lu(),this.styles=this.styles||Jp(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Kn[_]&&Gp(_,t,n,i,e,s)))){if(f=typeof u,g=Ml[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ya(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",wr.lastIndex=0,wr.test(c)||(p=Mn(c),m=Mn(u),m?p!==m&&(c=Pr(e,_,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],un(c)&&~c.indexOf("random(")&&(c=Ya(c)),Mn(c+"")||c==="auto"||(c+=ni.units[_]||Mn($i(e,_))||""),(c+"").charAt(1)==="="&&(c=$i(e,_))):c=$i(e,_),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in Ii&&(_==="autoAlpha"&&(h===1&&$i(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,o.visibility),Mr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Ii[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in ar,y){if(this.styles.save(_),w=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=ti(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var P=e.style.perspective;e.style.perspective=u,u=ti(e,"perspective"),P?e.style.perspective=P:Cr(e,"perspective")}d=parseFloat(u)}if(M||(R=e._gsap,R.renderTransform&&!t.parseTransform||Za(e,t.parseTransform),b=t.smoothOrigin!==!1&&R.smooth,M=this._pt=new Gn(this._pt,o,Ft,0,1,R.renderTransform,R,0,-1),M.dep=1),_==="scale")this._pt=new Gn(this._pt,R,"scaleY",R.scaleY,(v?ks(R.scaleY,v+d):d)-R.scaleY||0,Du),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Vn,0,o[Vn]),u=Ay(u),R.svg?Iu(e,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&Mr(this,R,"zOrigin",R.zOrigin,m),Mr(this,o,_,yl(c),yl(u)));continue}else if(_==="svgOrigin"){Iu(e,u,1,b,0,this);continue}else if(_ in nm){Dy(this,R,_,h,v?ks(h,v+u):u);continue}else if(_==="smoothOrigin"){Mr(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){Ny(this,u,e);continue}}else _ in o||(_=ea(_)||_);if(y||(d||d===0)&&(h||h===0)&&!dy.test(u)&&_ in o)p=(c+"").substr((h+"").length),d||(d=0),m=Mn(u)||(_ in ni.units?ni.units[_]:p),p!==m&&(h=Pr(e,_,c,m)),this._pt=new Gn(this._pt,y?R:o,_,h,(v?ks(h,v+d):d)-h,!y&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?gy:Du),this._pt.u=m||0,y&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=my):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=py);else if(_ in o)Ty.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,i,s);else if(_!=="parseTransform"){lh(_,u);continue}y||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}T&&Yp(this)},render:function(e,t){if(t.tween._time||!vh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:$i,aliases:Ii,getSetter:function(e,t,n){var i=Ii[t];return i&&i.indexOf(",")<0&&(t=i),t in ar&&t!==Vn&&(e._gsap.x||$i(e,"x"))?n&&jd===n?t==="scale"?Sy:vy:(jd=n||{})&&(t==="scale"?My:yy):e.style&&!sh(e.style[t])?_y:~t.indexOf("-")?xy:gh(e,t)},core:{_removeProperty:Cr,_getMatrix:Mh}};Hn.utils.checkPrefix=ea;Hn.core.getStyleSaver=Jp;(function(r,e,t,n){var i=zn(r+","+e+","+t,function(s){ar[s]=1});zn(e,function(s){ni.units[s]="deg",nm[s]=1}),Ii[i[13]]=r+","+e,zn(n,function(s){var a=s.split(":");Ii[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ni.units[r]="px"});Hn.registerPlugin(sm);var ro=Hn.registerPlugin(sm)||Hn;ro.core.Tween;function Ly(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Iy(r,e,t){return e&&Ly(r.prototype,e),r}var dn,tl,Qn,yr,br,Vs,am,Gr,Hs,om,Qi,Mi,lm,cm=function(){return dn||typeof window<"u"&&(dn=window.gsap)&&dn.registerPlugin&&dn},um=1,Fs=[],lt=[],Bi=[],Na=Date.now,Uu=function(e,t){return t},Uy=function(){var e=Hs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Bi),lt=n,Bi=i,Uu=function(a,o){return t[a](o)}},Tr=function(e,t){return~Bi.indexOf(e)&&Bi[Bi.indexOf(e)+1][t]},La=function(e){return!!~om.indexOf(e)},An=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},wn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},No="scrollLeft",Lo="scrollTop",Fu=function(){return Qi&&Qi.isPressed||lt.cache++},bl=function(e,t){var n=function i(s){if(s||s===0){um&&(Qn.history.scrollRestoration="manual");var a=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),e(s),i.cacheID=lt.cache,a&&Uu("ss",s)}else(t||lt.cache!==i.cacheID||Uu("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Nn={s:No,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:bl(function(r){return arguments.length?Qn.scrollTo(r,en.sc()):Qn.pageXOffset||yr[No]||br[No]||Vs[No]||0})},en={s:Lo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:bl(function(r){return arguments.length?Qn.scrollTo(Nn.sc(),r):Qn.pageYOffset||yr[Lo]||br[Lo]||Vs[Lo]||0})},Un=function(e,t){return(t&&t._ctx&&t._ctx.selector||dn.utils.toArray)(e)[0]||(typeof e=="string"&&dn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Fy=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Dr=function(e,t){var n=t.s,i=t.sc;La(e)&&(e=yr.scrollingElement||br);var s=lt.indexOf(e),a=i===en.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+a]||An(e,"scroll",Fu);var o=lt[s+a],l=o||(lt[s+a]=bl(Tr(e,n),!0)||(La(e)?i:bl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=dn.getProperty(e,"scrollBehavior")==="smooth"),l},Ou=function(e,t,n){var i=e,s=e,a=Na(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Na();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(g){var _=o,p=s,m=Na();return(g||g===0)&&g!==i&&u(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:u,reset:d,getVelocity:h}},fa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},tf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},hm=function(){Hs=dn.core.globals().ScrollTrigger,Hs&&Hs.core&&Uy()},dm=function(e){return dn=e||cm(),!tl&&dn&&typeof document<"u"&&document.body&&(Qn=window,yr=document,br=yr.documentElement,Vs=yr.body,om=[Qn,yr,br,Vs],dn.utils.clamp,lm=dn.core.context||function(){},Gr="onpointerenter"in Vs?"pointer":"mouse",am=Xt.isTouch=Qn.matchMedia&&Qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=Xt.eventTypes=("ontouchstart"in br?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in br?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return um=0},500),tl=1),Hs||hm(),tl};Nn.op=en;lt.cache=0;var Xt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){tl||dm(dn)||console.warn("Please gsap.registerPlugin(Observer)"),Hs||hm();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,v=n.onDrag,y=n.onPress,M=n.onRelease,R=n.onRight,b=n.onLeft,T=n.onUp,x=n.onDown,w=n.onChangeX,P=n.onChangeY,D=n.onChange,L=n.onToggleX,k=n.onToggleY,V=n.onHover,I=n.onHoverEnd,B=n.onMove,O=n.ignoreCheck,$=n.isNormalizer,Q=n.onGestureStart,N=n.onGestureEnd,pe=n.onWheel,be=n.onEnable,qe=n.onDisable,ze=n.onClick,Ne=n.scrollSpeed,H=n.capture,ne=n.allowClicks,te=n.lockAxis,me=n.onLockAxis;this.target=o=Un(o)||br,this.vars=n,f&&(f=dn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,Ne=Ne||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Qn.getComputedStyle(Vs).lineHeight)||22);var Re,ve,Ue,_e,Le,ke,Oe,X=this,Ge=0,mt=0,F=n.passive||!u&&n.passive!==!1,Ye=Dr(o,Nn),We=Dr(o,en),nt=Ye(),ge=We(),Je=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Mi[0]==="pointerdown",C=La(o),S=o.ownerDocument||yr,G=[0,0,0],Z=[0,0,0],ie=0,de=function(){return ie=Na()},se=function(he,Ve){return(X.event=he)&&f&&Fy(he.target,f)||Ve&&Je&&he.pointerType!=="touch"||O&&O(he,Ve)},K=function(){X._vx.reset(),X._vy.reset(),ve.pause(),d&&d(X)},ee=function(){var he=X.deltaX=tf(G),Ve=X.deltaY=tf(Z),ae=Math.abs(he)>=i,He=Math.abs(Ve)>=i;D&&(ae||He)&&D(X,he,Ve,G,Z),ae&&(R&&X.deltaX>0&&R(X),b&&X.deltaX<0&&b(X),w&&w(X),L&&X.deltaX<0!=Ge<0&&L(X),Ge=X.deltaX,G[0]=G[1]=G[2]=0),He&&(x&&X.deltaY>0&&x(X),T&&X.deltaY<0&&T(X),P&&P(X),k&&X.deltaY<0!=mt<0&&k(X),mt=X.deltaY,Z[0]=Z[1]=Z[2]=0),(_e||Ue)&&(B&&B(X),Ue&&(p&&Ue===1&&p(X),v&&v(X),Ue=0),_e=!1),ke&&!(ke=!1)&&me&&me(X),Le&&(pe(X),Le=!1),Re=0},Se=function(he,Ve,ae){G[ae]+=he,Z[ae]+=Ve,X._vx.update(he),X._vy.update(Ve),c?Re||(Re=requestAnimationFrame(ee)):ee()},Ae=function(he,Ve){te&&!Oe&&(X.axis=Oe=Math.abs(he)>Math.abs(Ve)?"x":"y",ke=!0),Oe!=="y"&&(G[2]+=he,X._vx.update(he,!0)),Oe!=="x"&&(Z[2]+=Ve,X._vy.update(Ve,!0)),c?Re||(Re=requestAnimationFrame(ee)):ee()},fe=function(he){if(!se(he,1)){he=fa(he,u);var Ve=he.clientX,ae=he.clientY,He=Ve-X.x,De=ae-X.y,$e=X.isDragging;X.x=Ve,X.y=ae,($e||(He||De)&&(Math.abs(X.startX-Ve)>=s||Math.abs(X.startY-ae)>=s))&&(Ue||(Ue=$e?2:1),$e||(X.isDragging=!0),Ae(He,De))}},ce=X.onPress=function(oe){se(oe,1)||oe&&oe.button||(X.axis=Oe=null,ve.pause(),X.isPressed=!0,oe=fa(oe),Ge=mt=0,X.startX=X.x=oe.clientX,X.startY=X.y=oe.clientY,X._vx.reset(),X._vy.reset(),An($?o:S,Mi[1],fe,F,!0),X.deltaX=X.deltaY=0,y&&y(X))},xe=X.onRelease=function(oe){if(!se(oe,1)){wn($?o:S,Mi[1],fe,!0);var he=!isNaN(X.y-X.startY),Ve=X.isDragging,ae=Ve&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),He=fa(oe);!ae&&he&&(X._vx.reset(),X._vy.reset(),u&&ne&&dn.delayedCall(.08,function(){if(Na()-ie>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(S.createEvent){var De=S.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,Qn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(De)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,d&&Ve&&!$&&ve.restart(!0),Ue&&ee(),m&&Ve&&m(X),M&&M(X,ae)}},Xe=function(he){return he.touches&&he.touches.length>1&&(X.isGesturing=!0)&&Q(he,X.isDragging)},Ze=function(){return(X.isGesturing=!1)||N(X)},U=function(he){if(!se(he)){var Ve=Ye(),ae=We();Se((Ve-nt)*Ne,(ae-ge)*Ne,1),nt=Ve,ge=ae,d&&ve.restart(!0)}},le=function(he){if(!se(he)){he=fa(he,u),pe&&(Le=!0);var Ve=(he.deltaMode===1?l:he.deltaMode===2?Qn.innerHeight:1)*g;Se(he.deltaX*Ve,he.deltaY*Ve,0),d&&!$&&ve.restart(!0)}},J=function(he){if(!se(he)){var Ve=he.clientX,ae=he.clientY,He=Ve-X.x,De=ae-X.y;X.x=Ve,X.y=ae,_e=!0,d&&ve.restart(!0),(He||De)&&Ae(He,De)}},ye=function(he){X.event=he,V(X)},ue=function(he){X.event=he,I(X)},re=function(he){return se(he)||fa(he,u)&&ze(X)};ve=X._dc=dn.delayedCall(h||.25,K).pause(),X.deltaX=X.deltaY=0,X._vx=Ou(0,50,!0),X._vy=Ou(0,50,!0),X.scrollX=Ye,X.scrollY=We,X.isDragging=X.isGesturing=X.isPressed=!1,lm(this),X.enable=function(oe){return X.isEnabled||(An(C?S:o,"scroll",Fu),a.indexOf("scroll")>=0&&An(C?S:o,"scroll",U,F,H),a.indexOf("wheel")>=0&&An(o,"wheel",le,F,H),(a.indexOf("touch")>=0&&am||a.indexOf("pointer")>=0)&&(An(o,Mi[0],ce,F,H),An(S,Mi[2],xe),An(S,Mi[3],xe),ne&&An(o,"click",de,!0,!0),ze&&An(o,"click",re),Q&&An(S,"gesturestart",Xe),N&&An(S,"gestureend",Ze),V&&An(o,Gr+"enter",ye),I&&An(o,Gr+"leave",ue),B&&An(o,Gr+"move",J)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=_e=Ue=!1,X._vx.reset(),X._vy.reset(),nt=Ye(),ge=We(),oe&&oe.type&&ce(oe),be&&be(X)),X},X.disable=function(){X.isEnabled&&(Fs.filter(function(oe){return oe!==X&&La(oe.target)}).length||wn(C?S:o,"scroll",Fu),X.isPressed&&(X._vx.reset(),X._vy.reset(),wn($?o:S,Mi[1],fe,!0)),wn(C?S:o,"scroll",U,H),wn(o,"wheel",le,H),wn(o,Mi[0],ce,H),wn(S,Mi[2],xe),wn(S,Mi[3],xe),wn(o,"click",de,!0),wn(o,"click",re),wn(S,"gesturestart",Xe),wn(S,"gestureend",Ze),wn(o,Gr+"enter",ye),wn(o,Gr+"leave",ue),wn(o,Gr+"move",J),X.isEnabled=X.isPressed=X.isDragging=!1,qe&&qe(X))},X.kill=X.revert=function(){X.disable();var oe=Fs.indexOf(X);oe>=0&&Fs.splice(oe,1),Qi===X&&(Qi=0)},Fs.push(X),$&&La(o)&&(Qi=X),X.enable(_)},Iy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Xt.version="3.15.0";Xt.create=function(r){return new Xt(r)};Xt.register=dm;Xt.getAll=function(){return Fs.slice()};Xt.getById=function(r){return Fs.filter(function(e){return e.vars.id===r})[0]};cm()&&dn.registerPlugin(Xt);var Pe,Ns,ot,vt,Zn,_t,yh,El,Ja,Ia,Ma,Io,xn,Ol,Bu,Pn,nf,rf,Ls,fm,bc,pm,Cn,ku,mm,gm,gr,zu,bh,Ws,Eh,Ua,Gu,Ec,Uo=1,vn=Date.now,wc=vn(),_i=0,ya=0,sf=function(e,t,n){var i=$n(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},af=function(e,t){return t&&(!$n(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Oy=function r(){return ya&&requestAnimationFrame(r)},of=function(){return Ol=1},lf=function(){return Ol=0},Ci=function(e){return e},ba=function(e){return Math.round(e*1e5)/1e5||0},_m=function(){return typeof window<"u"},xm=function(){return Pe||_m()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},ss=function(e){return!!~yh.indexOf(e)},vm=function(e){return(e==="Height"?Eh:ot["inner"+e])||Zn["client"+e]||_t["client"+e]},Sm=function(e){return Tr(e,"getBoundingClientRect")||(ss(e)?function(){return al.width=ot.innerWidth,al.height=Eh,al}:function(){return Zi(e)})},By=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Tr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?vm(s):e["client"+s])||0}},ky=function(e,t){return!t||~Bi.indexOf(e)?Sm(e):function(){return al}},Ui=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Tr(e,n))?a()-Sm(e)()[s]:ss(e)?(Zn[n]||_t[n])-vm(i):e[n]-e["offset"+i])},Fo=function(e,t){for(var n=0;n<Ls.length;n+=3)(!t||~t.indexOf(Ls[n+1]))&&e(Ls[n],Ls[n+1],Ls[n+2])},$n=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},Ea=function(e){return typeof e=="number"},Vr=function(e){return typeof e=="object"},pa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Rs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Cs=Math.abs,Mm="left",ym="top",wh="right",Th="bottom",Qr="width",es="height",Fa="Right",Oa="Left",Ba="Top",ka="Bottom",$t="padding",hi="margin",ta="Width",Ah="Height",Qt="px",di=function(e){return ot.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},zy=function(e){var t=di(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},cf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zi=function(e,t){var n=t&&di(e)[Bu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},wl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},bm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Gy=function(e){return function(t){return Pe.utils.snap(bm(e),t)}},Rh=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},Vy=function(e){return function(t,n){return Rh(bm(e))(t,n.direction)}},Oo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},uf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ko={toggleActions:"play",anticipatePin:0},Tl={top:0,left:0,center:.5,bottom:1,right:1},nl=function(e,t){if($n(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Tl?Tl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},zo=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=vt.createElement("div"),_=ss(n)||Tr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?_t:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,y=v?c:u,M="border-color:"+y+";font-size:"+d+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(M+=(i===en?wh:Th)+":"+(a+parseFloat(h))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],il(g,0,i,v),g},il=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ta]=1,s["border"+o+ta]=0,s[n.p]=t+"px",Pe.set(e,s)},rt=[],Vu={},Qa,hf=function(){return vn()-_i>34&&(Qa||(Qa=requestAnimationFrame(nr)))},Ps=function(){(!Cn||!Cn.isPressed||Cn.startX>_t.clientWidth)&&(lt.cache++,Cn?Qa||(Qa=requestAnimationFrame(nr)):nr(),_i||os("scrollStart"),_i=vn())},Tc=function(){gm=ot.innerWidth,mm=ot.innerHeight},wa=function(e){lt.cache++,(e===!0||!xn&&!pm&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!ku||gm!==ot.innerWidth||Math.abs(ot.innerHeight-mm)>ot.innerHeight*.25))&&El.restart(!0)},as={},Hy=[],Em=function r(){return ln(st,"scrollEnd",r)||qr(!0)},os=function(e){return as[e]&&as[e].map(function(t){return t()})||Hy},qn=[],wm=function(e){for(var t=0;t<qn.length;t+=5)(!e||qn[t+4]&&qn[t+4].query===e)&&(qn[t].style.cssText=qn[t+1],qn[t].getBBox&&qn[t].setAttribute("transform",qn[t+2]||""),qn[t+3].uncache=1)},Tm=function(){return lt.forEach(function(e){return yn(e)&&++e.cacheID&&(e.rec=e())})},Ch=function(e,t){var n;for(Pn=0;Pn<rt.length;Pn++)n=rt[Pn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ua=!0,t&&wm(t),t||os("revert")},Am=function(e,t){lt.cache++,(t||!Dn)&&lt.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),$n(e)&&(ot.history.scrollRestoration=bh=e)},Dn,ts=0,df,Wy=function(){if(df!==ts){var e=df=ts;requestAnimationFrame(function(){return e===ts&&qr(!0)})}},Rm=function(){_t.appendChild(Ws),Eh=!Cn&&Ws.offsetHeight||ot.innerHeight,_t.removeChild(Ws)},ff=function(e){return Ja(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},qr=function(e,t){if(Zn=vt.documentElement,_t=vt.body,yh=[ot,vt,Zn,_t],_i&&!e&&!Ua){cn(st,"scrollEnd",Em);return}Rm(),Dn=st.isRefreshing=!0,Ua||Tm();var n=os("refreshInit");fm&&st.sort(),t||Ch(),lt.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),Ua=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Gu=1,ff(!0),rt.forEach(function(i){var s=Ui(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),ff(!1),Gu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Am(bh,1),El.pause(),ts++,Dn=2,nr(2),rt.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Dn=st.isRefreshing=!1,os("refresh")},Hu=0,rl=1,za,nr=function(e){if(e===2||!Dn&&!Ua){st.isUpdating=!0,za&&za.update(0);var t=rt.length,n=vn(),i=n-wc>=50,s=t&&rt[0].scroll();if(rl=Hu>s?-1:1,Dn||(Hu=s),i&&(_i&&!Ol&&n-_i>200&&(_i=0,os("scrollEnd")),Ma=wc,wc=n),rl<0){for(Pn=t;Pn-- >0;)rt[Pn]&&rt[Pn].update(0,i);rl=1}else for(Pn=0;Pn<t;Pn++)rt[Pn]&&rt[Pn].update(0,i);st.isUpdating=!1}Qa=0},Wu=[Mm,ym,Th,wh,hi+ka,hi+Fa,hi+Ba,hi+Oa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],sl=Wu.concat([Qr,es,"boxSizing","max"+ta,"max"+Ah,"position",hi,$t,$t+Ba,$t+Fa,$t+ka,$t+Oa]),Xy=function(e,t,n){Xs(n);var i=e._gsap;if(i.spacerIsNative)Xs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ac=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Wu.length,a=t.style,o=e.style,l;s--;)l=Wu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Th]=o[wh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Qr]=wl(e,Nn)+Qt,a[es]=wl(e,en)+Qt,a[$t]=o[hi]=o[ym]=o[Mm]="0",Xs(i),o[Qr]=o["max"+ta]=n[Qr],o[es]=o["max"+Ah]=n[es],o[$t]=n[$t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},jy=/([A-Z])/g,Xs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(jy,"-$1").toLowerCase())}},Go=function(e){for(var t=sl.length,n=e.style,i=[],s=0;s<t;s++)i.push(sl[s],n[sl[s]]);return i.t=e,i},Yy=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},al={left:0,top:0},pf=function(e,t,n,i,s,a,o,l,c,u,d,h,f,g){yn(e)&&(e=e(l)),$n(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?nl("0"+e.substr(3),n):0));var _=f?f.time():0,p,m,v;if(f&&f.seek(0),isNaN(e)||(e=+e),Ea(e))f&&(e=Pe.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&il(o,n,i,!0);else{yn(t)&&(t=t(l));var y=(e||"0").split(" "),M,R,b,T;v=Un(t,l)||_t,M=Zi(v)||{},(!M||!M.left&&!M.top)&&di(v).display==="none"&&(T=v.style.display,v.style.display="block",M=Zi(v),T?v.style.display=T:v.style.removeProperty("display")),R=nl(y[0],M[i.d]),b=nl(y[1]||"0",n),e=M[i.p]-c[i.p]-u+R+s-b,o&&il(o,b,i,n-b<20||o._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var x=e+n,w=a._isStart;p="scroll"+i.d2,il(a,x,i,w&&x>20||!w&&(d?Math.max(_t[p],Zn[p]):a.parentNode[p])<=x+1),d&&(c=Zi(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Qt))}return f&&v&&(p=Zi(v),f.seek(h),m=Zi(v),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},qy=/(webkit|moz|length|cssText|inset)/i,mf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===_t){e._stOrig=s.cssText,o=di(e);for(a in o)!+a&&!qy.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},Cm=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Vo=function(e,t,n){var i={};i[t.p]="+="+n,Pe.set(e,i)},gf=function(e,t){var n=Dr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,g={};c=c||n();var _=Cm(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){lt.cache++,a.tween&&nr()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=Pe.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",n.wheelHandler),st.isTouch&&cn(e,"touchmove",n.wheelHandler),s},st=(function(){function r(t,n){Ns||r.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),zu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ya){this.update=this.refresh=this.kill=Ci;return}n=cf($n(n)||Ea(n)||n.nodeType?{trigger:n}:n,ko);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,v=s.onSnapComplete,y=s.once,M=s.snap,R=s.pinReparent,b=s.pinSpacer,T=s.containerAnimation,x=s.fastScrollEnd,w=s.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:en,D=!d&&d!==0,L=Un(n.scroller||ot),k=Pe.core.getCache(L),V=ss(L),I=("pinType"in n?n.pinType:Tr(L,"pinType")||V&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=D&&n.toggleActions.split(" "),$="markers"in n?n.markers:ko.markers,Q=V?0:parseFloat(di(L)["border"+P.p2+ta])||0,N=this,pe=n.onRefreshInit&&function(){return n.onRefreshInit(N)},be=By(L,V,P),qe=ky(L,V),ze=0,Ne=0,H=0,ne=Dr(L,P),te,me,Re,ve,Ue,_e,Le,ke,Oe,X,Ge,mt,F,Ye,We,nt,ge,Je,C,S,G,Z,ie,de,se,K,ee,Se,Ae,fe,ce,xe,Xe,Ze,U,le,J,ye,ue;if(N._startClamp=N._endClamp=!1,N._dir=P,p*=45,N.scroller=L,N.scroll=T?T.time.bind(T):ne,ve=ne(),N.vars=n,i=i||n.animation,"refreshPriority"in n&&(fm=1,n.refreshPriority===-9999&&(za=N)),k.tweenScroll=k.tweenScroll||{top:gf(L,en),left:gf(L,Nn)},N.tweenTo=te=k.tweenScroll[P.p],N.scrubDuration=function(ae){Xe=Ea(ae)&&ae,Xe?xe?xe.duration(ae):xe=Pe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Xe,paused:!0,onComplete:function(){return m&&m(N)}}):(xe&&xe.progress(1).kill(),xe=0)},i&&(i.vars.lazy=!1,i._initted&&!N.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),N.animation=i.pause(),i.scrollTrigger=N,N.scrubDuration(d),fe=0,l||(l=i.vars.id)),M&&((!Vr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in _t.style&&Pe.set(V?[_t,Zn]:L,{scrollBehavior:"auto"}),lt.forEach(function(ae){return yn(ae)&&ae.target===(V?vt.scrollingElement||Zn:L)&&(ae.smooth=!1)}),Re=yn(M.snapTo)?M.snapTo:M.snapTo==="labels"?Gy(i):M.snapTo==="labelsDirectional"?Vy(i):M.directional!==!1?function(ae,He){return Rh(M.snapTo)(ae,vn()-Ne<500?0:He.direction)}:Pe.utils.snap(M.snapTo),Ze=M.duration||{min:.1,max:2},Ze=Vr(Ze)?Ia(Ze.min,Ze.max):Ia(Ze,Ze),U=Pe.delayedCall(M.delay||Xe/2||.1,function(){var ae=ne(),He=vn()-Ne<500,De=te.tween;if((He||Math.abs(N.getVelocity())<10)&&!De&&!Ol&&ze!==ae){var $e=(ae-_e)/Ye,jt=i&&!D?i.totalProgress():$e,at=He?0:(jt-ce)/(vn()-Ma)*1e3||0,Dt=Pe.utils.clamp(-$e,1-$e,Cs(at/2)*at/.185),Nt=$e+(M.inertia===!1?0:Dt),Rt,bt,gt=M,pn=gt.onStart,Ct=gt.onInterrupt,rn=gt.onComplete;if(Rt=Re(Nt,N),Ea(Rt)||(Rt=Nt),bt=Math.max(0,Math.round(_e+Rt*Ye)),ae<=Le&&ae>=_e&&bt!==ae){if(De&&!De._initted&&De.data<=Cs(bt-ae))return;M.inertia===!1&&(Dt=Rt-$e),te(bt,{duration:Ze(Cs(Math.max(Cs(Nt-jt),Cs(Rt-jt))*.185/at/.05||0)),ease:M.ease||"power3",data:Cs(bt-ae),onInterrupt:function(){return U.restart(!0)&&Ct&&Rs(N,Ct)},onComplete:function(){N.update(),ze=ne(),i&&!D&&(xe?xe.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),fe=ce=i&&!D?i.totalProgress():N.progress,v&&v(N),rn&&Rs(N,rn)}},ae,Dt*Ye,bt-ae-Dt*Ye),pn&&Rs(N,pn,te.tween)}}else N.isActive&&ze!==ae&&U.restart(!0)}).pause()),l&&(Vu[l]=N),h=N.trigger=Un(h||f!==!0&&f),ue=h&&h._gsap&&h._gsap.stRevert,ue&&(ue=ue(N)),f=f===!0?h:Un(f),$n(o)&&(o={targets:h,className:o}),f&&(g===!1||g===hi||(g=!g&&f.parentNode&&f.parentNode.style&&di(f.parentNode).display==="flex"?!1:$t),N.pin=f,me=Pe.core.getCache(f),me.spacer?We=me.pinState:(b&&(b=Un(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),me.spacerIsNative=!!b,b&&(me.spacerState=Go(b))),me.spacer=Je=b||vt.createElement("div"),Je.classList.add("pin-spacer"),l&&Je.classList.add("pin-spacer-"+l),me.pinState=We=Go(f)),n.force3D!==!1&&Pe.set(f,{force3D:!0}),N.spacer=Je=me.spacer,Ae=di(f),de=Ae[g+P.os2],S=Pe.getProperty(f),G=Pe.quickSetter(f,P.a,Qt),Ac(f,Je,Ae),ge=Go(f)),$){mt=Vr($)?cf($,uf):uf,X=zo("scroller-start",l,L,P,mt,0),Ge=zo("scroller-end",l,L,P,mt,0,X),C=X["offset"+P.op.d2];var re=Un(Tr(L,"content")||L);ke=this.markerStart=zo("start",l,re,P,mt,C,0,T),Oe=this.markerEnd=zo("end",l,re,P,mt,C,0,T),T&&(ye=Pe.quickSetter([ke,Oe],P.a,Qt)),!I&&!(Bi.length&&Tr(L,"fixedMarkers")===!0)&&(zy(V?_t:L),Pe.set([X,Ge],{force3D:!0}),K=Pe.quickSetter(X,P.a,Qt),Se=Pe.quickSetter(Ge,P.a,Qt))}if(T){var oe=T.vars.onUpdate,he=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){N.update(0,0,1),oe&&oe.apply(T,he||[])})}if(N.previous=function(){return rt[rt.indexOf(N)-1]},N.next=function(){return rt[rt.indexOf(N)+1]},N.revert=function(ae,He){if(!He)return N.kill(!0);var De=ae!==!1||!N.enabled,$e=xn;De!==N.isReverted&&(De&&(le=Math.max(ne(),N.scroll.rec||0),H=N.progress,J=i&&i.progress()),ke&&[ke,Oe,X,Ge].forEach(function(jt){return jt.style.display=De?"none":"block"}),De&&(xn=N,N.update(De)),f&&(!R||!N.isActive)&&(De?Xy(f,Je,We):Ac(f,Je,di(f),se)),De||N.update(De),xn=$e,N.isReverted=De)},N.refresh=function(ae,He,De,$e){if(!((xn||!N.enabled)&&!He)){if(f&&ae&&_i){cn(r,"scrollEnd",Em);return}!Dn&&pe&&pe(N),xn=N,te.tween&&!De&&(te.tween.kill(),te.tween=0),xe&&xe.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ee){return Ee.vars.immediateRender&&Ee.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var jt=be(),at=qe(),Dt=T?T.duration():Ui(L,P),Nt=Ye<=.01||!Ye,Rt=0,bt=$e||0,gt=Vr(De)?De.end:n.end,pn=n.endTrigger||h,Ct=Vr(De)?De.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),rn=N.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,N),Wn=h&&Math.max(0,rt.indexOf(N))||0,Yt=Wn,Jt,sn,Vi,us,an,zt,si,E,z,q,W,j,Me;for($&&Vr(De)&&(j=Pe.getProperty(X,P.p),Me=Pe.getProperty(Ge,P.p));Yt-- >0;)zt=rt[Yt],zt.end||zt.refresh(0,1)||(xn=N),si=zt.pin,si&&(si===h||si===f||si===rn)&&!zt.isReverted&&(q||(q=[]),q.unshift(zt),zt.revert(!0,!0)),zt!==rt[Yt]&&(Wn--,Yt--);for(yn(Ct)&&(Ct=Ct(N)),Ct=sf(Ct,"start",N),_e=pf(Ct,h,jt,P,ne(),ke,X,N,at,Q,I,Dt,T,N._startClamp&&"_startClamp")||(f?-.001:0),yn(gt)&&(gt=gt(N)),$n(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=($n(Ct)?Ct.split(" ")[0]:"")+gt:(Rt=nl(gt.substr(2),jt),gt=$n(Ct)?Ct:(T?Pe.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,_e):_e)+Rt,pn=h)),gt=sf(gt,"end",N),Le=Math.max(_e,pf(gt||(pn?"100% 0":Dt),pn,jt,P,ne()+Rt,Oe,Ge,N,at,Q,I,Dt,T,N._endClamp&&"_endClamp"))||-.001,Rt=0,Yt=Wn;Yt--;)zt=rt[Yt]||{},si=zt.pin,si&&zt.start-zt._pinPush<=_e&&!T&&zt.end>0&&(Jt=zt.end-(N._startClamp?Math.max(0,zt.start):zt.start),(si===h&&zt.start-zt._pinPush<_e||si===rn)&&isNaN(Ct)&&(Rt+=Jt*(1-zt.progress)),si===f&&(bt+=Jt));if(_e+=Rt,Le+=Rt,N._startClamp&&(N._startClamp+=Rt),N._endClamp&&!Dn&&(N._endClamp=Le||-.001,Le=Math.min(Le,Ui(L,P))),Ye=Le-_e||(_e-=.01)&&.001,Nt&&(H=Pe.utils.clamp(0,1,Pe.utils.normalize(_e,Le,le))),N._pinPush=bt,ke&&Rt&&(Jt={},Jt[P.a]="+="+Rt,rn&&(Jt[P.p]="-="+ne()),Pe.set([ke,Oe],Jt)),f&&!(Gu&&N.end>=Ui(L,P)))Jt=di(f),us=P===en,Vi=ne(),Z=parseFloat(S(P.a))+bt,!Dt&&Le>1&&(W=(V?vt.scrollingElement||Zn:L).style,W={style:W,value:W["overflow"+P.a.toUpperCase()]},V&&di(_t)["overflow"+P.a.toUpperCase()]!=="scroll"&&(W.style["overflow"+P.a.toUpperCase()]="scroll")),Ac(f,Je,Jt),ge=Go(f),sn=Zi(f,!0),E=I&&Dr(L,us?Nn:en)(),g?(se=[g+P.os2,Ye+bt+Qt],se.t=Je,Yt=g===$t?wl(f,P)+Ye+bt:0,Yt&&(se.push(P.d,Yt+Qt),Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=Yt+Qt)),Xs(se),rn&&rt.forEach(function(Ee){Ee.pin===rn&&Ee.vars.pinSpacing!==!1&&(Ee._subPinOffset=!0)}),I&&ne(le)):(Yt=wl(f,P),Yt&&Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=Yt+Qt)),I&&(an={top:sn.top+(us?Vi-_e:E)+Qt,left:sn.left+(us?E:Vi-_e)+Qt,boxSizing:"border-box",position:"fixed"},an[Qr]=an["max"+ta]=Math.ceil(sn.width)+Qt,an[es]=an["max"+Ah]=Math.ceil(sn.height)+Qt,an[hi]=an[hi+Ba]=an[hi+Fa]=an[hi+ka]=an[hi+Oa]="0",an[$t]=Jt[$t],an[$t+Ba]=Jt[$t+Ba],an[$t+Fa]=Jt[$t+Fa],an[$t+ka]=Jt[$t+ka],an[$t+Oa]=Jt[$t+Oa],nt=Yy(We,an,R),Dn&&ne(0)),i?(z=i._initted,bc(1),i.render(i.duration(),!0,!0),ie=S(P.a)-Z+Ye+bt,ee=Math.abs(Ye-ie)>1,I&&ee&&nt.splice(nt.length-2,2),i.render(0,!0,!0),z||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bc(0)):ie=Ye,W&&(W.value?W.style["overflow"+P.a.toUpperCase()]=W.value:W.style.removeProperty("overflow-"+P.a));else if(h&&ne()&&!T)for(sn=h.parentNode;sn&&sn!==_t;)sn._pinOffset&&(_e-=sn._pinOffset,Le-=sn._pinOffset),sn=sn.parentNode;q&&q.forEach(function(Ee){return Ee.revert(!1,!0)}),N.start=_e,N.end=Le,ve=Ue=Dn?le:ne(),!T&&!Dn&&(ve<le&&ne(le),N.scroll.rec=0),N.revert(!1,!0),Ne=vn(),U&&(ze=-1,U.restart(!0)),xn=0,i&&D&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(Nt||H!==N.progress||T||_||i&&!i._initted)&&(i&&!D&&(i._initted||H||i.vars.immediateRender!==!1)&&i.totalProgress(T&&_e<-.001&&!H?Pe.utils.normalize(_e,Le,0):H,!0),N.progress=Nt||(ve-_e)/Ye===H?0:H),f&&g&&(Je._pinOffset=Math.round(N.progress*ie)),xe&&xe.invalidate(),isNaN(j)||(j-=Pe.getProperty(X,P.p),Me-=Pe.getProperty(Ge,P.p),Vo(X,P,j),Vo(ke,P,j-($e||0)),Vo(Ge,P,Me),Vo(Oe,P,Me-($e||0))),Nt&&!Dn&&N.update(),u&&!Dn&&!F&&(F=!0,u(N),F=!1)}},N.getVelocity=function(){return(ne()-Ue)/(vn()-Ma)*1e3||0},N.endAnimation=function(){pa(N.callbackAnimation),i&&(xe?xe.progress(1):i.paused()?D||pa(i,N.direction<0,1):pa(i,i.reversed()))},N.labelToScroll=function(ae){return i&&i.labels&&(_e||N.refresh()||_e)+i.labels[ae]/i.duration()*Ye||0},N.getTrailing=function(ae){var He=rt.indexOf(N),De=N.direction>0?rt.slice(0,He).reverse():rt.slice(He+1);return($n(ae)?De.filter(function($e){return $e.vars.preventOverlaps===ae}):De).filter(function($e){return N.direction>0?$e.end<=_e:$e.start>=Le})},N.update=function(ae,He,De){if(!(T&&!De&&!ae)){var $e=Dn===!0?le:N.scroll(),jt=ae?0:($e-_e)/Ye,at=jt<0?0:jt>1?1:jt||0,Dt=N.progress,Nt,Rt,bt,gt,pn,Ct,rn,Wn;if(He&&(Ue=ve,ve=T?ne():$e,M&&(ce=fe,fe=i&&!D?i.totalProgress():at)),p&&f&&!xn&&!Uo&&_i&&(!at&&_e<$e+($e-Ue)/(vn()-Ma)*p?at=1e-4:at===1&&Le>$e+($e-Ue)/(vn()-Ma)*p&&(at=.9999)),at!==Dt&&N.enabled){if(Nt=N.isActive=!!at&&at<1,Rt=!!Dt&&Dt<1,Ct=Nt!==Rt,pn=Ct||!!at!=!!Dt,N.direction=at>Dt?1:-1,N.progress=at,pn&&!xn&&(bt=at&&!Dt?0:at===1?1:Dt===1?2:3,D&&(gt=!Ct&&O[bt+1]!=="none"&&O[bt+1]||O[bt],Wn=i&&(gt==="complete"||gt==="reset"||gt in i))),w&&(Ct||Wn)&&(Wn||d||!i)&&(yn(w)?w(N):N.getTrailing(w).forEach(function(Vi){return Vi.endAnimation()})),D||(xe&&!xn&&!Uo?(xe._dp._time-xe._start!==xe._time&&xe.render(xe._dp._time-xe._start),xe.resetTo?xe.resetTo("totalProgress",at,i._tTime/i._tDur):(xe.vars.totalProgress=at,xe.invalidate().restart())):i&&i.totalProgress(at,!!(xn&&(Ne||ae)))),f){if(ae&&g&&(Je.style[g+P.os2]=de),!I)G(ba(Z+ie*at));else if(pn){if(rn=!ae&&at>Dt&&Le+1>$e&&$e+1>=Ui(L,P),R)if(!ae&&(Nt||rn)){var Yt=Zi(f,!0),Jt=$e-_e;mf(f,_t,Yt.top+(P===en?Jt:0)+Qt,Yt.left+(P===en?0:Jt)+Qt)}else mf(f,Je);Xs(Nt||rn?nt:ge),ee&&at<1&&Nt||G(Z+(at===1&&!rn?ie:0))}}M&&!te.tween&&!xn&&!Uo&&U.restart(!0),o&&(Ct||y&&at&&(at<1||!Ec))&&Ja(o.targets).forEach(function(Vi){return Vi.classList[Nt||y?"add":"remove"](o.className)}),a&&!D&&!ae&&a(N),pn&&!xn?(D&&(Wn&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),a&&a(N)),(Ct||!Ec)&&(c&&Ct&&Rs(N,c),B[bt]&&Rs(N,B[bt]),y&&(at===1?N.kill(!1,1):B[bt]=0),Ct||(bt=at===1?1:3,B[bt]&&Rs(N,B[bt]))),x&&!Nt&&Math.abs(N.getVelocity())>(Ea(x)?x:2500)&&(pa(N.callbackAnimation),xe?xe.progress(1):pa(i,gt==="reverse"?1:!at,1))):D&&a&&!xn&&a(N)}if(Se){var sn=T?$e/T.duration()*(T._caScrollDist||0):$e;K(sn+(X._isFlipped?1:0)),Se(sn)}ye&&ye(-$e/T.duration()*(T._caScrollDist||0))}},N.enable=function(ae,He){N.enabled||(N.enabled=!0,cn(L,"resize",wa),V||cn(L,"scroll",Ps),pe&&cn(r,"refreshInit",pe),ae!==!1&&(N.progress=H=0,ve=Ue=ze=ne()),He!==!1&&N.refresh())},N.getTween=function(ae){return ae&&te?te.tween:xe},N.setPositions=function(ae,He,De,$e){if(T){var jt=T.scrollTrigger,at=T.duration(),Dt=jt.end-jt.start;ae=jt.start+Dt*ae/at,He=jt.start+Dt*He/at}N.refresh(!1,!1,{start:af(ae,De&&!!N._startClamp),end:af(He,De&&!!N._endClamp)},$e),N.update()},N.adjustPinSpacing=function(ae){if(se&&ae){var He=se.indexOf(P.d)+1;se[He]=parseFloat(se[He])+ae+Qt,se[1]=parseFloat(se[1])+ae+Qt,Xs(se)}},N.disable=function(ae,He){if(ae!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,He||xe&&xe.pause(),le=0,me&&(me.uncache=1),pe&&ln(r,"refreshInit",pe),U&&(U.pause(),te.tween&&te.tween.kill()&&(te.tween=0)),!V)){for(var De=rt.length;De--;)if(rt[De].scroller===L&&rt[De]!==N)return;ln(L,"resize",wa),V||ln(L,"scroll",Ps)}},N.kill=function(ae,He){N.disable(ae,He),xe&&!He&&xe.kill(),l&&delete Vu[l];var De=rt.indexOf(N);De>=0&&rt.splice(De,1),De===Pn&&rl>0&&Pn--,De=0,rt.forEach(function($e){return $e.scroller===N.scroller&&(De=1)}),De||Dn||(N.scroll.rec=0),i&&(i.scrollTrigger=null,ae&&i.revert({kill:!1}),He||i.kill()),ke&&[ke,Oe,X,Ge].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),za===N&&(za=0),f&&(me&&(me.uncache=1),De=0,rt.forEach(function($e){return $e.pin===f&&De++}),De||(me.spacer=0)),n.onKill&&n.onKill(N)},rt.push(N),N.enable(!1,!1),ue&&ue(N),i&&i.add&&!Ye){var Ve=N.update;N.update=function(){N.update=Ve,lt.cache++,_e||Le||N.refresh()},Pe.delayedCall(.01,N.update),Ye=.01,_e=Le=0}else N.refresh();f&&Wy()},r.register=function(n){return Ns||(Pe=n||xm(),_m()&&window.document&&r.enable(),Ns=ya),Ns},r.defaults=function(n){if(n)for(var i in n)ko[i]=n[i];return ko},r.disable=function(n,i){ya=0,rt.forEach(function(a){return a[i?"kill":"disable"](n)}),ln(ot,"wheel",Ps),ln(vt,"scroll",Ps),clearInterval(Io),ln(vt,"touchcancel",Ci),ln(_t,"touchstart",Ci),Oo(ln,vt,"pointerdown,touchstart,mousedown",of),Oo(ln,vt,"pointerup,touchend,mouseup",lf),El.kill(),Fo(ln);for(var s=0;s<lt.length;s+=3)Bo(ln,lt[s],lt[s+1]),Bo(ln,lt[s],lt[s+2])},r.enable=function(){if(ot=window,vt=document,Zn=vt.documentElement,_t=vt.body,Pe){if(Ja=Pe.utils.toArray,Ia=Pe.utils.clamp,zu=Pe.core.context||Ci,bc=Pe.core.suppressOverwrites||Ci,bh=ot.history.scrollRestoration||"auto",Hu=ot.pageYOffset||0,Pe.core.globals("ScrollTrigger",r),_t){ya=1,Ws=document.createElement("div"),Ws.style.height="100vh",Ws.style.position="absolute",Rm(),Oy(),Xt.register(Pe),r.isTouch=Xt.isTouch,gr=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ku=Xt.isTouch===1,cn(ot,"wheel",Ps),yh=[ot,vt,Zn,_t],Pe.matchMedia?(r.matchMedia=function(u){var d=Pe.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},Pe.addEventListener("matchMediaInit",function(){Tm(),Ch()}),Pe.addEventListener("matchMediaRevert",function(){return wm()}),Pe.addEventListener("matchMedia",function(){qr(0,1),os("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return Tc(),Tc})):console.warn("Requires GSAP 3.11.0 or later"),Tc(),cn(vt,"scroll",Ps);var n=_t.hasAttribute("style"),i=_t.style,s=i.borderTopStyle,a=Pe.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Zi(_t),en.m=Math.round(o.top+en.sc())||0,Nn.m=Math.round(o.left+Nn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),Io=setInterval(hf,250),Pe.delayedCall(.5,function(){return Uo=0}),cn(vt,"touchcancel",Ci),cn(_t,"touchstart",Ci),Oo(cn,vt,"pointerdown,touchstart,mousedown",of),Oo(cn,vt,"pointerup,touchend,mouseup",lf),Bu=Pe.utils.checkPrefix("transform"),sl.push(Bu),Ns=vn(),El=Pe.delayedCall(.2,qr).pause(),Ls=[vt,"visibilitychange",function(){var u=ot.innerWidth,d=ot.innerHeight;vt.hidden?(nf=u,rf=d):(nf!==u||rf!==d)&&wa()},vt,"DOMContentLoaded",qr,ot,"load",qr,ot,"resize",wa],Fo(cn),rt.forEach(function(u){return u.enable(0,1)}),l=0;l<lt.length;l+=3)Bo(ln,lt[l],lt[l+1]),Bo(ln,lt[l],lt[l+2])}else if(vt){var c=function u(){r.enable(),vt.removeEventListener("DOMContentLoaded",u)};vt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Ec=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Io)||(Io=i)&&setInterval(hf,i),"ignoreMobileResize"in n&&(ku=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fo(ln)||Fo(cn,n.autoRefreshEvents||"none"),pm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Un(n),a=lt.indexOf(s),o=ss(s);~a&&lt.splice(a,o?6:2),i&&(o?Bi.unshift(ot,i,_t,i,Zn,i):Bi.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=($n(n)?Un(n):n).getBoundingClientRect(),o=a[s?Qr:es]*i||0;return s?a.right-o>0&&a.left+o<ot.innerWidth:a.bottom-o>0&&a.top+o<ot.innerHeight},r.positionInViewport=function(n,i,s){$n(n)&&(n=Un(n));var a=n.getBoundingClientRect(),o=a[s?Qr:es],l=i==null?o/2:i in Tl?Tl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ot.innerWidth:(a.top+l)/ot.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=as.killAll||[];as={},i.forEach(function(s){return s()})}},r})();st.version="3.15.0";st.saveStyles=function(r){return r?Ja(r).forEach(function(e){if(e&&e.style){var t=qn.indexOf(e);t>=0&&qn.splice(t,5),qn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),zu())}}):qn};st.revert=function(r,e){return Ch(!r,e)};st.create=function(r,e){return new st(r,e)};st.refresh=function(r){return r?wa(!0):(Ns||st.register())&&qr(!0)};st.update=function(r){return++lt.cache&&nr(r===!0?2:0)};st.clearScrollMemory=Am;st.maxScroll=function(r,e){return Ui(r,e?Nn:en)};st.getScrollFunc=function(r,e){return Dr(Un(r),e?Nn:en)};st.getById=function(r){return Vu[r]};st.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};st.isScrolling=function(){return!!_i};st.snapDirectional=Rh;st.addEventListener=function(r,e){var t=as[r]||(as[r]=[]);~t.indexOf(e)||t.push(e)};st.removeEventListener=function(r,e){var t=as[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};st.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=Pe.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&yn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return yn(s)&&(s=s(),cn(st,"refresh",function(){return s=e.batchMax()})),Ja(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(st.create(c))}),t};var _f=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Rc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===Zn&&r(_t,t)},Ho={auto:1,scroll:1},$y=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Pe.core.getCache(s),o=vn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ho[(l=di(s)).overflowY]||Ho[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ss(s)&&(Ho[(l=di(s)).overflowY]||Ho[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Pm=function(e,t,n,i){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&$y,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(vt,Xt.eventTypes[0],vf,!1,!0)},onDisable:function(){return ln(vt,Xt.eventTypes[0],vf,!0)}})},Ky=/(input|label|select|textarea)/i,xf,vf=function(e){var t=Ky.test(e.target.tagName);(t||xf)&&(e._gsapAllow=!0,xf=t)},Zy=function(e){Vr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Un(e.target)||Zn,u=Pe.core.globals().ScrollSmoother,d=u&&u.get(),h=gr&&(e.content&&Un(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=Dr(c,en),g=Dr(c,Nn),_=1,p=(Xt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,m=0,v=yn(i)?function(){return i(o)}:function(){return i||2.8},y,M,R=Pm(c,e.type,!0,s),b=function(){return M=!1},T=Ci,x=Ci,w=function(){l=Ui(c,en),x=Ia(gr?1:0,l),n&&(T=Ia(0,Ui(c,Nn))),y=ts},P=function(){h._gsap.y=ba(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(M){requestAnimationFrame(b);var $=ba(o.deltaY/2),Q=x(f.v-$);if(h&&Q!==f.v+f.offset){f.offset=Q-f.v;var N=ba((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",h._gsap.y=N+"px",f.cacheID=lt.cache,nr()}return!0}f.offset&&P(),M=!0},L,k,V,I,B=function(){w(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return h&&Pe.set(h,{y:"+=0"}),e.ignoreCheck=function(O){return gr&&O.type==="touchmove"&&D()||_>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){M=!1;var O=_;_=ba((ot.visualViewport&&ot.visualViewport.scale||1)/p),L.pause(),O!==_&&Rc(c,_>1.01?!0:n?!1:"x"),k=g(),V=f(),w(),y=ts},e.onRelease=e.onGestureStart=function(O,$){if(f.offset&&P(),!$)I.restart(!0);else{lt.cache++;var Q=v(),N,pe;n&&(N=g(),pe=N+Q*.05*-O.velocityX/.227,Q*=_f(g,N,pe,Ui(c,Nn)),L.vars.scrollX=T(pe)),N=f(),pe=N+Q*.05*-O.velocityY/.227,Q*=_f(f,N,pe,Ui(c,en)),L.vars.scrollY=x(pe),L.invalidate().duration(Q).play(.01),(gr&&L.vars.scrollY>=l||N>=l-1)&&Pe.to({},{onUpdate:B,duration:Q})}a&&a(O)},e.onWheel=function(){L._ts&&L.pause(),vn()-m>1e3&&(y=0,m=vn())},e.onChange=function(O,$,Q,N,pe){if(ts!==y&&w(),$&&n&&g(T(N[2]===$?k+(O.startX-O.x):g()+$-N[1])),Q){f.offset&&P();var be=pe[2]===Q,qe=be?V+O.startY-O.y:f()+Q-pe[1],ze=x(qe);be&&qe!==ze&&(V+=ze-qe),f(ze)}(Q||$)&&nr()},e.onEnable=function(){Rc(c,n?!1:"x"),st.addEventListener("refresh",B),cn(ot,"resize",B),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){Rc(c,!0),ln(ot,"resize",B),st.removeEventListener("refresh",B),R.kill()},e.lockAxis=e.lockAxis!==!1,o=new Xt(e),o.iOS=gr,gr&&!f()&&f(1),gr&&Pe.ticker.add(Ci),I=o._dc,L=Pe.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Cm(f,f(),function(){return L.pause()})},onUpdate:nr,onComplete:I.vars.onComplete}),o};st.sort=function(r){if(yn(r))return rt.sort(r);var e=ot.pageYOffset||0;return st.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ot.innerHeight}),rt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};st.observe=function(r){return new Xt(r)};st.normalizeScroll=function(r){if(typeof r>"u")return Cn;if(r===!0&&Cn)return Cn.enable();if(r===!1){Cn&&Cn.kill(),Cn=r;return}var e=r instanceof Xt?r:Zy(r);return Cn&&Cn.target===e.target&&Cn.kill(),ss(e.target)&&(Cn=e),e};st.core={_getVelocityProp:Ou,_inputObserver:Pm,_scrollers:lt,_proxies:Bi,bridge:{ss:function(){_i||os("scrollStart"),_i=vn()},ref:function(){return xn}}};xm()&&Pe.registerPlugin(st);ro.registerPlugin(st);function Jy(){return Ke.useEffect(()=>{const r=new fM({duration:1.2,easing:n=>Math.min(1,1.001-Math.pow(2,-10*n)),smoothWheel:!0});r.on("scroll",st.update);let e=0;const t=n=>{r.raf(n),e=requestAnimationFrame(t)};return e=requestAnimationFrame(t),()=>{cancelAnimationFrame(e),r.destroy()}},[]),null}const Dm=(...r)=>r.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();const Qy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const eb=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());const Sf=r=>{const e=eb(r);return e.charAt(0).toUpperCase()+e.slice(1)};var tb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const nb=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const ib=Ke.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:i="",children:s,iconNode:a,...o},l)=>Ke.createElement("svg",{ref:l,...tb,width:e,height:e,stroke:r,strokeWidth:n?Number(t)*24/Number(e):t,className:Dm("lucide",i),...!s&&!nb(o)&&{"aria-hidden":"true"},...o},[...a.map(([c,u])=>Ke.createElement(c,u)),...Array.isArray(s)?s:[s]]));const Mt=(r,e)=>{const t=Ke.forwardRef(({className:n,...i},s)=>Ke.createElement(ib,{ref:s,iconNode:e,className:Dm(`lucide-${Qy(Sf(r))}`,`lucide-${r}`,n),...i}));return t.displayName=Sf(r),t};const rb=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Al=Mt("arrow-up-right",rb);const sb=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ab=Mt("award",sb);const ob=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],lb=Mt("boxes",ob);const cb=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],ub=Mt("briefcase",cb);const hb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],db=Mt("calendar",hb);const fb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],pb=Mt("chevron-left",fb);const mb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gb=Mt("chevron-right",mb);const _b=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],xb=Mt("code-xml",_b);const vb=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Sb=Mt("database",vb);const Mb=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],yb=Mt("download",Mb);const bb=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Eb=Mt("ellipsis-vertical",bb);const wb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Tb=Mt("external-link",wb);const Ab=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],Rb=Mt("facebook",Ab);const Cb=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Pb=Mt("file-text",Cb);const Db=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Nb=Mt("github",Db);const Lb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ib=Mt("globe",Lb);const Ub=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Fb=Mt("graduation-cap",Ub);const Ob=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Bb=Mt("layers",Ob);const kb=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],zb=Mt("linkedin",kb);const Gb=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Vb=Mt("loader-circle",Gb);const Hb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Mf=Mt("mail",Hb);const Wb=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Xb=Mt("map-pin",Wb);const jb=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Yb=Mt("message-circle",jb);const qb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],$b=Mt("plus",qb);const Kb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Zb=Mt("search",Kb);const Jb=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Qb=Mt("send",Jb);const e1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],t1=Mt("sparkles",e1);const n1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],sa=Mt("x",n1);const i1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],r1=Mt("zap",i1),yf=[{label:"Work",href:"#work"},{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Experience",href:"#experience"},{label:"Contact",href:"#contact"}];function s1(){const[r,e]=Ke.useState(!1),[t,n]=Ke.useState(!1);return Ke.useEffect(()=>{const i=()=>e(window.scrollY>80);return i(),window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),Ke.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),A.jsxs(A.Fragment,{children:[A.jsx("header",{className:`fixed left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${r?"top-4":"top-0"}`,children:A.jsxs("div",{className:`mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${r?"w-[min(94%,920px)] gap-3 rounded-full border border-white/15 bg-black/60 px-4 py-2.5 shadow-[0_8px_40px_-10px_rgba(255,255,255,0.15)] backdrop-blur-2xl md:gap-6 md:px-6":"max-w-7xl gap-4 px-4 py-5 md:gap-10 md:px-6 md:py-6"}`,children:[A.jsxs("a",{href:"#top",className:"font-display text-sm font-semibold tracking-tight text-white md:text-base","data-cursor":"hover",children:[A.jsx("span",{children:"⌬"}),A.jsx("span",{className:"ml-1.5 hidden sm:inline",children:"PRIYO·GHOSH"}),A.jsx("span",{className:"ml-1.5 inline sm:hidden",children:"PRIYO"})]}),A.jsx("nav",{className:"hidden items-center md:flex md:gap-8",children:yf.map(i=>A.jsx("a",{href:i.href,className:"underline-grow whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white md:text-[11px] md:tracking-[0.2em]","data-cursor":"hover",children:i.label},i.href))}),A.jsx("a",{href:"#contact",className:`hidden rounded-full border border-white/30 text-[10px] uppercase tracking-[0.2em] text-white transition-all hover:border-white hover:bg-white hover:text-black md:inline-block ${r?"px-4 py-1.5":"px-5 py-2"}`,"data-cursor":"hover",children:"Let's talk"}),A.jsx("button",{type:"button","aria-label":"Open menu",onClick:()=>n(!0),className:"flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white hover:text-black md:hidden","data-cursor":"hover",children:A.jsx(Eb,{className:"h-4 w-4"})})]})}),A.jsxs("div",{className:`fixed inset-0 z-[60] md:hidden ${t?"pointer-events-auto":"pointer-events-none"}`,"aria-hidden":!t,children:[A.jsx("div",{className:`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${t?"opacity-100":"opacity-0"}`,onClick:()=>n(!1)}),A.jsxs("aside",{className:`absolute right-0 top-0 h-full w-[78%] max-w-[320px] border-l border-white/10 bg-black px-6 pb-10 pt-6 shadow-[0_0_60px_-10px_rgba(255,255,255,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${t?"translate-x-0":"translate-x-full"}`,children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsxs("span",{className:"font-display text-sm font-semibold tracking-tight text-white",children:[A.jsx("span",{children:"⌬"}),A.jsx("span",{className:"ml-1.5",children:"PRIYO·GHOSH"})]}),A.jsx("button",{type:"button","aria-label":"Close menu",onClick:()=>n(!1),className:"flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white hover:text-black",children:A.jsx(sa,{className:"h-4 w-4"})})]}),A.jsx("nav",{className:"mt-12 flex flex-col gap-1",children:yf.map((i,s)=>A.jsxs("a",{href:i.href,onClick:()=>n(!1),className:"group flex items-center justify-between border-b border-white/10 py-4 text-white transition-colors hover:text-white/70",style:{transitionDelay:t?`${s*60+120}ms`:"0ms",opacity:t?1:0,transform:t?"translateX(0)":"translateX(20px)",transitionProperty:"opacity, transform, color",transitionDuration:"500ms"},children:[A.jsx("span",{className:"font-display text-2xl tracking-tight",children:i.label}),A.jsxs("span",{className:"text-[10px] uppercase tracking-[0.2em] text-white/40",children:["0",s+1]})]},i.href))}),A.jsx("a",{href:"#contact",onClick:()=>n(!1),className:"mt-10 inline-flex w-full items-center justify-center rounded-full border border-white/30 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-white transition-all hover:border-white hover:bg-white hover:text-black",children:"Let's talk"})]})]})]})}ro.registerPlugin(st);function Ot({children:r,delay:e=0,y:t=40,className:n="",as:i="div"}){const s=Ke.useRef(null);return Ke.useEffect(()=>{const a=s.current;a&&ro.fromTo(a,{opacity:0,y:t},{opacity:1,y:0,duration:1,delay:e,ease:"power3.out",scrollTrigger:{trigger:a,start:"top 85%",toggleActions:"play none none none"}})},[e,t]),A.jsx(i,{ref:s,className:n,children:r})}function ol({text:r,className:e="",delay:t=0,stagger:n=.04}){const i=Ke.useRef(null);return Ke.useEffect(()=>{const s=i.current;if(!s)return;const a=s.querySelectorAll("[data-word]");ro.fromTo(a,{yPercent:110,opacity:0},{yPercent:0,opacity:1,duration:1.1,ease:"power4.out",stagger:n,delay:t,scrollTrigger:{trigger:s,start:"top 90%",toggleActions:"play none none none"}})},[t,n]),A.jsx("span",{ref:i,className:`inline-block ${e}`,children:r.split(" ").map((s,a)=>A.jsx("span",{className:"inline-block overflow-hidden align-bottom",style:{paddingBottom:"0.1em",marginRight:"0.25em"},children:A.jsx("span",{"data-word":!0,className:"inline-block",children:s})},a))})}const a1="/assets/profile_sut-D4dIQpvw.png",bf=["Full-stack developer","Shopify customization","React & Next.js","Database systems","Responsive interfaces"],Cc=["React","Next.js","JavaScript","Tailwind","Node.js","MongoDB","MySQL","Python","Java","C"];function o1(){const[r,e]=Ke.useState(0);return Ke.useEffect(()=>{const t=setInterval(()=>e(n=>(n+1)%bf.length),2400);return()=>clearInterval(t)},[]),A.jsx("section",{id:"top",className:"relative flex min-h-screen items-center px-6 pt-32 pb-16",children:A.jsxs("div",{className:"mx-auto w-full max-w-7xl",children:[A.jsxs("div",{className:"mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/50",children:[A.jsx("span",{className:"h-px w-12 bg-white/30"}),"Portfolio · Priyo Ghosh · 2026"]}),A.jsxs("div",{className:"grid gap-12 md:grid-cols-12 md:items-end",children:[A.jsx(Ot,{y:30,className:"md:col-span-3 md:order-2",children:A.jsxs("div",{className:"relative mx-auto w-44 md:ml-auto md:mr-0 md:w-full md:max-w-[240px]",children:[A.jsx("div",{className:"absolute -inset-3 rounded-full border border-white/10"}),A.jsx("div",{className:"absolute -inset-6 rounded-full border border-white/5"}),A.jsx("div",{className:"relative aspect-square overflow-hidden rounded-full border border-white/20 shadow-[0_0_60px_-10px_rgba(255,255,255,0.25)]",children:A.jsx("img",{src:a1,alt:"Priyo Ghosh portrait",width:240,height:240,className:"h-full w-full object-cover grayscale"})}),A.jsxs("span",{className:"absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-black px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-white",children:["<>"," Available ","</>"]})]})}),A.jsx("div",{className:"md:col-span-9 md:order-1",children:A.jsxs("h1",{className:"font-display text-[clamp(2.6rem,9vw,9rem)] font-bold leading-[0.92] tracking-[-0.04em] text-white",children:[A.jsx(ol,{text:"Hello"}),A.jsx("br",{}),A.jsx(ol,{text:"I'm",delay:.15,className:"italic text-white/90 ff"}),A.jsx("br",{}),A.jsx(ol,{text:"Priyo.",delay:.3})]})})]}),A.jsxs("div",{className:"mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end",children:[A.jsxs("p",{className:"max-w-md text-base leading-relaxed text-white/60 md:text-lg",children:["Aspiring full-stack developer building responsive web sites at the intersection of ",A.jsx("span",{className:"text-white",children:"code"}),","," ",A.jsx("span",{className:"text-white",children:"design"}),", and"," ",A.jsx("span",{className:"text-white",children:"data"}),"."]}),A.jsxs("div",{className:"flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/50",children:[A.jsx(t1,{className:"h-3.5 w-3.5 text-white"}),A.jsx("span",{className:"overflow-hidden",children:A.jsx("span",{className:"block animate-[fade-in_0.6s_ease-out] text-white",children:bf[r]},r)})]})]}),A.jsx(Ot,{delay:.3,className:"mt-14",children:A.jsx("div",{className:"relative overflow-hidden border-y border-white/10 py-4",children:A.jsx("div",{className:"marquee gap-12 whitespace-nowrap text-[11px] uppercase tracking-[0.4em] text-white/50",children:[...Cc,...Cc,...Cc].map((t,n)=>A.jsxs("span",{className:"flex items-center gap-12",children:[A.jsx("span",{className:"text-white/80",children:t}),A.jsx("span",{className:"h-1 w-1 rounded-full bg-white/30"})]},n))})})}),A.jsx("div",{className:"mt-12 grid grid-cols-2 gap-6 md:grid-cols-4",children:[{v:"2+",l:"Years coding"},{v:"10+",l:"Projects"},{v:"2",l:"Companies"},{v:"B.Sc.",l:"CSE · 2026"}].map((t,n)=>A.jsx(Ot,{delay:.1+n*.05,children:A.jsxs("div",{className:"flex items-baseline gap-3 border-l border-white/15 pl-4",children:[A.jsx("div",{className:"font-display text-3xl font-semibold text-white md:text-4xl",children:t.v}),A.jsx("div",{className:"text-[10px] uppercase tracking-[0.3em] text-white/50",children:t.l})]})},t.l))}),A.jsxs(Ot,{delay:.4,className:"mt-12 flex flex-wrap items-center gap-4",children:[A.jsxs("a",{href:"#work","data-cursor":"hover",className:"group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-black transition-transform hover:scale-105",children:["View work",A.jsx(Al,{className:"h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"})]}),A.jsx("a",{href:"/Resume.pdf",download:"Priyo_Ghosh_CV.pdf","data-cursor":"hover",className:"inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition-colors hover:border-white hover:bg-white hover:text-black",children:"Download CV"})]})]})})}const Ef="/assets/profile_3_Rbg-B97Eg3zO.png",Wo=[{type:"academic",badge:"01 — Academic",title:"A computer-science foundation, in progress.",subtitle:"B.Sc. CSE · Green University of Bangladesh",body:["Pursuing a B.Sc. in Computer Science and Engineering at Green University of Bangladesh, graduating in 2026.","Earlier completed HSC (Science) at Kaliganj Govt. College and SSC (Science) at Dr. Mujib-Ruby Model High School — solid grounding in math, problem solving and CS fundamentals."],highlights:[{v:"B.Sc.",l:"CSE"},{v:"2026",l:"Graduation"},{v:"GUB",l:"University"},{v:"CP",l:"Codeforces"}],image:Ef},{type:"industrial",badge:"02 — Industrial",title:"Shipping responsive products for real teams.",subtitle:"Softvance · Sardar IT",body:["Currently building responsive web pages and CMS interfaces at Softvance Delta (Bitopia Group) in Dhaka.","Previously at Sardar IT, converting Figma designs into clean Tailwind interfaces and shipping marketing pages with HTML, CSS and JavaScript."],highlights:[{v:"2",l:"Companies"},{v:"10+",l:"Projects"},{v:"Web",l:"Focus"},{v:"CMS",l:"Built"}],image:Ef}];function l1(){const[r,e]=Ke.useState(0),t=Wo[r],n=i=>{e(s=>(s+i+Wo.length)%Wo.length)};return A.jsx("section",{id:"about",className:"relative px-6 py-32 md:py-48",children:A.jsxs("div",{className:"mx-auto max-w-7xl",children:[A.jsx(Ot,{children:A.jsx("span",{className:"text-xs uppercase tracking-[0.4em] text-white/50",children:"( 01 ) — About"})}),A.jsx(Ot,{delay:.1,children:A.jsx("h2",{className:"mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl",children:A.jsx(ol,{text:"I design and build interfaces that feel as good as they look.",stagger:.03})})}),A.jsxs("div",{className:"mt-16 grid gap-12 md:grid-cols-12 md:items-center",children:[A.jsx("div",{className:"md:col-span-4",children:A.jsxs("div",{className:"relative aspect-[4/5] w-full animate-[fade-in_0.6s_ease-out] overflow-hidden rounded-sm border border-white/10",children:[A.jsx("img",{src:t.image,alt:t.type,loading:"lazy",width:400,height:500,className:"h-full w-full object-cover grayscale"}),A.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"}),A.jsxs("div",{className:"absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur",children:[t.type==="academic"?A.jsx(Fb,{className:"h-3.5 w-3.5"}):A.jsx(ub,{className:"h-3.5 w-3.5"}),t.type]})]},`img-${r}`)}),A.jsxs("div",{className:"md:col-span-8 md:pl-12",children:[A.jsxs("div",{className:"flex items-center justify-between gap-4",children:[A.jsx("span",{className:"text-[10px] uppercase tracking-[0.3em] text-white/50",children:t.badge}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("button",{onClick:()=>n(-1),"data-cursor":"hover","aria-label":"Previous",className:"flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black",children:A.jsx(pb,{className:"h-4 w-4"})}),A.jsx("button",{onClick:()=>n(1),"data-cursor":"hover","aria-label":"Next",className:"flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black",children:A.jsx(gb,{className:"h-4 w-4"})})]})]}),A.jsxs("div",{className:"animate-[fade-in_0.5s_ease-out]",children:[A.jsx("h3",{className:"mt-6 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl",children:t.title}),A.jsx("p",{className:"mt-3 text-sm uppercase tracking-[0.2em] text-white/50",children:t.subtitle}),A.jsx("div",{className:"mt-8 max-w-xl space-y-4 text-white/65",children:t.body.map((i,s)=>A.jsx("p",{className:"leading-relaxed",children:i},s))}),A.jsx("div",{className:"mt-10 grid grid-cols-2 gap-6 md:grid-cols-4",children:t.highlights.map(i=>A.jsxs("div",{className:"border-l border-white/15 pl-4",children:[A.jsx("div",{className:"font-display text-2xl font-semibold text-white md:text-3xl",children:i.v}),A.jsx("div",{className:"mt-1 text-[10px] uppercase tracking-[0.3em] text-white/50",children:i.l})]},i.l))})]},`txt-${r}`),A.jsx("div",{className:"mt-10 flex items-center gap-2",children:Wo.map((i,s)=>A.jsx("button",{onClick:()=>e(s),"data-cursor":"hover","aria-label":i.type,className:`h-1 rounded-full transition-all duration-500 ${s===r?"w-12 bg-white":"w-6 bg-white/20"}`},i.type))})]})]})]})})}const c1=[{icon:xb,title:"Frontend Development",desc:"HTML, CSS, JavaScript, React, Next.js — building responsive, user-friendly interfaces."},{icon:Bb,title:"UI Frameworks",desc:"Tailwind CSS and Material-UI for fast, consistent design systems."},{icon:lb,title:"Backend & Node",desc:"Node.js services, REST APIs and CMS integrations."},{icon:Sb,title:"Databases",desc:"MongoDB and MySQL — schema design, queries, triggers and constraints."},{icon:r1,title:"Programming",desc:"C, Java, Python and JavaScript — strong fundamentals from competitive programming."},{icon:Ib,title:"Shopify & CMS",desc:"Theme customization, storefront tweaks and CMS-driven page building."}];function u1(){return A.jsx("section",{id:"skills",className:"relative px-6 py-32 md:py-48",children:A.jsxs("div",{className:"mx-auto max-w-7xl",children:[A.jsxs("div",{className:"mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end",children:[A.jsxs("div",{children:[A.jsx(Ot,{children:A.jsx("span",{className:"text-xs uppercase tracking-[0.4em] text-white/50",children:"( 02 ) — Capabilities"})}),A.jsx(Ot,{delay:.1,children:A.jsx("h2",{className:"mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl",children:"What I do."})})]}),A.jsx(Ot,{delay:.2,className:"max-w-md text-white/60",children:"A focused toolkit honed across seven years and dozens of products — from indie studios to enterprise platforms."})]}),A.jsx("div",{className:"grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3",children:c1.map((r,e)=>A.jsx(Ot,{delay:e*.05,y:20,children:A.jsxs("div",{className:"group relative h-full bg-black p-8 transition-all duration-500 hover:bg-white/[0.03]","data-cursor":"hover",children:[A.jsxs("div",{className:"absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",children:[A.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"}),A.jsx("div",{className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"})]}),A.jsxs("div",{className:"relative",children:[A.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[A.jsx(r.icon,{className:"h-6 w-6 text-white transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"}),A.jsxs("span",{className:"font-mono text-xs text-white/30",children:["0",e+1]})]}),A.jsx("h3",{className:"font-display text-xl font-medium text-white",children:r.title}),A.jsx("p",{className:"mt-3 text-sm leading-relaxed text-white/55",children:r.desc})]})]})},r.title))})]})})}const h1=[{title:"The Atelier",category:"Brand Identity",type:"Web",year:"2025",desc:"Boutique multi-page experience for a London-based atelier — refined typography and motion-led storytelling.",tags:["React","Tailwind","GSAP"],liveUrl:"https://theatelier.london/",preview:"/projects/theatelier.jpg"},{title:"Sardar IT — Marketing",category:"Brand Identity",type:"Web",year:"2025",desc:"Responsive marketing site converting Figma into clean, conversion-focused interfaces.",tags:["HTML","CSS","Tailwind"],liveUrl:"https://theatelier.london/",preview:"../projects/Btn Arts.jpeg"},{title:"Softvance CMS",category:"SaaS Platform",type:"Web",year:"2025",desc:"Content-managed dashboard surfaces for the Bitopia Group, focused on speed and editor ergonomics.",tags:["React","Next.js","Node.js"],liveUrl:"https://theatelier.london/",preview:"/projects/Schenee.png"},{title:"University Management System",category:"Product Design",type:"Web",year:"2024",desc:"University admission database with students, courses, instructors and departments — built with SQL queries, triggers and constraints.",tags:["MySQL","SQL","Schema"],liveUrl:"https://theatelier.london/",preview:"/projects/yemo.jpeg"},{title:"Portfolio Website",category:"Brand Identity",type:"Web",year:"2024",desc:"Personal portfolio designed and developed with HTML, CSS and JavaScript — responsive and interactive.",tags:["HTML","CSS","JS"],liveUrl:"https://theatelier.london/",preview:"/projects/BAYT-EL-HIJAB.png"},{title:"Codeforces Practice",category:"Product Design",type:"Web",year:"2024",desc:"Curated repository of competitive-programming solutions covering algorithms and data structures.",tags:["C++","Algorithms","DS"],liveUrl:"https://theatelier.london/",preview:"/projects/WALKER-S-FINEST-BARBERSHOP-BEAUTY-SUPPLY-–-Walkers-Finest-Barbershop-Beauty-Supply.png"},{title:"Shopify Customizations",category:"Mobile App",type:"Web",year:"2024",desc:"Theme customizations and storefront tweaks for international Shopify clients.",tags:["Shopify","Liquid","JS"],liveUrl:"https://theatelier.london/",preview:"/projects/Belleau-lumina.png"},{title:"Material UI Dashboard",category:"SaaS Platform",type:"Web",year:"2024",desc:"Internal admin dashboard built with React and Material-UI — tables, charts and role-based views.",tags:["React","Material-UI","MongoDB"],liveUrl:"https://theatelier.london/",preview:"/projects/Nutrinook.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/ELARA.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/aromatikdripz.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/bella-Snoutt-Co.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/Klumari-Premium-Anti-Aging-Skin-Care.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/AUREN™-Cutting-Mix-–-auren.jpeg"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/SPINTO-FITNESS-USA.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/Voordelige-Hoesjes-Screenprotectors-Topkwaliteit-bij-Goedhoesje-nl.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/robert.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/dispenser.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/sergical.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/Love Of Country.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/Luxury-Hair-Extension.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/Phoenix-Baby-Resale.png"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/clawed.jpeg"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/mazalcare.jpeg"},{title:"Tailwind Landing Kit",category:"Brand Identity",type:"Web",year:"2024",desc:"Reusable landing-page sections and components built on Tailwind CSS for rapid prototyping.",tags:["Tailwind","React","TS"],liveUrl:"https://theatelier.london/",preview:"/projects/theislamicholiday.png"}],d1=["All","Brand Identity","SaaS Platform","Product Design","Mobile App"],f1=["All","Web","Mobile"];function p1({project:r,index:e}){const[t,n]=Ke.useState(!1),i=Ke.useRef(null),s=Ke.useRef(null),a=Ke.useRef(null);return Ke.useEffect(()=>{const o=i.current;if(!o||window.matchMedia("(max-width: 768px)").matches)return;const c=d=>{const h=o.getBoundingClientRect(),f=(d.clientX-h.left)/h.width-.5,g=(d.clientY-h.top)/h.height-.5;o.style.transform=`perspective(1000px) rotateY(${f*6}deg) rotateX(${-g*6}deg) translateZ(0)`},u=()=>{o.style.transform="perspective(1000px) rotateY(0) rotateX(0)"};return o.addEventListener("mousemove",c),o.addEventListener("mouseleave",u),()=>{o.removeEventListener("mousemove",c),o.removeEventListener("mouseleave",u)}},[]),Ke.useEffect(()=>{const o=s.current,l=a.current;if(!o||!l)return;if(!t){o.style.transform="translateY(0)";return}let c=0;const u=performance.now(),d=Math.max(o.offsetHeight-l.clientHeight,0);if(d===0)return;const h=Math.min(Math.max(d*18,4e3),14e3),f=g=>{const p=(g-u)%h/h,m=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;o.style.transform=`translateY(${-m*d}px)`,c=requestAnimationFrame(f)};return c=requestAnimationFrame(f),()=>cancelAnimationFrame(c)},[t]),A.jsx(Ot,{y:60,delay:e%6*.06,children:A.jsxs("div",{className:"group relative block",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[A.jsxs("div",{ref:i,className:"relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-black transition-[transform,border-color,box-shadow] duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.25)]",style:{transformStyle:"preserve-3d"},"data-cursor":"hover",children:[A.jsx("div",{ref:a,className:"absolute inset-0 overflow-hidden bg-white",children:A.jsx("img",{ref:s,src:r.preview,alt:`${r.title} preview`,loading:"lazy",className:"block w-full will-change-transform",style:{transition:t?"none":"transform 0.6s cubic-bezier(0.77,0,0.175,1)"}})}),A.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0"}),A.jsxs("a",{href:r.liveUrl,target:"_blank",rel:"noopener noreferrer",onClick:o=>o.stopPropagation(),"data-cursor":"hover","aria-label":`Open ${r.title} live site`,title:"Open live site",className:"group/btn absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black opacity-0 shadow-[0_8px_30px_-8px_rgba(255,255,255,0.4)] backdrop-blur transition-all duration-500 hover:bg-white group-hover:opacity-100",children:["Live",A.jsx(Tb,{className:"h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"})]}),A.jsxs("div",{className:"absolute left-4 top-4 z-10 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur",children:["№ ",String(e+1).padStart(2,"0")]})]}),A.jsxs("div",{className:"mt-6 flex items-start justify-between gap-6",children:[A.jsxs("div",{children:[A.jsxs("div",{className:"text-[10px] uppercase tracking-[0.3em] text-white/50",children:[r.category," · ",r.year]}),A.jsxs("a",{href:r.liveUrl,target:"_blank",rel:"noopener noreferrer","data-cursor":"hover",className:"mt-2 inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-white transition-colors hover:text-white/70 md:text-3xl",children:[r.title,A.jsx(Al,{className:"h-5 w-5 opacity-60"})]}),A.jsx("p",{className:"mt-2 max-w-md text-sm leading-relaxed text-white/55",children:r.desc})]}),A.jsx("div",{className:"hidden flex-wrap justify-end gap-1.5 md:flex",children:r.tags.map(o=>A.jsx("span",{className:"rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-widest text-white/60",children:o},o))})]})]})})}const Xo=6;function m1(){const[r,e]=Ke.useState(""),[t,n]=Ke.useState("All"),[i,s]=Ke.useState("All"),[a,o]=Ke.useState(Xo),l=Ke.useMemo(()=>{const d=r.trim().toLowerCase();return h1.filter(h=>t!=="All"&&h.category!==t||i!=="All"&&h.type!==i?!1:d?h.title.toLowerCase().includes(d)||h.desc.toLowerCase().includes(d)||h.category.toLowerCase().includes(d)||h.tags.some(f=>f.toLowerCase().includes(d)):!0)},[r,t,i]);Ke.useEffect(()=>{o(Xo)},[r,t,i]);const c=l.slice(0,a),u=a<l.length;return A.jsx("section",{id:"work",className:"relative px-6 py-32 md:py-48",children:A.jsxs("div",{className:"mx-auto max-w-7xl",children:[A.jsxs("div",{className:"mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end",children:[A.jsxs("div",{children:[A.jsx(Ot,{children:A.jsx("span",{className:"text-xs uppercase tracking-[0.4em] text-white/50",children:"( 03 ) — Selected Work"})}),A.jsx(Ot,{delay:.1,children:A.jsx("h2",{className:"mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl",children:"Recent projects."})})]}),A.jsx(Ot,{delay:.2,className:"max-w-md text-sm text-white/55",children:"Hover any project to scroll through a live preview of its homepage."})]}),A.jsx(Ot,{delay:.15,children:A.jsxs("div",{className:"mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",children:[A.jsxs("div",{className:"relative w-full max-w-sm",children:[A.jsx(Zb,{className:"pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"}),A.jsx("input",{value:r,onChange:d=>e(d.target.value),placeholder:"Search projects…",className:"w-full rounded-full border border-white/15 bg-white/5 py-2.5 pl-11 pr-10 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none","data-cursor":"hover"}),r&&A.jsx("button",{onClick:()=>e(""),"data-cursor":"hover","aria-label":"Clear",className:"absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-white/60 hover:bg-white/10",children:A.jsx(sa,{className:"h-3.5 w-3.5"})})]}),A.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[f1.map(d=>A.jsx("button",{onClick:()=>s(d),"data-cursor":"hover",className:`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] transition-all ${i===d?"border-white bg-white text-black":"border-white/15 text-white/60 hover:border-white/40 hover:text-white"}`,children:d},d)),A.jsx("span",{className:"mx-1 h-4 w-px bg-white/15"}),d1.map(d=>A.jsx("button",{onClick:()=>n(d),"data-cursor":"hover",className:`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] transition-all ${t===d?"border-white bg-white text-black":"border-white/15 text-white/60 hover:border-white/40 hover:text-white"}`,children:d},d))]})]})}),c.length===0?A.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 py-24 text-center",children:[A.jsx("div",{className:"text-2xl text-white/30",children:"∅"}),A.jsx("p",{className:"text-sm text-white/60",children:"No projects match that search."}),A.jsx("button",{onClick:()=>{e(""),n("All"),s("All")},"data-cursor":"hover",className:"mt-2 rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black",children:"Reset filters"})]}):A.jsx("div",{className:"grid gap-x-8 gap-y-24 md:grid-cols-2",children:c.map((d,h)=>A.jsx("div",{className:h%2===1?"md:mt-32":"",children:A.jsx(p1,{project:d,index:h})},d.title))}),u&&A.jsxs("div",{className:"mt-20 flex flex-col items-center gap-3",children:[A.jsxs("button",{onClick:()=>o(d=>d+Xo),"data-cursor":"hover",className:"group inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3 text-xs uppercase tracking-[0.3em] text-white transition-colors hover:border-white hover:bg-white hover:text-black",children:["See more",A.jsxs("span",{className:"font-mono text-[10px] opacity-60 group-hover:opacity-100",children:["+",Math.min(Xo,l.length-a)]})]}),A.jsxs("span",{className:"text-[10px] uppercase tracking-[0.3em] text-white/40",children:["Showing ",c.length," of ",l.length]})]})]})})}const g1=[{year:"Dec 2025 — Present",role:"Web Developer",company:"Softvance Delta · Bitopia Group",desc:"Developing responsive web pages and CMS interfaces with modern frontend frameworks.",location:"Block-F, Joypurhat Tower, Banasree Main Road, Dhaka 1219",highlights:["Building responsive web pages and CMS-driven interfaces","Working with frontend frameworks and UI systems","Collaborating with the Bitopia Group product teams"],stack:["React","Next.js","Tailwind","Node.js","MongoDB"]},{year:"Aug 2025 — Nov 2025",role:"Web Developer",company:"Sardar IT",desc:"Converted Figma designs into clean, user-friendly responsive interfaces.",location:"Shialbari, Rupnagar Rd, Dhaka 1216",highlights:["Built responsive web pages with HTML, CSS, JavaScript & Tailwind","Converted Figma designs into pixel-accurate interfaces","Worked with international clients on production deliverables"],stack:["HTML","CSS","JavaScript","Tailwind"]},{year:"2022 — Present",role:"Competitive Programming",company:"Codeforces",desc:"Regular practice in algorithms, data structures and contest problem solving.",location:"Remote · Online",highlights:["Solving algorithmic problems on Codeforces regularly","Practicing logical thinking and efficient coding techniques","Participating in contests to sharpen problem-solving skills"],stack:["C++","C","Java","Algorithms"]},{year:"2022 — 2026",role:"B.Sc. in CSE",company:"Green University of Bangladesh",desc:"Undergraduate studies in Computer Science & Engineering, graduating in 2026.",location:"Dhaka, Bangladesh",highlights:["Coursework in databases, programming, software engineering","Project: University Management System — full SQL schema with triggers","Active in coding practice and self-led web-development projects"],stack:["C","Java","Python","MySQL"]}];function _1(){const[r,e]=Ke.useState(null);return A.jsxs("section",{id:"experience",className:"relative px-6 py-32 md:py-48",children:[A.jsxs("div",{className:"mx-auto max-w-5xl",children:[A.jsxs("div",{className:"mb-20",children:[A.jsx(Ot,{children:A.jsx("span",{className:"text-xs uppercase tracking-[0.4em] text-white/50",children:"( 04 ) — Experience"})}),A.jsx(Ot,{delay:.1,children:A.jsx("h2",{className:"mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl",children:"A quick history."})}),A.jsx(Ot,{delay:.15,children:A.jsx("p",{className:"mt-4 text-sm text-white/50",children:"Hover any role for the full story."})})]}),A.jsxs("div",{className:"relative",children:[A.jsx("div",{className:"absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2"}),A.jsx("ul",{className:"space-y-16",children:g1.map((t,n)=>A.jsx(Ot,{y:30,delay:n*.05,children:A.jsxs("li",{className:"relative grid grid-cols-1 gap-6 md:grid-cols-2",children:[A.jsxs("div",{className:`relative pl-8 md:pl-0 ${n%2===0?"md:pr-12 md:text-right":"md:order-2 md:pl-12"}`,children:[A.jsx("div",{className:"font-mono text-[10px] uppercase tracking-[0.3em] text-white/50",children:t.year}),A.jsxs("button",{onClick:()=>e(t),onMouseEnter:()=>{},"data-cursor":"hover",className:"group mt-2 cursor-pointer text-left md:text-inherit",children:[A.jsx("span",{className:"font-display text-2xl font-semibold text-white transition-all duration-300 group-hover:text-white",onMouseEnter:()=>e(t),children:t.role}),A.jsx("span",{className:"block h-px w-0 bg-white transition-all duration-500 group-hover:w-full"})]}),A.jsx("div",{className:"mt-1 text-sm text-white/60",children:t.company})]}),A.jsx("div",{className:`pl-8 md:pl-0 ${n%2===0?"md:pl-12":"md:order-1 md:pr-12 md:text-right"}`,children:A.jsx("p",{className:"text-sm leading-relaxed text-white/55",children:t.desc})}),A.jsx("span",{className:"absolute left-[-5px] top-1 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)] md:left-1/2 md:-translate-x-1/2"})]})},t.year))})]})]}),r&&A.jsxs("div",{className:"fixed inset-0 z-[80] flex items-center justify-center px-4 py-10",onClick:()=>e(null),children:[A.jsx("div",{className:"absolute inset-0 bg-black/85 backdrop-blur-md"}),A.jsxs("div",{className:"relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-black p-8 md:p-10",onClick:t=>t.stopPropagation(),children:[A.jsx("button",{onClick:()=>e(null),"data-cursor":"hover","aria-label":"Close",className:"absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black",children:A.jsx(sa,{className:"h-4 w-4"})}),A.jsx("div",{className:"font-mono text-[10px] uppercase tracking-[0.3em] text-white/50",children:r.year}),A.jsx("h3",{className:"mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl",children:r.role}),A.jsx("div",{className:"mt-1 text-sm text-white/60",children:r.company}),A.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-white/50",children:[A.jsxs("span",{className:"inline-flex items-center gap-2",children:[A.jsx(db,{className:"h-3.5 w-3.5"}),r.year]}),A.jsxs("span",{className:"inline-flex items-center gap-2",children:[A.jsx(Xb,{className:"h-3.5 w-3.5"}),r.location]})]}),A.jsx("p",{className:"mt-6 leading-relaxed text-white/70",children:r.desc}),A.jsxs("div",{className:"mt-8",children:[A.jsxs("div",{className:"mb-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50",children:[A.jsx(ab,{className:"h-3.5 w-3.5"})," Highlights"]}),A.jsx("ul",{className:"space-y-2 text-sm text-white/70",children:r.highlights.map(t=>A.jsxs("li",{className:"flex gap-3",children:[A.jsx("span",{className:"mt-2 h-px w-4 shrink-0 bg-white/40"}),t]},t))})]}),A.jsx("div",{className:"mt-8 flex flex-wrap gap-2",children:r.stack.map(t=>A.jsx("span",{className:"rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70",children:t},t))})]})]})]})}function Nm({embedded:r=!1}){const[e,t]=Ke.useState(null),[n,i]=Ke.useState(!1),s=r?"relative px-6 py-12":"relative px-6 py-32 md:py-48";return A.jsx("section",{id:r?void 0:"contact",className:s,children:A.jsxs("div",{className:"mx-auto max-w-6xl",children:[!r&&A.jsx(Ot,{children:A.jsx("span",{className:"text-xs uppercase tracking-[0.4em] text-white/50",children:"( 05 ) — Contact"})}),A.jsx(Ot,{delay:.1,children:A.jsxs("h2",{className:`font-display font-semibold leading-[0.95] tracking-tight text-white ${r?"text-3xl md:text-5xl":"mt-8 text-5xl md:text-8xl"}`,children:["Have a project",A.jsx("br",{}),A.jsx("span",{className:"shimmer-text",children:"in mind?"})]})}),A.jsxs("div",{className:`grid gap-12 md:grid-cols-2 ${r?"mt-10":"mt-20 gap-16"}`,children:[A.jsx(Ot,{y:20,children:A.jsxs("form",{onSubmit:a=>{a.preventDefault(),i(!0)},className:"space-y-8",children:[[{id:"name",label:"Your name",type:"text"},{id:"email",label:"Email",type:"email"},{id:"subject",label:"Subject",type:"text"}].map(a=>A.jsxs("div",{className:"relative",children:[A.jsx("label",{htmlFor:a.id,className:`absolute left-0 transition-all duration-300 ${e===a.id?"-top-4 text-[10px] uppercase tracking-[0.3em] text-white":"top-3 text-sm text-white/40"}`,children:a.label}),A.jsx("input",{id:a.id,type:a.type,required:!0,onFocus:()=>t(a.id),onBlur:o=>o.target.value===""&&t(null),className:"w-full border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition-colors focus:border-white","data-cursor":"hover"}),A.jsx("span",{className:`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${e===a.id?"w-full":"w-0"}`})]},a.id)),A.jsxs("div",{className:"relative",children:[A.jsx("label",{htmlFor:"message",className:`absolute left-0 transition-all duration-300 ${e==="message"?"-top-4 text-[10px] uppercase tracking-[0.3em] text-white":"top-3 text-sm text-white/40"}`,children:"Tell me about it"}),A.jsx("textarea",{id:"message",rows:4,required:!0,onFocus:()=>t("message"),onBlur:a=>a.target.value===""&&t(null),className:"w-full resize-none border-b border-white/15 bg-transparent py-3 text-base text-white outline-none transition-colors focus:border-white","data-cursor":"hover"}),A.jsx("span",{className:`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${e==="message"?"w-full":"w-0"}`})]}),A.jsxs("button",{type:"submit",className:"group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white px-8 py-4 text-xs uppercase tracking-[0.3em] text-white transition-colors duration-500 hover:text-black","data-cursor":"hover",children:[A.jsx("span",{className:"absolute inset-0 origin-bottom -translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0"}),A.jsx("span",{className:"relative",children:n?"Sent ✓":"Send message"}),A.jsx(Al,{className:"relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"})]})]})}),A.jsx(Ot,{y:20,delay:.1,children:A.jsxs("div",{className:"space-y-12 md:pl-12",children:[A.jsxs("div",{children:[A.jsx("div",{className:"text-[10px] uppercase tracking-[0.3em] text-white/40",children:"Email"}),A.jsx("a",{href:"mailto:priyoghosh02@gmail.com",className:"underline-grow mt-2 inline-block font-display text-2xl font-medium text-white md:text-3xl","data-cursor":"hover",children:"priyoghosh02@gmail.com"})]}),A.jsxs("div",{children:[A.jsx("div",{className:"text-[10px] uppercase tracking-[0.3em] text-white/40",children:"Based in"}),A.jsx("div",{className:"mt-2 font-display text-2xl font-medium text-white md:text-3xl",children:"Dhaka, Bangladesh"})]}),A.jsxs("div",{children:[A.jsx("div",{className:"text-[10px] uppercase tracking-[0.3em] text-white/40",children:"Phone"}),A.jsx("a",{href:"tel:+8801743457164",className:"underline-grow mt-2 inline-block font-display text-xl font-medium text-white md:text-2xl","data-cursor":"hover",children:"01743457164"})]}),A.jsxs("div",{children:[A.jsx("div",{className:"mb-4 text-[10px] uppercase tracking-[0.3em] text-white/40",children:"Elsewhere"}),A.jsx("div",{className:"flex flex-col gap-3",children:[{label:"GitHub",href:"https://github.com/PriyoGhosh02"},{label:"LinkedIn",href:"https://www.linkedin.com/in/priyo02"},{label:"Facebook",href:"https://www.facebook.com/priyo.ghosh.02"},{label:"Read CV",href:"/Resume.pdf"}].map(a=>A.jsxs("a",{href:a.href,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center justify-between border-b border-white/10 py-3 text-white transition-colors hover:border-white","data-cursor":"hover",children:[A.jsx("span",{className:"text-sm",children:a.label}),A.jsx(Al,{className:"h-4 w-4 text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"})]},a.label))})]})]})})]})]})})}function x1(){return A.jsx("footer",{className:"relative border-t border-white/10 px-6 py-10",children:A.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-white/40 md:flex-row",children:[A.jsxs("div",{children:["© ",new Date().getFullYear()," Priyo Ghosh — All rights reserved"]}),A.jsx("div",{className:"overflow-hidden",children:A.jsxs("div",{className:"flex gap-8 whitespace-nowrap",children:[A.jsx("span",{children:"Designed & built by Priyo Ghosh"}),A.jsx("span",{children:"·"}),A.jsx("span",{children:"React · Next.js · Tailwind"})]})}),A.jsx("a",{href:"#top",className:"underline-grow text-white","data-cursor":"hover",children:"Back to top ↑"})]})})}function v1({onContact:r}){const[e,t]=Ke.useState(!1),n=[{label:"GitHub",icon:Nb,href:"https://github.com/PriyoGhosh02",external:!0},{label:"LinkedIn",icon:zb,href:"https://www.linkedin.com/in/priyo02",external:!0},{label:"Facebook",icon:Rb,href:"https://www.facebook.com/priyo.ghosh.02",external:!0},{label:"Email",icon:Mf,href:"mailto:priyoghosh02@gmail.com"},{label:"Read CV",icon:Pb,href:"/Resume.pdf",external:!0},{label:"Download CV",icon:yb,href:"/Resume.pdf",download:"Priyo_Ghosh_CV.pdf"},{label:"Contact me",icon:Mf,onClick:r}],i=150,s=-70,o=n.length>1?(70-s)/(n.length-1):0;return A.jsxs(A.Fragment,{children:[A.jsx("button",{"aria-hidden":!e,tabIndex:-1,onClick:()=>t(!1),className:`fixed inset-0 z-[54] bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${e?"pointer-events-auto opacity-100":"pointer-events-none opacity-0"}`}),A.jsx("div",{className:"fixed right-5 top-1/2 z-[55] -translate-y-1/2 md:right-8",children:A.jsxs("div",{className:"relative flex h-14 w-14 items-center justify-center",children:[e&&A.jsx("div",{className:"absolute inset-0 rounded-full border border-white/20",style:{width:"56px",height:"56px",animation:"moon-orbit 4s linear infinite"},children:A.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/40"})}),n.map((l,c)=>{const u=l.icon,h=(s+o*c)*Math.PI/180,f=-Math.cos(h)*i,g=Math.sin(h)*i,_=l.onClick?"button":"a",p=l.external||l.href&&l.href.startsWith("http");return A.jsxs(_,{href:l.href,download:l.download,target:p?"_blank":void 0,rel:p?"noopener noreferrer":void 0,onClick:l.onClick?()=>{l.onClick(),t(!1)}:()=>t(!1),"data-cursor":"hover","aria-label":l.label,title:l.label,className:`group absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-white hover:bg-white hover:text-black ${e?"pointer-events-auto scale-100 opacity-100":"pointer-events-none scale-50 opacity-0"}`,style:{transform:e?`translate(calc(-50% + ${f}px), calc(-50% + ${g}px)) scale(1)`:"translate(-50%, -50%) scale(0.5)",transitionDelay:`${e?c*35:(n.length-c)*20}ms`},children:[A.jsx(u,{className:"h-4 w-4"}),A.jsx("span",{className:"pointer-events-none absolute right-[calc(100%+10px)] whitespace-nowrap rounded-full border border-white/15 bg-black/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white opacity-0 transition-opacity group-hover:opacity-100",children:l.label})]},l.label)}),A.jsx("button",{onClick:()=>t(l=>!l),"data-cursor":"hover","aria-label":e?"Close tools":"Open tools","aria-expanded":e,className:`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border shadow-[0_0_30px_rgba(255,255,255,0.18)] transition-all duration-500 ${e?"border-white bg-white text-black rotate-90":"border-white/30 bg-black text-white hover:border-white"}`,children:A.jsxs("span",{className:"relative block h-5 w-5",children:[A.jsx($b,{className:`absolute inset-0 h-5 w-5 transition-all duration-300 ${e?"rotate-45 opacity-0 scale-75":"rotate-0 opacity-100 scale-100"}`}),A.jsx(sa,{className:`absolute inset-0 h-5 w-5 text-black transition-all duration-300 ${e?"rotate-0 opacity-100 scale-100":"-rotate-45 opacity-0 scale-75"}`})]})})]})})]})}function S1(){const[r,e]=Ke.useState(!1),[t,n]=Ke.useState(""),[i,s]=Ke.useState(!1),[a,o]=Ke.useState([{role:"assistant",content:"Hey 👋 I'm Priyo. Ask me anything about my projects, stack, experience or how to get in touch."}]),l=Ke.useRef(null);Ke.useEffect(()=>{l.current?.scrollTo({top:l.current.scrollHeight,behavior:"smooth"})},[a,i]);const c=async()=>{const u=t.trim();if(!u||i)return;n("");const d=[...a,{role:"user",content:u}];o(d),s(!0);try{const h=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:d})});if(!h.ok||!h.body){const M=await h.json().catch(()=>({}));o(R=>[...R,{role:"assistant",content:M?.error||"Sorry, something went wrong. Please try again."}]),s(!1);return}const f=h.body.getReader(),g=new TextDecoder;let _="",p="",m=!1;const v=M=>{p+=M,o(R=>{if(!m)return m=!0,[...R,{role:"assistant",content:p}];const b=R.slice();return b[b.length-1]={role:"assistant",content:p},b})};let y=!1;for(;!y;){const{value:M,done:R}=await f.read();if(R)break;_+=g.decode(M,{stream:!0});let b;for(;(b=_.indexOf(`
`))!==-1;){let T=_.slice(0,b);if(_=_.slice(b+1),T.endsWith("\r")&&(T=T.slice(0,-1)),!T.startsWith("data: "))continue;const x=T.slice(6).trim();if(x==="[DONE]"){y=!0;break}try{const P=JSON.parse(x).choices?.[0]?.delta?.content;P&&v(P)}catch{_=T+`
`+_;break}}}}catch{o(h=>[...h,{role:"assistant",content:"Network error. Please try again."}])}finally{s(!1)}};return A.jsxs(A.Fragment,{children:[A.jsxs("button",{onClick:()=>e(u=>!u),"data-cursor":"hover","aria-label":"Open chat",className:"fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black text-white shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all hover:scale-105 hover:border-white md:bottom-8 md:right-8",children:[r?A.jsx(sa,{className:"h-5 w-5"}):A.jsx(Yb,{className:"h-5 w-5"}),!r&&A.jsx("span",{className:"absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-black bg-white"})]}),A.jsxs("div",{className:`fixed bottom-24 right-4 z-[60] w-[calc(100vw-2rem)] max-w-sm origin-bottom-right overflow-hidden rounded-2xl border border-white/15 bg-black/90 backdrop-blur-xl transition-all duration-300 md:right-8 ${r?"pointer-events-auto translate-y-0 scale-100 opacity-100":"pointer-events-none translate-y-2 scale-95 opacity-0"}`,children:[A.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 px-4 py-3",children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsxs("span",{className:"relative flex h-2 w-2",children:[A.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60"}),A.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-white"})]}),A.jsx("span",{className:"font-display text-sm font-semibold tracking-wide text-white",children:"Ask me anything"})]}),A.jsx("span",{className:"text-[10px] uppercase tracking-[0.25em] text-white/40",children:"AI · live"})]}),A.jsxs("div",{ref:l,className:"flex h-80 flex-col gap-3 overflow-y-auto overscroll-contain px-4 py-4",style:{WebkitOverflowScrolling:"touch"},onWheel:u=>u.stopPropagation(),onTouchMove:u=>u.stopPropagation(),children:[a.map((u,d)=>A.jsx("div",{className:`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${u.role==="user"?"ml-auto bg-white text-black":"border border-white/10 bg-white/5 text-white/90"}`,children:u.content},d)),i&&A.jsxs("div",{className:"flex items-center gap-2 text-xs text-white/50",children:[A.jsx(Vb,{className:"h-3 w-3 animate-spin"})," thinking…"]})]}),A.jsxs("form",{onSubmit:u=>{u.preventDefault(),c()},className:"flex items-center gap-2 border-t border-white/10 p-3",children:[A.jsx("input",{value:t,onChange:u=>n(u.target.value),placeholder:"Type a question…",disabled:i,className:"flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"}),A.jsx("button",{type:"submit",disabled:i||!t.trim(),className:"flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-opacity disabled:opacity-30","data-cursor":"hover",children:A.jsx(Qb,{className:"h-4 w-4"})})]})]})]})}function M1({open:r,onClose:e}){return Ke.useEffect(()=>{if(!r)return;const t=n=>n.key==="Escape"&&e();return document.addEventListener("keydown",t),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",t),document.body.style.overflow=""}},[r,e]),r?A.jsxs("div",{className:"fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto overscroll-contain px-3 py-6 sm:px-4 sm:py-10",onClick:e,children:[A.jsx("div",{className:"absolute inset-0 bg-black/85 backdrop-blur-md"}),A.jsxs("div",{className:"relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-black",onClick:t=>t.stopPropagation(),onTouchStart:t=>t.stopPropagation(),onTouchMove:t=>t.stopPropagation(),children:[A.jsx("button",{onClick:e,className:"absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black","data-cursor":"hover","aria-label":"Close",children:A.jsx(sa,{className:"h-4 w-4"})}),A.jsx("div",{className:"max-h-[88vh] overflow-y-auto overscroll-contain scrollbar-hide",style:{WebkitOverflowScrolling:"touch"},children:A.jsx(Nm,{embedded:!0})})]})]}):null}function E1(){const[r,e]=Ke.useState(!1);return A.jsxs("main",{className:"grain relative min-h-screen overflow-hidden bg-black text-white",children:[A.jsx(Jy,{}),A.jsx(cM,{}),A.jsx(lM,{}),A.jsxs("div",{className:"relative z-10",children:[A.jsx(s1,{}),A.jsx(o1,{}),A.jsx(l1,{}),A.jsx(u1,{}),A.jsx(m1,{}),A.jsx(_1,{}),A.jsx(Nm,{}),A.jsx(x1,{})]}),A.jsx(v1,{onContact:()=>e(!0)}),A.jsx(S1,{}),A.jsx(M1,{open:r,onClose:()=>e(!1)})]})}export{E1 as component};
