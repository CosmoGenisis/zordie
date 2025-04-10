
import { SectionHeading } from "@/components/ui/section-heading";

const PartnersSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted by Leading Companies"
          centered
        />
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mt-10">
          {/* These would be replaced with actual logos */}
          <CompanyLogo name="TechVantage" />
          <CompanyLogo name="InnovateX" />
          <CompanyLogo name="CloudEdge" />
          <CompanyLogo name="DataSphere" />
          <CompanyLogo name="NextGen Solutions" />
          <CompanyLogo name="QuantumTech" />
        </div>
      </div>
    </section>
  );
};

interface CompanyLogoProps {
  name: string;
}

const CompanyLogo = ({ name }: CompanyLogoProps) => {
  return (
    <div className="h-12 flex items-center justify-center px-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
      <div className="text-lg font-semibold text-gray-500">{name}</div>
    </div>
  );
};

export default PartnersSection;
