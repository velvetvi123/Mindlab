
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./login-form";
import { SignupForm } from "./signup-form";

export type AuthFormMode = "login" | "signup";
export type UserType = "creator" | "specialist";

interface AuthFormProps {
  mode: AuthFormMode;
  onSuccess?: () => void;
}

export function AuthForm({ mode, onSuccess }: AuthFormProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">
          {mode === "login" ? "Welcome back" : "Create an account"}
        </CardTitle>
        <CardDescription>
          {mode === "login"
            ? "Enter your email and password to access your account"
            : "Fill out the form below to create your Mindlab account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {mode === "login" ? (
          <LoginForm onSuccess={onSuccess} />
        ) : (
          <SignupForm onSuccess={onSuccess} />
        )}
      </CardContent>
      <CardFooter className="flex justify-center border-t p-6">
        <p className="text-sm text-muted-foreground">
          {mode === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <Link
            to={mode === "login" ? "/signup" : "/login"}
            className="text-primary font-medium hover:underline"
          >
            {mode === "login" ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
