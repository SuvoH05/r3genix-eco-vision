
import { Users, Brain, MessageSquare, Code, Megaphone, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Project Lead & Strategy",
      icon: Target,
      strengths: ["Strategic thinking", "Leadership", "Problem-solving"],
      weaknesses: ["Detail-oriented tasks", "Technical implementation"],
      description: "Visionary leader driving R3GENIX's mission with 5+ years in sustainability consulting."
    },
    {
      name: "Maya Patel",
      role: "AI Developer & Tech Lead",
      icon: Brain,
      strengths: ["Machine Learning", "Data Analysis", "Algorithm Design"],
      weaknesses: ["Public speaking", "Marketing"],
      description: "AI specialist developing our core recycling classification algorithms."
    },
    {
      name: "Jordan Rivera",
      role: "Full-Stack Developer",
      icon: Code,
      strengths: ["Web Development", "Database Design", "API Integration"],
      weaknesses: ["UI/UX Design", "Business strategy"],
      description: "Building our platform infrastructure and user-facing applications."
    },
    {
      name: "Sam Kim",
      role: "Outreach Coordinator",
      icon: Megaphone,
      strengths: ["Communication", "Community Building", "Social Media"],
      weaknesses: ["Technical skills", "Data analysis"],
      description: "Connecting with communities and building awareness for sustainable practices."
    },
    {
      name: "Taylor Brooks",
      role: "UX/UI Designer",
      icon: MessageSquare,
      strengths: ["User Research", "Visual Design", "Prototyping"],
      weaknesses: ["Backend development", "Business operations"],
      description: "Creating intuitive and engaging user experiences for our platforms."
    },
    {
      name: "Riley Zhang",
      role: "Business Operations",
      icon: Users,
      strengths: ["Operations", "Finance", "Partnership Development"],
      weaknesses: ["Technical implementation", "Design"],
      description: "Managing operations and developing strategic partnerships for growth."
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
            <div className="text-3xl font-bold text-earth-600 mb-2">6</div>
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
