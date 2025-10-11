import { SEOHead } from '@/components/SEOHead';
import { Card } from '@/components/ui/card';
import { Users, Target, Heart, Award } from 'lucide-react';

const publicoObjetivo = [
  "Trabajadores de empresas (telecomunicaciones, gráficas, constructoras)",
  "Técnicos forestales",
  "Estudiantes de postgrado y profesores",
  "Turistas y parejas",
  "Delegaciones deportivas",
  "Familias visitando Concepción",
  "Personas en tránsito (conexiones de buses)"
];

const valores = [
  {
    icon: Heart,
    title: "Hospitalidad",
    description: "Atención cálida y personalizada para cada huésped"
  },
  {
    icon: Target,
    title: "Ubicación Estratégica",
    description: "En el corazón del Sector Collao, cerca de todo"
  },
  {
    icon: Award,
    title: "Calidad",
    description: "Habitaciones limpias y bien equipadas"
  },
  {
    icon: Users,
    title: "Compromiso",
    description: "Tu comodidad es nuestra prioridad"
  }
];

export default function Nosotros() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Sobre Nosotros - Hostal HDQ",
    "description": "Hostal HDQ es tu mejor opción de alojamiento en Concepción. Con más de 10 habitaciones equipadas, ubicación estratégica en Sector Collao.",
    "mainEntity": {
      "@type": "LodgingBusiness",
      "name": "Hostal HDQ",
      "numberOfRooms": "10+"
    }
  };

  return (
    <>
      <SEOHead
        title="Sobre Nosotros - Hostal HDQ Concepción | Nuestra Historia"
        description="Conoce Hostal HDQ, tu mejor opción de alojamiento en Concepción. Más de 10 habitaciones equipadas en Sector Collao, cerca de la UBB. Historia y valores."
        keywords="sobre hostal hdq, historia hostal concepcion, quienes somos hostal hdq, hostal familiar concepcion"
        canonical="https://www.hostalhdq.cl/nosotros"
        jsonLd={jsonLd}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tu hogar lejos de casa en Concepción
          </p>
        </div>

        {/* Historia */}
        <section className="mb-16">
          <Card className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Hostal HDQ</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  <strong className="text-foreground">Hostal HDQ</strong> es tu mejor opción de alojamiento en Concepción, 
                  ubicado estratégicamente en el <strong className="text-foreground">Sector Collao</strong>, a solo{' '}
                  <strong className="text-foreground">350 metros de la Universidad del Bío-Bío</strong>. 
                  Con más de 10 habitaciones completamente equipadas, ofrecemos comodidad y servicios de calidad 
                  para diversos tipos de huéspedes.
                </p>

                <p>
                  Nos especializamos en brindar una experiencia de alojamiento cómoda, segura y acogedora, 
                  con todas las comodidades que necesitas para sentirte como en casa. Nuestras instalaciones 
                  modernas y bien mantenidas, combinadas con un servicio personalizado, nos convierten en la 
                  elección preferida de trabajadores, estudiantes, turistas y familias que visitan Concepción.
                </p>

                <p>
                  Nuestra <strong className="text-foreground">ubicación privilegiada</strong> te permite acceder 
                  fácilmente a la Universidad del Bío-Bío, el Terminal de Buses Collao, el Estadio Ester Roa, 
                  y todos los servicios y comercio del sector. Además, contamos con estacionamiento gratuito, 
                  WiFi de alta velocidad, y todas nuestras habitaciones incluyen baño privado, TV cable, y 
                  equipamiento completo.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Nuestros Valores */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <Card key={index} className="p-6 text-center hover-scale">
                <valor.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">{valor.title}</h3>
                <p className="text-sm text-muted-foreground">{valor.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Público Objetivo */}
        <section className="mb-16">
          <Card className="p-8 md:p-12 bg-accent/20">
            <div className="max-w-3xl mx-auto">
              <Users className="h-12 w-12 mx-auto mb-6 text-primary" />
              <h2 className="text-2xl font-bold mb-6 text-center">¿A Quién Servimos?</h2>
              <p className="text-muted-foreground text-center mb-8">
                Nos especializamos en atender a diversos tipos de huéspedes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {publicoObjetivo.map((tipo, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{tipo}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Por Qué Elegirnos */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">¿Por Qué Elegir Hostal HDQ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Ubicación Inmejorable</h3>
              <p className="text-muted-foreground">
                A pasos de la UBB, Terminal Collao, y todos los servicios que necesitas. 
                Fácil acceso desde cualquier punto de la ciudad.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Comodidad Garantizada</h3>
              <p className="text-muted-foreground">
                Todas nuestras habitaciones cuentan con baño privado, WiFi, TV cable, 
                y equipamiento completo para tu estadía.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Excelente Relación Precio-Calidad</h3>
              <p className="text-muted-foreground">
                Tarifas competitivas sin comprometer la calidad del servicio. 
                Estacionamiento gratuito y WiFi incluido.
              </p>
            </Card>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="mt-16">
          <Card className="p-8 bg-primary text-primary-foreground">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm opacity-90">Habitaciones</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Atención</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">350m</div>
                <div className="text-sm opacity-90">de la UBB</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Equipadas</div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}
