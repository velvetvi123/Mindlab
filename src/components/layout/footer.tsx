
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-idea-600 to-forge-600 bg-clip-text text-transparent">
                IdeaForge
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Connect idea creators with vetted specialists to bring innovative 
              projects to life. Our platform makes it easy to find the perfect match 
              for your vision.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              For Idea Creators
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/submit-project" className="text-muted-foreground hover:text-primary transition-colors">
                  Submit a Project
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-muted-foreground hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              For Specialists
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/become-specialist" className="text-muted-foreground hover:text-primary transition-colors">
                  Become a Specialist
                </Link>
              </li>
              <li>
                <Link to="/available-projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Projects
                </Link>
              </li>
              <li>
                <Link to="/specialist-guidelines" className="text-muted-foreground hover:text-primary transition-colors">
                  Specialist Guidelines
                </Link>
              </li>
              <li>
                <Link to="/specialist-resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} IdeaForge. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
