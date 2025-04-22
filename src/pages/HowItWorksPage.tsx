
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  Users,
  FileCheck,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Clock,
  CreditCard,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Submit your idea",
    description:
      "Share the details of your project through our intuitive submission form. Specify required skills, budget range, timeline, and preferred experience level for specialists.",
    icon: Lightbulb,
    benefits: [
      "User-friendly form with step-by-step guidance",
      "Save drafts for incomplete submissions",
      "Preview project before finalizing",
      "Receive instant confirmation of submission",
    ],
    imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Get matched with specialists",
    description:
      "Our intelligent matching algorithm analyzes your project needs and finds the most suitable specialists based on skills, experience, availability, and past performance.",
    icon: Users,
    benefits: [
      "Smart matching algorithm finds ideal candidates",
      "Specialists pre-vetted for quality and reliability",
      "Multiple matches to give you options",
      "Matches updated in real-time as new specialists join",
    ],
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Review and select specialists",
    description:
      "Browse through your matched specialists, view their detailed profiles, portfolios, and ratings. Pay a one-time fee to unlock full access to specialist profiles and contact information.",
    icon: FileCheck,
    benefits: [
      "Comprehensive specialist profiles with verified skills",
      "Access to ratings and reviews from previous clients",
      "View portfolio samples relevant to your project",
      "Secure payment system for profile access",
    ],
    imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Collaborate and succeed",
    description:
      "Connect with your chosen specialist through our secure messaging system. Work together to refine the project details, exchange files, and track progress until your idea becomes reality.",
    icon: MessageSquare,
    benefits: [
      "Real-time messaging with file attachment support",
      "Secure and private communication channel",
      "Project milestone tracking and updates",
      "Post-project rating and feedback system",
    ],
    imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
];

const guarantees = [
  {
    title: "Vetted Specialists",
    description:
      "Every specialist on our platform undergoes a thorough vetting process to ensure the highest quality of expertise and professionalism.",
    icon: ShieldCheck,
  },
  {
    title: "Speedy Matching",
    description:
      "Our algorithm typically provides high-quality matches within 24-48 hours of project submission, saving you weeks of searching.",
    icon: Clock,
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear, upfront pricing with no hidden fees. Pay a one-time fee to access specialist profiles for your specific project.",
    icon: CreditCard,
  },
  {
    title: "Satisfaction Guarantee",
    description:
      "If you're not satisfied with the quality of specialists we match you with, we'll refund your access fee or find new matches.",
    icon: CheckCircle,
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="gradient-heading">How</span> Mindlab Works
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
              Our streamlined process connects idea creators with vetted specialists
              in just four simple steps, making collaboration seamless and efficient.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                        {step.id}
                      </div>
                      <h2 className="text-3xl font-bold mb-4 pt-8">
                        {step.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-multiply"></div>
                      <img
                        src={step.imageSrc}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        style={{ height: "400px" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Guarantees */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Our Guarantees</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to making your experience with Mindlab exceptional.
                Here's what you can count on:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 bg-card rounded-xl border border-border shadow-sm card-hover"
                >
                  <guarantee.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{guarantee.title}</h3>
                  <p className="text-muted-foreground flex-grow">
                    {guarantee.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold">Ready to get started?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of idea creators and specialists already
              collaborating on Mindlab to bring innovative ideas to life.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="group">
                  Create Your Account
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/specialists">
                <Button size="lg" variant="outline">
                  Browse Specialists
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
