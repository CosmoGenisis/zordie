
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, User, SendHorizontal, X, Minimize2, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Sample responses for the Prime HR Assistant
const primeResponses = [
  "I've analyzed the candidate's resume and found they have 85% match with the job requirements. Their technical skills are particularly strong in JavaScript and React.",
  "Based on the assessment results, I recommend proceeding with an interview for this candidate. They scored in the 90th percentile on the coding challenge.",
  "I can help you create a custom assessment for your Frontend Developer role. Would you like to focus on technical skills, soft skills, or both?",
  "Here's a summary of the 5 candidates you've shortlisted: 3 have strong technical backgrounds, 1 has excellent communication skills, and 1 has relevant industry experience.",
  "I've scheduled the assessment to be sent to john.doe@example.com. They will receive it within the next 5 minutes.",
  "The assessment for the Marketing position has been created. It includes sections on campaign strategy, analytics, and communication skills.",
  "Would you like me to generate a detailed report comparing all candidates who completed the assessment for the Product Manager role?",
  "I noticed this candidate has a gap in their employment history. Would you like me to prepare some questions about this for the upcoming interview?",
  "Based on the job description, I recommend including questions about team leadership experience in the assessment.",
  "I've analyzed the responses from the last assessment batch and noticed that 60% of candidates struggled with the problem-solving section. Would you like me to suggest some adjustments?",
  "The candidate has completed their assessment. Their overall score is 87/100, placing them in the top 15% of applicants.",
  "I've automatically added this candidate to your 'High Potential' talent pool based on their assessment results and resume match score."
];

// Get a contextualized response based on the user input
const getContextualizedResponse = (input: string): string => {
  input = input.toLowerCase();
  
  if (input.includes('create assessment') || input.includes('new assessment') || input.includes('generate assessment')) {
    return "I'll help you create a new assessment. What type of role is this assessment for? I can tailor questions based on specific job requirements and skills needed.";
  }
  
  if (input.includes('send assessment') || input.includes('send to candidate') || input.includes('email assessment')) {
    return "I'll prepare this assessment to be sent out. Could you provide the candidate's email address? Once sent, I'll notify you when they complete it.";
  }
  
  if (input.includes('report') || input.includes('analytics') || input.includes('results')) {
    return "I've generated a detailed report for you. The candidates who completed this assessment scored an average of 72/100. Would you like me to highlight the top 3 performers?";
  }
  
  if (input.includes('screen') || input.includes('resume') || input.includes('cv')) {
    return "I've analyzed this candidate's resume against the job requirements. They have an 80% match score, with particularly strong experience in project management and team leadership.";
  }
  
  if (input.includes('customize') || input.includes('modify') || input.includes('change')) {
    return "I can help customize this for you. Would you like to adjust the difficulty level, add specific skill assessments, or change the time limit?";
  }
  
  // Default responses for other queries
  return primeResponses[Math.floor(Math.random() * primeResponses.length)];
};

interface PrimeHRChatbotProps {
  initiallyOpen?: boolean;
}

const PrimeHRChatbot = ({ initiallyOpen = false }: PrimeHRChatbotProps) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Initial greeting message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: ChatMessage = {
        id: Date.now().toString(),
        content: "Hello! I'm Prime, your AI HR assistant. How can I help you today? I can help with candidate assessments, resume screening, or creating job descriptions.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([initialMessage]);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;
    
    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      content: currentMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setCurrentMessage('');
    setIsTyping(true);
    
    // Simulate AI response with typing delay
    setTimeout(() => {
      const response = getContextualizedResponse(currentMessage);
      const newBotMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds for realism
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChatbot = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      if (isMinimized) {
        setIsMinimized(false);
      } else {
        setIsMinimized(true);
      }
    }
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full p-0 shadow-lg bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1"
      >
        <Bot className="h-6 w-6 text-white" />
      </Button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out ${isMinimized ? 'w-72' : 'w-96'}`}>
      <Card className="shadow-xl border-zordie-200 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-zordie-600 to-accent1 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2 bg-white">
                <AvatarFallback>AI</AvatarFallback>
                <AvatarImage src="/placeholder.svg" />
              </Avatar>
              <CardTitle className="text-white text-lg">Prime HR Assistant</CardTitle>
            </div>
            <div className="flex space-x-1">
              <Button variant="ghost" size="icon" className="text-white hover:bg-zordie-700" onClick={toggleChatbot}>
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-zordie-700" onClick={closeChatbot}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        {!isMinimized && (
          <>
            <CardContent className="p-0">
              <ScrollArea className="h-96 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-zordie-100 text-zordie-900'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <div className="flex items-start">
                          {message.sender === 'bot' && (
                            <Avatar className="h-7 w-7 mr-2 mt-0.5">
                              <AvatarFallback className="bg-zordie-600 text-white text-xs">AI</AvatarFallback>
                              <AvatarImage src="/placeholder.svg" />
                            </Avatar>
                          )}
                          <div>
                            {message.content}
                            <div className="text-xs text-gray-500 mt-1">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                          {message.sender === 'user' && (
                            <Avatar className="h-7 w-7 ml-2 mt-0.5">
                              <AvatarFallback className="bg-gray-400 text-white text-xs">ME</AvatarFallback>
                              <AvatarImage src="/placeholder.svg" />
                            </Avatar>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-gray-900">
                        <div className="flex items-center space-x-1">
                          <Avatar className="h-7 w-7 mr-2">
                            <AvatarFallback className="bg-zordie-600 text-white text-xs">AI</AvatarFallback>
                          </Avatar>
                          <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
                          <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                          <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
            </CardContent>
            
            <div className="p-3 border-t">
              <div className="flex items-end space-x-2">
                <Textarea
                  placeholder="Ask Prime about candidate assessments, resume screening, or anything HR related..."
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="resize-none min-h-[60px]"
                  rows={2}
                />
                <Button
                  className="bg-zordie-600 hover:bg-zordie-700"
                  size="icon"
                  onClick={handleSendMessage}
                  disabled={!currentMessage.trim() || isTyping}
                >
                  <SendHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                Prime AI is here to help with all your HR and recruitment needs
              </div>
            </div>
          </>
        )}
        
        {isMinimized && (
          <CardContent className="p-3">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 text-zordie-600 mr-2" />
              <span className="text-sm">Prime HR Assistant is ready to help</span>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default PrimeHRChatbot;
