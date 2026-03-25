import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const products = [
    {
        id: 301,
        name: "Classic Leather Jacket",
        price: 199.99,
        category: "Jackets",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80&fit=crop"
    },
    {
        id: 302,
        name: "Denim Trucker",
        price: 89.99,
        category: "Jackets",
        image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80&fit=crop"
    },
    {
        id: 303,
        name: "Winter Puffer",
        price: 129.99,
        category: "Jackets",
        image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80&fit=crop"
    },
    {
        id: 304,
        name: "Bomber Jacket",
        price: 110.00,
        category: "Jackets",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80&fit=crop"
    },
    {
        id: 305,
        name: "Wool Overcoat",
        price: 249.00,
        category: "Jackets",
        image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=600&q=80&fit=crop"
    },
    {
        id: 306,
        name: "Windbreaker",
        price: 65.00,
        category: "Jackets",
        image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80&fit=crop"
    },
    {
        id: 307,
        name: "Suede Jacket",
        price: 180.00,
        category: "Jackets",
        image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=600&q=80&fit=crop"
    },
    {
        id: 308,
        name: "Utility Field Jacket",
        price: 95.00,
        category: "Jackets",
        image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&q=80&fit=crop"
    }
];

function Jackets() {
    const { addToCart } = useCart();
    return (
        <PageLayout title="Premium" accent="Outerwear">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={addToCart} subText="Warm & Stylish" />
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

export default Jackets;
