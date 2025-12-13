import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Sparkles, Ticket } from 'lucide-react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group flutter-card animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
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
            <Badge className="gradient-flutter text-primary-foreground border-0">
              <Ticket className="h-3 w-3 mr-1" />
              FlutterCon
            </Badge>
          )}
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
            -{discount}%
          </Badge>
        )}

        {/* Quick Add Button */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Link to={`/product/${product.id}`}>
            <Button className="w-full gradient-flutter text-primary-foreground border-0 shadow-flutter hover:shadow-hover transition-shadow">
              <ShoppingCart className="h-4 w-4 mr-2" />
              View Product
            </Button>
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-heading font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Colors */}
        <div className="flex items-center gap-2 mb-3">
          {product.colors.slice(0, 4).map((color) => (
            <div
              key={color.hex}
              className="w-5 h-5 rounded-full border-2 border-border shadow-sm"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-muted-foreground">+{product.colors.length - 4}</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-xl text-primary">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
