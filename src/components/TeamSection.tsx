
import { Users, Brain, MessageSquare, Code, Megaphone, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Tanmoy Das",
      role: "Team Lead",
      icon: Target,
      strengths: ["Leadership"],
      weaknesses: ["Restless",],
      description: "Leads the R3GENIX vision with strategic foresight and hands-on guidance, driving collaboration and progress across all departments."
    },
    {
      name: "Sambaran Das",
      role: "Technical Lead",
      icon: Brain,
      strengths: ["Bug Fixing"],
      weaknesses: ["Public Speaking"],
      description: "Architect of R3GENIX’s AI backbone, specializing in precision debugging and algorithm development for waste classification systems."
    },
    {
      name: "Sayan Ghosh",
      role: "Operating Lead",
      icon: Code,
      strengths: ["Management"],
      weaknesses: ["Procastination"],
      description: "Coordinates daily operations and technical workflows, ensuring smooth implementation of project pipelines and timely deliverables."
    },
    {
      name: "Suvojoti Howlader",
      role: "Project Manager",
      icon: Megaphone,
      strengths: ["Coding"],
      weaknesses: ["Procastination"],
      description: "Bridges technical development with real-world impact, combining coding expertise with social outreach for sustainability adoption."
    },
    {
      name: "Aunkita Biswas",
      role: "UX/UI Designer",
      icon: MessageSquare,
      strengths: ["Creative Mind"],
      weaknesses: ["Stubborness"],
      description: "Designs compelling and intuitive user interfaces, bringing creativity and clarity to the R3GENIX user experience."
    },
    {
      name: "Somita Roy",
      role: "Public Relation",
      icon: Users,
      strengths: ["Public Relation"],
      weaknesses: ["Imapatience"],
      description: "Drives brand visibility and cultivates external partnerships, ensuring operational alignment and strategic collaboration."
    },
    {
      name: "Ankita Mitra",
      role: "Business Operations",
      icon: Users,
      strengths: ["Editing"],
      weaknesses: ["Short Temper"],
      description: "Oversees internal communications and content refinement, contributing to quality control and brand consistency in operations."
    
    },
    {
      name: "Sihab Alfaz",
      role: "Business Operations",
      icon: Users,
      strengths: ["Finance"],
      weaknesses: ["Absence Mind"],
      description: "Focuses on financial structuring and budgeting to support R3GENIX’s sustainable and scalable business model."
    
    },
    {
      name: "Swastika Datta",
      role: "Business Operations",
      icon: Users,
      strengths: ["Marketing"],
      weaknesses: ["Infelxibility"],
      description: "Crafts and executes marketing strategies to position R3GENIX as a leader in the green innovation space."
    }
    ,
    {
      name: "Mohhamed Kaif Ejaz",
      role: "Business Operations",
      icon: Users,
      strengths: ["Debbuging"],
      weaknesses: ["Unstructured"],
      description: "Supports backend operations with a sharp eye for bugs and system inconsistencies, ensuring platform reliability."
    }

  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-800 mb-6">Meet Our Team</h2>
          <div className="w-24 h-1 bg-earth-500 mx-auto mb-8"></div>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto">
            A diverse group of passionate individuals united by our mission to transform waste into valuable resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-300 hover:scale-105 group ${
                  index % 2 === 0 ? 'animate-slide-up' : 'animate-fade-in'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-earth-400 to-forest-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-forest-800">{member.name}</CardTitle>
                  <CardDescription className="text-earth-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-forest-600 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-forest-700 mb-2 text-sm">Strengths</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.strengths.map((strength, i) => (
                        <Badge key={i} variant="secondary" className="bg-earth-100 text-earth-700 text-xs">
                          {strength}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-forest-700 mb-2 text-sm">Growth Areas</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.weaknesses.map((weakness, i) => (
                        <Badge key={i} variant="outline" className="border-sage-300 text-sage-600 text-xs">
                          {weakness}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-earth rounded-lg">
            <div className="text-3xl font-bold text-earth-600 mb-2">10</div>
            <div className="text-sm text-forest-600">Team Members</div>
          </div>
          <div className="text-center p-6 bg-gradient-earth rounded-lg">
            <div className="text-3xl font-bold text-earth-600 mb-2">4</div>
            <div className="text-sm text-forest-600">Core Disciplines</div>
          </div>
          <div className="text-center p-6 bg-gradient-earth rounded-lg">
            <div className="text-3xl font-bold text-earth-600 mb-2">2+</div>
            <div className="text-sm text-forest-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-earth rounded-lg">
            <div className="text-3xl font-bold text-earth-600 mb-2">1</div>
            <div className="text-sm text-forest-600">Shared Mission</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
