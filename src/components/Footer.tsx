import { Link, useLocation } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    const { pathname } = useLocation();
    const isCompactPage = ['/about', '/legal'].includes(pathname);

    return (
        <footer style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            backgroundColor: 'black',
            padding: isCompactPage ? '1.5rem 0 1rem' : '3rem 0 1.5rem'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: isCompactPage ? '1rem' : '2rem',
                    marginBottom: isCompactPage ? '1.5rem' : '3rem'
                }}>

                    {/* Brand Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Link to="/" style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', color: 'white' }}>
                            The <span className="text-cyan">Operator</span>
                        </Link>
                        <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.5 }}>
                            Deploying advanced automation infrastructure for the next generation of digital enterprises.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 style={{ fontSize: '0.8rem', fontWeight: '700', color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Platform</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link to="/products" style={{ color: '#888', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}>Products</Link></li>
                            <li><Link to="/about" style={{ color: '#888', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}>System Logic</Link></li>
                            <li><Link to="/products" style={{ color: '#888', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}>Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 style={{ fontSize: '0.8rem', fontWeight: '700', color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Company</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link to="/about" style={{ color: '#888', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}>About</Link></li>
                            <li><Link to="/legal" style={{ color: '#888', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}>Legal</Link></li>
                            <li><Link to="/contact" style={{ color: '#888', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 style={{ fontSize: '0.8rem', fontWeight: '700', color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Connect</h3>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" style={{ color: '#888', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#00f0ff'} onMouseOut={(e) => e.currentTarget.style.color = '#888'}>
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ fontSize: '0.75rem', color: '#666' }}>
                        © {new Date().getFullYear()} The Operator. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link to="/legal" style={{ fontSize: '0.75rem', color: '#666', textDecoration: 'none' }}>Privacy Policy</Link>
                        <Link to="/legal" style={{ fontSize: '0.75rem', color: '#666', textDecoration: 'none' }}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
