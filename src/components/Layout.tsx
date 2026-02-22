import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex flex-col" style={{ minHeight: '100vh', background: 'hsl(var(--color-background))', color: 'hsl(var(--color-foreground))', fontFamily: 'var(--font-sans)' }}>
            <Navbar />
            <main style={{ flexGrow: 1 }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
