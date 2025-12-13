import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ShoppingCart, MapPin, User, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

interface CheckoutDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const CheckoutDialog = ({ open, onOpenChange }: CheckoutDialogProps) => {
    const { items, totalPrice, totalItems } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        city: '',
        pincode: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate all required fields
        if (!formData.name.trim()) {
            toast.error('Please enter your name');
            return;
        }
        if (!formData.phone.trim() || formData.phone.length < 10) {
            toast.error('Please enter a valid 10-digit phone number');
            return;
        }
        if (!formData.address.trim()) {
            toast.error('Please enter your delivery address');
            return;
        }
        if (!formData.city.trim()) {
            toast.error('Please enter your city');
            return;
        }
        if (!formData.pincode.trim() || formData.pincode.length !== 6) {
            toast.error('Please enter a valid 6-digit pincode');
            return;
        }

        // Generate WhatsApp message
        const message = generateWhatsAppMessage();

        // **IMPORTANT: Replace with your actual WhatsApp number**
        // Format: Country code + number (no +, no spaces, no dashes)
        // Example for India: '919876543210'
        const whatsappNumber = '919876543210'; // <-- CHANGE THIS TO YOUR NUMBER

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        toast.success('Redirecting to WhatsApp...', {
            description: 'Complete your order by sending the message',
        });

        // Close dialog and reset form
        onOpenChange(false);
        setTimeout(() => {
            setFormData({
                name: '',
                phone: '',
                address: '',
                city: '',
                pincode: '',
            });
        }, 300);
    };

    const generateWhatsAppMessage = () => {
        let message = `🛍️ *NEW ORDER - FLUTTER STORE*\n\n`;

        message += `👤 *CUSTOMER DETAILS*\n`;
        message += `━━━━━━━━━━━━━━━━━━━\n`;
        message += `Name: ${formData.name}\n`;
        message += `Phone: ${formData.phone}\n`;
        message += `Address: ${formData.address}\n`;
        message += `City: ${formData.city}\n`;
        message += `Pincode: ${formData.pincode}\n\n`;

        message += `📦 *ORDER DETAILS*\n`;
        message += `━━━━━━━━━━━━━━━━━━━\n`;

        items.forEach((item, index) => {
            message += `${index + 1}. *${item.name}*\n`;
            message += `   Size: ${item.size} | Color: ${item.color}\n`;
            message += `   Qty: ${item.quantity} × ₹${item.price.toLocaleString()}\n`;
            message += `   Subtotal: ₹${(item.price * item.quantity).toLocaleString()}\n\n`;
        });

        message += `💰 *ORDER SUMMARY*\n`;
        message += `━━━━━━━━━━━━━━━━━━━\n`;
        message += `Total Items: ${totalItems}\n`;
        message += `*TOTAL AMOUNT: ₹${totalPrice.toLocaleString()}*\n\n`;

        message += `✨ _Thank you for shopping with Namma Flutter Chennai!_\n`;
        message += `#FlutterStore #NammaFlutter`;

        return message;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Special handling for phone and pincode to allow only numbers
        if (name === 'phone' && value.length > 10) return;
        if (name === 'pincode' && value.length > 6) return;

        if (name === 'phone' || name === 'pincode') {
            if (value && !/^\d*$/.test(value)) return;
        }

        setFormData({ ...formData, [name]: value });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="font-heading text-2xl">
                        Complete Your <span className="text-gradient-flutter">Order</span>
                    </DialogTitle>
                    <DialogDescription>
                        Enter your details to checkout via WhatsApp
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                    {/* Order Summary */}
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20">
                        <div className="flex items-center gap-2 mb-3">
                            <ShoppingCart className="h-5 w-5 text-primary" />
                            <h3 className="font-heading font-semibold text-foreground">Order Summary</h3>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Total Items:</span>
                                <span className="font-semibold">{totalItems}</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t border-primary/20">
                                <span className="font-semibold">Total Amount:</span>
                                <span className="font-heading font-bold text-xl text-primary">
                                    ₹{totalPrice.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Personal Details */}
                    <div className="space-y-4">
                        <h3 className="font-heading font-semibold text-lg flex items-center gap-2">
                            <User className="h-5 w-5 text-primary" />
                            Personal Details
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name *</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number *</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="9876543210"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    maxLength={10}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Delivery Address */}
                    <div className="space-y-4">
                        <h3 className="font-heading font-semibold text-lg flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            Delivery Address
                        </h3>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="address">Street Address *</Label>
                                <Textarea
                                    id="address"
                                    name="address"
                                    placeholder="House/Flat No., Street, Landmark"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    rows={3}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="city">City *</Label>
                                    <Input
                                        id="city"
                                        name="city"
                                        placeholder="Chennai"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="pincode">Pincode *</Label>
                                    <Input
                                        id="pincode"
                                        name="pincode"
                                        type="text"
                                        placeholder="600001"
                                        value={formData.pincode}
                                        onChange={handleInputChange}
                                        maxLength={6}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Box */}
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                        <p className="text-sm text-foreground flex items-start gap-2">
                            <span className="text-xl">📱</span>
                            <span>
                                After clicking "Send to WhatsApp", you'll be redirected to WhatsApp
                                with your order details pre-filled. Just click send to complete your order!
                            </span>
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1 gradient-flutter text-primary-foreground border-0 shadow-flutter hover:shadow-hover group"
                        >
                            <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                            Send to WhatsApp
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CheckoutDialog;
