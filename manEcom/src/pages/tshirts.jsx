import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const products = [
    {
        id: 1,
        name: "Classic Black Tee",
        price: 29.99,
        category: "T-Shirts",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80&fit=crop"
    },
    {
        id: 2,
        name: "Urban Streetwear Tee",
        price: 34.99,
        category: "T-Shirts",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80&fit=crop"
    },
    {
        id: 3,
        name: "Vintage Wash Oversized",
        price: 39.99,
        category: "T-Shirts",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80&fit=crop"
    },
    {
        id: 4,
        name: "Essential White Crew",
        price: 24.99,
        category: "T-Shirts",
        image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80&fit=crop"
    },
    {
        id: 5,
        name: "Graphic Print Tee",
        price: 32.99,
        category: "T-Shirts",
        image: "https://images.unsplash.com/photo-1503341455253-b2e72333dbdb?w=600&q=80&fit=crop"
    },
    {
        id: 6,
        name: "Signature Logo Tee",
        price: 45.00,
        category: "T-Shirts",
        image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80&fit=crop"
    },
    {
        id: 7,
        name: "Heavyweight Boxy Fit",
        price: 42.00,
        category: "T-Shirts",
        image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=600&q=80&fit=crop"
    },
    {
        id: 8,
        name: "Minimalist Pocket Tee",
        price: 28.00,
        category: "T-Shirts",
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80&fit=crop"
    }
];

function Tshirts() {
    const { addToCart } = useCart();
    return (
        <PageLayout title="Premium" accent="T-Shirts">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={addToCart} subText="Premium Cotton Blend" />
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

export default Tshirts;
