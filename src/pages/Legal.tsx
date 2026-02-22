// React import not needed if not used directly

const Legal = () => {
    return (
        <div className="section" style={{ minHeight: '80vh', paddingTop: '120px', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ marginBottom: '3rem' }}>LEGAL <span style={{ color: 'var(--color-accent)' }}>PROTOCOLS</span></h1>

                <div style={{ fontSize: '1rem', lineHeight: '1.6', color: '#aaa' }}>
                    <h3>TERMS OF SERVICE</h3>
                    <p>
                        By accessing THE OPERATOR modules, you agree to the following protocols. All digital assets are non-refundable due to their nature.
                    </p>
                    <br />
                    <h3>LICENSE</h3>
                    <p>
                        Purchase grants a single-user license. Redistribution, resale, or sub-licensing of our blueprints is strictly prohibited and will result in immediate termination of access.
                    </p>
                    <br />
                    <h3>DISCLAIMER</h3>
                    <p>
                        Results vary based on execution. THE OPERATOR provides the tools, but you must provide the labor.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Legal;
