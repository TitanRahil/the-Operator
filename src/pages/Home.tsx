import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// Declare Payhip on window
declare global {
    interface Window {
        Payhip: any;
    }
}
import { ArrowRight, CheckCircle2, ChevronRight, Terminal, BarChart2, Shield } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const Home = () => {
    useEffect(() => {
        // Ensure script exists
        if (!document.querySelector('script[src="https://payhip.com/payhip.js"]')) {
            const script = document.createElement('script');
            script.src = "https://payhip.com/payhip.js";
            script.async = true;
            document.body.appendChild(script);
        }

        // Robust initialization for lazy-loaded elements (RevealOnScroll)
        const initPayhip = () => {
            if (window.Payhip) {
                // Force Payhip to scan for new buttons
                try { window.Payhip.init(); } catch (e) { }
            }
        };

        // 1. Initial check
        initPayhip();

        // 2. Interval check (fallback for race conditions)
        const intervalId = setInterval(initPayhip, 500);

        // 3. MutationObserver to catch RevealOnScroll making elements visible
        const observer = new MutationObserver((mutations) => {
            let shouldInit = false;
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    shouldInit = true;
                }
            });
            if (shouldInit) initPayhip();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            clearInterval(intervalId);
            observer.disconnect();
        };
    }, []);

    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* 1. Hero Section */}
            {/* 1. Hero Section - TRONIX Style Layout */}
            <section className="hero-centered">
                {/* Top: Title */}
                <div style={{ zIndex: 2, width: '100%' }}>
                    <RevealOnScroll>
                        <h1 className="hero-title" style={{ marginTop: '0', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
                            MONETIZE <span className="text-cyan">INTELLIGENCE</span>
                        </h1>
                    </RevealOnScroll>
                </div>

                {/* Right: Status Card (Floating) */}
                <div className="hero-status-card hidden-mobile">
                    <div className="status-header">
                        <span className="text-cyan">Status</span>
                        <div className="status-online">
                            <div className="status-dot"></div>
                            <span>Online</span>
                        </div>
                    </div>
                    <div className="status-title">OPERATOR-V9</div>
                    <p className="status-desc">Revenue optimization protocols engaged.</p>
                    <div className="status-accent" />
                </div>

                {/* Bottom Left: Content & Buttons */}
                <div className="hero-content-bottom-left">
                    <RevealOnScroll delay={200}>
                        <p className="hero-subtitle" style={{ borderLeft: '3px solid cyan', paddingLeft: '1.5rem', margin: '0 0 2rem 0', textAlign: 'left', background: 'transparent' }}>
                            Deploy the exact automation infrastructure used to scale high-ticket agencies to <strong className="text-white">$10M+ revenue</strong> without increasing headcount.
                        </p>
                        <div className="hero-btns" style={{ justifyContent: 'flex-start' }}>
                            <Link to="/products" className="btn-primary-glow">
                                GET ACCESS
                            </Link>
                            <Link to="/about" className="btn-secondary-outline">
                                SYSTEM LOGIC
                            </Link>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* 2. Problem / Reality Check */}
            <section style={{ padding: '8rem 0', background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.03) 0%, #050505 100%)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23330000\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', opacity: 0.5, pointerEvents: 'none' }}></div>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 className="section-title-hover" style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                                The <span className="text-cyan">Old Way</span> Is Dead
                            </h2>
                            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: '#888' }}>
                                The market has shifted. Linear effort no longer yields exponential results.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <div className="responsive-grid">
                        {[
                            { title: 'Linear Scaling', text: 'Hiring more people to do more work is a broken model. It destroys margins and increases chaos.' },
                            { title: 'Information Noise', text: 'You are drowning in tactics but starving for strategy. Random acts of marketing do not build empires.' },
                            { title: 'Automation Anxiety', text: 'While you hesitate, your competitors are deploying autonomous agents to steal your market share.' }
                        ].map((item, i) => (
                            <RevealOnScroll key={i} delay={i * 100}>
                                <div className="problem-card">
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>{item.title}</h3>
                                    <p style={{ fontSize: '1rem', color: '#888', lineHeight: '1.6' }}>{item.text}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Products Overview */}
            <section style={{ padding: '8rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                        <RevealOnScroll>
                            <div>
                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: '700', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Available <span className="text-cyan">Systems</span></h2>
                                <p style={{ fontSize: '1.1rem', color: '#888' }}>Modular upgrades for your business infrastructure.</p>
                            </div>
                        </RevealOnScroll>
                        <Link to="/products" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="product-grid">
                        {[
                            { title: 'Agency Architect', price: '$49', desc: 'Complete OS for scaling a high-ticket agency.', id: 'agency-architect', payhip: '258WU' },
                            { title: 'Prompt Mastery', price: '$29', desc: 'Engineering-grade prompt library for LLMs.', id: 'prompt-mastery', payhip: 'eIMTt' },
                            { title: 'Content System', price: '$39', desc: 'Generate 30 days of content in 45 minutes.', id: 'content-system', payhip: 'fu02t' }
                        ].map((item, i) => (
                            <div className="product-card group" style={{ height: 'auto' }} key={i}>
                                <h3 className="card-title">{item.title}</h3>
                                <div className="card-price">{item.price}</div>
                                <p className="card-desc">{item.desc}</p>

                                <Link to={`/products/${item.id}`} className="btn-secondary-outline" style={{ width: '100%', display: 'block', textAlign: 'center', marginBottom: '1rem', padding: '0.8rem' }}>
                                    READ MORE
                                </Link>

                                <a href={`https://payhip.com/b/${item.payhip}`} className="payhip-buy-button" data-product={item.payhip} style={{ width: '100%', display: 'block' }}>Buy Now</a>

                                <div className="corner-accent" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Bundle Highlight */}
            <section style={{ padding: '8rem 0', background: 'radial-gradient(circle at center, rgba(0,240,255,0.05) 0%, transparent 70%)' }}>
                <div className="container">
                    <RevealOnScroll>
                        <div className="founders-card">
                            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'cyan', color: 'black', padding: '0.5rem 1.5rem', fontWeight: '700', letterSpacing: '0.1em', fontSize: '0.8rem', whiteSpace: 'nowrap', zIndex: 10, boxShadow: '0 0 20px cyan' }}>BEST VALUE</div>
                            <h2 className="founders-title">THE FOUNDER'S BUNDLE</h2>
                            <p style={{ fontSize: '1.25rem', color: '#ccc', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Get all 3 systems + exclusive bonus modules for a single price.</p>
                            <div className="founders-price-box">
                                <span style={{ fontSize: '1.5rem', textDecoration: 'line-through', color: '#666' }}>$117</span>
                                <span style={{ fontSize: '4rem', fontWeight: '700', color: 'cyan' }}>$79</span>
                            </div>
                            <button className="btn-primary-glow btn-bundle-launch" style={{ fontSize: '1.2rem', padding: '1.5rem 4rem' }}>GET THE BUNDLE</button>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* 5. What You Get */}
            <section style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div className="responsive-grid" style={{ gap: '4rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '2rem' }}>WHAT'S <span className="text-cyan">INCLUDED</span></h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {['Source Files (Notion/Excel)', 'Lifetime Updates', 'Community Access', 'Video Walkthroughs'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                                        <CheckCircle2 color="cyan" size={20} />
                                        <span style={{ fontSize: '1.1rem' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="responsive-grid">
                            <div style={{ background: '#111', padding: '2rem', border: '1px solid #222' }}>
                                <Terminal size={32} color="cyan" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Systems</h3>
                                <p style={{ color: '#888', fontSize: '0.9rem' }}>Plug-and-play templates.</p>
                            </div>
                            <div style={{ background: '#111', padding: '2rem', border: '1px solid #222' }}>
                                <BarChart2 size={32} color="cyan" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Growth</h3>
                                <p style={{ color: '#888', fontSize: '0.9rem' }}>Scalable logic.</p>
                            </div>
                            <div style={{ background: '#111', padding: '2rem', border: '1px solid #222' }}>
                                <Shield size={32} color="cyan" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Security</h3>
                                <p style={{ color: '#888', fontSize: '0.9rem' }}>Battle-tested.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Positioning / Authority */}
            <section className="authority-section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: '#666', marginBottom: '2rem' }}>Built for the 1%</p>
                    <div className="logo-grid">
                        <div className="logo-item" style={{ fontFamily: 'serif', fontStyle: 'italic' }}>Grills n Chills</div>
                        <div className="logo-item" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>AGENTICA ONE</div>
                        <div className="logo-item" style={{ fontFamily: 'monospace', textTransform: 'uppercase' }}>Blacklines Motorsport</div>
                        <div className="logo-item">
                            <img src="/gfg logo.jpg" alt="GFG" style={{ height: '140px', objectFit: 'contain', filter: 'grayscale(1) contrast(1.2) brightness(0.8)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Latest Intel (Blogs) */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: '700' }}>LATEST <span className="text-cyan">INTEL</span></h2>
                        <Link to="/blog" className="text-cyan" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
                            VIEW ALL <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="product-grid">
                        <Link to="/blog/freelancers-guide" className="group" style={{ textDecoration: 'none' }}>
                            <div style={{ background: '#0a0a0a', border: '1px solid #222', padding: '2rem', height: '100%', transition: 'all 0.3s' }} className="hover:border-cyan">
                                <div style={{ color: 'cyan', fontSize: '0.8rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>JAN 08, 2026</div>
                                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '1rem', color: 'white' }}>How Freelancers Make Money Using ChatGPT</h3>
                                <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.6' }}>The highest-paid freelancers in 2026 are not the most skilled. They are the ones who can produce more output per hour.</p>
                            </div>
                        </Link>
                        <Link to="/blog/prompt-fix" className="group" style={{ textDecoration: 'none' }}>
                            <div style={{ background: '#0a0a0a', border: '1px solid #222', padding: '2rem', height: '100%', transition: 'all 0.3s' }} className="hover:border-cyan">
                                <div style={{ color: 'cyan', fontSize: '0.8rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>JAN 07, 2026</div>
                                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '1rem', color: 'white' }}>Why Your Prompts Fail</h3>
                                <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.6' }}>Most people think their prompts fail because they didn’t "word it right." Prompts fail because they were never designed to succeed.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 8. Final CTA */}
            <section style={{ padding: '8rem 0', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.05) 0%, #050505 70%)' }}>
                <div className="container">
                    <RevealOnScroll>
                        <h2 style={{ fontSize: '4rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '2rem', lineHeight: 1 }}>
                            INITIALIZE <span className="text-cyan">SEQUENCE</span>
                        </h2>
                        <Link to="/products" className="btn-primary-glow" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
                            START NOW <ChevronRight />
                        </Link>
                    </RevealOnScroll>
                </div>
            </section>
        </div >
    );
};

export default Home;
