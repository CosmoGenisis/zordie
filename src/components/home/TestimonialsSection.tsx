import React, { useRef } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const testimonials = [{
  id: 1,
  content: "Zordie completely transformed our hiring process. We've cut our time-to-hire by 65% and the quality of candidates has been exceptional. The AI verification system has eliminated fake resumes entirely.",
  name: "Sarah Johnson",
  title: "Head of Talent Acquisition, TechGrowth Inc.",
  avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  rating: 5,
  company: "Tech Growth"
}, {
  id: 2,
  content: "The verification badge on Zordie made a huge difference in my job search. I received 3x more interview requests and employers trusted my skills immediately. The AI interview practice also helped me ace every interview.",
  name: "Michael Chen",
  title: "Senior Software Engineer",
  avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  rating: 5,
  company: "Hired at Innovate AI"
}, {
  id: 3,
  content: "As a hiring manager, I love how Zordie pre-screens candidates with its AI. The verification process ensures I only review authentic profiles, and the skills assessment is incredibly accurate. Won't hire any other way now!",
  name: "Jessica Rodriguez",
  title: "Engineering Director, Global Systems",
  avatar: "https://randomuser.me/api/portraits/women/75.jpg",
  rating: 5,
  company: "Global Systems"
}, {
  id: 4,
  content: "What sets Zordie apart is its ability to verify not just resumes but actual skills through project authentication. This has allowed us to identify talent that would have been overlooked through traditional screening.",
  name: "David Wilson",
  title: "CTO, NextGen Solutions",
  avatar: "https://randomuser.me/api/portraits/men/23.jpg",
  rating: 5,
  company: "NextGen Solutions"
}];
const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section ref={sectionRef} className="py-24 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-zordie-100/50 dark:bg-zordie-800/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent1/10 dark:bg-accent1/5 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.5
      }}>
          <SectionHeading title="What Our Users Say" subtitle="Hear how Zordie has transformed hiring processes and job searches" align="center" />
        </motion.div>
        
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {testimonials.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial} variants={itemVariants} />)}
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.5,
        delay: 0.7
      }} className="mt-16 bg-gradient-to-r from-zordie-100 to-zordie-50 dark:from-zordie-800/50 dark:to-zordie-900/50 p-8 rounded-xl shadow-lg border border-zordie-200/50 dark:border-zordie-700/50">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-full max-w-xs">
              <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="CEO Testimonial" className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-zordie-700 mx-auto" />
              <div className="text-center mt-4">
                <h4 className="font-bold text-xl text-zordie-800 dark:text-white">Robert Parker</h4>
                <p className="text-zordie-600 dark:text-zordie-300">CEO, Innovate Solutions</p>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <Quote className="h-10 w-10 text-zordie-500/30 mb-4" />
              <p className="text-zordie-700 dark:text-zordie-200 text-lg italic">
                "Implementing Zordie's AI-powered hiring platform was the best decision we made for our recruitment process. The verification system has eliminated bad hires completely, and we've seen a 40% increase in employee retention. Our HR team now focuses on strategic initiatives rather than endless resume screening. The ROI has been incredible - I highly recommend Zordie to any growing company."
              </p>
              <div className="mt-6 flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" alt="Company logo" className="h-6 dark:invert mr-3" />
                <p className="text-sm text-zordie-600 dark:text-zordie-300">Featured success story</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
const TestimonialCard = ({
  testimonial,
  variants
}) => {
  return <motion.div variants={variants} className="bg-white dark:bg-zordie-800/50 p-6 rounded-xl shadow-md border border-zordie-100 dark:border-zordie-700 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full relative overflow-hidden group">
      {/* Shiny effect on hover */}
      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100" initial={{
      x: '-100%'
    }} whileHover={{
      x: '100%'
    }} transition={{
      duration: 0.7
    }} />
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex items-center">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-white dark:border-zordie-700 shadow-sm" />
          <div>
            <h4 className="font-semibold text-zordie-800 dark:text-white">{testimonial.name}</h4>
            <p className="text-sm text-zordie-600 dark:text-zordie-300">{testimonial.title}</p>
          </div>
        </div>
        <Quote className="h-6 w-6 text-zordie-400 dark:text-zordie-500" />
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 flex-grow mb-4 relative z-10">{testimonial.content}</p>
      
      <div className="mt-auto relative z-10">
        <div className="flex items-center">
          {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
        </div>
        <div className="text-sm text-zordie-500 dark:text-zordie-400 mt-2">{testimonial.company}</div>
      </div>
    </motion.div>;
};
export default TestimonialsSection;