
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Loader2, Bot, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import LoadingScreen from "@/components/auth/LoadingScreen";
import { Separator } from "@/components/ui/separator";

interface Message {
  id: string;
  content: string;
  is_user: boolean;
  created_at: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingHistory, setIsFetchingHistory] = useState(true);
  const { user, isLoading: authLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user && !authLoading) {
      navigate("/login");
      return;
    }

    if (user) {
      fetchChatHistory();
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchChatHistory = async () => {
    setIsFetchingHistory(true);
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: true });

      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        setMessages(data);
      } else {
        // Add welcome message if no chat history
        const welcomeMessage: Message = {
          id: 'welcome',
          content: "Hi there! I'm Zordie's AI assistant. How can I help you with your job search or recruitment needs today?",
          is_user: false,
          created_at: new Date().toISOString()
        };
        setMessages([welcomeMessage]);
      }
    } catch (error) {
      console.error('Error fetching chat history:', error);
      toast({
        title: 'Error',
        description: 'Failed to load chat history. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsFetchingHistory(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isLoading) return;
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      is_user: true,
      created_at: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    try {
      // Save user message to database
      const { error: insertError } = await supabase
        .from('chat_messages')
        .insert({
          user_id: user?.id,
          content: userMessage.content,
          is_user: true
        });
        
      if (insertError) {
        throw insertError;
      }
      
      // Simulate bot response (in a real app, you'd call an API)
      setTimeout(async () => {
        const botResponses: Record<string, string> = {
          "hello": "Hello! How can I assist you with your job search or recruitment needs today?",
          "help": "I can help with resume tips, interview preparation, job search strategies, and recruitment best practices. What specific advice are you looking for?",
          "interview": "Preparing for an interview? Make sure to research the company, practice common questions, prepare examples of your accomplishments, and have questions ready for the interviewer.",
          "resume": "For an effective resume, highlight your achievements with measurable results, tailor it to each job application, keep it concise (1-2 pages), and proofread carefully.",
          "job": "Looking for job opportunities? Be sure to utilize our job board, set up job alerts, optimize your profile with relevant keywords, and network with industry professionals."
        };
        
        // Check if the user message contains any of the keywords
        let botResponseText = "I'm here to help with your career questions. Feel free to ask about resume tips, interview preparation, or job search strategies!";
        
        for (const [keyword, response] of Object.entries(botResponses)) {
          if (userMessage.content.toLowerCase().includes(keyword)) {
            botResponseText = response;
            break;
          }
        }
        
        const botMessage: Message = {
          id: `bot-${Date.now()}`,
          content: botResponseText,
          is_user: false,
          created_at: new Date().toISOString()
        };
        
        // Save bot response to database
        const { error: botInsertError } = await supabase
          .from('chat_messages')
          .insert({
            user_id: user?.id,
            content: botMessage.content,
            is_user: false
          });
          
        if (botInsertError) {
          console.error('Error saving bot message:', botInsertError);
        }
        
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive'
      });
      setIsLoading(false);
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (authLoading || isFetchingHistory) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-5 w-5 text-zordie-600" />
              Career Assistant
            </CardTitle>
            <CardDescription>
              Get personalized career advice and job search help
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="p-0">
            <div className="h-[60vh] overflow-y-auto p-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex mb-4 ${message.is_user ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`flex max-w-[80%] ${message.is_user ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <Avatar className={`h-8 w-8 ${message.is_user ? 'ml-2' : 'mr-2'}`}>
                      {message.is_user ? (
                        <AvatarFallback className="bg-zordie-100 text-zordie-700">U</AvatarFallback>
                      ) : (
                        <AvatarFallback className="bg-zordie-100 text-zordie-700">Z</AvatarFallback>
                      )}
                    </Avatar>
                    <div 
                      className={`p-3 rounded-lg ${
                        message.is_user 
                          ? 'bg-zordie-600 text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.is_user ? 'text-zordie-100' : 'text-gray-500'}`}>
                        {formatTime(message.created_at)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="flex flex-row">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback className="bg-zordie-100 text-zordie-700">Z</AvatarFallback>
                    </Avatar>
                    <div className="p-3 rounded-lg bg-gray-100 flex items-center">
                      <Loader2 className="h-4 w-4 animate-spin text-zordie-600" />
                      <span className="ml-2 text-sm">Typing...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="w-full flex space-x-2">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
                className="flex-1"
              />
              <Button 
                type="submit" 
                disabled={isLoading || !inputValue.trim()}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                <span className="ml-2">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Chatbot;
