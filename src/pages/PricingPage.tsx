
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PricingFeature {
  name: string;
  basic: boolean | string;
  premium: boolean | string;
  enterprise: boolean | string;
  tooltip?: string;
}

const features: PricingFeature[] = [
  {
    name: "Project submissions",
    basic: "3 per month",
    premium: "10 per month",
    enterprise: "Unlimited",
  },
  {
    name: "Specialist access",
    basic: "$49 per project",
    premium: "$39 per project",
    enterprise: "$29 per project",
    tooltip: "One-time fee to access specialist profiles for a specific project",
  },
  {
    name: "Project drafts",
    basic: "3",
    premium: "15",
    enterprise: "Unlimited",
  },
  {
    name: "Matched specialists",
    basic: "Up to 5",
    premium: "Up to 15",
    enterprise: "Up to 30",
  },
  {
    name: "Advanced filtering",
    basic: false,
    premium: true,
    enterprise: true,
    tooltip: "Filter specialists by additional criteria like location, language, etc.",
  },
  {
    name: "Saved specialists",
    basic: "10",
    premium: "50",
    enterprise: "Unlimited",
  },
  {
    name: "File storage",
    basic: "100MB",
    premium: "1GB",
    enterprise: "10GB",
  },
  {
    name: "Message history",
    basic: "30 days",
    premium: "90 days",
    enterprise: "1 year",
  },
  {
    name: "Priority matching",
    basic: false,
    premium: true,
    enterprise: true,
    tooltip: "Your projects are prioritized in the matching algorithm",
  },
  {
    name: "Dedicated account manager",
    basic: false,
    premium: false,
    enterprise: true,
  },
  {
    name: "Custom contracts",
    basic: false,
    premium: false,
    enterprise: true,
    tooltip: "Custom legal agreements tailored to your specific needs",
  },
  {
    name: "API access",
    basic: false,
    premium: false,
    enterprise: true,
    tooltip: "Access to our API for integration with your internal systems",
  },
];

const specialists = [
  {
    name: "For Specialists",
    price: "Free",
    description: "For specialists looking to offer their services",
    features: [
      "Free profile creation",
      "Apply to unlimited projects",
      "Profile analytics",
      "Secure payment processing",
      "Messaging with clients",
      "Portfolio showcase",
    ],
    button: "Join as a Specialist",
    link: "/signup",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">
              <span className="gradient-heading">Simple, transparent</span>{" "}
              pricing
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that best fits your needs. Only pay for specialist access
              when you're ready to connect and collaborate.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {/* Basic Plan */}
              <div className="flex flex-col rounded-lg border bg-card shadow-sm">
                <div className="p-6">
                  <h3 className="text-lg font-medium">Basic</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">$0</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Perfect for individuals with occasional project needs.
                  </p>

                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm">
                        Pay only when you connect with specialists
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm">
                        Access to quality-vetted specialists
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm">
                        Secure messaging system
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col justify-end p-6 pt-0">
                  <Link to="/signup">
                    <Button variant="outline" className="w-full">
                      Sign Up Free
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="relative flex flex-col rounded-lg border border-primary bg-card shadow-md">
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="inline-flex rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
                <div className="p-6 pt-10">
                  <h3 className="text-lg font-medium">Premium</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">$29</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Ideal for busy entrepreneurs and small businesses.
                  </p>

                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm">
                        Reduced specialist access fees ($39 per project)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm">
                        More project submissions (10/month)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm">
                        Advanced filtering and priority matching
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col justify-end p-6 pt-0">
                  <Link to="/signup">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-lg border bg-card shadow-sm">
                <div className="p-6">
                  <h3 className="text-lg font-medium">Enterprise</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">$99</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    For companies with ongoing project requirements.
                  </p>

                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm">
                        Lowest specialist access fees ($29 per project)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm">
                        Unlimited project submissions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm">
                        Dedicated account manager
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col justify-end p-6 pt-0">
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-center mb-12">Compare Plans</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-4 pl-4 sm:pl-0">Features</th>
                    <th className="pb-4 text-center">Basic</th>
                    <th className="pb-4 text-center font-bold">Premium</th>
                    <th className="pb-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={index !== features.length - 1 ? "border-b" : ""}
                    >
                      <td className="py-4 pl-4 sm:pl-0 pr-4">
                        <div className="flex items-center">
                          <span>{feature.name}</span>
                          {feature.tooltip && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">{feature.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                      </td>
                      <td className="py-4 text-center">
                        {typeof feature.basic === "boolean" ? (
                          feature.basic ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span>{feature.basic}</span>
                        )}
                      </td>
                      <td className="py-4 text-center font-medium">
                        {typeof feature.premium === "boolean" ? (
                          feature.premium ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span>{feature.premium}</span>
                        )}
                      </td>
                      <td className="py-4 text-center">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )
                        ) : (
                          <span>{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Specialists Pricing */}
        <section className="bg-muted/20 py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-6">Are you a specialist?</h2>
            <p className="text-muted-foreground mb-12">
              Join our community of vetted specialists and connect with clients looking for
              your specific expertise.
            </p>

            <div className="bg-card rounded-lg shadow-md border overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold">For Specialists</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-3xl font-bold">Free</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  No membership fees to join as a specialist
                </p>
              </div>

              <div className="border-t p-6">
                <ul className="space-y-4">
                  {specialists[0].features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t p-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Mindlab takes a 10% service fee only when you get paid for a project
                </p>
                <Link to="/signup">
                  <Button className="w-full">
                    Join as a Specialist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  How does specialist access pricing work?
                </h3>
                <p className="text-muted-foreground">
                  You pay a one-time fee per project to unlock access to matched specialists.
                  This fee gives you the ability to view detailed profiles, contact information,
                  and enables secure messaging with specialists for that specific project.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  Can I change plans at any time?
                </h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade, downgrade, or cancel your plan at any time.
                  Changes to your subscription will take effect at the start of your next billing cycle.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  Do specialists pay to join the platform?
                </h3>
                <p className="text-muted-foreground">
                  No, specialists can join for free. Mindlab takes a 10% service fee only when
                  specialists get paid for completed projects through our platform.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  What happens if I'm not satisfied with the specialists?
                </h3>
                <p className="text-muted-foreground">
                  If you're not satisfied with the quality of the specialists we match you with,
                  contact our support team and we'll either find new matches for your project or
                  provide a refund of your access fee.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  Is there a contract or commitment?
                </h3>
                <p className="text-muted-foreground">
                  No long-term contracts. All plans are month-to-month and can be cancelled anytime.
                  For Enterprise customers, we offer optional custom contracts with additional benefits.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help.
              </p>
              <Link to="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
