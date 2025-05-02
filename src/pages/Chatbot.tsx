
import React, { useState, useRef, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Send, Bot, User } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { useToast } from '@/hooks/use-toast';

// Removed useAuth import

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant for job search and interview preparation. How can I help you today?",
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
      let response = '';
      
      if (input.toLowerCase().includes('interview')) {
        response = "To prepare for an interview, make sure to research the company, practice common questions, and prepare examples from your experience. Would you like some specific interview tips?";
      } else if (input.toLowerCase().includes('resume')) {
        response = "For your resume, focus on highlighting your achievements with quantifiable results. Keep it concise and tailored to each job application. Would you like me to provide a resume checklist?";
      } else if (input.toLowerCase().includes('job')) {
        response = "When searching for jobs, use targeted keywords, set up job alerts, and leverage your professional network. Would you like me to suggest some job search strategies?";
      } else {
        response = "I'm here to help with your job search and interview preparation. You can ask me about resume tips, interview techniques, job search strategies, or career advice.";
      }
      
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
          title="AI Career Assistant"
          subtitle="Get personalized job search and interview preparation help"
          align="center"
        />
        
        <Card className="mt-8 h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Bot className="mr-2 h-5 w-5" />
              Career Assistant
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto mb-4 pr-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex mb-4 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
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
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
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
                className="btn-gradient"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Chatbot;
