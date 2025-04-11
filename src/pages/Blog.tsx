
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Calendar, ArrowRight, ChevronRight } from 'lucide-react';

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-zordie-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zordie-800">
              Zordie AI Blog
            </h1>
            <p className="text-lg text-zordie-600 mb-8">
              Insights, trends, and best practices in AI-powered recruitment and hiring
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input 
                type="text" 
                placeholder="Search articles..." 
                className="pl-10 pr-4 py-3 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-zordie-600 mb-3">Featured Article</div>
              <h2 className="text-3xl font-bold mb-4">The Future of AI in Recruitment: 2025 and Beyond</h2>
              <p className="text-gray-600 mb-4">
                Explore how artificial intelligence is set to revolutionize the hiring process in the coming years, from candidate screening to interview assessment.
              </p>
              <div className="flex items-center text-gray-500 mb-6">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Author" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-medium text-zordie-700">Sarah Johnson</div>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    April 5, 2025
                  </div>
                </div>
              </div>
              <Button className="flex items-center">
                Read Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="AI in Recruitment" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Latest Articles"
            subtitle="Stay up-to-date with our newest insights"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <BlogCard 
              title="How to Optimize Your Resume for AI Screening Tools"
              excerpt="Learn the key strategies to make your resume stand out to AI-powered applicant tracking systems."
              author="Michael Chen"
              date="April 2, 2025"
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
              category="Career Tips"
            />
            
            <BlogCard 
              title="5 Ethical Considerations When Using AI in Hiring"
              excerpt="Explore the ethical challenges and best practices when implementing AI in your recruitment process."
              author="Jessica Williams"
              date="March 28, 2025"
              image="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              category="AI Ethics"
            />
            
            <BlogCard 
              title="Reducing Bias in AI Recruitment: A Case Study"
              excerpt="How one company managed to reduce unconscious bias by 45% with our AI screening tools."
              author="David Thompson"
              date="March 25, 2025"
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              category="Case Studies"
            />
            
            <BlogCard 
              title="The Role of Machine Learning in Predicting Job Success"
              excerpt="Discover how ML algorithms can help identify candidates who will succeed in specific roles."
              author="Aisha Patel"
              date="March 20, 2025"
              image="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              category="Technology"
            />
            
            <BlogCard 
              title="Remote Hiring: Using AI to Assess Cultural Fit"
              excerpt="When you can't meet in person, AI can help determine if a candidate will fit your company culture."
              author="Chris Rodriguez"
              date="March 15, 2025"
              image="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              category="Remote Work"
            />
            
            <BlogCard 
              title="Interview Intelligence: Analyzing Candidate Responses"
              excerpt="How AI can provide insights into candidate responses that humans might miss."
              author="Emma Larson"
              date="March 10, 2025"
              image="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              category="Interviews"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-6 text-lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Browse by Category"
            subtitle="Find content relevant to your interests"
            align="center"
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            <CategoryButton label="AI Technology" count={12} />
            <CategoryButton label="Recruiting Tips" count={9} />
            <CategoryButton label="Case Studies" count={7} />
            <CategoryButton label="Career Advice" count={15} />
            <CategoryButton label="Industry Trends" count={8} />
            <CategoryButton label="Interviews" count={11} />
            <CategoryButton label="Remote Work" count={6} />
            <CategoryButton label="AI Ethics" count={5} />
            <CategoryButton label="Best Practices" count={14} />
            <CategoryButton label="HR Tech" count={9} />
            <CategoryButton label="Data Science" count={7} />
            <CategoryButton label="Company News" count={4} />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-zordie-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-zordie-100 mb-8">
              Get the latest insights and trends in AI recruitment delivered to your inbox monthly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 py-6"
              />
              <Button className="bg-white text-zordie-700 hover:bg-zordie-50 whitespace-nowrap py-6">
                Subscribe Now
              </Button>
            </div>
            <p className="text-xs text-zordie-200 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

const BlogCard = ({ title, excerpt, author, date, image, category }: BlogCardProps) => {
  return (
    <Card className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-xs font-semibold text-zordie-600 mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
          <Button variant="ghost" size="sm" className="text-zordie-600 p-0 hover:bg-transparent hover:text-zordie-700">
            Read more <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface CategoryButtonProps {
  label: string;
  count: number;
}

const CategoryButton = ({ label, count }: CategoryButtonProps) => {
  return (
    <Button 
      variant="outline" 
      className="w-full justify-between border-gray-200 hover:border-zordie-500 hover:text-zordie-700"
    >
      {label}
      <span className="bg-gray-100 text-gray-600 text-xs rounded-full px-2 py-1 ml-2">
        {count}
      </span>
    </Button>
  );
};

export default Blog;
