import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function TrashIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
    );
}

function EmptyBagIcon() {
    return (
        <svg className="w-24 h-24 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
    );
}

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, calculateTotal, clearCart } = useCart();
    const [checkedOut, setCheckedOut] = useState(false);

    const handleCheckout = () => {
        setCheckedOut(true);
        setTimeout(() => {
            clearCart();
            setCheckedOut(false);
        }, 2000);
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[70vh] bg-zinc-950 flex flex-col items-center justify-center px-4 text-center">
                <EmptyBagIcon />
                <h2 className="text-3xl font-black uppercase tracking-widest text-white mt-6 mb-3">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-8 text-sm max-w-xs">You haven't added anything yet. Browse our collections and find something you love.</p>
                <Link
                    to="/"
                    className="bg-red-700 hover:bg-red-600 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
                    <div>
                        <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-1">Your Order</p>
                        <h1 className="text-4xl font-black uppercase tracking-tight">
                            Shopping <span className="text-red-600">Cart</span>
                        </h1>
                    </div>
                    <span className="text-gray-600 text-sm">{cartItems.length} item{cartItems.length !== 1 ? "s" : ""}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Cart Items */}
                    <div className="flex-1 space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-4 bg-zinc-900 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors"
                            >
                                {/* Image or fallback */}
                                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-800">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        onError={(e) => { e.target.style.display = "none"; }}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start gap-2">
                                        <div>
                                            <h3 className="font-bold text-sm uppercase tracking-wide text-white truncate">{item.name}</h3>
                                            <p className="text-gray-600 text-xs mt-0.5">{item.category}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-600 hover:text-red-500 transition-colors flex-shrink-0"
                                            title="Remove"
                                        >
                                            <TrashIcon />
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between mt-3">
                                        {/* Qty Controls */}
                                        <div className="flex items-center border border-white/10 rounded-sm overflow-hidden">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                            >
                                                −
                                            </button>
                                            <span className="px-4 py-1.5 text-sm font-bold border-x border-white/10 text-white min-w-[40px] text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <span className="font-black text-white">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-80 flex-shrink-0">
                        <div className="bg-zinc-900 border border-white/5 rounded-xl p-6 sticky top-24">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-6 pb-4 border-b border-white/10">
                                Order Summary
                            </h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span className="text-white font-semibold">${calculateTotal()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Shipping</span>
                                    <span className="text-green-500 font-semibold">Free</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Tax (est.)</span>
                                    <span className="text-white font-semibold">${(parseFloat(calculateTotal()) * 0.08).toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-4 mb-6 flex justify-between items-center">
                                <span className="text-white font-bold uppercase tracking-wider text-sm">Total</span>
                                <span className="text-2xl font-black text-white">
                                    ${(parseFloat(calculateTotal()) * 1.08).toFixed(2)}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={handleCheckout}
                                    disabled={checkedOut}
                                    className={`w-full font-bold uppercase tracking-widest text-sm py-4 transition-all
                    ${checkedOut
                                            ? "bg-green-700 text-white cursor-default"
                                            : "bg-red-700 hover:bg-red-600 text-white"
                                        }`}
                                >
                                    {checkedOut ? "✓ Order Placed!" : "Checkout"}
                                </button>
                                <Link
                                    to="/"
                                    className="block w-full text-center border border-white/10 hover:border-white/20 text-gray-400 hover:text-white font-bold uppercase tracking-widest text-sm py-4 transition-all"
                                >
                                    Continue Shopping
                                </Link>
                            </div>

                            <p className="text-gray-700 text-[10px] text-center mt-4 uppercase tracking-wider">
                                Secure checkout · SSL encrypted
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;
