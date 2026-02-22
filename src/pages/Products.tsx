import { ArrowRight, Layers, Zap, Cpu } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    useEffect(() => {
        // Ensure script exists
        if (!document.querySelector('script[src="https://payhip.com/payhip.js"]')) {
            const script = document.createElement('script');
            script.src = "https://payhip.com/payhip.js";
            script.async = true;
            document.body.appendChild(script);
        }

        // Robust initialization for lazy-loaded elements
        const initPayhip = () => {
            if (window.Payhip) {
                try { window.Payhip.init(); } catch (e) { }
            }
        };

        const intervalId = setInterval(initPayhip, 500);

        const observer = new MutationObserver((_) => {
            // If DOM modifies, scan again
            initPayhip();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            clearInterval(intervalId);
            observer.disconnect();
        };
    }, []);


    return (
        <div className="products-page">
            <div className="container">
                <RevealOnScroll>
                    <div className="section-header">
                        <span className="section-label text-cyan">SYSTEM MODULES</span>
                        <h1 className="section-heading">
                            Available <span className="text-cyan">Systems</span>
                        </h1>
                        <p className="section-desc">
                            Advanced knowledge systems designed to bypass standard market constraints.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="product-grid">
                    <ProductCard
                        title="AGENCY ARCHITECT"
                        price="$49"
                        description="The complete operating system for scaling an AI Automation Agency (AAA). Includes outreach scripts, proposal templates, and service delivery frameworks."
                        icon={<Layers size={48} />}
                        link="/products/agency-architect"
                        customAction={
                            <a href="https://payhip.com/b/258WU" className="payhip-buy-button" data-product="258WU" style={{ width: '100%', display: 'block' }}>Buy Now</a>
                        }
                    />
                    <ProductCard
                        title="PROMPT MASTERY"
                        price="$29"
                        description="Stop guessing. Start commanding. A library of 500+ engineering-grade prompts for GPT-4, Claude 3, and Midjourney to automate complex workflows."
                        icon={<Zap size={48} />}
                        link="/products/prompt-mastery"
                        customAction={
                            <a href="https://payhip.com/b/eIMTt" className="payhip-buy-button" data-product="eIMTt" style={{ width: '100%', display: 'block' }}>Buy Now</a>
                        }
                    />
                    <ProductCard
                        title="CONTENT SYSTEM"
                        price="$39"
                        description="How to generate 30 days of high-converting social content in 45 minutes. The exact system used to grow to 100k+ followers."
                        icon={<Cpu size={48} />}
                        link="/products/content-system"
                        customAction={
                            <a href="https://payhip.com/b/fu02t" className="payhip-buy-button" data-product="fu02t" style={{ width: '100%', display: 'block' }}>Buy Now</a>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

const ProductCard = ({ title, price, description, icon, customAction, link }: { title: string, price: string, description: string, icon: React.ReactNode, customAction?: React.ReactNode, link?: string }) => (
    <div className="product-card group">
        <div className="card-icon">{icon}</div>
        <h3 className="card-title">{title}</h3>
        <div className="card-price">{price}</div>
        <p className="card-desc">{description}</p>

        {link && (
            <Link to={link} className="btn-secondary-outline" style={{ width: '100%', display: 'block', textAlign: 'center', marginBottom: '1rem', padding: '0.8rem' }}>
                READ MORE
            </Link>
        )}

        {customAction ? customAction : (
            <button className="btn-access">
                ACCESS NOW <ArrowRight size={18} strokeWidth={2.5} />
            </button>
        )}

        {/* Corner Accent */}
        <div className="corner-accent" />
    </div>
);

export default Products;
