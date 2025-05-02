
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, PlusCircle, Send } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  timeAllotted: number; // in minutes
  questionCount: number;
}

interface CandidateEmail {
  email: string;
  name: string;
}

const AssessmentGenerator = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [skills, setSkills] = useState<Skill[]>([]);
  const [sections, setSections] = useState<AssessmentSection[]>([]);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'>('Intermediate');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [candidates, setCandidates] = useState<CandidateEmail[]>([]);
  const [newCandidate, setNewCandidate] = useState({ email: '', name: '' });
  const [isSending, setIsSending] = useState(false);
  const [includePersonality, setIncludePersonality] = useState(true);
  const [includeTechnical, setIncludeTechnical] = useState(true);
  const [includeProblemSolving, setIncludeProblemSolving] = useState(true);
  const { toast } = useToast();

  const handleAddSkill = () => {
    if (!newSkillName.trim()) {
      toast({
        title: "Skill name required",
        description: "Please enter a skill name",
        variant: "destructive"
      });
      return;
    }

    const newSkill: Skill = {
      id: Date.now().toString(),
      name: newSkillName,
      level: newSkillLevel
    };

    setSkills([...skills, newSkill]);
    setNewSkillName('');
    setNewSkillLevel('Intermediate');
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const handleAddCandidate = () => {
    if (!newCandidate.email.trim() || !newCandidate.name.trim()) {
      toast({
        title: "Information required",
        description: "Please enter both candidate name and email",
        variant: "destructive"
      });
      return;
    }

    if (!newCandidate.email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setCandidates([...candidates, { ...newCandidate }]);
    setNewCandidate({ email: '', name: '' });
  };

  const handleRemoveCandidate = (email: string) => {
    setCandidates(candidates.filter(candidate => candidate.email !== email));
  };

  const handleGenerateAssessment = () => {
    if (!title || !description || !jobRole || !experienceLevel || skills.length === 0) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields and add at least one skill",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI generating an assessment
    setTimeout(() => {
      // Generate sample assessment sections based on selected skills and options
      const generatedSections: AssessmentSection[] = [];
      
      if (includeTechnical) {
        generatedSections.push({
          id: '1',
          title: 'Technical Knowledge',
          description: `Assessment of ${skills.map(s => s.name).join(', ')} technical knowledge`,
          timeAllotted: 25,
          questionCount: 12
        });
      }
      
      if (includeProblemSolving) {
        generatedSections.push({
          id: '2',
          title: 'Problem Solving',
          description: 'Scenarios to test analytical and critical thinking abilities',
          timeAllotted: 30,
          questionCount: 5
        });
      }
      
      if (includePersonality) {
        generatedSections.push({
          id: '3',
          title: 'Personality & Culture Fit',
          description: 'Assessment of work style, team collaboration, and culture fit',
          timeAllotted: 15,
          questionCount: 20
        });
      }
      
      const skillSpecific = skills.map((skill, index) => ({
        id: (4 + index).toString(),
        title: `${skill.name} Assessment`,
        description: `${skill.level} level assessment of ${skill.name}`,
        timeAllotted: 15,
        questionCount: 8
      }));
      
      setSections([...generatedSections, ...skillSpecific]);
      setIsGenerating(false);
      setIsGenerated(true);
      
      toast({
        title: "Assessment Generated",
        description: "Your custom assessment is ready to review and send",
      });
    }, 3000);
  };

  const handleSendAssessment = () => {
    if (candidates.length === 0) {
      toast({
        title: "No candidates",
        description: "Please add at least one candidate to send the assessment to",
        variant: "destructive"
      });
      return;
    }

    setIsSending(true);

    // Simulate sending assessment
    setTimeout(() => {
      setIsSending(false);
      
      toast({
        title: "Assessment Sent Successfully",
        description: `Assessment has been sent to ${candidates.length} candidate(s)`,
      });
      
      // Reset form for next assessment if needed
      setIsGenerated(false);
      setCandidates([]);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Assessment Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Assessment Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Frontend Developer Technical Assessment"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="description">Assessment Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the purpose of this assessment..."
              className="mt-1"
              rows={3}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="jobRole">Job Role</Label>
              <Input
                id="jobRole"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                placeholder="e.g., Frontend Developer"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="experience">Experience Level</Label>
              <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                <SelectTrigger id="experience" className="mt-1">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                  <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                  <SelectItem value="senior">Senior Level (5-8 years)</SelectItem>
                  <SelectItem value="lead">Lead/Manager (8+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label>Assessment Components</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Switch
                  id="personality" 
                  checked={includePersonality}
                  onCheckedChange={setIncludePersonality}
                />
                <Label htmlFor="personality">Personality Assessment</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="technical" 
                  checked={includeTechnical}
                  onCheckedChange={setIncludeTechnical}
                />
                <Label htmlFor="technical">Technical Knowledge</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="problemSolving" 
                  checked={includeProblemSolving}
                  onCheckedChange={setIncludeProblemSolving}
                />
                <Label htmlFor="problemSolving">Problem Solving</Label>
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="skills">Required Skills</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill) => (
                <div 
                  key={skill.id} 
                  className="bg-zordie-100 text-zordie-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  <span>{skill.name} ({skill.level})</span>
                  <button 
                    className="ml-2 text-zordie-600 hover:text-zordie-800"
                    onClick={() => handleRemoveSkill(skill.id)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="md:col-span-1">
                <Input
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  placeholder="Skill name"
                  className="w-full"
                />
              </div>
              
              <div className="md:col-span-1">
                <Select value={newSkillLevel} onValueChange={(value: any) => setNewSkillLevel(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-1">
                <Button onClick={handleAddSkill} className="w-full" variant="outline">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Skill
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handleGenerateAssessment} 
            disabled={isGenerating || (!title || !description || !jobRole || !experienceLevel || skills.length === 0)}
            className="bg-zordie-600 hover:bg-zordie-700"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
              </>
            ) : isGenerated ? 'Regenerate Assessment' : 'Generate Assessment'}
          </Button>
        </CardFooter>
      </Card>

      {isGenerated && (
        <Card>
          <CardHeader>
            <CardTitle>Assessment Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-600 mt-1">{description}</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Job Details</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-500">Role:</span> {jobRole}
                </div>
                <div>
                  <span className="text-gray-500">Experience:</span> {experienceLevel}
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-2">Assessment Sections</h4>
              <div className="space-y-4">
                {sections.map((section) => (
                  <div key={section.id} className="border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold">{section.title}</h5>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="bg-zordie-100 text-zordie-800 px-2 py-1 rounded">
                          {section.questionCount} questions
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          {section.timeAllotted} minutes
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-1">{section.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-2">Send To Candidates</h4>
              
              <div className="space-y-2 mb-4">
                {candidates.map((candidate) => (
                  <div key={candidate.email} className="flex items-center justify-between border rounded-md p-3">
                    <div>
                      <div className="font-medium">{candidate.name}</div>
                      <div className="text-sm text-gray-600">{candidate.email}</div>
                    </div>
                    <button 
                      className="text-gray-400 hover:text-zordie-600"
                      onClick={() => handleRemoveCandidate(candidate.email)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <Input
                    value={newCandidate.name}
                    onChange={(e) => setNewCandidate({...newCandidate, name: e.target.value})}
                    placeholder="Candidate Name"
                    className="w-full"
                  />
                </div>
                
                <div className="md:col-span-1">
                  <Input
                    value={newCandidate.email}
                    onChange={(e) => setNewCandidate({...newCandidate, email: e.target.value})}
                    placeholder="Email Address"
                    className="w-full"
                  />
                </div>
                
                <div className="md:col-span-1">
                  <Button onClick={handleAddCandidate} className="w-full" variant="outline">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Candidate
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button 
              onClick={handleSendAssessment} 
              disabled={isSending || candidates.length === 0}
              className="bg-zordie-600 hover:bg-zordie-700"
            >
              {isSending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Assessment
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default AssessmentGenerator;
