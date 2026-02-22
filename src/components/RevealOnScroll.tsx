import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface RevealOnScrollProps {
    children: ReactNode;
    delay?: number; // in milliseconds
    className?: string;
}

const RevealOnScroll = ({ children, delay = 0, className = '' }: RevealOnScrollProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('reveal-visible');
                        entry.target.classList.remove('reveal-hidden');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`reveal-wrapper reveal-hidden ${className}`}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;
