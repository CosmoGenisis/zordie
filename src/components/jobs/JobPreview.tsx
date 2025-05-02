
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export interface JobPreviewProps {
  job: {
    title: string;
    company: string;
    description: string;
    location: string;
    salary: string;
    requirements: string;
    benefits: string;
    skills: string;
    department?: string;
    jobType?: string;
    experience?: string;
    startDate?: string;
    applicationProcess?: string;
  };
}

const formatJobType = (jobType: string) => {
  if (!jobType) return "";
  return jobType.charAt(0).toUpperCase() + jobType.slice(1).replace("-", " ");
};

const formatExperience = (experience: string) => {
  switch (experience) {
    case "entry":
      return "Entry Level (0-2 years)";
    case "mid":
      return "Mid Level (2-5 years)";
    case "senior":
      return "Senior (5-8 years)";
    case "lead":
      return "Lead/Manager (8+ years)";
    case "executive":
      return "Executive Level";
    default:
      return experience;
  }
};

export const JobPreview: React.FC<JobPreviewProps> = ({ job }) => {
  // Generate hashtags from job title, department and skills
  const generateHashtags = () => {
    const tags = [];
    
    if (job.title) {
      const titleWords = job.title.split(' ');
      if (titleWords.length > 0) {
        tags.push(`#${titleWords.join('')}`);
        tags.push(`#Hiring${titleWords.join('')}`);
      }
    }
    
    if (job.department) {
      tags.push(`#${job.department.replace(/\s+/g, '')}`);
    }
    
    if (job.skills) {
      const skillTags = job.skills.split(',').slice(0, 3).map(skill => 
        `#${skill.trim().replace(/\s+/g, '')}`
      );
      tags.push(...skillTags);
    }
    
    // Add some generic tags
    tags.push('#NowHiring');
    
    if (job.location && job.location.toLowerCase().includes('remote')) {
      tags.push('#RemoteWork');
    }
    
    return tags.slice(0, 8); // Limit to 8 hashtags
  };

  const hashtags = generateHashtags();

  return (
    <div className="space-y-6 max-w-3xl mx-auto bg-white rounded-lg overflow-hidden">
      <div>
        <h2 className="text-2xl font-bold">
          We're Hiring: {job.title} {job.salary ? `(${job.salary})` : ''}
        </h2>
        <p className="mt-2 text-gray-700 whitespace-pre-line">{job.description}</p>
      </div>

      <div className="space-y-4">
        {job.location && (
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <span className="font-medium">Location:</span> {job.location}
            </div>
          </div>
        )}

        {job.salary && (
          <div className="flex items-start gap-2">
            <Briefcase className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <span className="font-medium">Salary:</span> {job.salary}
            </div>
          </div>
        )}

        {job.startDate && (
          <div className="flex items-start gap-2">
            <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <span className="font-medium">Start Date:</span> {job.startDate}
            </div>
          </div>
        )}
        
        {job.jobType && (
          <div className="flex items-start gap-2">
            <div className="h-5 w-5 flex justify-center items-center" />
            <div>
              <span className="font-medium">Job Type:</span> {formatJobType(job.jobType)}
            </div>
          </div>
        )}

        {job.experience && (
          <div className="flex items-start gap-2">
            <div className="h-5 w-5 flex justify-center items-center" />
            <div>
              <span className="font-medium">Experience:</span> {formatExperience(job.experience)}
            </div>
          </div>
        )}
      </div>

      {job.requirements && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Requirements</h3>
          <div className="whitespace-pre-line text-gray-700">{job.requirements}</div>
        </div>
      )}

      {job.benefits && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Perks & Benefits</h3>
          <div className="whitespace-pre-line text-gray-700">{job.benefits}</div>
        </div>
      )}

      {job.applicationProcess && (
        <div>
          <h3 className="text-lg font-semibold mb-2">To apply</h3>
          <p className="text-gray-700">{job.applicationProcess}</p>
        </div>
      )}

      {hashtags.length > 0 && (
        <div className="pt-4">
          <Separator className="mb-4" />
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-blue-600 bg-blue-50">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
