import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Página No Encontrada - Hostal HDQ"
        description="La página que buscas no existe. Vuelve al inicio de Hostal HDQ."
      />
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center px-4 animate-fade-in">
          <Search className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
          <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
          <p className="mb-2 text-2xl font-semibold">Página No Encontrada</p>
          <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacto">
                Contactar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
