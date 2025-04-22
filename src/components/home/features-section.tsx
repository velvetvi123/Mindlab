
import { 
  Sparkles, 
  Users, 
  Shield, 
  MessageSquare, 
  Clock, 
  CreditCard,
  Search,
  Award
} from "lucide-react";

const features = [
  {
    name: "Smart Matching",
    description:
      "Our intelligent algorithm matches your project with the perfect specialists based on skills, experience, and previous success.",
    icon: Sparkles,
  },
  {
    name: "Vetted Specialists",
    description:
      "Every specialist on our platform undergoes a thorough vetting process to ensure the highest quality of expertise.",
    icon: Shield,
  },
  {
    name: "Secure Messaging",
    description:
      "Communicate directly with specialists through our secure messaging system with file sharing capabilities.",
    icon: MessageSquare,
  },
  {
    name: "Time-Saving",
    description:
      "Find the right specialists in days, not weeks. Our platform streamlines the process so you can focus on your vision.",
    icon: Clock,
  },
  {
    name: "Transparent Pricing",
    description:
      "Clear, upfront pricing with no hidden fees. Pay a one-time fee to access specialist profiles for your project.",
    icon: CreditCard,
  },
  {
    name: "Easy Discovery",
    description:
      "Browse and filter specialists by skills, experience level, ratings, and availability to find your perfect match.",
    icon: Search,
  },
  {
    name: "Talented Community",
    description:
      "Access a diverse community of specialists across development, design, marketing, and more fields.",
    icon: Users,
  },
  {
    name: "Quality Guarantee",
    description:
      "We stand behind the quality of our specialists with a satisfaction guarantee on all project collaborations.",
    icon: Award,
  },
];

export function FeaturesSection() {
  return (
    <div className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-heading">Everything you need</span> to bring your ideas to life
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform provides all the tools and connections you need to transform your 
            vision into reality with expert support.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="group relative">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-primary/10 p-6 flex items-center justify-center">
                <feature.icon className="h-10 w-10 text-primary group-hover:text-primary/80 transition-colors" />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium">{feature.name}</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
