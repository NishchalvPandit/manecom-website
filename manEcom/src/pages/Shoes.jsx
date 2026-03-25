import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const products = [
    {
        id: 201,
        name: "Classic Street Sneakers",
        price: 89.99,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&fit=crop"
    },
    {
        id: 202,
        name: "High-Top Canvas",
        price: 65.00,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80&fit=crop"
    },
    {
        id: 203,
        name: "Premium Leather Boots",
        price: 149.99,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80&fit=crop"
    },
    {
        id: 204,
        name: "Running Performance",
        price: 110.00,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80&fit=crop"
    },
    {
        id: 205,
        name: "Casual Loafers",
        price: 79.99,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&q=80&fit=crop"
    },
    {
        id: 206,
        name: "White Minimalist",
        price: 95.00,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80&fit=crop"
    },
    {
        id: 207,
        name: "Retro Chunky Sneakers",
        price: 105.00,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&q=80&fit=crop"
    },
    {
        id: 208,
        name: "Formal Derbies",
        price: 130.00,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=80&fit=crop"
    }
];

function Shoes() {
    const { addToCart } = useCart();
    return (
        <PageLayout title="Premium" accent="Footwear">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={addToCart} subText="Comfort & Style" />
            ))}
        </PageLayout>
    );
}

function PageLayout({ title, accent, children }) {
    return (
        <div className="min-h-screen bg-zinc-950 py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-2">ManEcom Collection</p>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                        {title} <span className="text-red-600">{accent}</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Shoes;
