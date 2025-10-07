import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Heart, Share2 } from "lucide-react";
import premiumBread from "@/assets/premium-bread.jpg";
import freshPastries from "@/assets/fresh-pastries.jpg";
import premiumCakes from "@/assets/premium-cakes.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";
import butterbread from "@/assets/butter-bread.jpg";
import burgerraed from "@/assets/burger-bread.jpg";
import coconutbread from "@/assets/coconutbread.jpg";
import sardine from "@/assets/sardine.jpg";
import hotdog from "@/assets/hotdog.jpg";
import donuts from "@/assets/donuts.jpg";
import sausage from "@/assets/sausage.jpg";
import superroll from "@/assets/super-roll.jpg";
import sidedisplay from "@/assets/sidedisplay.jpg";
import breads from "@/assets/breads.jpg";
import displaystand from "@/assets/display-stand.jpg";


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "breads", name: "Artisan Breads" },
    { id: "pastries", name: "Fresh Pastries" },
    { id: "cakes", name: "Custom Cakes" },
    { id: "behind-scenes", name: "Behind the Scenes" }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "breads",
      image: butterbread,
      title: "Premium Hatdam Bread",
      description: "Our signature artisanal bread with perfect golden crust",
      likes: 127
    },
    {
      id: 2,
      category: "breads",
      image: coconutbread,
      title: "Premium Hatdam Coconutbread Bread",
      description: "Our signature artisanal bread with perfect golden crust",
      likes: 127
    },
    {
      id: 3,
      category: "breads",
      image: sardine,
      title: "Premium Hatdam Sardine Bread",
      description: "Our signature artisanal bread with perfect golden crust",
      likes: 127
    },
    {
      id: 4,
      category: "breads",
      image: burgerraed,
      title: "Premium Hatdam Bread",
      description: "Our signature artisanal bread with perfect golden crust",
      likes: 127
    },
    {
      id: 1,
      category: "breads",
      image: butterbread,
      title: "Premium Hatdam Bread",
      description: "Our signature artisanal bread with perfect golden crust",
      likes: 127
    },
    {
      id: 2,
      category: "pastries",
      image: freshPastries,
      title: "Fresh Morning Pastries",
      description: "Buttery croissants and Danish pastries made fresh daily",
      likes: 89
    },
     {
    id: 1,
    category: "snacks",
    image: hotdog,
    title: "Delicious Hotdog",
    description: "Juicy sausage wrapped in soft bread and topped with sauces.",
    likes: 120,
  },
  {
    id: 2,
    category: "pastries",
    image: donuts,
    title: "Sweet Donuts",
    description: "Soft, sugary donuts that melt in your mouth.",
    likes: 95,
  },
  {
    id: 3,
    category: "meat",
    image: sausage,
    title: "Grilled Sausage",
    description: "Perfectly grilled sausages with a smoky flavor.",
    likes: 110,
  },
  {
    id: 4,
    category: "rolls",
    image: superroll,
    title: "Super Roll",
    description: "Stuffed roll packed with creamy filling and flavor.",
    likes: 102,
  },
  {
    id: 5,
    category: "display",
    image: sidedisplay,
    title: "Side Display",
    description: "Beautiful food display arrangement to attract customers.",
    likes: 87,
  },
  {
    id: 6,
    category: "breads",
    image: breads,
    title: "Assorted Breads",
    description: "Freshly baked loaves with a crispy crust and soft center.",
    likes: 99,
  },
  {
    id: 7,
    category: "display",
    image: displaystand,
    title: "Display Stand",
    description: "Elegant display stand showcasing pastries and snacks.",
    likes: 75,
  },
    {
      id: 3,
      category: "cakes",
      image: premiumCakes,
      title: "Custom Celebration Cakes",
      description: "Beautiful custom cakes for your special occasions",
      likes: 156
    },
    {
      id: 4,
      category: "behind-scenes",
      image: heroBakery,
      title: "Master Bakers at Work",
      description: "Our skilled bakers crafting perfection every morning",
      likes: 203
    },
    {
      id: 5,
      category: "breads",
      image: premiumBread,
      title: "Whole Wheat Collection",
      description: "Healthy and delicious whole grain options",
      likes: 92
    },
    {
      id: 6,
      category: "pastries",
      image: freshPastries,
      title: "Afternoon Tea Selection",
      description: "Perfect pastries for your afternoon tea time",
      likes: 134
    },
    {
      id: 7,
      category: "cakes",
      image: premiumCakes,
      title: "Wedding Cake Masterpiece",
      description: "Elegant multi-tier wedding cakes",
      likes: 287
    },
    {
      id: 8,
      category: "behind-scenes",
      image: heroBakery,
      title: "Early Morning Prep",
      description: "Starting before dawn to bring you the freshest products",
      likes: 167
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleShare = (item) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
            Visual Feast
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            Our Bakery
            <span className="text-secondary block">Gallery</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Take a visual journey through our artisanal creations, from golden breads to elegant pastries.
          </p>
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

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="group cursor-pointer overflow-hidden border-none shadow-soft hover-lift"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-heading font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="w-8 h-8 p-0 backdrop-blur-sm bg-white/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(item);
                      }}
                    >
                      <Eye size={16} />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="w-8 h-8 p-0 backdrop-blur-sm bg-white/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(item);
                      }}
                    >
                      <Share2 size={16} />
                    </Button>
                  </div>

                  {/* Likes */}
                  <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart size={14} className="text-red-400" />
                    <span className="text-white text-xs font-medium">{item.likes}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl font-heading font-bold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white/80">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Taste What You See
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Every image tells a story of craftsmanship, quality, and passion. 
            Experience these flavors for yourself with our fresh daily offerings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="gold-shimmer hover:scale-105 transition-transform"
            >
              Order Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-transform"
            >
              Visit Our Bakery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;