import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const OrderModal = ({ isOpen, onClose, productName }: OrderModalProps) => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello! I'd like to order: ${productName}. Please let me know the price and availability.`
    );
    const whatsappUrl = `https://wa.me/2348068404427?text=${message}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const handleCall = () => {
    window.open("tel:+2348068404427", "_self");
    onClose();
  };

  const handleForm = () => {
    // Navigate to order form page with React Router
    navigate("/order");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-primary font-heading">
            Order {productName}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-center text-muted-foreground">
            Choose your preferred way to place your order:
          </p>

          <div className="space-y-3">
            <Button
              onClick={handleWhatsApp}
              className="w-full h-14 bg-secondary hover:bg-secondary-dark text-secondary-foreground"
            >
              <MessageCircle className="mr-3" size={20} />
              <div className="text-left">
                <div className="font-semibold">WhatsApp Direct</div>
                <div className="text-sm opacity-90">Chat with us instantly</div>
              </div>
            </Button>

            <Button
              onClick={handleForm}
              className="w-full h-14 bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              <FileText className="mr-3" size={20} />
              <div className="text-left">
                <div className="font-semibold">Order Form</div>
                <div className="text-sm opacity-90">Fill out order details</div>
              </div>
            </Button>

            <Button
              onClick={handleCall}
              className="w-full h-14 bg-accent hover:bg-accent/80 text-accent-foreground border border-primary"
            >
              <Phone className="mr-3" size={20} />
              <div className="text-left">
                <div className="font-semibold">Call Direct</div>
                <div className="text-sm opacity-90">Speak with us now</div>
              </div>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
