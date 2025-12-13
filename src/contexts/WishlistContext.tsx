import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/data/products';

interface WishlistContextType {
    items: Product[];
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (id: string) => void;
    isInWishlist: (id: string) => boolean;
    totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<Product[]>(() => {
        try {
            const saved = localStorage.getItem('flutter-store-wishlist');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Error loading wishlist from localStorage:', error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('flutter-store-wishlist', JSON.stringify(items));
        } catch (error) {
            console.error('Error saving wishlist to localStorage:', error);
        }
    }, [items]);

    const addToWishlist = (product: Product) => {
        setItems((prev) => {
            const exists = prev.find((p) => p.id === product.id);
            if (exists) return prev;
            return [...prev, product];
        });
    };

    const removeFromWishlist = (id: string) => {
        setItems((prev) => prev.filter((p) => p.id !== id));
    };

    const isInWishlist = (id: string) => {
        return items.some((p) => p.id === id);
    };

    const totalItems = items.length;

    return (
        <WishlistContext.Provider
            value={{ items, addToWishlist, removeFromWishlist, isInWishlist, totalItems }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};
