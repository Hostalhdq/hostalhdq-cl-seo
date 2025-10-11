import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/56987752280?text=Hola,%20quisiera%20más%20información%20sobre%20el%20hostal"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-fade-in"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </Button>
    </a>
  );
};
