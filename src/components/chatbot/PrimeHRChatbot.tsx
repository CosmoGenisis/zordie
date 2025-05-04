
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

// Enhanced AI responses for the Prime HR Assistant with more variety
const primeResponses = {
  resume_analysis: [
    "I've analyzed the candidate's resume and found they have 85% match with the job requirements. Their technical skills are particularly strong in JavaScript and React.",
    "This candidate's resume shows a 72% match to the position. They have good experience in backend development but might need additional training for frontend work.",
    "The resume analysis shows this candidate has extensive leadership experience, with 5 years managing teams of 10+ people. Their technical skills match about 79% of requirements.",
    "I found that this candidate has worked at 3 Fortune 500 companies and has highly relevant experience. Overall match rate is 91% for the position requirements.",
    "This candidate's academic background is impressive with a Master's degree in Computer Science, but they have limited practical experience. Skills match is around 68%."
  ],
  
  assessment_results: [
    "Based on the assessment results, I recommend proceeding with an interview for this candidate. They scored in the 90th percentile on the coding challenge.",
    "The candidate performed well in problem-solving assessments (87%) but struggled with the system design portion (64%). Consider focusing on system architecture during the interview.",
    "Assessment results show strong communication skills (92nd percentile) and adequate technical knowledge (76th percentile). They would likely fit well in a team environment.",
    "This candidate's assessment reveals excellent analytical thinking (94%) but some weaknesses in time management (67%). Overall they ranked in the top 15% of applicants.",
    "Assessment completed with mixed results - excellent in database knowledge (95%) but below average in modern frontend frameworks (42%). Consider evaluating if training could address the gaps."
  ],
  
  interview_questions: [
    "Based on their experience, I recommend asking: 'Can you describe a situation where you had to debug a particularly challenging issue? What was your approach?'",
    "Given their background in team leadership, try this question: 'Tell me about a time when your team disagreed on implementation approach. How did you resolve it?'",
    "To assess cultural fit, consider asking: 'Describe a work environment where you felt most productive and engaged. What elements made it successful for you?'",
    "For technical assessment, this question would be valuable: 'How do you approach performance optimization in web applications? Can you give a specific example?'",
    "To evaluate their growth mindset: 'Tell me about a time you received constructive criticism. How did you respond and what did you learn?'"
  ],
  
  job_descriptions: [
    "I've optimized the job description to attract more qualified candidates. Key improvements include more specific technical requirements and highlighting your company culture.",
    "After analysis, I've enhanced the job description with industry-specific keywords that will improve your listing's visibility by approximately 35% on major job boards.",
    "Your job description was missing details about career advancement opportunities. I've added a section highlighting potential growth paths, which typically increases application rates by 24%.",
    "I've rewritten the responsibilities section to be more action-oriented and included specific technologies, which should help candidates better self-assess their fit.",
    "The revised job description now includes more inclusive language and focuses on skills rather than years of experience, which research shows attracts a more diverse candidate pool."
  ],
  
  feedback_generation: [
    "I've generated detailed feedback for the rejected candidates that explains the decision while maintaining a positive impression of your company brand.",
    "The personalized feedback for the interviewed candidates highlights their strengths while gently explaining areas of improvement that prevented selection.",
    "For the candidate who advanced to the final round, I've created feedback that acknowledges how close the decision was and encourages them to apply for future positions.",
    "The feedback templates are designed to provide constructive criticism while reducing the likelihood of negative reviews on employment platforms by 42%.",
    "I've prepared differentiated feedback for candidates at different stages - those rejected after screening receive different messaging than those who completed interviews."
  ]
};

// Get a contextualized response based on the user input
const getContextualizedResponse = (input: string): string => {
  input = input.toLowerCase();
  
  // Resume analysis
  if (input.includes('resume') || input.includes('cv') || input.includes('screen') || input.includes('candidate profile')) {
    return getRandomResponse('resume_analysis');
  }
  
  // Assessment results
  if (input.includes('assessment') || input.includes('test results') || input.includes('evaluation') || input.includes('score')) {
    return getRandomResponse('assessment_results');
  }
  
  // Interview questions
  if (input.includes('interview question') || input.includes('what should i ask') || input.includes('prepare for interview')) {
    return getRandomResponse('interview_questions');
  }
  
  // Job descriptions
  if (input.includes('job description') || input.includes('jd') || input.includes('posting') || input.includes('job listing')) {
    return getRandomResponse('job_descriptions');
  }
  
  // Feedback
  if (input.includes('feedback') || input.includes('reject') || input.includes('decline') || input.includes('candidate response')) {
    return getRandomResponse('feedback_generation');
  }
  
  // More specialized responses
  if (input.includes('create assessment') || input.includes('new assessment') || input.includes('generate assessment')) {
    return "I'll help you create a new assessment. What type of role is this assessment for? I can tailor questions based on specific job requirements and skills needed.";
  }
  
  if (input.includes('send assessment') || input.includes('send to candidate') || input.includes('email assessment')) {
    return "I'll prepare this assessment to be sent out. Could you provide the candidate's email address? Once sent, I'll notify you when they complete it.";
  }
  
  if (input.includes('report') || input.includes('analytics') || input.includes('results')) {
    return "I've generated a detailed report for you. The candidates who completed this assessment scored an average of 72/100. Would you like me to highlight the top 3 performers?";
  }
  
  if (input.includes('customize') || input.includes('modify') || input.includes('change')) {
    return "I can help customize this for you. Would you like to adjust the difficulty level, add specific skill assessments, or change the time limit?";
  }
  
  // Get a random response from any category if no specific topic is detected
  const allCategories = Object.keys(primeResponses) as Array<keyof typeof primeResponses>;
  const randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
  return getRandomResponse(randomCategory);
};

const getRandomResponse = (category: keyof typeof primeResponses): string => {
  const responses = primeResponses[category];
  return responses[Math.floor(Math.random() * responses.length)];
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
    }, 1000 + Math.random() * 1500); // Random delay between 1-2.5 seconds for realism
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
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full p-0 shadow-lg bg-gradient-to-r from-zordie-600 to-accent1 hover:from-zordie-700 hover:to-accent1 z-50"
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
