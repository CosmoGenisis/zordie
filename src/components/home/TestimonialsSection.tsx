
import { SectionHeading } from "@/components/ui/section-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted by Companies & Candidates"
          subtitle="See what our users say about their experience with Zordie"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <TestimonialCard
            content="Zordie completely transformed our hiring process. We've cut our screening time by 70% and found incredible talent that was previously overlooked. The verification features give us peace of mind."
            author="Priya Sharma"
            role="HR Director, TechVantage Solutions"
            avatarSrc="https://randomuser.me/api/portraits/women/12.jpg"
          />
          <TestimonialCard
            content="As a self-taught developer from a rural area, I struggled to get noticed by companies. Zordie verified my projects and skills, giving me credibility. I got hired within weeks at a salary I never imagined possible."
            author="Rajesh Kumar"
            role="Software Engineer, Hired via Zordie"
            avatarSrc="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <TestimonialCard
            content="The AI interview practice helped me understand where I was going wrong. After years of rejections, I improved my skills based on Zordie's feedback and landed my dream job within a month."
            author="Ananya Patel"
            role="UX Designer, Hired via Zordie"
            avatarSrc="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <TestimonialCard
            content="We were drowning in fake resumes and spending hours verifying candidates manually. Zordie's AI detected several fraudulent applications that would have wasted our time. Game changer!"
            author="Vikram Singh"
            role="CTO, CloudEdge Systems"
            avatarSrc="https://randomuser.me/api/portraits/men/22.jpg"
          />
          <TestimonialCard
            content="The verification badge on my profile helped me stand out. Companies reached out to me directly rather than me having to apply. The AI resume tailoring feature is brilliant."
            author="Meera Desai"
            role="Data Scientist, Hired via Zordie"
            avatarSrc="https://randomuser.me/api/portraits/women/17.jpg"
          />
          <TestimonialCard
            content="Prime AI is like having an extra HR team member. It handles all our routine tasks, sending reminders and keeping candidates informed. Our candidates love the transparency and quick responses."
            author="Arjun Menon"
            role="Recruiting Manager, InnovateX"
            avatarSrc="https://randomuser.me/api/portraits/men/67.jpg"
          />
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  avatarSrc: string;
}

const TestimonialCard = ({ content, author, role, avatarSrc }: TestimonialCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <Quote className="h-8 w-8 text-zordie-200 mb-4" />
      <p className="text-gray-700 mb-6">{content}</p>
      <div className="flex items-center">
        <Avatar className="h-10 w-10 mr-3 relative border">
          <AvatarImage src={avatarSrc} alt={author} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
