import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarIcon, MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function Contacto() {
  const [fechaLlegada, setFechaLlegada] = useState<Date>();
  const [fechaSalida, setFechaSalida] = useState<Date>();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoHabitacion: '',
    numPersonas: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mensaje = `Hola, quisiera hacer una consulta:%0A%0A` +
      `Nombre: ${formData.nombre}%0A` +
      `Email: ${formData.email}%0A` +
      `Teléfono: ${formData.telefono}%0A` +
      `Fecha llegada: ${fechaLlegada ? format(fechaLlegada, 'dd/MM/yyyy') : 'No especificada'}%0A` +
      `Fecha salida: ${fechaSalida ? format(fechaSalida, 'dd/MM/yyyy') : 'No especificada'}%0A` +
      `Tipo habitación: ${formData.tipoHabitacion}%0A` +
      `Número de personas: ${formData.numPersonas}%0A` +
      `Mensaje: ${formData.mensaje}`;

    window.open(`https://wa.me/56987752280?text=${mensaje}`, '_blank');
    toast.success('Redirigiendo a WhatsApp...');
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - Hostal HDQ",
    "description": "Contacta con Hostal HDQ para reservas y consultas. WhatsApp, teléfono, email.",
    "mainEntity": {
      "@type": "LodgingBusiness",
      "name": "Hostal HDQ",
      "telephone": "+56987752280",
      "email": "hostalhdq@gmail.com"
    }
  };

  return (
    <>
      <SEOHead
        title="Contacto - Hostal HDQ Concepción | Reservas y Consultas"
        description="Contacta con Hostal HDQ para reservas y consultas. WhatsApp: +56 9 8775 2280 | Email: hostalhdq@gmail.com | Atención 24/7"
        keywords="contacto hostal concepcion, reservar hostal concepcion, telefono hostal hdq, email hostal hdq"
        canonical="https://www.hostalhdq.cl/contacto"
        jsonLd={jsonLd}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Formulario de Consulta</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre Completo *</Label>
                    <Input
                      id="nombre"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Fecha de Llegada</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !fechaLlegada && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {fechaLlegada ? format(fechaLlegada, "PPP", { locale: es }) : "Seleccionar fecha"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={fechaLlegada}
                          onSelect={setFechaLlegada}
                          initialFocus
                          disabled={(date) => date < new Date()}
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Fecha de Salida</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !fechaSalida && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {fechaSalida ? format(fechaSalida, "PPP", { locale: es }) : "Seleccionar fecha"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={fechaSalida}
                          onSelect={setFechaSalida}
                          initialFocus
                          disabled={(date) => date < (fechaLlegada || new Date())}
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tipoHabitacion">Tipo de Habitación</Label>
                    <Select value={formData.tipoHabitacion} onValueChange={(value) => setFormData({...formData, tipoHabitacion: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual ($40.000)</SelectItem>
                        <SelectItem value="doble">Doble ($50.000)</SelectItem>
                        <SelectItem value="familiar">Familiar ($65.000)</SelectItem>
                        <SelectItem value="grupal">Grupal ($80.000)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="numPersonas">Número de Personas</Label>
                    <Input
                      id="numPersonas"
                      type="number"
                      min="1"
                      value={formData.numPersonas}
                      onChange={(e) => setFormData({...formData, numPersonas: e.target.value})}
                      placeholder="1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje Adicional</Label>
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    placeholder="¿Algo más que quieras comentarnos?"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Enviar Consulta por WhatsApp
                </Button>
              </form>
            </Card>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-sm text-muted-foreground">Chiloé 1130, Sector Collao, Concepción</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">WhatsApp / Teléfono</p>
                    <a href="tel:+56987752280" className="text-sm text-primary hover:underline">
                      +56 9 8775 2280
                    </a>
                    <br />
                    <a href="tel:+56987852280" className="text-sm text-muted-foreground hover:text-primary">
                      +56 9 8785 2280
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hostalhdq@gmail.com" className="text-sm text-primary hover:underline">
                      hostalhdq@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Horario de Atención</p>
                    <p className="text-sm text-muted-foreground">24 horas, 7 días a la semana</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Instagram className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a 
                      href="https://www.instagram.com/hostalhdq" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      @hostalhdq
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-accent/20">
              <h3 className="font-semibold text-lg mb-3">¿Prefieres WhatsApp?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contáctanos directamente y te responderemos de inmediato
              </p>
              <Button className="w-full" asChild>
                <a
                  href="https://wa.me/56987752280?text=Hola,%20quisiera%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir WhatsApp
                </a>
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Horarios</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Check-in:</strong> 12:00 hrs</p>
                <p><strong className="text-foreground">Check-out:</strong> 11:00 hrs</p>
                <p className="text-xs mt-3">
                  * Horarios flexibles sujetos a disponibilidad. Consulta con anticipación.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
