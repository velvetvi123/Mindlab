
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AuthForm } from "@/components/auth/auth-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">
              <span className="gradient-heading">Log In</span> to IdeaForge
            </h1>
            <AuthForm mode="login" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
