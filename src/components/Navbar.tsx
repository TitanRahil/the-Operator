import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'PRODUCTS', path: '/products' },
        { name: 'BLOGS', path: '/blog' },
        { name: 'ABOUT', path: '/about' },
        { name: 'LEGAL', path: '/legal' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-content">
                {/* Logo */}
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', display: 'flex', alignItems: 'center' }}>
                    The <span className="text-cyan" style={{ marginLeft: '5px' }}>Operator</span>
                </Link>

                {/* Desktop Nav */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link key={link.path} to={link.path} className="nav-link">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link to="/products" className="btn-nav hidden-mobile">
                    GET ACCESS
                </Link>

                {/* Mobile Menu Button - Keeping functional */}
                <button className="hidden-desktop text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: '80px',
                    left: 0,
                    width: '100vw',
                    height: 'calc(100vh - 80px)',
                    background: 'rgba(5, 5, 5, 0.95)',
                    backdropFilter: 'blur(10px)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    zIndex: 99,
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="nav-link"
                            style={{ fontSize: '1.5rem', letterSpacing: '0.2em' }}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/products"
                        className="btn-primary-glow"
                        style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}
                        onClick={() => setIsOpen(false)}
                    >
                        GET ACCESS
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
