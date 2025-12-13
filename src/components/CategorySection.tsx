import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    {
      name: 'Hoodies',
      description: 'Stay cozy while coding with our premium Flutter hoodies',
      path: '/products?categories=hoodie',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 7h-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2H9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2H2" />
          <path d="M2 7v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7" />
          <path d="M9 5v4" />
          <path d="M15 5v4" />
          <path d="M9 15h6" />
        </svg>
      ),
      gradient: 'from-primary to-secondary',
    },
    {
      name: 'T-Shirts',
      description: 'Lightweight and breathable tees perfect for hackathons',
      path: '/products?categories=tshirt',
      icon: <Shirt className="w-12 h-12" />,
      gradient: 'from-secondary to-accent',
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by <span className="text-gradient-flutter">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find the perfect Flutter merch for every occasion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.path}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link to={category.path} className="group block">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-hover border border-primary/10"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="relative p-8 md:p-10">
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                        className="text-primary"
                      >
                        {category.icon}
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        className="w-12 h-12 rounded-full gradient-flutter flex items-center justify-center shadow-flutter"
                      >
                        <ArrowRight className="h-5 w-5 text-primary-foreground" />
                      </motion.div>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
