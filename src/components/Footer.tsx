import { Link } from 'react-router-dom';
import { Heart, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <img src="/flutter.png" alt="Flutter Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground">Flutter Store</h3>
                <p className="text-xs text-muted-foreground">by Namma Flutter Chennai</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Official merchandise store for the Namma Flutter Chennai community.
              Wear your Flutter pride with our exclusive collection of hoodies and t-shirts.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/fluttercon" className="text-muted-foreground hover:text-primary transition-colors">
                  FlutterCon 2025
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-muted-foreground hover:text-primary transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Namma Flutter Chennai. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built by{' '}
            <a
              href="https://www.linkedin.com/in/keerthana-m-g-12ba59256/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Keerthana M G
            </a>
            {' '}and{' '}
            <a
              href="https://www.linkedin.com/in/hareesh-s-s-7478b1257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Hareesh S S
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
