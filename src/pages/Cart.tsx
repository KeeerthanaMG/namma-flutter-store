import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Trash2, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  const handleRemove = (id: string, size: string, color: string, name: string) => {
    removeFromCart(id, size, color);
    toast.success(`${name} removed from cart`);
  };

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Cart - Flutter Store</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 flex items-center justify-center py-16">
            <div className="text-center animate-fade-in">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <ShoppingCart className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
                Your cart is empty
              </h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any Flutter merch yet
              </p>
              <Link to="/products">
                <Button className="gradient-flutter text-primary-foreground border-0 shadow-flutter">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Start Shopping
                </Button>
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Cart (${totalItems || 0}) - Flutter Store`}</title>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
        <Navbar />
        <main className="flex-1 py-8">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in">
              Shopping <span className="text-gradient-flutter">Cart</span>
            </h1>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={`${item.id}-${item.size}-${item.color}`}
                    className="flutter-card flex flex-col sm:flex-row gap-4 animate-fade-in-up hover:shadow-hover transition-all"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Image */}
                    <Link to={`/product/${item.id}`} className="w-full sm:w-32 h-40 sm:h-32 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-heading font-semibold text-foreground hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        Size: {item.size} • Color: {item.color}
                      </p>
                      <p className="font-heading font-bold text-primary mt-2">
                        ₹{item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="flex items-center justify-between sm:flex-col sm:items-end gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.color, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.color, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => handleRemove(item.id, item.size, item.color, item.name)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Clear Cart */}
                <Button
                  variant="outline"
                  className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => {
                    clearCart();
                    toast.success('Cart cleared');
                  }}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Cart
                </Button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="flutter-card sticky top-24 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <h2 className="font-heading font-bold text-xl text-foreground mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal ({totalItems} items)</span>
                      <span>₹{totalPrice.toLocaleString()}</span>
                    </div>
                    {/* <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span className="text-green-600"></span>
                    </div> */}
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between font-heading font-bold text-lg text-foreground">
                        <span>Total</span>
                        <span className="text-primary">₹{totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full gradient-flutter text-primary-foreground border-0 shadow-flutter hover:shadow-hover group"
                    onClick={() => toast.info('Checkout coming soon!')}
                  >
                    Proceed to Checkout
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* <p className="text-center text-sm text-muted-foreground mt-4">
                    Free shipping on all orders!
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
