import ProductLayout from '../../components/ProductLayout';

const AgencyArchitect = () => {
    return (
        <ProductLayout
            title="AGENCY ARCHITECT"
            subtitle="The Complete OS for Scaling"
            price="$49"
            payhipId="258WU"
            description={
                <>
                    <p style={{ marginBottom: '1.5rem' }}>The complete operating system for scaling an AI Automation Agency (AAA).</p>
                    <p style={{ marginBottom: '1.5rem' }}>Stop trading time for money. Build an infrastructure that sells, delivers, and scales without you needing to be in the weeds every day.</p>
                    <p>Includes outreach scripts, proposal templates, and service delivery frameworks used by top agencies.</p>
                </>
            }
            features={[
                "Outreach Scripts & Templates",
                "Proposal Generators",
                "Service Delivery Frameworks",
                "Client Onboarding Systems",
                "Team Management Protocols"
            ]}
        />
    );
};

export default AgencyArchitect;
