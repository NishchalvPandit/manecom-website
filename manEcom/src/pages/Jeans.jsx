import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const products = [
    {
        id: 101,
        name: "Slim Fit Dark Wash",
        price: 49.99,
        category: "Jeans",
        image: "https://images.unsplash.com/photo-1542272617-08f08630329e?w=600&q=80&fit=crop"
    },
    {
        id: 102,
        name: "Vintage Straight Leg",
        price: 59.99,
        category: "Jeans",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80&fit=crop"
    },
    {
        id: 103,
        name: "Ripped Skinny Jeans",
        price: 54.99,
        category: "Jeans",
        image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=600&q=80&fit=crop"
    },
    {
        id: 104,
        name: "Classic Blue Denim",
        price: 45.00,
        category: "Jeans",
        image: "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?w=600&q=80&fit=crop"
    },
    {
        id: 105,
        name: "Black Tapered Fit",
        price: 65.00,
        category: "Jeans",
        image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&q=80&fit=crop"
    },
    {
        id: 106,
        name: "Light Wash Summer Jeans",
        price: 52.00,
        category: "Jeans",
        image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&q=80&fit=crop"
    },
    {
        id: 107,
        name: "Carpenter Denim",
        price: 69.99,
        category: "Jeans",
        image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600&q=80&fit=crop"
    },
    {
        id: 108,
        name: "Distressed Grey Jeans",
        price: 58.00,
        category: "Jeans",
        image: "https://images.unsplash.com/photo-1604176354204-9268737828fa?w=600&q=80&fit=crop"
    }
];

function Jeans() {
    const { addToCart } = useCart();
    return (
        <PageLayout title="Premium" accent="Denim">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={addToCart} subText="Durable & Comfortable" />
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

export default Jeans;
