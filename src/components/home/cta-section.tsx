
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <div className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to bring your ideas to life?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of idea creators and specialists who are already transforming
              innovative concepts into successful realities through Mindlab.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/specialists">
                <Button size="lg" variant="outline">
                  Browse Specialists
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required to sign up. Get full access to our platform
              and only pay when you're ready to connect with specialists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
