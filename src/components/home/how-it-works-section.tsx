
import { CheckCircle2, Lightbulb, Users, FileCheck, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    name: "Submit your idea",
    description:
      "Share the details of your project, including required skills, budget, and timeline.",
    icon: Lightbulb,
    color: "from-idea-500 to-idea-600",
  },
  {
    id: 2,
    name: "Get matched with specialists",
    description:
      "Our algorithm will match your project with relevant specialists based on skills and experience.",
    icon: Users,
    color: "from-forge-500 to-forge-600",
  },
  {
    id: 3,
    name: "Review and select",
    description:
      "Browse specialist profiles, check their ratings and portfolio, and select the perfect match.",
    icon: FileCheck,
    color: "from-primary to-secondary",
  },
  {
    id: 4,
    name: "Collaborate and succeed",
    description:
      "Work together with your chosen specialist through our secure platform to bring your idea to life.",
    icon: MessageSquare,
    color: "from-accent to-accent/70",
  },
];

export function HowItWorksSection() {
  return (
    <div className="bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How Mindlab Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Our simple 4-step process connects you with the perfect specialists
            to turn your ideas into reality.
          </p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col bg-card border border-border rounded-xl p-6 shadow-sm transition-all hover:shadow card-hover"
              >
                <div className={`absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${step.color} shadow-md`}>
                  <span className="text-white font-medium text-sm">{step.id}</span>
                </div>
                <div className="mt-2 mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{step.name}</h3>
                <p className="mt-2 flex-grow text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started <CheckCircle2 className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
