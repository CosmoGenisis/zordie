
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { motion } from 'framer-motion';
import { Users, CheckCircle, Lightbulb, ShieldCheck, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-zordie-50 to-white dark:from-zordie-900 dark:to-zordie-950 transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        </div>
        <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
              About <span className="text-zordie-600 dark:text-zordie-400">Zordie AI</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600 dark:text-gray-300">
              Learn about our mission, team, and the values that drive us.
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-white dark:bg-zordie-950 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="About Zordie AI"
                subtitle="Our mission is to transform hiring through authentic verification"
                align="center"
              />
              <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
                Zordie AI is dedicated to revolutionizing the hiring process by providing innovative AI-driven solutions that ensure authenticity, efficiency, and fairness.
              </p>
              <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
                We believe that every company deserves access to verified talent, and every job seeker deserves a fair chance to showcase their true skills and experience.
              </p>
              <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
                Our platform combines cutting-edge AI technology with a human-centric approach to create a hiring ecosystem built on trust and transparency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Zordie AI Team"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-zordie-800 p-4 rounded-lg shadow-lg border dark:border-zordie-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium text-gray-900 dark:text-gray-100">AI-Powered Verification</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gray-50 dark:bg-zordie-900 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="What guides our work and decisions"
            align="center"
          />

          <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {valuesData.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden transition-all duration-300 border-0 hover-card-effect bg-white dark:bg-zordie-800">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-zordie-100 dark:bg-zordie-700">
                      <value.icon className="w-6 h-6 text-zordie-600 dark:text-zordie-200" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-white dark:bg-zordie-950 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Team"
            subtitle="The passionate people behind Zordie"
            align="center"
          />

          <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden transition-all duration-300 border-0 hover-card-effect bg-white dark:bg-zordie-800">
                  <CardContent className="p-8">
                    <Avatar className="w-24 h-24 mb-4 mx-auto">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="mb-1 text-xl font-semibold text-center text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-center text-gray-500 dark:text-gray-400">{member.title}</p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-gray-50 dark:bg-zordie-900 transition-colors duration-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Contact Us
            </h2>
            <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-600 dark:text-gray-300">
              Have questions or need assistance? Reach out to our team for support.
            </p>

            <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
              <ContactCard
                Icon={Mail}
                title="Email Us"
                details="support@zordie.in"
              />
              <ContactCard
                Icon={Phone}
                title="Call Us"
                details="+1 (555) 123-4567"
              />
              <ContactCard
                Icon={MapPin}
                title="Location"
                details="Kanpur, India"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface ValueProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const valuesData: ValueProps[] = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly seek new and creative ways to improve the hiring process through AI."
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We uphold the highest standards of honesty, transparency, and ethical conduct."
  },
  {
    icon: MessageSquare,
    title: "Collaboration",
    description: "We foster a culture of teamwork, respect, and open communication."
  }
];

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    name: "Abdul Quadir",
    title: "Founder and CEO",
    bio: "Abdul is a visionary leader with a passion for leveraging AI to solve real-world problems in the hiring space.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00d5a4ee9baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Laxmi Jagga",
    title: "Co-founder and CMO",
    bio: "Laxmi brings extensive experience in marketing and business development, driving our growth strategy and market positioning.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    name: "Aditya",
    title: "Head of Product",
    bio: "Aditya is a product strategist focused on creating user-friendly and impactful solutions that transform the hiring process.",
    avatar: "https://images.unsplash.com/photo-1534528741702-a0cfae58b707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
  }
];

interface ContactCardProps {
  Icon: React.ComponentType<any>;
  title: string;
  details: string;
}

const ContactCard = ({ Icon, title, details }: ContactCardProps) => {
  return (
    <Card className="bg-white dark:bg-zordie-800 border-0 hover-card-effect">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-zordie-100 dark:bg-zordie-700">
            <Icon className="w-5 h-5 text-zordie-600 dark:text-zordie-200" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{details}</p>
      </CardContent>
    </Card>
  );
};

export default About;
