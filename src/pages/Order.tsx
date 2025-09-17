import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Order = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    products: [],
    deliveryOption: "",
    specialInstructions: "",
    agreedToTerms: false
  });

  const products = [
    { id: "premium-bread", name: "Premium Hatdam Bread", price: "₦700" },
    { id: "whole-wheat", name: "Whole Wheat Loaf", price: "₦800" },
    { id: "croissants", name: "Butter Croissants", price: "₦300" },
    { id: "danish", name: "Danish Pastries", price: "₦400" },
    { id: "meat-pies", name: "Meat Pies", price: "₦250" },
    { id: "sausage-rolls", name: "Sausage Rolls", price: "₦200" },
    { id: "birthday-cake", name: "Birthday Cake", price: "₦5,000" },
    { id: "custom-order", name: "Custom Order", price: "Variable" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.location || !formData.deliveryOption) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreedToTerms) {
      toast({
        title: "Terms & Conditions",
        description: "Please agree to our terms and conditions.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const selectedProducts = products.filter(product => 
      formData.products.includes(product.id)
    );
    
    let message = `🍞 *New Order from Hatdam Bakery Website*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    message += `Location: ${formData.location}\n`;
    message += `Delivery Option: ${formData.deliveryOption}\n\n`;
    
    if (selectedProducts.length > 0) {
      message += `*Products Ordered:*\n`;
      selectedProducts.forEach(product => {
        message += `• ${product.name} - ${product.price}\n`;
      });
      message += `\n`;
    }
    
    if (formData.specialInstructions) {
      message += `*Special Instructions:*\n${formData.specialInstructions}\n\n`;
    }
    
    message += `Thank you for choosing Hatdam Bakery! 🥖✨`;

    const whatsappUrl = `https://wa.me/2348068404427?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Order Submitted!",
      description: "You'll be redirected to WhatsApp to complete your order.",
    });
  };

  const handleProductChange = (productId: string, checked: string | boolean) => {
    const isChecked = !!checked;
    setFormData(prev => ({
      ...prev,
      products: isChecked 
        ? [...prev.products, productId]
        : prev.products.filter(id => id !== productId)
    }));
  };

  return (
    <div className="min-h-screen bg-warm">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
            Easy Ordering
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            Order Fresh
            <span className="text-secondary block">From Our Bakery</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Fresh bread and pastries delivered to your doorstep or ready for pickup at our bakery.
          </p>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-premium border-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-primary">
                    Place Your Order
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-heading font-semibold text-primary">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="08012345678"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address (Optional)</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Delivery Location *</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                          placeholder="Enter your address or pickup location"
                          required
                        />
                      </div>
                    </div>

                    {/* Delivery Options */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-heading font-semibold text-primary">
                        Delivery Option *
                      </h3>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, deliveryOption: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose delivery option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pickup">Pickup from Bakery (Free)</SelectItem>
                          <SelectItem value="delivery-warri">Home Delivery within Warri (₦500)</SelectItem>
                          <SelectItem value="delivery-delta">Delivery within Delta State (₦1,000)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Product Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-heading font-semibold text-primary">
                        Select Products
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {products.map((product) => (
                          <div key={product.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-warm/50 transition-colors">
                            <Checkbox
                              id={product.id}
                              checked={formData.products.includes(product.id)}
                              onCheckedChange={(checked) => handleProductChange(product.id, checked)}
                            />
                            <Label htmlFor={product.id} className="flex-1 cursor-pointer">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{product.name}</span>
                                <span className="text-secondary font-bold">{product.price}</span>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Special Instructions */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-heading font-semibold text-primary">
                        Special Instructions
                      </h3>
                      <Textarea
                        value={formData.specialInstructions}
                        onChange={(e) => setFormData(prev => ({ ...prev, specialInstructions: e.target.value }))}
                        placeholder="Any special requests, dietary requirements, or delivery instructions..."
                        rows={3}
                      />
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreedToTerms}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreedToTerms: !!checked }))}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the terms and conditions and understand that final pricing will be confirmed via WhatsApp *
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gold-shimmer hover:scale-105 transition-transform"
                    >
                      Submit Order via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary & Info */}
            <div className="space-y-6">
              {/* Delivery Info */}
              <Card className="shadow-soft border-none">
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-primary flex items-center">
                    <MapPin size={20} className="mr-2 text-secondary" />
                    Delivery Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Free Pickup</p>
                      <p className="text-sm text-muted-foreground">Available at our bakery</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Warri Delivery</p>
                      <p className="text-sm text-muted-foreground">₦500 delivery fee</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Delta State</p>
                      <p className="text-sm text-muted-foreground">₦1,000 delivery fee</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card className="shadow-soft border-none">
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-primary flex items-center">
                    <Clock size={20} className="mr-2 text-secondary" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Saturday</span>
                      <span className="font-medium">6:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">7:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="shadow-soft border-none">
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-primary flex items-center">
                    <Phone size={20} className="mr-2 text-secondary" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">08068404427</p>
                    <p className="font-medium">08033527313</p>
                    <p className="text-sm text-muted-foreground">
                      Available for orders and inquiries
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;