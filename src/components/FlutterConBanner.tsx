import { Link } from 'react-router-dom';
import { ArrowRight, Ticket, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FlutterConBanner = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl gradient-flutter p-4 md:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-2 mb-6">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
                </span>
                <span className="text-sm font-small text-primary-foreground">
                  Limited Edition Merchandise
                </span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                FlutterCon 2025 Chennai
              </h2>

              <p className="text-primary-foreground/90 pr-4 text-lg mb-6">
                Get exclusive FlutterCon 2025 merchandise before they're gone!
                Limited stock available for the biggest Flutter event in Chennai.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Calendar className="h-5 w-5" />
                  <span>Coming in 1 Week</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Chennai, India</span>
                </div>
              </div>

              <Link to="/fluttercon">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg group px-8 py-6 text-md">
                  <Ticket className="h-6 w-6 mr-2" />
                  Shop FlutterCon Collection
                  <ArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="relative w-64 h-64 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-center">
                    <Ticket className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
                    <p className="text-xl font-heading font-bold text-primary-foreground">FlutterCon</p>
                    <p className="text-primary-foreground/80">2025</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 z-10 w-32 h-32 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20 animate-float">
                  <span className="text-4xl">🎉</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlutterConBanner;
