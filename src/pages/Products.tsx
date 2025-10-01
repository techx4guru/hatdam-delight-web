import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import premiumBread from "@/assets/premium-bread.jpg";
import freshPastries from "@/assets/fresh-pastries.jpg";
import butterbread from "@/assets/butter-bread.jpg";
import hotdog from "@/assets/hotdog.jpg";
import coconutbread from "@/assets/coconutbread.jpg";
import sardine from "@/assets/sardine.jpg";
import burgerraed from "@/assets/burger-bread.jpg";
import premiumCakes from "@/assets/premium-cakes.jpg";
import OrderModal from "@/components/OrderModal";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "bread", name: "Premium Bread" },
    { id: "special-bread", name: "Special Premium Bread" },
    { id: "snacks", name: "Premium Snacks" },
    { id: "chips", name: "Premium Chips" },
    { id: "drinks", name: "Premium Special Drinks" }
  ];

  const products = [
    // Premium Bread
    { id: 1, name: "Butter bread (loaf)", category: "bread", image: butterbread },
    { id: 2, name: "Burger bread", category: "bread", image: burgerraed },
    { id: 3, name: "Wheat bread", category: "bread", image: premiumBread },
    
    // Special Premium Bread
    { id: 4, name: "Sardine bread", category: "special-bread", image: sardine },
    { id: 5, name: "Coconut bread", category: "special-bread", image: coconutbread },
    { id: 6, name: "Chocolate bread", category: "special-bread", image: premiumBread },
    { id: 7, name: "Peanut bread", category: "special-bread", image: premiumBread },
    { id: 8, name: "Milk bread", category: "special-bread", image: premiumBread },
    
    // Premium Snacks
    { id: 9, name: "Meatpie", category: "snacks", image: freshPastries },
    { id: 10, name: "Chicken pie", category: "snacks", image: freshPastries },
    { id: 11, name: "Chicken Puff", category: "snacks", image: freshPastries },
    { id: 12, name: "Sausage roll", category: "snacks", image: freshPastries },
    { id: 13, name: "Hot dog bread", category: "snacks", image: hotdog },
    { id: 14, name: "Fantasy", category: "snacks", image: freshPastries },
    { id: 15, name: "Super roll", category: "snacks", image: freshPastries },
    { id: 16, name: "Vegetable Roll", category: "snacks", image: freshPastries },
    { id: 17, name: "Pizza Roll", category: "snacks", image: freshPastries },
    { id: 18, name: "Hatdam Special", category: "snacks", image: freshPastries },
    { id: 19, name: "Doughnuts (jam)", category: "snacks", image: freshPastries },
    { id: 20, name: "Doughnuts (Milky)", category: "snacks", image: freshPastries },
    { id: 21, name: "Doughnuts (Ring)", category: "snacks", image: freshPastries },
    
    // Premium Chips
    { id: 22, name: "Plantain chip (ripe)", category: "chips", image: premiumCakes },
    { id: 23, name: "Plantain chips (unripe)", category: "chips", image: premiumCakes },
    { id: 24, name: "Chin chin", category: "chips", image: premiumCakes },
    { id: 25, name: "Groundnut Cake", category: "chips", image: premiumCakes },
    { id: 26, name: "Coconut candy", category: "chips", image: premiumCakes },
    { id: 27, name: "Groundnut", category: "chips", image: premiumCakes },
    { id: 28, name: "Peanut", category: "chips", image: premiumCakes },
    { id: 29, name: "Cashew nut", category: "chips", image: premiumCakes },
    
    // Premium Special Drinks
    { id: 30, name: "Tiger nut", category: "drinks", image: premiumCakes },
    { id: 31, name: "Fura Yoghurt", category: "drinks", image: premiumCakes },
    { id: 32, name: "Coconut milk", category: "drinks", image: premiumCakes },
    { id: 33, name: "Zobo", category: "drinks", image: premiumCakes },
    { id: 34, name: "Pineapple & Ginger juice", category: "drinks", image: premiumCakes }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleOrder = (productName: string) => {
    setSelectedProduct(productName);
    setOrderModalOpen(true);
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
            From premium breads to delicious snacks, every product is crafted with passion and precision.
          </p>
        </div>
      </section>

      {/* Daily Special Banner */}
      <section className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold text-secondary-foreground mb-2">
              🌟 Today's Special: Fresh Baked Goods
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
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-4">
                    {product.name}
                  </h3>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    onClick={() => handleOrder(product.name)}
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
            We specialize in custom orders for special occasions. Corporate events, 
            parties, and more. Let us create something special just for you.
          </p>
          <Button 
            onClick={() => handleOrder("Custom Order Inquiry")}
            size="lg"
            className="gold-shimmer hover:scale-105 transition-transform"
          >
            Request Custom Order
          </Button>
        </div>
      </section>

      <OrderModal 
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        productName={selectedProduct}
      />
    </div>
  );
};

export default Products;