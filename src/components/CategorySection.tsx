import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    {
      name: 'Hoodies',
      description: 'Stay cozy while coding with our premium Flutter hoodies',
      path: '/products?category=hoodie',
      emoji: '🧥',
      gradient: 'from-primary to-secondary',
    },
    {
      name: 'T-Shirts',
      description: 'Lightweight and breathable tees perfect for hackathons',
      path: '/products?category=tshirt',
      emoji: '👕',
      gradient: 'from-secondary to-accent',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by <span className="text-gradient-flutter">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find the perfect Flutter merch for every occasion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={category.path}
              to={category.path}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border border-primary/10">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="relative p-8 md:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-6xl">{category.emoji}</span>
                    <div className="w-12 h-12 rounded-full gradient-flutter flex items-center justify-center shadow-flutter group-hover:scale-110 transition-transform">
                      <ArrowRight className="h-5 w-5 text-primary-foreground group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
