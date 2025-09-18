import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    let message = `🍞 *Contact Form Submission*\n\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*Email:* ${formData.email}\n`;
    if (formData.phone) message += `*Phone:* ${formData.phone}\n`;
    if (formData.subject) message += `*Subject:* ${formData.subject}\n`;
    message += `\n*Message:*\n${formData.message}\n\n`;
    message += `Please respond at your earliest convenience. Thank you!`;

    const whatsappUrl = `https://wa.me/2348068404427?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });

    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon via WhatsApp.",
    });
  };

  const handlePhoneCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleDirections = () => {
    const address = "No 46, NNPC Housing Complex Road, Ekpan, Warri, Delta State, Nigeria";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            Contact
            <span className="text-secondary block">Hatdam Bakery</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            We're here to help with orders, questions, or just to chat about our delicious offerings.
          </p>
        </div>
      </section>

      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-premium border-none">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-primary">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="08012345678"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gold-shimmer hover:scale-105 transition-transform"
                    >
                      <MessageCircle size={20} className="mr-2" />
                      Send Message via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Location */}
              <Card className="shadow-soft border-none">
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-primary flex items-center">
                    <MapPin size={20} className="mr-2 text-secondary" />
                    Visit Our Bakery
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Address:</p>
                    <p className="text-muted-foreground">
                      No 46, NNPC Housing Complex Road,<br />
                      Ekpan, Warri, Delta State, Nigeria
                    </p>
                  </div>
                  <Button 
                    onClick={handleDirections}
                    variant="outline" 
                    className="w-full hover:scale-105 transition-transform"
                  >
                    <Navigation size={16} className="mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="shadow-soft border-none">
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-primary flex items-center">
                    <Phone size={20} className="mr-2 text-secondary" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    onClick={() => handlePhoneCall("08068404427")}
                    variant="outline" 
                    className="w-full justify-start hover:scale-105 transition-transform"
                  >
                    08068404427
                  </Button>
                  <Button 
                    onClick={() => handlePhoneCall("08033527313")}
                    variant="outline" 
                    className="w-full justify-start hover:scale-105 transition-transform"
                  >
                    08033527313
                  </Button>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="shadow-soft border-none">
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-primary flex items-center">
                    <Mail size={20} className="mr-2 text-secondary" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    info@hatdambakery.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We'll respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card className="shadow-soft border-none">
                <CardHeader>
                  <CardTitle className="text-lg font-heading text-primary flex items-center">
                    <Clock size={20} className="mr-2 text-secondary" />
                    Opening Hours
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
                  <p className="text-sm text-muted-foreground mt-3">
                    Fresh bread available from opening time!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Find Us on the Map
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Warri, easy to find and plenty of parking available.
            </p>
          </div>
          
          <div className="bg-gradient-warm rounded-2xl overflow-hidden">
            <div className="p-6 text-center">
              <MapPin size={48} className="text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Visit Our Bakery Today
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the aroma of fresh-baked bread and see our master bakers in action. 
                We're conveniently located in NNPC Housing Complex, with easy access and parking.
              </p>
              <Button 
                onClick={handleDirections}
                size="lg"
                className="gold-shimmer hover:scale-105 transition-transform mb-6"
              >
                <Navigation size={20} className="mr-2" />
                Get Directions
              </Button>
            </div>
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4769089724757!2d5.7516!3d5.5164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f6a9b7b45e0d%3A0x1234567890abcdef!2sNo%2046%2C%20NNPC%20Housing%20Complex%20Road%2C%20Ekpan%2C%20Warri%2C%20Delta%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1695123456789!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hatdam Bakery Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;