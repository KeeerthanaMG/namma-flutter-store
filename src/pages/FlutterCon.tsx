import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, Ticket, Users, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const FlutterCon = () => {
  const flutterConProducts = products.filter((p) => p.flutterConExclusive);

  return (
    <>
      <Helmet>
        <title>FlutterCon 2025 Chennai - Exclusive Merchandise | Flutter Store</title>
        <meta name="description" content="Get exclusive FlutterCon 2025 Chennai merchandise. Limited edition hoodies and t-shirts for the biggest Flutter event." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden gradient-flutter py-16 md:py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="container mx-auto px-4 relative">
              <div className="text-center animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-2 mb-6">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
                  </span>
                  <span className="text-sm font-medium text-primary-foreground">
                    Limited Edition Merchandise
                  </span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  FlutterCon 2025
                  <br />
                  <span className="text-primary-foreground/80">Chennai Edition</span>
                </h1>
                
                <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                  The biggest Flutter conference in Chennai is just around the corner! 
                  Grab your exclusive FlutterCon merchandise before they're gone.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <Calendar className="h-5 w-5" />
                    <span>Coming in 1 Week</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>Chennai, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <Users className="h-5 w-5" />
                    <span>500+ Attendees</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Event Highlights */}
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    icon: Ticket,
                    title: 'Exclusive Designs',
                    description: 'Unique artwork created specifically for FlutterCon 2025',
                  },
                  {
                    icon: Star,
                    title: 'Premium Quality',
                    description: 'High-quality materials that last for years',
                  },
                  {
                    icon: Users,
                    title: 'Community Pride',
                    description: 'Show your Flutter love at the biggest event',
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flutter-card text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-flutter flex items-center justify-center shadow-flutter">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Products */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  FlutterCon 2025 <span className="text-gradient-flutter">Collection</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Limited edition merchandise - Get yours before they sell out!
                </p>
              </div>

              {flutterConProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {flutterConProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    FlutterCon merchandise coming soon!
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Don't Miss Out! 🎉
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                FlutterCon 2025 is just a week away. Get your exclusive merchandise 
                and be part of the biggest Flutter celebration in Chennai!
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FlutterCon;
