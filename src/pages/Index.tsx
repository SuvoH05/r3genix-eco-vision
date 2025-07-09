
import { useState, useEffect } from "react";
import { ArrowRight, Leaf, Recycle, Users, Target, TrendingUp, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import RevenueChart from "@/components/RevenueChart";
import ContactForm from "@/components/ContactForm";
import CompetitorComparison from "@/components/CompetitorComparison";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white"> 
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-forest-800 mb-6">About R3GENIX</h2>
            <div className="w-24 h-1 bg-earth-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold text-forest-700 mb-4">
                R3GENIX = Regeneration + Innovation
              </h3>
              <p className="text-lg text-forest-600 mb-6">
                We're building the future of waste management through AI-powered recycling solutions. 
                Our mission is to transform the global recycling landscape and create a truly circular economy.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-earth-600">20%</div>
                  <div className="text-sm text-forest-600">Global Recycling Rate</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-earth-600">$1.28T</div>
                  <div className="text-sm text-forest-600">Waste Market Value</div>
                </div>
              </div>
            </div>
            
            <div className={`${isVisible ? 'animate-scale-in delay-400' : 'opacity-0'}`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-forest rounded-full flex items-center justify-center">
                  <Recycle className="w-32 h-32 text-white animate-float" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-earth-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sage-500 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Our Journey Section */}
      <section id="journey" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-800 mb-6">Our Journey</h2>
            <div className="w-24 h-1 bg-earth-500 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-forest-700">
                    <Target className="w-5 h-5" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-forest-600">
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-earth-100">✓</Badge>
                      Identified waste market opportunity
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-earth-100">✓</Badge>
                      Comprehensive competitor analysis completed
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-earth-100">✓</Badge>
                      AI recycling prototype developed
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-earth-100">✓</Badge>
                      Enhanced technical and teamwork skills
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-forest-700">
                    <TrendingUp className="w-5 h-5" />
                    Challenges Overcome
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-forest-600">
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-sage-100">!</Badge>
                      Data variability in waste classification
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-sage-100">!</Badge>
                      High technology implementation costs
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-sage-100">!</Badge>
                      Market penetration strategies
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-sage-100">!</Badge>
                      Scaling infrastructure requirements
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 gradient-sage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-800 mb-6">Our Roadmap</h2>
            <div className="w-24 h-1 bg-earth-500 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { period: "Month 1", title: "Foundation", items: ["Online store launch", "Brand development", "Core team assembly"] },
                { period: "Month 2", title: "Growth", items: ["Team expansion", "First customers", "Product refinement"] },
                { period: "Month 3", title: "Scale", items: ["Operations scaling", "Marketing campaigns", "Partnerships"] },
                { period: "Month 4", title: "Expansion", items: ["B2B partnerships", "Loyalty programs", "Global reach"] }
              ].map((phase, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader className="pb-3">
                    <Badge className="w-fit bg-earth-500 text-white">{phase.period}</Badge>
                    <CardTitle className="text-forest-700">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-sm text-forest-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-earth-400 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-800 mb-6">The Problem We're Solving</h2>
            <div className="w-24 h-1 bg-earth-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🗑️", title: "Non-biodegradable Waste", desc: "Millions of tons of plastic and electronic waste pollute our environment daily" },
              { icon: "📊", title: "Poor Awareness", desc: "Limited understanding of proper recycling practices across communities" },
              { icon: "💼", title: "Weak Recycled Markets", desc: "Insufficient demand and infrastructure for recycled materials" },
              { icon: "📢", title: "Marketing Gaps", desc: "Eco-friendly products struggle with visibility and consumer adoption" }
            ].map((problem, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="font-semibold text-forest-700 mb-3">{problem.title}</h3>
                  <p className="text-sm text-forest-600">{problem.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-forest-700 flex items-center gap-3">
                    <Target className="w-8 h-8 text-earth-500" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-600 leading-relaxed">
                    To revolutionize recycling through AI-driven solutions that boost efficiency, 
                    reduce waste, and promote a circular economy where every discarded item finds new purpose.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-forest-700 flex items-center gap-3">
                    <Globe className="w-8 h-8 text-earth-500" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-600 leading-relaxed">
                    A world with scalable, technology-based waste infrastructure that transforms 
                    global recycling systems and creates sustainable value from what was once considered trash.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market & Revenue */}
      <section id="market" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-800 mb-6">Market Opportunity</h2>
            <div className="w-24 h-1 bg-earth-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-forest-700 mb-6">Global Recycling Market</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-earth-50 rounded-lg">
                  <span className="font-medium text-forest-700">2022 Market Size</span>
                  <span className="text-2xl font-bold text-earth-600">$58B</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-earth-50 rounded-lg">
                  <span className="font-medium text-forest-700">2032 Projection</span>
                  <span className="text-2xl font-bold text-earth-600">$91B</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-earth-50 rounded-lg">
                  <span className="font-medium text-forest-700">Growth Rate</span>
                  <span className="text-2xl font-bold text-earth-600">5.2%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-sage-50 rounded-lg">
                  <div className="font-semibold text-forest-700">Plastics</div>
                  <div className="text-sm text-forest-600">Major Sector</div>
                </div>
                <div className="text-center p-3 bg-sage-50 rounded-lg">
                  <div className="font-semibold text-forest-700">Electronics</div>
                  <div className="text-sm text-forest-600">Growing Fast</div>
                </div>
                <div className="text-center p-3 bg-sage-50 rounded-lg">
                  <div className="font-semibold text-forest-700">Textiles</div>
                  <div className="text-sm text-forest-600">Emerging</div>
                </div>
              </div>
            </div>
            
            <div>
              <RevenueChart />
            </div>
          </div>
        </div>
      </section>

      {/* Gap Analysis */}
      <section id="gap" className="py-20 gradient-sage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-800 mb-6">Market Gap Analysis</h2>
            <div className="w-24 h-1 bg-earth-500 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl font-bold text-red-500 mb-2">21%</div>
                  <h3 className="font-semibold text-forest-700 mb-2">US Recycling Rate</h3>
                  <p className="text-sm text-forest-600">Far below potential efficiency</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl font-bold text-red-500 mb-2">6.9%</div>
                  <h3 className="font-semibold text-forest-700 mb-2">Global Circularity</h3>
                  <p className="text-sm text-forest-600">Massive room for improvement</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl font-bold text-red-500 mb-2">High</div>
                  <h3 className="font-semibold text-forest-700 mb-2">Implementation Cost</h3>
                  <p className="text-sm text-forest-600">Especially in textile recycling</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold text-forest-700 mb-4">How R3GENIX Fills the Gap</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-forest-700 mb-2">Current Problems</h4>
                  <ul className="text-sm text-forest-600 space-y-1">
                    <li>• Low sorting accuracy</li>
                    <li>• High operational costs</li>
                    <li>• Limited scalability</li>
                    <li>• Poor waste tracking</li>
                  </ul>
                </div>
                <div className="p-6 bg-earth-50 rounded-lg">
                  <h4 className="font-semibold text-forest-700 mb-2">R3GENIX Solutions</h4>
                  <ul className="text-sm text-forest-600 space-y-1">
                    <li>• AI-powered classification</li>
                    <li>• Automated processing</li>
                    <li>• Scalable technology</li>
                    <li>• Smart waste tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition & USP */}
      <CompetitorComparison />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-forest-800 mb-6">Connect With Us</h2>
            <div className="w-24 h-1 bg-earth-500 mx-auto mb-8"></div>
            <p className="text-xl text-forest-600 max-w-3xl mx-auto">
              "We are R3GENIX. By combining technology, community, and purpose, we turn trash into treasure."
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 gradient-forest text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">R3GENIX</h3>
              <p className="text-green-100">Turning Trash into Treasure</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-green-100">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-green-100">r3genixpvt@gmail.com</p>
              <p className="text-green-100">Building a sustainable future</p>
            </div>
          </div>
          <div className="border-t border-green-400 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2024 R3GENIX. All rights reserved. Turning Trash into Treasure.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
