import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object;
}

export const SEOHead = ({ 
  title, 
  description, 
  keywords = "hostal concepcion, hostales concepcion, hostal collao, alojamiento concepcion, hostal cerca ubb",
  canonical = "https://www.hostalhdq.cl",
  ogImage = "https://www.hostalhdq.cl/og-image.jpg",
  jsonLd
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="CL-BI" />
      <meta name="geo.placename" content="Concepción, Chile" />
      <meta name="geo.position" content="-36.8201;-73.0444" />
      
      <link rel="canonical" href={canonical} />
      
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
