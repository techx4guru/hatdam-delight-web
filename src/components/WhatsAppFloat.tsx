import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Hatdam Bakery! I'm interested in placing an order. Could you please help me?"
    );
    const whatsappUrl = `https://wa.me/2348068404427?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
        size="icon"
      >
        <MessageCircle size={24} className="text-white" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
      
      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
    </div>
  );
};