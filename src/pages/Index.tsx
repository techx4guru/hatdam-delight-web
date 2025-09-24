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
  className="text-lg px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-primary-foreground shadow-lg hover:bg-white/20 hover:scale-110 hover:shadow-xl transition-all duration-300"
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

      {/* Products Highlight */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Our Specialties
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Premium Products Made Fresh Daily
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From our signature Hatdam bread to elegant custom cakes, every product reflects our commitment to quality and taste.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="hover-lift border-none shadow-premium overflow-hidden">
              <div className="relative">
                <img src={premiumBread} alt="Premium Hatdam Bread" className="w-full h-64 object-cover" />
                <Badge className="absolute top-4 left-4 bg-secondary gold-shimmer">
                  Best Seller
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-heading text-primary">Premium Hatdam Bread</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our signature artisanal bread with perfect golden crust and soft, fluffy interior. Baked fresh every morning.
                </p>
                <div className="flex justify-center">
                  <Button onClick={handleOrderNow} variant="outline" className="hover:bg-secondary hover:text-secondary-foreground">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift border-none shadow-premium overflow-hidden">
              <div className="relative">
                <img src={freshPastries} alt="Fresh Pastries" className="w-full h-64 object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-heading text-primary">Fresh Pastries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Buttery croissants, Danish pastries, and savory treats. Perfect for breakfast or afternoon snacks.
                </p>
                <div className="flex justify-center">
                  <Button onClick={handleOrderNow} variant="outline" className="hover:bg-secondary hover:text-secondary-foreground">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift border-none shadow-premium overflow-hidden">
              <div className="relative">
                <img src={freshPastries} alt="Fresh Pastries" className="w-full h-64 object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-heading text-primary">Premium Hatdam Chips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  
Crispy, flavorful chips made from the finest ingredients — perfect for snacking anytime. Carefully prepared to deliver taste and crunch in every bite.</p>
                <div className="flex justify-center">
                  <Button onClick={handleOrderNow} variant="outline" className="hover:bg-secondary hover:text-secondary-foreground">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="gold-shimmer hover:scale-105 transition-transform">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Special Banner */}
      <section className="py-16 bg-gradient-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4">
              🌟 Today's Special: Premium Hatdam Bread
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-6">
              Fresh from our ovens every morning - Limited quantity available daily!
            </p>
            <Button 
              onClick={handleOrderNow}
              size="lg"
              variant="outline"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary hover:scale-105 transition-all"
            >
              Reserve Yours Now
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied customers across Delta State
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-none shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to Experience
            <span className="text-secondary block">Hatdam Bakery?</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Visit us at No 46, NNPC Housing Complex Road, Ekpan, Warri, or order online for delivery across Delta State.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleOrderNow}
              size="lg"
              className="text-lg px-8 py-4 gold-shimmer hover:scale-110 transition-all duration-300"
            >
              <Phone size={20} className="mr-2" />
              Order Now via WhatsApp
            </Button>
<Button
  asChild
  variant="outline"
  size="lg"
  className="text-lg px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-primary-foreground shadow-lg hover:bg-white/20 hover:scale-110 hover:shadow-xl transition-all duration-300"
>
  <Link to="/contact">Visit Our Bakery</Link>
</Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-primary-light">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">📍 Location</h3>
                <p className="opacity-90">NNPC Housing Complex Road, Ekpan, Warri</p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">📞 Phone</h3>
                <p className="opacity-90">08068404427 • 08033527313</p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">🕐 Hours</h3>
                <p className="opacity-90">Daily: 8:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;