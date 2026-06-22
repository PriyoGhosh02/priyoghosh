import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>Priyo Ghosh | Shopify & Full Stack Web Developer</title>

      <meta
        name="description"
        content="Priyo Ghosh is a Shopify developer and full stack web developer specializing in React, TypeScript, custom Shopify themes and eCommerce solutions."
      />

      <meta
        name="keywords"
        content="Priyo Ghosh, web developer Priyo Ghosh, developer Priyo Ghosh, Shopify developer Priyo Ghosh, React developer, Full stack developer"
      />

      {/* Open Graph */}
      <meta property="og:title" content="Priyo Ghosh | Shopify Developer" />

      <meta
        property="og:description"
        content="Shopify and Full Stack Web Developer specializing in React, TypeScript and eCommerce solutions."
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:url"
        content="https://priyoghosh.vercel.app/"
      />

      <meta
        property="og:image"
        content="https://priyoghosh.vercel.app/preview.png"
      />
    </Helmet>
  );
}