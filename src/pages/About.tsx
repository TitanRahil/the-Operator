// React import not needed if not used directly

const About = () => {
    return (
        <div className="section" style={{ minHeight: '80vh', paddingTop: '120px', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ marginBottom: '3rem' }}>SYSTEM <span style={{ color: 'var(--color-accent)' }}>LOGIC</span></h1>

                <div style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p>
                        We do not sell dreams. We sell structure.
                    </p>
                    <p>
                        In the emerging AI economy, speed and precision are the only currencies that matter. THE OPERATOR was founded by a collective of systems engineers and revenue architects to decode the black box of monetization.
                    </p>
                    <p>
                        Our blueprints are distilled from thousands of hours of testing, failure, and optimization. We provide the raw code for financial independence in the post-labor era.
                    </p>
                    <br />
                    <h3 style={{ color: '#fff' }}>OUR MISSION</h3>
                    <p>
                        To equip the top 1% of builders with the tools to dominate their niche.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
