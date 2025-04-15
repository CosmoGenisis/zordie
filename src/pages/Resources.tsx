
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Podcast, 
  Download, 
  Calendar,
  ArrowRight,
  ExternalLink,
  CheckCircle
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleButtonClick = async (actionType: string, details: any = {}) => {
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData.session?.user?.id;

      // For resources, we'll track both authenticated and non-authenticated views
      // Log the user action
      await supabase
        .from('user_actions' as any)
        .insert({
          user_id: userId || '00000000-0000-0000-0000-000000000000', // Anonymous user ID if not logged in
          action_type: actionType,
          action_details: JSON.stringify({
            ...details,
            is_authenticated: !!userId,
            timestamp: new Date().toISOString()
          }),
          page: 'resources'
        });
      
      // Show toast notification
      toast({
        title: details.toast_title || "Resource accessed",
        description: details.toast_description || "Thank you for using our resources."
      });
      
      // Handle navigation based on action type
      if (actionType === 'resource_download' && !userId) {
        // If trying to download but not logged in
        toast({
          title: "Login recommended",
          description: "Create an account to track your resources and get personalized recommendations.",
          variant: "default"
        });
      } else if (actionType === 'webinar_signup' && !userId) {
        // If trying to sign up for webinar but not logged in
        navigate('/login');
      }
    } catch (error) {
      console.error('Error logging resource action:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zordie-50 to-zordie-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zordie-800">
              Career Resources
            </h1>
            <p className="text-lg text-zordie-600 mb-8">
              Tools, guides, and resources to help you advance your career and find your dream job.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="btn-gradient text-lg py-6 px-8"
                onClick={() => handleButtonClick('resource_browse', { 
                  section: 'job_seeker_resources',
                  toast_title: "Job Seeker Resources",
                  toast_description: "Check out our guides for job seekers"
                })}
              >
                Job Seeker Resources
              </Button>
              <Button 
                variant="outline" 
                className="text-lg py-6 px-8"
                onClick={() => handleButtonClick('resource_browse', { 
                  section: 'employer_resources',
                  toast_title: "Employer Resources",
                  toast_description: "View our resources for employers"
                })}
              >
                Employer Resources
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Resource Library"
            subtitle="Curated resources to help you succeed"
            align="center"
          />
          
          <Tabs defaultValue="guides" className="mt-12">
            <TabsList className="grid grid-cols-4 max-w-3xl mx-auto mb-8">
              <TabsTrigger value="guides" onClick={() => handleButtonClick('category_view', { category: 'guides' })}>Guides</TabsTrigger>
              <TabsTrigger value="templates" onClick={() => handleButtonClick('category_view', { category: 'templates' })}>Templates</TabsTrigger>
              <TabsTrigger value="videos" onClick={() => handleButtonClick('category_view', { category: 'videos' })}>Videos</TabsTrigger>
              <TabsTrigger value="webinars" onClick={() => handleButtonClick('category_view', { category: 'webinars' })}>Webinars</TabsTrigger>
            </TabsList>
            
            {/* Guides Tab */}
            <TabsContent value="guides">
              <div className="grid md:grid-cols-3 gap-6">
                {guides.map(guide => (
                  <ResourceCard 
                    key={guide.id}
                    title={guide.title}
                    description={guide.description}
                    icon={<FileText className="h-6 w-6 text-zordie-700" />}
                    tags={guide.tags}
                    onButtonClick={() => handleButtonClick('resource_view', { 
                      resource_id: guide.id, 
                      resource_type: 'guide',
                      resource_title: guide.title
                    })}
                  />
                ))}
              </div>
            </TabsContent>
            
            {/* Templates Tab */}
            <TabsContent value="templates">
              <div className="grid md:grid-cols-3 gap-6">
                {templates.map(template => (
                  <ResourceCard 
                    key={template.id}
                    title={template.title}
                    description={template.description}
                    icon={<Download className="h-6 w-6 text-zordie-700" />}
                    tags={template.tags}
                    buttonText="Download"
                    onButtonClick={() => handleButtonClick('resource_download', { 
                      resource_id: template.id, 
                      resource_type: 'template',
                      resource_title: template.title,
                      toast_title: "Download started",
                      toast_description: "Your template is downloading."
                    })}
                  />
                ))}
              </div>
            </TabsContent>
            
            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="grid md:grid-cols-2 gap-6">
                {videos.map(video => (
                  <VideoResourceCard 
                    key={video.id}
                    title={video.title}
                    description={video.description}
                    thumbnailUrl={video.thumbnailUrl}
                    duration={video.duration}
                    onButtonClick={() => handleButtonClick('resource_view', { 
                      resource_id: video.id, 
                      resource_type: 'video',
                      resource_title: video.title,
                      toast_title: "Opening video",
                      toast_description: "Enjoy the content!"
                    })}
                  />
                ))}
              </div>
            </TabsContent>
            
            {/* Webinars Tab */}
            <TabsContent value="webinars">
              <div className="grid md:grid-cols-2 gap-8">
                {webinars.map(webinar => (
                  <WebinarCard 
                    key={webinar.id}
                    title={webinar.title}
                    description={webinar.description}
                    date={webinar.date}
                    time={webinar.time}
                    speaker={webinar.speaker}
                    speakerRole={webinar.speakerRole}
                    onButtonClick={() => handleButtonClick('webinar_signup', { 
                      webinar_id: webinar.id, 
                      webinar_title: webinar.title,
                      toast_title: "Webinar registration",
                      toast_description: "You've been registered for the webinar."
                    })}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Resource Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <Badge className="mb-4">Featured Resource</Badge>
              <h2 className="text-3xl font-bold mb-4">Ultimate Job Search Guide 2025</h2>
              <p className="text-gray-600 mb-6">
                A comprehensive guide to navigating the job market in 2025. Includes expert tips on resume building, interview preparation, salary negotiation, and leveraging AI in your job search.
              </p>
              <ul className="space-y-3 mb-6">
                <FeaturedPoint text="Step-by-step job search strategy for today's market" />
                <FeaturedPoint text="AI-optimized resume templates and examples" />
                <FeaturedPoint text="Common interview questions with sample answers" />
                <FeaturedPoint text="Salary negotiation scripts that work" />
                <FeaturedPoint text="Networking strategies for introverts and extroverts" />
              </ul>
              <Button 
                className="btn-gradient" 
                onClick={() => handleButtonClick('featured_resource_download', { 
                  resource_id: 'ultimate-guide-2025',
                  toast_title: "Downloading guide",
                  toast_description: "Thank you for downloading our featured guide!"
                })}
              >
                Download Free Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Ultimate Job Search Guide" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-zordie-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-zordie-100 mb-8">
              Get the latest career resources, job market insights, and exclusive content delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-4 py-3 rounded-md text-gray-800 flex-grow" 
              />
              <Button 
                className="bg-zordie-500 hover:bg-zordie-600 py-3"
                onClick={() => handleButtonClick('newsletter_signup', { 
                  source: 'resources_page',
                  toast_title: "Newsletter signup",
                  toast_description: "Thank you for subscribing to our newsletter!"
                })}
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-zordie-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Join our live sessions and networking events"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {events.map(event => (
              <EventCard 
                key={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                isVirtual={event.isVirtual}
                onButtonClick={() => handleButtonClick('event_signup', { 
                  event_id: event.id,
                  event_title: event.title,
                  toast_title: "Event registration",
                  toast_description: `You're registered for ${event.title}`
                })}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Resource data
const guides = [
  {
    id: 'g1',
    title: 'Resume Writing Masterclass',
    description: 'Learn how to craft an ATS-friendly resume that stands out to recruiters.',
    tags: ['Resume', 'Beginner']
  },
  {
    id: 'g2',
    title: 'Interview Preparation Guide',
    description: 'Comprehensive guide to ace your next job interview with confidence.',
    tags: ['Interview', 'All Levels']
  },
  {
    id: 'g3',
    title: 'Salary Negotiation Tactics',
    description: 'Proven strategies to negotiate the best compensation package.',
    tags: ['Negotiation', 'Intermediate']
  }
];

const templates = [
  {
    id: 't1',
    title: 'Professional Resume Template',
    description: 'ATS-friendly resume template optimized for job applications.',
    tags: ['Resume', 'Editable']
  },
  {
    id: 't2',
    title: 'Cover Letter Template Pack',
    description: 'Five customizable cover letter templates for different industries.',
    tags: ['Cover Letter', 'Editable']
  },
  {
    id: 't3',
    title: 'Job Interview Preparation Worksheet',
    description: 'Prepare your interview answers with this structured worksheet.',
    tags: ['Interview', 'Printable']
  }
];

const videos = [
  {
    id: 'v1',
    title: 'How to Answer the 10 Most Common Interview Questions',
    description: 'Learn proven strategies to answer difficult interview questions with confidence.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    duration: '18:45'
  },
  {
    id: 'v2',
    title: 'LinkedIn Profile Optimization Workshop',
    description: 'Transform your LinkedIn profile to attract recruiters and job opportunities.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    duration: '24:10'
  }
];

const webinars = [
  {
    id: 'w1',
    title: 'Future of Work: Navigating Career Changes in 2025',
    description: 'Learn how emerging trends are reshaping careers and how to position yourself for success.',
    date: 'June 15, 2025',
    time: '11:00 AM EST',
    speaker: 'Dr. Maya Rodriguez',
    speakerRole: 'Career Futurist, Harvard Business School'
  },
  {
    id: 'w2',
    title: 'AI Tools for Job Seekers: Maximizing Your Search',
    description: 'Discover how to leverage AI tools to find better job opportunities and stand out.',
    date: 'June 22, 2025',
    time: '2:00 PM EST',
    speaker: 'James Wilson',
    speakerRole: 'AI Career Strategist, Tech Careers Institute'
  }
];

const events = [
  {
    id: 'e1',
    title: 'Tech Careers Networking Mixer',
    date: 'July 8, 2025',
    time: '6:00 PM - 8:30 PM',
    location: 'San Francisco, CA',
    isVirtual: false
  },
  {
    id: 'e2',
    title: 'Resume Review Workshop',
    date: 'July 15, 2025',
    time: '1:00 PM - 3:00 PM',
    location: 'Online',
    isVirtual: true
  },
  {
    id: 'e3',
    title: 'Industry Panel: Healthcare Careers',
    date: 'July 22, 2025',
    time: '5:30 PM - 7:00 PM',
    location: 'Chicago, IL',
    isVirtual: false
  }
];

// Component definitions
interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  buttonText?: string;
  onButtonClick: () => void;
}

const ResourceCard = ({ title, description, icon, tags, buttonText = "View Resource", onButtonClick }: ResourceCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="w-12 h-12 rounded-full bg-zordie-100 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <Button onClick={onButtonClick} className="w-full">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

interface VideoResourceCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  onButtonClick: () => void;
}

const VideoResourceCard = ({ title, description, thumbnailUrl, duration, onButtonClick }: VideoResourceCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img src={thumbnailUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button onClick={onButtonClick} className="mt-auto w-full flex items-center justify-center">
          <Video className="mr-2 h-4 w-4" /> Watch Now
        </Button>
      </CardContent>
    </Card>
  );
};

interface WebinarCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  speaker: string;
  speakerRole: string;
  onButtonClick: () => void;
}

const WebinarCard = ({ title, description, date, time, speaker, speakerRole, onButtonClick }: WebinarCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-start mb-4">
          <Calendar className="h-5 w-5 text-zordie-600 mr-3 shrink-0 mt-1" />
          <div>
            <div className="text-lg font-medium">{date}</div>
            <div className="text-sm text-gray-500">{time}</div>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="bg-gray-50 p-3 rounded-lg mb-4">
          <p className="font-medium">{speaker}</p>
          <p className="text-sm text-gray-500">{speakerRole}</p>
        </div>
        <Button onClick={onButtonClick} className="w-full">
          Register Now
        </Button>
      </CardContent>
    </Card>
  );
};

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  onButtonClick: () => void;
}

const EventCard = ({ title, date, time, location, isVirtual, onButtonClick }: EventCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-grow flex flex-col">
        <Badge className={isVirtual ? "bg-green-100 text-green-800 hover:bg-green-200 mb-4" : "mb-4"}>
          {isVirtual ? "Virtual Event" : "In-Person Event"}
        </Badge>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          <Calendar className="h-4 w-4 text-zordie-600 mr-2" />
          <span className="text-gray-700">{date}</span>
        </div>
        <div className="flex items-center mb-3">
          <Clock className="h-4 w-4 text-zordie-600 mr-2" />
          <span className="text-gray-700">{time}</span>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">
          Location: {location}
        </p>
        <Button onClick={onButtonClick} className="w-full mt-auto">
          Register
        </Button>
      </CardContent>
    </Card>
  );
};

const FeaturedPoint = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start">
      <CheckCircle className="h-5 w-5 text-zordie-600 mr-3 shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
};

export default Resources;
