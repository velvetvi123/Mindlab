
import { ArrowRight, LightbulbIcon, BriefcaseBusiness, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block">Where</span>{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-idea-600 to-forge-600">
                  Ideas Meet Expertise
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-lg">
                Connect with top specialists to transform your innovative ideas into reality. 
                Mindlab brings together visionaries and experts for seamless collaboration.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline">
                    How It Works
                  </Button>
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <LightbulbIcon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="ml-3 text-sm font-medium">1000+ Ideas Launched</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <BriefcaseBusiness className="h-5 w-5 text-primary" />
                  </div>
                  <p className="ml-3 text-sm font-medium">500+ Projects Completed</p>
                </div>
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Users2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="ml-3 text-sm font-medium">5000+ Vetted Specialists</p>
                </div>
              </div>
            </div>
            <div className="relative lg:block">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-idea-500 to-forge-500 opacity-30 blur-3xl"></div>
              <div className="relative h-[450px] sm:h-[550px] overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl">
                <div className="h-full w-full bg-grid-pattern opacity-5 absolute inset-0"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <div className="h-6 w-24 rounded bg-primary/20 animate-pulse"></div>
                    <div className="h-10 w-48 rounded bg-primary/30"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-full rounded bg-muted"></div>
                      <div className="h-4 w-5/6 rounded bg-muted"></div>
                      <div className="h-4 w-4/6 rounded bg-muted"></div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-secondary/30"></div>
                      <div className="space-y-1">
                        <div className="h-3 w-24 rounded bg-muted"></div>
                        <div className="h-3 w-16 rounded bg-muted"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-accent/30"></div>
                      <div className="space-y-1">
                        <div className="h-3 w-28 rounded bg-muted"></div>
                        <div className="h-3 w-20 rounded bg-muted"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-idea-300/30"></div>
                      <div className="space-y-1">
                        <div className="h-3 w-32 rounded bg-muted"></div>
                        <div className="h-3 w-24 rounded bg-muted"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <div className="h-12 w-full rounded-lg bg-primary/20"></div>
                    <div className="h-12 w-full rounded-lg border-2 border-primary/30 bg-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
