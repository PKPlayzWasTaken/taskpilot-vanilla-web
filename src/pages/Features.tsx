import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Smartphone,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export const Features = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const features = [
    {
      icon: Calendar,
      title: "Smart Task Scheduling",
      description: "AI-powered scheduling that automatically prioritizes tasks based on deadlines, dependencies, and team capacity.",
      details: "Our intelligent scheduling system analyzes your team's workload, project deadlines, and task dependencies to automatically suggest the optimal schedule. It learns from your team's work patterns and continuously improves recommendations to maximize productivity and prevent burnout."
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Seamless team collaboration with instant updates, comments, and file sharing across all devices.",
      details: "Experience true real-time collaboration with instant notifications, live commenting, and synchronized file sharing. Team members can work together simultaneously on tasks, share feedback instantly, and stay updated with automatic progress tracking and milestone notifications."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to track team performance and project progress.",
      details: "Get deep insights into your team's productivity with customizable dashboards, burndown charts, velocity tracking, and performance metrics. Generate detailed reports for stakeholders and identify bottlenecks before they impact your project timeline."
    },
    {
      icon: Zap,
      title: "Automation Workflows",
      description: "Automate repetitive tasks and streamline your workflow with custom automation rules.",
      details: "Create powerful automation rules that trigger actions based on specific conditions. Automatically assign tasks, send notifications, update statuses, and move items through your workflow. Save hours of manual work and reduce human error with intelligent automation."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO, and compliance certifications.",
      details: "Your data is protected with military-grade encryption, both in transit and at rest. Features include single sign-on (SSO), two-factor authentication, role-based access controls, audit logs, and compliance with GDPR, HIPAA, and SOC 2 Type II standards."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native mobile apps for iOS and Android with full offline functionality.",
      details: "Stay productive on the go with our native mobile applications. Full offline functionality ensures you can work anywhere, with automatic sync when connectivity returns. Push notifications keep you updated on important changes and deadlines."
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful Features for Modern Teams
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover how TaskPilot's comprehensive feature set can transform the way 
            your team works together and delivers exceptional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isExpanded = expandedFeature === index;
            
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{feature.description}</p>
                  
                  {/* Interactive expand/collapse section */}
                  {index === 0 && (
                    <div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFeature(index)}
                        className="w-full justify-between p-0 h-auto text-primary hover:text-primary/80"
                      >
                        <span>Learn more</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                      
                      {isExpanded && (
                        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.details}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of teams who have already streamlined their processes with TaskPilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};