import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

// SVG Icons (inline, no library needed)
function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    );
}

function CartIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
    );
}

function MenuIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/tshirts", label: "T-Shirts" },
    { to: "/jeans", label: "Jeans" },
    { to: "/shoes", label: "Shoes" },
    { to: "/jackets", label: "Jackets" },
];

function Navbar() {
    const { cartItems } = useCart();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            {/* Main Navbar */}
            <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* Brand Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-9 h-9 bg-red-700 rounded-sm flex items-center justify-center group-hover:bg-red-600 transition-colors">
                                <span className="text-white font-black text-lg leading-none">M</span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-white font-black text-lg tracking-wider uppercase">ManEcom</span>
                                <span className="text-red-500 text-[9px] tracking-[0.25em] uppercase font-medium">Premium Menswear</span>
                            </div>
                        </Link>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map(({ to, label }) => {
                                const active = location.pathname === to;
                                return (
                                    <Link
                                        key={to}
                                        to={to}
                                        className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200 rounded-sm
                      ${active
                                                ? "text-white bg-red-700"
                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Right Side: Search + Cart */}
                        <div className="flex items-center gap-3">
                            {/* Search */}
                            <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-white/20 transition-colors">
                                <input
                                    type="text"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder="Search..."
                                    className="bg-transparent text-white text-xs px-3 py-2 outline-none w-40 placeholder:text-gray-500"
                                />
                                <button className="px-3 py-2 text-gray-400 hover:text-white transition-colors border-l border-white/10">
                                    <SearchIcon />
                                </button>
                            </div>

                            {/* Cart Button */}
                            <Link
                                to="/cart"
                                className="relative flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-red-700 hover:border-red-700 text-white px-4 py-2 rounded-sm transition-all duration-200 group"
                            >
                                <CartIcon />
                                <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Cart</span>
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-600 group-hover:bg-white group-hover:text-red-700 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center transition-colors">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden text-gray-400 hover:text-white transition-colors"
                            >
                                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden bg-zinc-950 border-t border-white/10 px-4 py-4 space-y-2">
                        {navLinks.map(({ to, label }) => {
                            const active = location.pathname === to;
                            return (
                                <Link
                                    key={to}
                                    to={to}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block px-4 py-3 text-sm font-semibold uppercase tracking-widest rounded-sm transition-all
                    ${active ? "bg-red-700 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                        {/* Mobile search */}
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-sm overflow-hidden mt-3">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="bg-transparent text-white text-sm px-3 py-2.5 outline-none w-full placeholder:text-gray-500"
                            />
                            <button className="px-3 py-2.5 text-gray-400 border-l border-white/10">
                                <SearchIcon />
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
