import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Wifi, Tv, Wind, Coffee, Bath, Users } from 'lucide-react';
import habitacionIndividual from '@/assets/habitacion-individual.jpg';
import habitacionDoble from '@/assets/habitacion-doble.jpg';
import habitacionFamiliar from '@/assets/habitacion-familiar.jpg';
import habitacionGrupal from '@/assets/habitacion-grupal.jpg';

const rooms = [
  {
    title: "Habitación Doble Matrimonial",
    price: "$40.000",
    capacity: "Hasta 2 personas",
    image: habitacionIndividual,
    amenities: [
      "1 cama matrimonial",
      "Baño privado",
      "TV cable",
      "WiFi",
      "Frigobar",
      "Hervidor eléctrico",
      "Ventilador",
      "Escritorio y closet"
    ]
  },
  {
    title: "Habitación Doble 2 Camas",
    price: "$50.000",
    capacity: "Hasta 2 personas",
    image: habitacionDoble,
    amenities: [
      "2 camas individuales",
      "Baño privado",
      "TV cable",
      "WiFi",
      "Frigobar",
      "Microondas",
      "Hervidor eléctrico",
      "Ventilador"
    ]
  },
  {
    title: "Habitación Grupal",
    price: "$80.000",
    capacity: "4 personas +$10.000 P/Persona Extra",
    image: habitacionGrupal,
    amenities: [
      "4 camas individuales o 3 camas matrimoniales",
      "Baño privado",
      "TV cable",
      "WiFi",
      "Frigobar",
      "Microondas",
      "Hervidor",
      "Ventilador"
    ]
  }
];

export default function Habitaciones() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": rooms.map((room, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "name": room.title,
      "price": room.price.replace('$', '').replace('.', ''),
      "priceCurrency": "CLP",
      "description": `${room.title} en Hostal HDQ, capacidad para ${room.capacity}`
    }))
  };

  return (
    <>
      <SEOHead
        title="Habitaciones - Hostal HDQ Concepción | Desde $40.000"
        description="Habitaciones cómodas en Hostal HDQ: Individual ($40.000), Doble ($50.000), Familiar ($65.000), Grupal ($80.000). Todas con baño privado, WiFi y TV cable."
        keywords="habitaciones concepcion, habitacion individual concepcion, habitacion doble concepcion, habitacion familiar concepcion, alojamiento economico concepcion"
        canonical="https://www.hostalhdq.cl/habitaciones"
        jsonLd={jsonLd}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Nuestras Habitaciones</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Habitaciones completamente equipadas para tu comodidad. Todas incluyen baño privado, WiFi, TV cable y más.
          </p>
        </div>

        <div className="space-y-12">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden hover-scale">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={room.image}
                    alt={`${room.title} - Hostal HDQ`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold">{room.title}</h2>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{room.price}</div>
                        <div className="text-sm text-muted-foreground">por noche</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-6">
                      <Users className="h-5 w-5 mr-2" />
                      <span>{room.capacity}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {room.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <div className="mt-0.5">
                            {amenity.includes('WiFi') && <Wifi className="h-4 w-4 text-primary" />}
                            {amenity.includes('TV') && <Tv className="h-4 w-4 text-primary" />}
                            {amenity.includes('Baño') && <Bath className="h-4 w-4 text-primary" />}
                            {amenity.includes('Ventilador') && <Wind className="h-4 w-4 text-primary" />}
                            {(amenity.includes('Frigobar') || amenity.includes('Microondas') || amenity.includes('Hervidor')) && 
                              <Coffee className="h-4 w-4 text-primary" />}
                            {!amenity.match(/WiFi|TV|Baño|Ventilador|Frigobar|Microondas|Hervidor/) && 
                              <div className="h-2 w-2 rounded-full bg-primary mt-1" />}
                          </div>
                          <span className="text-sm text-muted-foreground">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <a
                      href={`https://wa.me/56987752280?text=Hola,%20quisiera%20reservar%20una%20${room.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reservar {room.title}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-muted/50">
            <h3 className="text-xl font-semibold mb-4">¿Necesitas ayuda para elegir?</h3>
            <p className="text-muted-foreground mb-6">
              Contáctanos y te ayudaremos a encontrar la habitación perfecta para ti
            </p>
            <Button asChild>
              <a
                href="https://wa.me/56987752280?text=Hola,%20necesito%20ayuda%20para%20elegir%20una%20habitación"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar Ahora
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
