import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Clock, Shield, Heart, Phone, ChefHat, Award } from "lucide-react";
import heroBakery from "@/assets/hero-bakery.jpg";
import premiumBread from "@/assets/premium-bread.jpg";
import freshPastries from "@/assets/fresh-pastries.jpg";

const Index = () => {
  const handleOrderNow = () => {
    const message = encodeURIComponent(
      "Hello Hatdam Bakery! I'd like to place an order. Could you please help me with your available products?"
    );
    const whatsappUrl = `https://wa.me/2348068404427?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const testimonials = [
    {
      name: "Adaeze Okwu",
      rating: 5,
      text: "The best bread in Warri! Fresh every morning and the taste is incredible. Hatdam Bakery has become our family's go-to for all occasions.",
      location: "Warri, Delta State",
    },
    {
      name: "Samuel Okoye",
      rating: 5,
      text: "Their pastries are divine! Ordered a custom cake for my daughter's birthday and it was absolutely perfect. Highly recommended!",
      location: "Effurun, Delta State",
    },
    {
      name: "Grace Emeka",
      rating: 5,
      text: "Amazing quality and service. The aroma alone when you walk in is enough to make you hungry. Best bakery in Delta State!",
      location: "Ekpan, Warri",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Baked fresh every morning before dawn",
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Only the finest ingredients make it to our kitchen",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every product crafted with passion and care",
    },
    {
      icon: Award,
      title: "Local Favorite",
      description: "Trusted by families across Delta State",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* ✅ FIX: removed parallax-bg, added safe bg styling */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBakery})`,
            backgroundAttachment: "scroll", // ensures it works on iOS
          }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-8 bg-secondary/20 text-secondary border-secondary/30 animate-fade-in">
            Fresh Daily Since Opening
          </Badge>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-6 animate-slide-up">
            A bakery where every
            <span className="text-secondary block animate-fade-in">
              bite is a delight
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto mb-12 animate-fade-in">
            Experience the finest artisanal breads, pastries, and cakes crafted
            with passion in the heart of Warri, Delta State.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button
              onClick={handleOrderNow}
              size="lg"
              className="text-lg px-8 py-4 gold-shimmer hover:scale-110 transition-all duration-300 shadow-gold"
            >
              <Phone size={20} className="mr-2" />
              Order Now
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 glass-effect border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300"
            >
              <Link to="/products">View Menu</Link>
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChefHat size={32} className="text-secondary" />
        </div>
      </section>

      {/* ✅ Rest of your code stays unchanged */}
      {/* Features Section */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 animate-fade-in">
              Why Choose Hatdam Bakery?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              We're not just a bakery; we're a tradition of excellence that
              brings joy to every table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover-lift border-none shadow-soft"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ... keep the rest of your sections as they are ... */}
    </div>
  );
};

export default Index;
