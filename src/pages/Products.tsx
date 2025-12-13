import { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilters, { FilterState } from '@/components/ProductFilters';
import { products } from '@/data/products';

const Products = () => {
  const [searchParams] = useSearchParams();

  const maxPrice = useMemo(
    () => Math.max(...products.map((p) => p.price)),
    []
  );

  const availableSizes = useMemo(() => {
    const sizes = new Set<string>();
    products.forEach((p) => p.sizes.forEach((s) => sizes.add(s)));
    return Array.from(sizes).sort((a, b) => {
      const order = ['S', 'M', 'L', 'XL', 'XXL'];
      return order.indexOf(a) - order.indexOf(b);
    });
  }, []);

  const availableColors = useMemo(() => {
    const colorMap = new Map<string, { name: string; hex: string }>();
    products.forEach((p) =>
      p.colors.forEach((c) => colorMap.set(c.name, c))
    );
    return Array.from(colorMap.values());
  }, []);

  const [filters, setFilters] = useState<FilterState>(() => {
    const categoriesParam = searchParams.get('categories');
    return {
      sizes: [],
      colors: [],
      categories: categoriesParam ? [categoriesParam] : [],
      priceRange: [0, maxPrice],
      showNew: false,
      showBestsellers: false,
      showFlutterCon: false,
    };
  });

  // Update filters when URL params change
  useEffect(() => {
    const categoriesParam = searchParams.get('categories');
    if (categoriesParam && !filters.categories.includes(categoriesParam)) {
      setFilters((prev) => ({
        ...prev,
        categories: [categoriesParam],
      }));
    }
  }, [searchParams]);

  // Scroll to top when filters change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }
      // Size filter
      if (filters.sizes.length > 0 && !filters.sizes.some((s) => product.sizes.includes(s))) {
        return false;
      }
      // Color filter
      if (filters.colors.length > 0 && !filters.colors.some((c) => product.colors.some((pc) => pc.name === c))) {
        return false;
      }
      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }
      // Quick filters
      if (filters.showNew && !product.isNew) return false;
      if (filters.showBestsellers && !product.isBestseller) return false;
      if (filters.showFlutterCon && !product.flutterConExclusive) return false;

      return true;
    });
  }, [filters]);

  return (
    <>
      <Helmet>
        <title>Explore Products - Flutter Store | Namma Flutter Chennai</title>
        <meta name="description" content="Shop premium Flutter merchandise from Namma Flutter Chennai. Quality apparel for Flutter developers." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
        <Navbar />
        <main className="flex-1 py-8">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-8 animate-fade-in text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
                Explore <span className="text-gradient-flutter">Flutter Merch</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                {filteredProducts.length} awesome products found
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ProductFilters
                    filters={filters}
                    onFilterChange={setFilters}
                    availableSizes={availableSizes}
                    availableColors={availableColors}
                    maxPrice={maxPrice}
                  />
                </div>
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 animate-fade-in">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                      <p className="text-7xl">🦅</p>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                      No products found
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Try adjusting your filters to find what you're looking for
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Products;
