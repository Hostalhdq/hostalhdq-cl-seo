import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Wifi, Car, Coffee, Tv, MapPin, Star } from 'lucide-react';
import heroImage from '@/assets/hero-hostal.jpg';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Hostal HDQ",
    "image": "https://www.hostalhdq.cl/og-image.jpg",
    "description": "Hostal HDQ en Concepción, sector Collao. Habitaciones cómodas desde $40.000, WiFi gratis, estacionamiento.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chiloé 1130",
      "addressLocality": "Concepción",
      "addressRegion": "Bío Bío",
      "postalCode": "4030000",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-36.8201",
      "longitude": "-73.0444"
    },
    "telephone": "+56987752280",
    "email": "hostalhdq@gmail.com",
    "priceRange": "$40.000 - $80.000",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "WiFi gratuito" },
      { "@type": "LocationFeatureSpecification", "name": "Estacionamiento gratuito" },
      { "@type": "LocationFeatureSpecification", "name": "TV Cable" },
      { "@type": "LocationFeatureSpecification", "name": "Baño privado" }
    ]
  };

  return (
    <>
      <SEOHead
        title="Hostal HDQ - Mejor Hostal en Concepción Sector Collao | Desde $40.000"
        description="Hostal HDQ en Concepción, sector Collao. Habitaciones cómodas desde $40.000, WiFi gratis, estacionamiento. A 350m de la UBB. ¡Reserva ahora!"
        keywords="hostal concepcion, hostales concepcion, hostal collao, alojamiento concepcion, hostal cerca ubb, hostal economico concepcion"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-6">
            Hostal HDQ
          </h1>
          <p className="text-xl sm:text-2xl text-background/90 mb-8 max-w-2xl mx-auto">
            Tu Mejor Opción de Alojamiento en Concepción, Sector Collao
          </p>
          <p className="text-lg text-background/80 mb-8">
            Ubicados a 350m de la UBB • Desde $40.000/noche
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a 
                href="https://wa.me/56987752280?text=Hola,%20quisiera%20reservar%20una%20habitación"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar Ahora
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/habitaciones">
                Ver Habitaciones
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Destacados */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por Qué Elegirnos?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover-scale">
              <Wifi className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">WiFi Gratuito</h3>
              <p className="text-muted-foreground">Alta velocidad en todas las habitaciones</p>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <Car className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Estacionamiento</h3>
              <p className="text-muted-foreground">3 espacios gratuitos para nuestros huéspedes</p>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <Coffee className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Desayuno</h3>
              <p className="text-muted-foreground">Opcional por $4.000 por persona</p>
            </Card>
            <Card className="p-6 text-center hover-scale">
              <Tv className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">TV Cable</h3>
              <p className="text-muted-foreground">En todas las habitaciones</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ubicación Estratégica */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Ubicación Estratégica</h2>
              <p className="text-lg text-muted-foreground">
                En el corazón del Sector Collao, cerca de todo lo que necesitas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">350m</div>
                <p className="font-semibold">Universidad del Bío-Bío</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">850m</div>
                <p className="font-semibold">Estadio Ester Roa</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Cerca</div>
                <p className="font-semibold">Terminal Collao</p>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button asChild>
                <Link to="/ubicacion">
                  Ver Mapa y Direcciones
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Huéspedes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Excelente ubicación, cerca de la universidad. Las habitaciones son limpias y cómodas. Muy recomendable."
              </p>
              <p className="font-semibold">— Estudiante UBB</p>
            </Card>
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Perfecto para mi trabajo. Estacionamiento gratuito y WiFi rápido. El personal es muy amable."
              </p>
              <p className="font-semibold">— Trabajador de empresa</p>
            </Card>
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Gran relación calidad-precio. Las habitaciones familiares son espaciosas. Volveremos sin duda."
              </p>
              <p className="font-semibold">— Familia visitante</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 text-center bg-primary text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">¿Listo para Reservar?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contáctanos ahora por WhatsApp y asegura tu habitación
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a 
                href="https://wa.me/56987752280?text=Hola,%20quisiera%20reservar%20una%20habitación"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </a>
            </Button>
          </Card>
        </div>
      </section>
    </>
  );
}
