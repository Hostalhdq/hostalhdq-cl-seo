import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Hostal HDQ</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>Chiloé 1130, Sector Collao, Concepción</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="tel:+56987752280" className="hover:text-primary transition-colors">
                  +56 9 8775 2280
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:hostalhdq@gmail.com" className="hover:text-primary transition-colors">
                  hostalhdq@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>Atención 24/7</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Enlaces Rápidos</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link to="/habitaciones" className="block text-muted-foreground hover:text-primary transition-colors">
                Habitaciones
              </Link>
              <Link to="/servicios" className="block text-muted-foreground hover:text-primary transition-colors">
                Servicios
              </Link>
              <Link to="/ubicacion" className="block text-muted-foreground hover:text-primary transition-colors">
                Ubicación
              </Link>
              <Link to="/nosotros" className="block text-muted-foreground hover:text-primary transition-colors">
                Nosotros
              </Link>
              <Link to="/contacto" className="block text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/hostalhdq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">@hostalhdq</span>
              </a>
            </div>
            <div className="pt-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-2">Horarios:</p>
              <p>Check-in: 12:00 hrs</p>
              <p>Check-out: 11:00 hrs</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hostal HDQ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
