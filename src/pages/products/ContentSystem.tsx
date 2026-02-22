import ProductLayout from '../../components/ProductLayout';

const ContentSystem = () => {
    return (
        <ProductLayout
            title="CONTENT SYSTEM"
            subtitle="How Content Creators Turn AI Into Real Income"
            price="$39"
            payhipId="fu02t"
            description={
                <>
                    <p style={{ marginBottom: '1.5rem' }}>For most creators, the problem is not ideas.</p>
                    <p style={{ marginBottom: '1.5rem' }}>It’s turning one idea into enough high-quality content to stay visible, relevant, and paid.</p>
                    <p style={{ marginBottom: '1.5rem', color: 'cyan' }}>AI changes that — but only if it’s used correctly.</p>
                    <p style={{ marginBottom: '1.5rem' }}>In this book, you learn how content creators use AI to build content systems that produce:</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'white' }}>
                        <li>Videos</li>
                        <li>Captions</li>
                        <li>Posts</li>
                        <li>Emails</li>
                        <li>Repurposed clips</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem' }}>…from a single idea, without losing their voice or brand.</p>
                    <p>Instead of spending hours rewriting the same thought for different platforms, creators use structured prompts and workflows to turn one piece of thinking into an entire distribution engine. That means: <strong>More output. More reach. More opportunities to monetize.</strong></p>
                </>
            }
            features={[
                "Content Repurposing Frameworks",
                "Viral Hook Generators",
                "Script-to-Video Workflows",
                "Distribution Calendars",
                "Automated Captioning Systems"
            ]}
        >
            <div style={{ marginTop: '3rem', textAlign: 'center', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'cyan', fontStyle: 'italic' }}>
                "The money doesn’t come from 'AI content.' It comes from consistent, scalable publishing."
            </div>
        </ProductLayout>
    );
};

export default ContentSystem;
