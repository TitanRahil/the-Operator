import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface ProductLayoutProps {
    title: string;
    subtitle: string;
    price: string;
    payhipId: string;
    description: React.ReactNode;
    features: string[];
    children?: React.ReactNode;
}

const ProductLayout = ({ title, subtitle, price, payhipId, description, features, children }: ProductLayoutProps) => {
    return (
        <div className="product-layout" style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '4rem' }}>
            {/* Hero */}
            <section style={{ padding: '6rem 0', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(0,240,255,0.05) 0%, transparent 70%)' }}>
                <div className="container">
                    <RevealOnScroll>
                        <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '1rem', textTransform: 'uppercase', lineHeight: '1.1' }}>
                            {title}
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'cyan', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em', marginBottom: '2rem', textTransform: 'uppercase' }}>
                            {subtitle}
                        </p>
                        <div style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '2rem' }}>{price}</div>
                        <a href={`https://payhip.com/b/${payhipId}`} className="payhip-buy-button" data-theme="green" data-product={payhipId}>Buy Now</a>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Content */}
            <section className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <RevealOnScroll delay={200}>
                    <div className="product-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '4rem', whiteSpace: 'pre-line' }}>
                        {description}
                    </div>
                </RevealOnScroll>

                {/* Features / "What You Get" */}
                {features.length > 0 && (
                    <RevealOnScroll delay={300}>
                        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '4px' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem' }}>WHAT'S <span className="text-cyan">INCLUDED</span></h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {features.map((feature, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <CheckCircle2 color="cyan" size={24} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </RevealOnScroll>
                )}

                {/* Extra Children (for specific customized sections) */}
                {children}

                {/* Bottom CTA */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <a href={`https://payhip.com/b/${payhipId}`} className="payhip-buy-button" data-theme="green" data-product={payhipId}>Buy Now</a>
                </div>
            </section>
        </div>
    );
};

export default ProductLayout;
