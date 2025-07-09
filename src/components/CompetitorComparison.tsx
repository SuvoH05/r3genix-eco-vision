
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Star } from "lucide-react";

const CompetitorComparison = () => {
  const competitors = [
    {
      name: "Scrapshala",
      focus: "Scrap trading platform",
      strengths: ["Established network", "B2B focus"],
      limitations: ["Limited AI integration", "No consumer platform"]
    },
    {
      name: "Ecohoy",
      focus: "Eco-friendly marketplace",
      strengths: ["Product variety", "Consumer awareness"],
      limitations: ["No recycling tech", "Limited scalability"]
    },
    {
      name: "Brown Living",
      focus: "Sustainable products",
      strengths: ["Brand recognition", "Quality products"],
      limitations: ["No waste processing", "High price point"]
    }
  ];

  const r3genixFeatures = [
    "AI-powered waste classification",
    "Integrated e-commerce platform",
    "Community-driven approach",
    "Trading & upcycling support",
    "Real-time waste tracking",
    "Educational sustainability tools"
  ];

  return (
    <section id="competition" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-800 mb-6">Competition & Our Edge</h2>
          <div className="w-24 h-1 bg-earth-500 mx-auto mb-8"></div>
        </div>

        {/* Competitor Analysis */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-forest-700 mb-8 text-center">Current Market Players</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {competitors.map((competitor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-forest-700">{competitor.name}</CardTitle>
                  <CardDescription>{competitor.focus}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Strengths
                    </h4>
                    <ul className="space-y-1">
                      {competitor.strengths.map((strength, i) => (
                        <li key={i} className="text-sm text-forest-600 flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Limitations
                    </h4>
                    <ul className="space-y-1">
                      {competitor.limitations.map((limitation, i) => (
                        <li key={i} className="text-sm text-forest-600 flex items-center gap-2">
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* R3GENIX Unique Selling Proposition */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-earth border-earth-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-forest-700 flex items-center justify-center gap-2">
                <Star className="w-8 h-8 text-earth-500" />
                R3GENIX Competitive Edge
              </CardTitle>
              <CardDescription className="text-forest-600">
                Our comprehensive approach combines technology, community, and commerce
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-forest-700 mb-4">Core Differentiators</h4>
                  <div className="space-y-3">
                    {r3genixFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-earth-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-forest-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-forest-700 mb-4">Market Position</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg">
                      <div className="font-medium text-forest-700 mb-1">Technology Leadership</div>
                      <div className="text-sm text-forest-600">
                        First to integrate AI with circular economy principles
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                      <div className="font-medium text-forest-700 mb-1">Holistic Approach</div>
                      <div className="text-sm text-forest-600">
                        End-to-end solution from collection to commerce
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg">
                      <div className="font-medium text-forest-700 mb-1">Community Focus</div>
                      <div className="text-sm text-forest-600">
                        Building sustainable habits through engagement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Badge className="bg-earth-500 text-white px-6 py-2 text-lg">
                  The Complete Circular Economy Solution
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompetitorComparison;
