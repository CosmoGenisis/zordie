
import React, { useState, useRef, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Send, Bot, User, Sparkles, CheckCheck, AlertCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import PrimeHRChatbot from '@/components/chatbot/PrimeHRChatbot';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// More dynamic responses to make the AI feel smarter
const aiResponses = [
  {
    keywords: ['interview', 'interviewing', 'prepare for interview'],
    responses: [
      "To prepare for an interview, research the company thoroughly and prepare specific examples that showcase your skills. Would you like me to suggest some common interview questions for your role?",
      "Interview success comes from preparation. Focus on understanding the company's challenges and how your skills can address them. I recommend preparing at least 5 examples of past achievements relevant to the job.",
      "When preparing for interviews, the STAR method (Situation, Task, Action, Result) is excellent for structuring your answers. Would you like me to create some practice questions based on the job you're applying for?"
    ]
  },
  {
    keywords: ['resume', 'cv', 'portfolio'],
    responses: [
      "For your resume, focus on quantifiable achievements rather than just listing responsibilities. A good format is: Accomplished [X] as measured by [Y] by doing [Z]. Want me to review your current resume structure?",
      "Modern resumes should be ATS-friendly while still highlighting your unique value. I recommend using industry-specific keywords and focusing on achievements that directly relate to your target position.",
      "Your resume should tell a story of career progression. Make sure each role shows growth and new skills acquired. Would you like some tips on tailoring your resume for specific job applications?"
    ]
  },
  {
    keywords: ['job', 'career', 'application'],
    responses: [
      "When searching for jobs, quality outweighs quantity. I recommend applying to fewer positions but customizing each application. Would you like strategies for finding companies that match your values?",
      "Job searching works best with a multi-channel approach. Combine job boards with networking, reaching out to companies directly, and connecting with industry professionals on LinkedIn.",
      "For your job search, consider setting up email alerts with specific keywords related to your skills. This ensures you don't miss new opportunities as they arise."
    ]
  },
  {
    keywords: ['networking', 'linkedin', 'connections'],
    responses: [
      "Effective networking isn't about collecting contacts, but building relationships. Try reaching out to professionals in your desired role for informational interviews to gain insights and establish connections.",
      "On LinkedIn, engagement is key. Comment thoughtfully on industry posts, share relevant content, and join groups related to your field. These actions increase your visibility to potential employers.",
      "When networking, prepare a concise elevator pitch that explains who you are, what you do, and what opportunities you're looking for. This makes introductions much more effective."
    ]
  }
];

const getAIResponse = (input: string): string => {
  const lowercaseInput = input.toLowerCase();
  
  // Check for matches with predefined topics
  for (const topic of aiResponses) {
    for (const keyword of topic.keywords) {
      if (lowercaseInput.includes(keyword)) {
        // Randomly select one of the responses for this topic
        return topic.responses[Math.floor(Math.random() * topic.responses.length)];
      }
    }
  }
  
  // Default response if no keywords match
  return "I'm here to help with your job search and career development. You can ask me about resume building, interview preparation, job search strategies, or networking tips. How can I assist you today?";
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI career assistant powered by Prime HR technology. How can I help with your job search or interview preparation today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Use a placeholder username instead of auth
  const username = "User";
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Prevent sending new message while processing
    if (isLoading) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Generate a response based on the user's message
      const response = getAIResponse(input);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate a response. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <Layout>
      <div className="container max-w-4xl py-12">
        <SectionHeading
          title="Prime HR Career Assistant"
          subtitle="Get personalized job search and interview preparation help powered by AI"
          align="center"
        />
        
        <motion.div 
          className="mt-6 mb-8 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="ml-3">
              <h3 className="font-medium text-indigo-800 dark:text-indigo-300">AI-Powered Career Support</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Our Prime HR technology analyzes thousands of successful job applications and interviews to provide 
                personalized guidance for your career journey. Ask anything about resume optimization, interview preparation, 
                or job search strategies.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="bg-gradient-to-r from-zordie-600 to-accent1 text-white">
              <CardTitle className="text-xl flex items-center">
                <Bot className="mr-2 h-5 w-5" />
                Prime HR Career Assistant
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-hidden flex flex-col p-0">
              <div className="flex-1 overflow-y-auto p-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex mb-4 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {message.sender === 'bot' && (
                      <Avatar className="h-8 w-8 mr-2 mt-1">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-zordie-600 text-white">
                          AI
                        </AvatarFallback>
                      </Avatar>
                    )}
                    
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.sender === 'user'
                          ? 'bg-zordie-600 text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      <p>{message.text}</p>
                      <div
                        className={`text-xs mt-1 ${
                          message.sender === 'user'
                            ? 'text-zordie-100'
                            : 'text-gray-500'
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                    
                    {message.sender === 'user' && (
                      <Avatar className="h-8 w-8 ml-2 mt-1">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-gray-400 text-white">
                          <User className="h-5 w-5" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </motion.div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <Avatar className="h-8 w-8 mr-2 mt-1">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-zordie-600 text-white">
                        AI
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                      <div className="flex items-center space-x-1">
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              <div className="p-4 border-t">
                <div className="flex items-center">
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                    className="flex-1 mr-2"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-zordie-600 to-accent1 text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="mt-3 text-xs text-gray-500 flex items-center justify-center">
                  <CheckCheck className="h-3 w-3 mr-1" />
                  Powered by Prime HR AI Technology
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="mt-8 flex justify-center">
          <div className="max-w-2xl w-full p-4 bg-white dark:bg-zordie-800/50 rounded-lg shadow-sm border border-gray-200 dark:border-zordie-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 text-zordie-600 mr-2" />
              Try the Prime HR Chatbot
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Looking for a more interactive experience? Our floating Prime HR chatbot is available on all pages and can help with more specific recruitment and hiring needs. Click the chat icon in the bottom right corner to get started.
            </p>
          </div>
        </div>
      </div>
      
      {/* Add the Prime HR Chatbot */}
      <PrimeHRChatbot initiallyOpen={false} />
    </Layout>
  );
};

export default Chatbot;
