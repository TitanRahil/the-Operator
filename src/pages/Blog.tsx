import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: "How Freelancers Make Money Using ChatGPT (2026 Guide)",
            date: "January 08, 2026",
            excerpt: "Right now, there are freelancers making $5,000–$20,000 per month doing the same work they were doing two years ago — except they’re doing it 5x faster using ChatGPT.",
            link: "/blog/freelancers-guide"
        },
        {
            title: "Why Your Prompts Fail (And How Professionals Fix Them)",
            date: "January 07, 2026",
            excerpt: "Most people think their prompts fail because they didn’t “word it right.” That’s wrong. Prompts fail because they were never designed to succeed.",
            link: "/blog/prompt-fix"
        }
    ];

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '6rem', minHeight: '100vh' }}>
            <div className="container">
                <RevealOnScroll>
                    <h1 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '4rem', textAlign: 'center' }}>
                        LATEST <span className="text-cyan">INTEL</span>
                    </h1>
                </RevealOnScroll>

                <div className="responsive-grid" style={{ gap: '3rem' }}>
                    {posts.map((post, i) => (
                        <RevealOnScroll key={i} delay={i * 100}>
                            <Link to={post.link} className="group" style={{ display: 'block', height: '100%' }}>
                                <div style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '2.5rem',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    transition: 'all 0.3s ease'
                                }}
                                    className="hover:border-cyan hover:bg-white/5"
                                >
                                    <div>
                                        <div style={{ color: 'cyan', fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>{post.date}</div>
                                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                                            {post.title}
                                        </h2>
                                        <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '2rem' }}>
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    <div className="text-cyan" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        Read Article <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
