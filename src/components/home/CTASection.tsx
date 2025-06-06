
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 md:py-32 relative overflow-hidden"
    >
      {/* Gradient background with custom colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-custom-600 via-blue-custom-700 to-blue-dark-600 z-0 dark:from-blue-dark-900 dark:via-blue-dark-800 dark:to-orange-custom-900"></div>
      
      {/* Animated background elements with custom colors */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-gradient-to-r from-blue-custom-500/10 to-orange-custom-500/10 backdrop-blur-3xl"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() * 0.4 + 0.8, 1],
                opacity: [Math.random() * 0.3, Math.random() * 0.1 + 0.2, Math.random() * 0.3],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Join our exclusive pre-access program and be among the first to experience the future of AI-powered recruitment with Zordie.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-custom-secondary hover:bg-custom-main border-none text-white font-semibold px-8 py-7 text-lg">
                  <span className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Join Pre-Access Program
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-white border-white hover:bg-white/10 py-7 text-lg"
                >
                  View Pricing Plans
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="mt-8 space-y-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-white/80 text-sm">
              🚀 Be the first to access revolutionary AI recruitment technology
            </p>
            <p className="text-white/60 text-xs">
              No commitment required • Early bird pricing available
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
