
import { useState } from "react";
import { Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl text-forest-700">
          <MessageSquare className="w-8 h-8 text-earth-500" />
          Ask Us a Question
        </CardTitle>
        <CardDescription className="text-forest-600">
          Have questions about R3GENIX? We'd love to hear from you and discuss how we can work together.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-forest-700 mb-2">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="border-sage-300 focus:border-earth-500 focus:ring-earth-500"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-forest-700 mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-sage-300 focus:border-earth-500 focus:ring-earth-500"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-forest-700 mb-2">
              Your Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="border-sage-300 focus:border-earth-500 focus:ring-earth-500"
              placeholder="Tell us about your interest in R3GENIX, questions about our technology, partnership opportunities, or anything else you'd like to discuss..."
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-earth-500 hover:bg-earth-600 text-white py-3 text-lg group"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
        
        <div className="mt-8 grid md:grid-cols-3 gap-4 pt-6 border-t border-sage-200">
          <div className="text-center">
            <div className="text-2xl mb-2">📧</div>
            <div className="text-sm font-medium text-forest-700">Email</div>
            <div className="text-sm text-forest-600">r3genixpvt@gmail.com</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🌍</div>
            <div className="text-sm font-medium text-forest-700">Global</div>
            <div className="text-sm text-forest-600">Worldwide Impact</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm font-medium text-forest-700">Response</div>
            <div className="text-sm text-forest-600">Within 24 hours</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
