import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilters, { FilterState } from '@/components/ProductFilters';
import { products } from '@/data/products';

const Products = () => {
  const { category } = useParams<{ category: string }>();
  const categoryType = category === 'tshirts' ? 'tshirt' : 'hoodie';
  const categoryTitle = category === 'tshirts' ? 'T-Shirts' : 'Hoodies';

  const categoryProducts = useMemo(
    () => products.filter((p) => p.category === categoryType),
    [categoryType]
  );

  const maxPrice = useMemo(
    () => Math.max(...categoryProducts.map((p) => p.price)),
    [categoryProducts]
  );

  const availableSizes = useMemo(() => {
    const sizes = new Set<string>();
    categoryProducts.forEach((p) => p.sizes.forEach((s) => sizes.add(s)));
    return Array.from(sizes).sort((a, b) => {
      const order = ['S', 'M', 'L', 'XL', 'XXL'];
      return order.indexOf(a) - order.indexOf(b);
    });
  }, [categoryProducts]);

  const availableColors = useMemo(() => {
    const colorMap = new Map<string, { name: string; hex: string }>();
    categoryProducts.forEach((p) =>
      p.colors.forEach((c) => colorMap.set(c.name, c))
    );
    return Array.from(colorMap.values());
  }, [categoryProducts]);

  const [filters, setFilters] = useState<FilterState>({
    sizes: [],
    colors: [],
    priceRange: [0, maxPrice],
    showNew: false,
    showBestsellers: false,
    showFlutterCon: false,
  });

  const filteredProducts = useMemo(() => {
    return categoryProducts.filter((product) => {
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
  }, [categoryProducts, filters]);

  return (
    <>
      <Helmet>
        <title>{categoryTitle} - Flutter Store | Namma Flutter Chennai</title>
        <meta name="description" content={`Shop premium Flutter ${categoryTitle.toLowerCase()} from Namma Flutter Chennai. Quality apparel for Flutter developers.`} />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-8">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-8 animate-fade-in">
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                Flutter <span className="text-gradient-flutter">{categoryTitle}</span>
              </h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} products found
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <ProductFilters
                  filters={filters}
                  onFilterChange={setFilters}
                  availableSizes={availableSizes}
                  availableColors={availableColors}
                  maxPrice={maxPrice}
                />
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
                    <p className="text-6xl mb-4">🔍</p>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      No products found
                    </h3>
                    <p className="text-muted-foreground">
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
