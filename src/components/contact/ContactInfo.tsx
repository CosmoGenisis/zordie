
import React from 'react';
import { Mail, Phone, MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export interface ContactInfoItem {
  icon: React.FC<{ className?: string }>;
  title: string;
  details: string;
}

export const contactInfoData: ContactInfoItem[] = [
  {
    icon: Mail,
    title: "Email Us",
    details: "support@zordie.in"
  },
  {
    icon: Mail,
    title: "Customer Support",
    details: "customersupport@zordie.com"
  },
  {
    icon: MapPin,
    title: "Office",
    details: "Kanpur, India"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Monday-Friday: 9AM-6PM"
  }
];

interface ContactInfoProps {
  className?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {contactInfoData.map((item, index) => (
          <Card key={index} className="bg-gray-50 dark:bg-zordie-800 border-0 hover-card-effect">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-zordie-100 dark:bg-zordie-700">
                  <item.icon className="w-5 h-5 text-zordie-600 dark:text-zordie-200" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const ContactDetails: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-zordie-900 rounded-lg shadow-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
      <ul className="space-y-2">
        <li>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Mail className="mr-2 h-5 w-5" />
            <span>support@zordie.in</span>
          </div>
        </li>
        <li>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Mail className="mr-2 h-5 w-5" />
            <span>customersupport@zordie.com</span>
          </div>
        </li>
        <li>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Phone className="mr-2 h-5 w-5" />
            <span>+91 63840 40088</span>
          </div>
        </li>
        <li>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="mr-2 h-5 w-5" />
            <span>273 Naveen nagar, Kakadeo, Kanpur, India 208025</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
