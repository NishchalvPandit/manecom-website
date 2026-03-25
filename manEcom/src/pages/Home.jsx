import { Link } from "react-router-dom";

const categories = [
    {
        label: "T-Shirts",
        to: "/tshirts",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                <path d="M8 16L20 8H28C28 8 28 14 32 14C36 14 36 8 36 8H44L56 16L50 24L44 20V54H20V20L14 24L8 16Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
        ),
        desc: "Essential everyday basics & premium fits",
        color: "from-zinc-900 to-zinc-800",
        accent: "border-red-700",
        tag: "29 styles",
    },
    {
        label: "Jeans",
        to: "/jeans",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                <path d="M12 10H52L48 32C48 32 40 28 32 32C24 36 16 32 16 32L12 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M16 32L14 56H28L32 40L36 56H50L48 32" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M12 10L20 14M52 10L44 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        desc: "Slim, straight & tapered cuts in premium denim",
        color: "from-blue-950 to-zinc-900",
        accent: "border-blue-700",
        tag: "24 styles",
    },
    {
        label: "Shoes",
        to: "/shoes",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                <path d="M6 42C6 42 10 34 20 34L38 30C46 28 56 32 58 38V44C58 44 46 48 32 46C18 44 6 42 6 42Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M20 34L22 22C22 22 28 18 34 22L38 30" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M34 42L36 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        desc: "Sneakers, boots & formal footwear",
        color: "from-zinc-900 to-stone-900",
        accent: "border-amber-600",
        tag: "32 styles",
    },
    {
        label: "Jackets",
        to: "/jackets",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                <path d="M14 10L8 20V56H26V36H38V56H56V20L50 10" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M22 10C22 10 22 16 32 16C42 16 42 10 42 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M14 10L22 10M42 10L50 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M26 36V28H38V36" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        ),
        desc: "Leather, denim & outerwear staples",
        color: "from-stone-900 to-zinc-900",
        accent: "border-orange-700",
        tag: "18 styles",
    },
];

const features = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
            </svg>
        ),
        title: "Free Shipping",
        desc: "On orders over $75",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
            </svg>
        ),
        title: "Easy Returns",
        desc: "30-day hassle-free returns",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Authentic Quality",
        desc: "100% premium materials",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
        ),
        title: "24/7 Support",
        desc: "Always here to help",
    },
];

function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-black">
                {/* Background geometric accent */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-950/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-800/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col md:flex-row items-center gap-12">
                    {/* Left: Text */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-red-700/20 border border-red-700/40 text-red-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block"></span>
                            New Season 2026
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight mb-6">
                            Style That<br />
                            <span className="text-red-600">Speaks</span><br />
                            For Itself.
                        </h1>
                        <p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0 mb-10 leading-relaxed">
                            Curated menswear for the modern man. Premium quality, bold design, unbeatable prices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                to="/tshirts"
                                className="bg-red-700 hover:bg-red-600 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200 hover:shadow-lg hover:shadow-red-900/40"
                            >
                                Shop Now
                            </Link>
                            <Link
                                to="/jackets"
                                className="border border-white/20 hover:border-white/40 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200 hover:bg-white/5"
                            >
                                New Arrivals
                            </Link>
                        </div>
                    </div>

                    {/* Right: Brand Icon Panel */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-red-800/30 to-zinc-800/60 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4">
                                <div className="w-20 h-20 bg-red-700 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-black text-5xl leading-none">M</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-white font-black text-2xl tracking-widest uppercase">ManEcom</p>
                                    <p className="text-red-400 text-xs tracking-[0.3em] uppercase mt-1">Premium Menswear</p>
                                </div>
                                <div className="flex gap-3 mt-2">
                                    {["T", "J", "S", "K"].map((l) => (
                                        <div key={l} className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/50 text-xs font-bold">
                                            {l}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* decorative ring */}
                            <div className="absolute -inset-4 border border-red-700/20 rounded-3xl pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Strip */}
            <section className="border-y border-white/5 bg-zinc-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {features.map(({ icon, title, desc }) => (
                        <div key={title} className="flex items-center gap-4">
                            <div className="text-red-500 flex-shrink-0">{icon}</div>
                            <div>
                                <p className="text-white font-semibold text-sm">{title}</p>
                                <p className="text-gray-500 text-xs">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Category Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-14">
                    <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-3">Browse Collections</p>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Shop By Category</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map(({ label, to, icon, desc, color, accent, tag }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`group relative bg-gradient-to-br ${color} border border-white/5 rounded-xl p-8 flex flex-col items-center text-center hover:border-white/20 transition-all duration-300 overflow-hidden product-card`}
                        >
                            {/* accent border top */}
                            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accent.replace("border-", "from-")} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                            <div className="text-white/60 group-hover:text-red-400 transition-colors duration-300 mb-5">
                                {icon}
                            </div>

                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2">{tag}</span>

                            <h3 className="text-xl font-black uppercase tracking-wider text-white mb-2 group-hover:text-red-400 transition-colors">
                                {label}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>

                            <div className="mt-5 flex items-center gap-2 text-red-500 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>Explore</span>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="relative overflow-hidden bg-red-700 py-16">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">Members Get 15% Off</h2>
                    <p className="text-red-200 text-lg mb-8">Join thousands of men who shop smarter. Exclusive deals, early access, and more.</p>
                    <button className="bg-white text-red-700 font-black uppercase tracking-widest text-sm px-10 py-4 hover:bg-red-50 transition-colors">
                        Join for Free
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-zinc-950 border-t border-white/5 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Brand */}
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-700 rounded-sm flex items-center justify-center">
                                <span className="text-white font-black text-base">M</span>
                            </div>
                            <div>
                                <p className="text-white font-black tracking-wider uppercase text-sm">ManEcom</p>
                                <p className="text-gray-600 text-[9px] tracking-widest uppercase">Premium Menswear</p>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-8">
                            {["/tshirts", "/jeans", "/shoes", "/jackets"].map((path, i) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className="text-gray-500 hover:text-white text-xs uppercase tracking-widest font-medium transition-colors"
                                >
                                    {["T-Shirts", "Jeans", "Shoes", "Jackets"][i]}
                                </Link>
                            ))}
                        </div>

                        <p className="text-gray-700 text-xs">© 2026 ManEcom. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
