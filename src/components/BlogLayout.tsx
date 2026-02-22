import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { Link } from 'react-router-dom';

interface BlogLayoutProps {
    title: string;
    date: string;
    children: React.ReactNode;
}

const BlogLayout = ({ title, date, children }: BlogLayoutProps) => {
    return (
        <div className="blog-layout" style={{ paddingTop: '100px', paddingBottom: '4rem', minHeight: '100vh' }}>
            <article className="container" style={{ maxWidth: '800px' }}>
                <RevealOnScroll>
                    <header style={{ marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
                        <div style={{ color: 'cyan', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                            {date}
                        </div>
                        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: '700', lineHeight: '1.2' }}>
                            {title}
                        </h1>
                    </header>
                </RevealOnScroll>

                <div className="blog-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ddd' }}>
                    {children}
                </div>

                <div style={{ marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                    <Link to="/blog" className="text-cyan" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        &larr; Back to Articles
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default BlogLayout;
