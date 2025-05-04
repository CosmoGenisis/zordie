
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PartnersSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Company logos with actual tech company names
  const companies = [
    { name: "TechVision", logo: "T" },
    { name: "Quantum AI", logo: "Q" },
    { name: "DataSphere", logo: "D" },
    { name: "CloudEdge", logo: "C" },
    { name: "NexusCore", logo: "N" },
    { name: "InnovateX", logo: "I" },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Trusted by Leading Companies"
            align="center"
            className="text-zordie-900"
          />
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {companies.map((company, index) => (
            <CompanyLogo 
              key={company.name} 
              name={company.name} 
              logo={company.logo} 
              delay={index * 0.1} 
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface CompanyLogoProps {
  name: string;
  logo?: string;
  delay?: number;
  isInView: boolean;
}

const CompanyLogo = ({ name, logo, delay = 0, isInView }: CompanyLogoProps) => {
  return (
    <motion.div 
      className="h-20 w-36 flex items-center justify-center px-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05,
        opacity: 1
      }}
    >
      <div className="flex items-center">
        {logo && (
          <div className="w-10 h-10 rounded-md bg-gradient-to-r from-zordie-600 to-accent1 text-white flex items-center justify-center text-xl font-bold mr-3">
            {logo}
          </div>
        )}
        <div className="text-lg font-semibold text-zordie-800">{name}</div>
      </div>
    </motion.div>
  );
};

export default PartnersSection;
