import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useWishlist } from '@/contexts/WishlistContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Wishlist = () => {
    const { items, removeFromWishlist } = useWishlist();

    const handleRemove = (id: string, name: string) => {
        removeFromWishlist(id);
        toast.success(`${name} removed from wishlist`);
    };

    if (items.length === 0) {
        return (
            <>
                <Helmet>
                    <title>Wishlist - Flutter Store</title>
                </Helmet>
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-1 flex items-center justify-center py-16">
                        <div className="text-center animate-fade-in">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                                <Heart className="h-12 w-12 text-muted-foreground" />
                            </div>
                            <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
                                Your wishlist is empty
                            </h1>
                            <p className="text-muted-foreground mb-8">
                                Save your favorite Flutter items here
                            </p>
                            <Link to="/products">
                                <Button className="gradient-flutter text-primary-foreground border-0 shadow-flutter">
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    Explore Products
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
                <title>{`Wishlist (${items.length || 0}) - Flutter Store`}</title>
            </Helmet>
            <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
                <Navbar />
                <main className="flex-1 py-8">
                    <div className="container mx-auto px-4">
                        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in">
                            My <span className="text-gradient-flutter">Wishlist</span>
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {items.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="flutter-card group animate-fade-in-up"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                                        <img
                                            src={product.images[0]}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={() => handleRemove(product.id, product.name)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <Link to={`/product/${product.id}`}>
                                        <h3 className="font-heading font-semibold text-foreground text-lg mb-2 hover:text-primary transition-colors line-clamp-1">
                                            {product.name}
                                        </h3>
                                    </Link>

                                    <p className="font-heading font-bold text-xl text-primary mb-4">
                                        ₹{product.price.toLocaleString()}
                                    </p>

                                    <Link to={`/product/${product.id}`}>
                                        <Button className="w-full gradient-flutter text-primary-foreground border-0">
                                            <ShoppingCart className="h-4 w-4 mr-2" />
                                            View Product
                                        </Button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Wishlist;
