import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "Every product is crafted with love and the finest ingredients, ensuring exceptional taste in every bite."
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "A family-owned bakery that has been serving the Warri community with dedication and warmth."
    },
    {
      icon: Award,
      title: "Premium Standards",
      description: "We maintain the highest standards in baking, using traditional techniques with modern precision."
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Our products are baked fresh every day, ensuring you get the best quality and taste."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            The Heart Behind
            <span className="text-secondary block">Hatdam Bakery</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Where passion meets tradition, and every recipe tells a story of dedication to bringing joy through exceptional baking.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Our Journey Began with a Simple Dream
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in the heart of Warri, Delta State, Hatdam Bakery started as a small family dream to bring 
                the finest artisanal breads and pastries to our community. What began in a modest kitchen has grown 
                into a beloved local institution known for quality, freshness, and exceptional taste.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Located at No 46, NNPC Housing Complex Road, Ekpan, our bakery has become a cornerstone of the 
                neighborhood, where the aroma of fresh bread draws families together and creates lasting memories.
              </p>
              <p className="text-lg text-muted-foreground">
                Every morning, our skilled bakers arrive before dawn to begin the sacred ritual of mixing, kneading, 
                and baking that fills our community with the irresistible scent of fresh bread and pastries.
              </p>
            </div>
            <div className="animate-slide-up">
              <div className="bg-primary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  To bring delight to every home through exceptional bread and pastries, crafted with passion, 
                  tradition, and the finest ingredients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Fresh Daily</Badge>
                  <Badge variant="secondary">Premium Quality</Badge>
                  <Badge variant="secondary">Family Owned</Badge>
                  <Badge variant="secondary">Local Pride</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              What Makes Us Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our baking process and customer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-none shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Meet Our Master Bakers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Behind every perfect loaf and delicate pastry is a team of passionate artisans who have dedicated 
            their craft to bringing you the very best. Our bakers start before dawn, working with precision 
            and love to ensure every product meets our exceptional standards.
          </p>
          
          <div className="bg-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Visit Our Bakery
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Come see our bakers at work! Watch as they knead dough, shape loaves, and create beautiful 
              pastries in our open kitchen. The magic happens every day, and you're invited to witness 
              the artistry that goes into every product.
            </p>
            <p className="text-primary font-semibold">
              Open Daily: 6:00 AM - 8:00 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;