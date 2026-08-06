import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>Priyo Ghosh | Best Shopify Developer & Web Developer in Bangladesh</title>

      <meta
        name="description"
        content="Priyo Ghosh is the best Shopify developer and web developer in Bangladesh, specializing in custom Shopify theme development, Liquid, React.js, Next.js, and eCommerce solutions."
      />

      <meta
        name="keywords"
        content="best shopify developer, shopify developer, best shopify developer in Bangladesh, best web developer, Priyo Ghosh, web developer, frontend developer, remote shopify developer, shopify liquid, React developer, Next.js developer"
      />

      {/* Open Graph */}
      <meta property="og:title" content="Priyo Ghosh | Best Shopify Developer & Web Developer" />

      <meta
        property="og:description"
        content="Priyo Ghosh is the best Shopify developer and web developer, specializing in custom themes, Liquid, React.js, and conversion-focused eCommerce solutions."
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:url"
        content="https://priyoghosh.vercel.app/"
      />

      <meta
        property="og:image"
        content="https://priyoghosh.vercel.app/preview.webp"
      />
    </Helmet>
  );
}