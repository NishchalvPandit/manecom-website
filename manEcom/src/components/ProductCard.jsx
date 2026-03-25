import { useState } from "react";

function CartPlusIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
    );
}

// Fallback icon shown when image fails to load
function FallbackIcon({ category }) {
    const icons = {
        "T-Shirts": (
            <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20 text-white/20">
                <path d="M8 16L20 8H28C28 8 28 14 32 14C36 14 36 8 36 8H44L56 16L50 24L44 20V54H20V20L14 24L8 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        ),
        "Jeans": (
            <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20 text-white/20">
                <path d="M12 10H52L48 32C48 32 40 28 32 32C24 36 16 32 16 32L12 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M16 32L14 56H28L32 40L36 56H50L48 32" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        ),
        "Shoes": (
            <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20 text-white/20">
                <path d="M6 42C6 42 10 34 20 34L38 30C46 28 56 32 58 38V44C58 44 46 48 32 46C18 44 6 42 6 42Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M20 34L22 22C22 22 28 18 34 22L38 30" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        ),
        "Jackets": (
            <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20 text-white/20">
                <path d="M14 10L8 20V56H26V36H38V56H56V20L50 10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M22 10C22 10 22 16 32 16C42 16 42 10 42 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M14 10L22 10M42 10L50 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    };
    return icons[category] || null;
}

function ProductCard({ product, onAddToCart, subText }) {
    const [imgError, setImgError] = useState(false);
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        onAddToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <div className="group bg-zinc-900 border border-white/5 rounded-xl overflow-hidden flex flex-col product-card hover:border-white/15 transition-all duration-300">
            {/* Image / Fallback */}
            <div className="relative h-64 overflow-hidden bg-zinc-800 product-img-wrapper">
                {!imgError ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-800 to-zinc-900">
                        <FallbackIcon category={product.category} />
                        <span className="text-white/30 text-xs uppercase tracking-widest">{product.category}</span>
                    </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                {/* Category chip */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-[10px] text-gray-300 uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm">
                    {product.category}
                </div>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-1 group-hover:text-red-400 transition-colors">
                    {product.name}
                </h3>
                {subText && (
                    <p className="text-gray-600 text-xs mb-3">{subText}</p>
                )}

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                        <span className="text-xl font-black text-white">${product.price.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={handleAdd}
                        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all duration-200
              ${added
                                ? "bg-green-700 text-white"
                                : "bg-red-700 hover:bg-red-600 text-white"
                            }`}
                    >
                        <CartPlusIcon />
                        {added ? "Added!" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
