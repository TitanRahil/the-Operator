import ProductLayout from '../../components/ProductLayout';

const PromptMastery = () => {
    return (
        <ProductLayout
            title="FROM PROMPTS TO PROFITS"
            subtitle="The Professional Manual for High-Leverage AI"
            price="$29"
            payhipId="eIMTt"
            description={
                <>
                    <p style={{ marginBottom: '1.5rem' }}>Tired of seeing people make money through AI tools and wanna start your own business? But stuck asking basic questions to ChatGPT?</p>
                    <p style={{ marginBottom: '1.5rem' }}>In this full resource guide, we take you step by step to maximise your outputs by ChatGPT.</p>
                    <p style={{ marginBottom: '1.5rem' }}>We give you all hidden techniques and plans which professionals use that make them money.</p>
                    <p style={{ fontWeight: 'bold', color: 'white' }}>Turn your Workflow 10x faster with this full resource pack.</p>
                </>
            }
            features={[
                "The $1,000 Hour Mindset",
                "Prompt Architecture",
                "Advanced Control",
                "The Golden Mirror Method",
                "The Audit Loop Protocol",
                "Workflows of Profesionals",
                "From Prompts to Systems",
                "Human in the loop",
                "Video Guides of all chapters",
                "Flashcards - for memorizing all techinques",
                "Slide Explanations",
                "Live Implementations of techniques"
            ]}
        >
            <div style={{ marginTop: '3rem', textAlign: 'center', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'cyan', fontStyle: 'italic' }}>
                "Build the system. Decouple your time. Own the leverage."
            </div>
        </ProductLayout>
    );
};

export default PromptMastery;
