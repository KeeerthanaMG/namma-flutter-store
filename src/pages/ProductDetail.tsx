import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Heart, Share2, Check, ChevronLeft, Minus, Plus, Star, Sparkles, Ticket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-6xl mb-4">😕</p>
            <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
              Product not found
            </h1>
            <p className="text-muted-foreground mb-6">
              The product you're looking for doesn't exist
            </p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (!selectedColor) {
      toast.error('Please select a color');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
      category: product.category,
    });

    toast.success('Added to cart!', {
      description: `${product.name} (${selectedSize}, ${selectedColor})`,
    });
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - Flutter Store</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-8">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="mb-6 animate-fade-in">
              <Link
                to={`/products/${product.category === 'hoodie' ? 'hoodies' : 'tshirts'}`}
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to {product.category === 'hoodie' ? 'Hoodies' : 'T-Shirts'}
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Product Image */}
              <div className="animate-fade-in">
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-secondary text-secondary-foreground shadow-flutter">
                        <Sparkles className="h-3 w-3 mr-1" />
                        New
                      </Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="bg-accent text-accent-foreground">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        Bestseller
                      </Badge>
                    )}
                    {product.flutterConExclusive && (
                      <Badge variant="flutter">
                        <Ticket className="h-3 w-3 mr-1" />
                        FlutterCon
                      </Badge>
                    )}
                  </div>

                  {discount > 0 && (
                    <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                      -{discount}%
                    </Badge>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                <p className="text-muted-foreground text-lg mb-6">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-heading font-bold text-3xl text-primary">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through text-xl">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Size
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                          selectedSize === size
                            ? 'bg-primary text-primary-foreground shadow-flutter'
                            : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Color: {selectedColor || 'Select a color'}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.hex}
                        onClick={() => setSelectedColor(color.name)}
                        className={cn(
                          'relative w-10 h-10 rounded-full border-2 transition-all duration-200 shadow-sm',
                          selectedColor === color.name
                            ? 'border-primary ring-2 ring-primary/30 scale-110'
                            : 'border-border hover:scale-110'
                        )}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor === color.name && (
                          <Check
                            className={cn(
                              'absolute inset-0 m-auto h-5 w-5',
                              color.hex === '#ffffff' || color.hex === '#f8f9fa'
                                ? 'text-foreground'
                                : 'text-primary-foreground'
                            )}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Quantity
                  </h3>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold text-lg w-12 text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="flex-1 gradient-flutter text-primary-foreground border-0 shadow-flutter hover:shadow-hover"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                {/* Stock Info */}
                <div className="mt-6 flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-muted-foreground">In Stock</span>
                </div>
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                  You might also like
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
