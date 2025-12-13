import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* FlutterCon Badge */}
            <Link to="/fluttercon">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/20 transition-colors group">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-sm font-medium text-primary">
                  FlutterCon 2025 Chennai — In a Week!
                </span>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Wear Your{' '}
              <span className="text-gradient-flutter">Flutter</span>{' '}
              Pride
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Official merchandise from the Namma Flutter Chennai community.
              Premium hoodies and t-shirts designed for Flutter enthusiasts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button size="lg" className="gradient-flutter text-primary-foreground border-0 shadow-flutter hover:shadow-hover transition-all group w-full sm:w-auto">
                  <Sparkles className="h-5 w-5 mr-2 group-hover:animate-wiggle" />
                  Explore Products
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/fluttercon">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all w-full sm:w-auto">
                  FlutterCon 2025
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <p className="font-heading font-bold text-2xl md:text-3xl text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-heading font-bold text-2xl md:text-3xl text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Unique Designs</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-heading font-bold text-2xl md:text-3xl text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Community Love</p>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration Area */}
          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-4 rounded-3xl gradient-flutter opacity-20 blur-2xl animate-pulse-glow" />
              <div className="relative bg-card rounded-3xl shadow-card overflow-hidden border border-border">
                <div className="aspect-square bg-muted flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-flutter flex items-center justify-center shadow-flutter animate-float">
                      <span className="text-6xl font-heading font-bold text-primary-foreground">F</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">Flutter Store</h3>
                    <p className="text-muted-foreground">Premium Merchandise</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-card p-3 animate-float border border-border" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="font-semibold text-sm text-foreground">New Arrivals</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card p-3 animate-float border border-border" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <span className="font-semibold text-sm text-foreground">FlutterCon 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
