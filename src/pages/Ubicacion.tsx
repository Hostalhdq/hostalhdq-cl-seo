import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Navigation, Bus, Building2 } from 'lucide-react';

const puntosInteres = [
  { nombre: "Universidad del Bío-Bío (UBB)", distancia: "350 metros", tiempo: "4 min a pie" },
  { nombre: "Terminal de Buses Collao", distancia: "Muy cerca", tiempo: "5 min a pie" },
  { nombre: "Estadio Ester Roa", distancia: "850 metros", tiempo: "10 min a pie" },
  { nombre: "Supermercados", distancia: "Proximidad", tiempo: "2-5 min a pie" },
  { nombre: "Farmacias", distancia: "Proximidad", tiempo: "2-5 min a pie" },
  { nombre: "Restaurantes", distancia: "Sector Collao", tiempo: "A pasos" },
];

export default function Ubicacion() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Hostal HDQ",
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
    }
  };

  return (
    <>
      <SEOHead
        title="Ubicación - Hostal HDQ en Sector Collao, Concepción"
        description="Hostal HDQ ubicado en Chiloé 1130, Sector Collao, Concepción. A 350m de la UBB y cerca del Terminal Collao. Mapa, direcciones y puntos de interés."
        keywords="ubicacion hostal concepcion, hostal sector collao, hostal cerca ubb, direccion hostal concepcion, como llegar hostal hdq"
        canonical="https://www.hostalhdq.cl/ubicacion"
        jsonLd={jsonLd}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">Nuestra Ubicación</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En el corazón del Sector Collao, Concepción
          </p>
        </div>

        {/* Dirección */}
        <section className="mb-12">
          <Card className="p-8 text-center bg-accent/20">
            <h2 className="text-2xl font-bold mb-4">Dirección</h2>
            <p className="text-xl mb-2">Chiloé 1130</p>
            <p className="text-lg text-muted-foreground mb-6">Sector Collao, Concepción, Región del Bío Bío</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Chiloé+1130+Concepción"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Abrir en Google Maps
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a
                  href="https://wa.me/56987752280?text=Hola,%20necesito%20indicaciones%20para%20llegar%20al%20hostal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir Indicaciones
                </a>
              </Button>
            </div>
          </Card>
        </section>

        {/* Mapa */}
        <section className="mb-12">
          <Card className="p-4 overflow-hidden">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.5!2d-73.0444!3d-36.8201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ5JzEyLjQiUyA3M8KwMDInMzkuOCJX!5e0!3m2!1ses!2scl!4v1620000000000!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación Hostal HDQ"
              />
            </div>
          </Card>
        </section>

        {/* Puntos de Interés */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Puntos de Interés Cercanos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {puntosInteres.map((punto, index) => (
              <Card key={index} className="p-6 hover-scale">
                <Building2 className="h-8 w-8 mb-3 text-primary" />
                <h3 className="font-semibold mb-2">{punto.nombre}</h3>
                <p className="text-sm text-muted-foreground mb-1">{punto.distancia}</p>
                <p className="text-sm text-primary">{punto.tiempo}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Cómo Llegar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">¿Cómo Llegar?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start space-x-3 mb-4">
                <Bus className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">En Transporte Público</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Múltiples líneas de buses llegan al sector Collao</li>
                    <li>• Parada de buses a pasos del hostal</li>
                    <li>• Terminal de Buses Collao muy cerca</li>
                    <li>• Fácil acceso desde cualquier punto de Concepción</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-3 mb-4">
                <Navigation className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">En Auto</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Estacionamiento gratuito disponible (3 espacios)</li>
                    <li>• Fácil acceso desde la Ruta 160</li>
                    <li>• Bien señalizado en el sector</li>
                    <li>• A minutos del centro de Concepción</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Desde el Aeropuerto */}
        <section>
          <Card className="p-8 bg-muted/50">
            <h3 className="text-xl font-semibold mb-4 text-center">Desde el Aeropuerto Carriel Sur</h3>
            <div className="max-w-3xl mx-auto space-y-3 text-muted-foreground">
              <p className="text-center mb-4">
                <strong>Distancia:</strong> Aproximadamente 14 km (20-25 minutos en auto)
              </p>
              <div className="space-y-2">
                <p><strong>Opciones de traslado:</strong></p>
                <ul className="space-y-2 ml-6">
                  <li>• Taxi o Uber desde el aeropuerto</li>
                  <li>• Transfer privado (consultar con anticipación)</li>
                  <li>• Bus de acercamiento + transporte local</li>
                </ul>
              </div>
              <p className="text-center mt-6">
                <strong>¿Necesitas ayuda con tu traslado?</strong>
              </p>
              <div className="text-center mt-4">
                <Button asChild>
                  <a
                    href="https://wa.me/56987752280?text=Hola,%20necesito%20información%20sobre%20traslado%20desde%20el%20aeropuerto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contáctanos
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}
