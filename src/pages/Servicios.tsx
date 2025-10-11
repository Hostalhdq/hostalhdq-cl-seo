import { SEOHead } from '@/components/SEOHead';
import { Card } from '@/components/ui/card';
import { 
  Wifi, 
  Car, 
  Tv, 
  Bath, 
  Coffee, 
  Wind, 
  Thermometer,
  Shirt,
  Clock,
  Ban
} from 'lucide-react';

const servicios = [
  { icon: Wifi, title: "WiFi Gratuito", description: "Internet de alta velocidad en todas las áreas" },
  { icon: Car, title: "Estacionamiento", description: "3 espacios gratuitos disponibles" },
  { icon: Tv, title: "TV por Cable", description: "En todas las habitaciones" },
  { icon: Bath, title: "Baño Privado", description: "En cada habitación" },
  { icon: Coffee, title: "Frigobar y Microondas", description: "En la mayoría de las habitaciones" },
  { icon: Wind, title: "Ventilador", description: "En todas las habitaciones" },
  { icon: Thermometer, title: "Calefacción", description: "Para tu comodidad en invierno" },
  { icon: Shirt, title: "Ropa de Cama", description: "Sábanas y toallas incluidas" },
];

const politicas = [
  {
    title: "Check-in / Check-out",
    items: [
      "Check-in: 12:00 hrs",
      "Check-out: 11:00 hrs",
      "Check-in anticipado: Sujeto a disponibilidad",
      "Check-out tardío: Consultar disponibilidad"
    ]
  },
  {
    title: "Pagos y Reservas",
    items: [
      "Depósito: $15.000 por habitación",
      "Formas de pago: Efectivo, transferencia",
      "Reserva garantizada con depósito",
      "Factura disponible bajo solicitud"
    ]
  },
  {
    title: "Cancelaciones",
    items: [
      "Cancelación gratuita: Con 3 días de anticipación",
      "Devolución completa del depósito",
      "Cancelación tardía: No reembolsable",
      "Cambios de fecha: Sujeto a disponibilidad"
    ]
  },
  {
    title: "Normas del Hostal",
    items: [
      "No se permiten mascotas",
      "Prohibido fumar en las habitaciones",
      "Respetar horarios de silencio (22:00 - 08:00)",
      "Mantener limpieza y orden"
    ]
  }
];

export default function Servicios() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Servicios Hostal HDQ",
    "description": "WiFi gratuito, estacionamiento, TV cable, baño privado, frigobar, microondas en Hostal HDQ Concepción",
    "brand": {
      "@type": "Organization",
      "name": "Hostal HDQ"
    },
    "amenityFeature": servicios.map(s => ({
      "@type": "LocationFeatureSpecification",
      "name": s.title
    }))
  };

  return (
    <>
      <SEOHead
        title="Servicios y Comodidades - Hostal HDQ Concepción"
        description="Hostal HDQ ofrece WiFi gratuito, estacionamiento, TV cable, baño privado, frigobar, microondas y más. Conoce nuestros servicios y políticas."
        keywords="servicios hostal concepcion, wifi gratuito concepcion, estacionamiento hostal, comodidades hostal concepcion"
        canonical="https://www.hostalhdq.cl/servicios"
        jsonLd={jsonLd}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Servicios y Comodidades</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para una estadía cómoda y placentera
          </p>
        </div>

        {/* Servicios */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio, index) => (
              <Card key={index} className="p-6 text-center hover-scale">
                <servicio.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{servicio.title}</h3>
                <p className="text-sm text-muted-foreground">{servicio.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Desayuno Opcional */}
        <section className="mb-16">
          <Card className="p-8 bg-accent/30">
            <div className="max-w-3xl mx-auto text-center">
              <Coffee className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-4">Desayuno Opcional</h2>
              <p className="text-lg mb-4">
                Comienza tu día con nuestro delicioso desayuno
              </p>
              <div className="text-3xl font-bold text-primary mb-2">$4.000</div>
              <p className="text-muted-foreground">por persona</p>
              <p className="text-sm text-muted-foreground mt-4">
                Incluye: Pan, café o té, huevos, jamón, queso, frutas y más
              </p>
            </div>
          </Card>
        </section>

        {/* Políticas */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">Políticas del Hostal</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {politicas.map((politica, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  {politica.title.includes('Check') && <Clock className="h-6 w-6 text-primary flex-shrink-0" />}
                  {politica.title.includes('Normas') && <Ban className="h-6 w-6 text-primary flex-shrink-0" />}
                  {!politica.title.includes('Check') && !politica.title.includes('Normas') && 
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                  }
                  <h3 className="text-xl font-semibold">{politica.title}</h3>
                </div>
                <ul className="space-y-2">
                  {politica.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Información Adicional */}
        <section className="mt-16">
          <Card className="p-8 bg-muted/50">
            <h3 className="text-xl font-semibold mb-4 text-center">Información Importante</h3>
            <div className="max-w-3xl mx-auto space-y-3 text-muted-foreground">
              <p>
                • Todas las habitaciones cuentan con artículos de aseo básicos (jabón, shampoo)
              </p>
              <p>
                • El servicio de limpieza se realiza diariamente
              </p>
              <p>
                • Contamos con recepción disponible para consultas durante todo el día
              </p>
              <p>
                • Se requiere documento de identidad al momento del check-in
              </p>
              <p>
                • Los menores de edad deben estar acompañados por un adulto responsable
              </p>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}
