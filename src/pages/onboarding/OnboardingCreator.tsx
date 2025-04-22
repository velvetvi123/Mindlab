
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function OnboardingCreator() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    companySize: "",
    bio: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // This would be an API call in a real app
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Onboarding data submitted:", formData);
      toast.success("Profile created successfully!");
      navigate("/dashboard/creator");
    } catch (error) {
      console.error("Error submitting onboarding data:", error);
      toast.error("There was an error creating your profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-center mb-2">
              <span className="gradient-heading">Welcome</span> to Mindlab
            </h1>
            <p className="text-center text-muted-foreground mb-8">
              Let's set up your creator profile to help you find the perfect specialists
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-center relative">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                        currentStep >= step
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted bg-card text-muted-foreground"
                      }`}
                    >
                      {currentStep > step ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        step
                      )}
                    </div>
                    <span
                      className={`text-xs mt-2 ${
                        currentStep >= step ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step === 1
                        ? "Basic Info"
                        : step === 2
                        ? "Company Details"
                        : "Finish"}
                    </span>
                  </div>
                ))}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted -z-10">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>
                  {currentStep === 1
                    ? "Tell us about yourself"
                    : currentStep === 2
                    ? "Company Information"
                    : "Almost Done!"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company or Project Name</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Enter your company or project name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Input
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        placeholder="e.g. Technology, Healthcare, Education"
                      />
                    </div>
                    <div className="pt-4 flex justify-end">
                      <Button onClick={handleNext}>Continue</Button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="companySize">Company Size</Label>
                      <Input
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        placeholder="e.g. Solo, 2-10 employees, 11-50 employees"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">
                        Bio (Tell specialists about yourself or your company)
                      </Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        placeholder="Write a brief description about yourself or your company..."
                        rows={4}
                      />
                    </div>
                    <div className="pt-4 flex justify-between">
                      <Button variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button onClick={handleNext}>Continue</Button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="font-medium mb-2">Your Profile Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Company/Project:</span>
                          <span>{formData.companyName || "Not specified"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Industry:</span>
                          <span>{formData.industry || "Not specified"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Company Size:</span>
                          <span>{formData.companySize || "Not specified"}</span>
                        </div>
                        <div className="pt-2 border-t">
                          <span className="text-muted-foreground">Bio:</span>
                          <p className="mt-1">
                            {formData.bio || "No bio provided"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You can always edit this information later from your profile settings.
                    </p>
                    <div className="pt-4 flex justify-between">
                      <Button variant="outline" onClick={handleBack}>
                        Back
                      </Button>
                      <Button onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating Profile...
                          </>
                        ) : (
                          "Complete Setup"
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
