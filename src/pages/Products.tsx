import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import premiumBread from "@/assets/premium-bread.jpg";
import freshPastries from "@/assets/fresh-pastries.jpg";
import premiumCakes from "@/assets/premium-cakes.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "breads", name: "Breads" },
    { id: "pastries", name: "Pastries" },
    { id: "cakes", name: "Cakes" },
    { id: "snacks", name: "Snacks" }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Hatdam Bread",
      category: "breads",
      price: "₦700",
      description: "Our signature artisanal bread with perfect crust and soft interior",
      image: premiumBread,
      rating: 5,
      isSpecial: true
    },
    {
      id: 2,
      name: "Whole Wheat Loaf",
      category: "breads",
      price: "₦800",
      description: "Nutritious whole wheat bread perfect for healthy living",
      image: premiumBread,
      rating: 5
    },
    {
      id: 3,
      name: "Butter Croissants",
      category: "pastries",
      price: "₦300",
      description: "Flaky, buttery croissants baked to golden perfection",
      image: freshPastries,
      rating: 5
    },
    {
      id: 4,
      name: "Danish Pastries",
      category: "pastries",
      price: "₦400",
      description: "Sweet Danish pastries with fruit fillings",
      image: freshPastries,
      rating: 4
    },
    {
      id: 5,
      name: "Birthday Cake",
      category: "cakes",
      price: "₦5,000",
      description: "Custom birthday cakes with personalized decorations",
      image: premiumCakes,
      rating: 5
    },
    {
      id: 6,
      name: "Wedding Cake",
      category: "cakes",
      price: "₦15,000",
      description: "Elegant multi-tier wedding cakes for your special day",
      image: premiumCakes,
      rating: 5
    },
    {
      id: 7,
      name: "Meat Pies",
      category: "snacks",
      price: "₦250",
      description: "Savory meat pies with seasoned beef filling",
      image: freshPastries,
      rating: 4
    },
    {
      id: 8,
      name: "Sausage Rolls",
      category: "snacks",
      price: "₦200",
      description: "Crispy pastry rolls filled with seasoned sausage",
      image: freshPastries,
      rating: 4
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleOrder = (productName: string, price: string) => {
    const message = encodeURIComponent(
      `Hello! I'd like to order: ${productName} (${price}). Please let me know the next steps.`
    );
    const whatsappUrl = `https://wa.me/2348068404427?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
            Daily Special Available
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            Our Premium
            <span className="text-secondary block">Products</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            From artisanal breads to delicate pastries, every product is crafted with passion and precision.
          </p>
        </div>
      </section>

      {/* Daily Special Banner */}
      <section className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold text-secondary-foreground mb-2">
              🌟 Today's Special: Premium Hatdam Bread
            </h2>
            <p className="text-secondary-foreground/90">
              Fresh from the oven every morning - Limited quantity available!
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "secondary" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="hover:scale-105 transition-transform"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover-lift shadow-soft border-none overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {product.isSpecial && (
                      <Badge className="absolute top-3 left-3 bg-secondary gold-shimmer">
                        Daily Special
                      </Badge>
                    )}
                    <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="text-2xl font-bold text-secondary">
                    {product.price}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    onClick={() => handleOrder(product.name, product.price)}
                    className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground"
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Order Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Need Something Custom?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We specialize in custom orders for special occasions. Wedding cakes, birthday cakes, 
            corporate events, and more. Let us create something special just for you.
          </p>
          <Button 
            onClick={() => handleOrder("Custom Order Inquiry", "Custom Pricing")}
            size="lg"
            className="gold-shimmer hover:scale-105 transition-transform"
          >
            Request Custom Order
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;