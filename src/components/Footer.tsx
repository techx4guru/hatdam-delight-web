import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl font-heading font-bold text-secondary">
                Hatdam
              </div>
              <div className="text-lg text-secondary-light">Bakery</div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A bakery where every bite is a delight. We bring the finest artisanal breads, 
              pastries, and cakes to your table with passion and quality.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/hatdam_bakery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary/20 rounded-full hover:bg-secondary/30 transition-colors"
              >
                <Instagram size={20} className="text-secondary" />
              </a>
              <a 
                href="https://facebook.com/hatdam_bakery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-secondary/20 rounded-full hover:bg-secondary/30 transition-colors"
              >
                <Facebook size={20} className="text-secondary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-secondary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-secondary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-secondary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-muted-foreground hover:text-secondary transition-colors">
                  Order Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-secondary mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-secondary mt-0.5" />
                <div className="text-muted-foreground">
                  <p>No 46, NNPC Housing Complex Road,</p>
                  <p>Ekpan, Warri, Delta State</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-secondary" />
                <div className="text-muted-foreground">
                  <p>08068404427</p>
                  <p>08033527313</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-secondary" />
                <p className="text-muted-foreground">info@hatdambakery.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Hatdam Bakery. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Made with ❤️ for delicious moments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};