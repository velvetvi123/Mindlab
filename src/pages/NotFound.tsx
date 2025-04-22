
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <p className="text-base font-semibold text-primary">404</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="mt-10">
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
