
import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "IdeaForge helped me find the perfect developer for my app idea. The matching process was seamless, and the quality of talent is exceptional. My project went from concept to launch in half the time I expected.",
    author: {
      name: "Sarah Johnson",
      role: "Founder, HealthTrack App",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    rating: 5,
  },
  {
    content:
      "As a UI/UX designer, IdeaForge has been fantastic for connecting me with innovative projects that match my expertise. The platform's vetting process ensures high-quality clients who value good design.",
    author: {
      name: "Michael Chen",
      role: "Senior UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    rating: 5,
  },
  {
    content:
      "The specialist I found through IdeaForge transformed my business. Their marketing expertise helped us increase our conversion rate by 45%. The platform's secure messaging system made collaboration seamless.",
    author: {
      name: "Emma Rodriguez",
      role: "CEO, Bloom E-commerce",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    rating: 4,
  },
];

export function TestimonialsSection() {
  return (
    <div className="bg-muted/20 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by idea creators and specialists alike
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it — hear from some of our satisfied users
            who have successfully collaborated through IdeaForge.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-card p-6 shadow-sm border border-border transition-all hover:shadow-md card-hover"
            >
              <div className="flex items-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                ))}
              </div>

              <blockquote className="mt-4">
                <p className="text-lg font-medium text-foreground">
                  "{testimonial.content}"
                </p>
              </blockquote>

              <div className="mt-6 flex items-center">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium">
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.author.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
