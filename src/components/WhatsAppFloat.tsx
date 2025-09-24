import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppFloat = () => {
  const message = encodeURIComponent(
    "Hello Hatdam Bakery! I'm interested in placing an order. Could you please help me?"
  );
  const whatsappUrl = `https://wa.me/2348068404427?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Pulse animation ring - behind button */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping z-0"></div>

        {/* Button with fallback link */}
        <Button
          asChild
          className="relative z-10 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
          size="icon"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle size={24} className="text-white" />
            <span className="sr-only">Contact us on WhatsApp</span>
          </a>
        </Button>
      </div>
    </div>
  );
};
