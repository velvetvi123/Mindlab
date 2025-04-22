
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
import { Loader2, CheckCircle2, Plus, X } from "lucide-react";

export default function OnboardingSpecialist() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    experience: "",
    hourlyRate: "",
    bio: "",
    availability: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills((prev) => [...prev, newSkill]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
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
      console.log("Onboarding data submitted:", { ...formData, skills });
      toast.success("Profile created successfully!");
      navigate("/dashboard/specialist");
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
              Let's set up your specialist profile to showcase your expertise
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
                        ? "Skills & Experience"
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
                    ? "Skills & Experience"
                    : "Almost Done!"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Professional Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="e.g. Senior UI/UX Designer"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hourlyRate">Hourly Rate (USD)</Label>
                      <Input
                        id="hourlyRate"
                        name="hourlyRate"
                        value={formData.hourlyRate}
                        onChange={handleInputChange}
                        placeholder="e.g. 75"
                        type="number"
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
                      <Label htmlFor="skills">Skills</Label>
                      <div className="flex gap-2">
                        <Input
                          id="newSkill"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="Add a skill (e.g. React, UI Design)"
                        />
                        <Button type="button" onClick={handleAddSkill}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {skills.map((skill) => (
                          <div
                            key={skill}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center"
                          >
                            {skill}
                            <button
                              type="button"
                              onClick={() => handleRemoveSkill(skill)}
                              className="ml-2 hover:text-primary-dark"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                        {skills.length === 0 && (
                          <p className="text-sm text-muted-foreground">
                            Add your key skills to stand out to potential clients
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="e.g. 5"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability</Label>
                      <Input
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        placeholder="e.g. Full-time, Part-time, Weekends only"
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
                    <div className="space-y-2">
                      <Label htmlFor="bio">
                        Bio (Tell potential clients about your experience and expertise)
                      </Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        placeholder="Write a brief professional bio highlighting your experience and strengths..."
                        rows={4}
                      />
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                      <h3 className="font-medium mb-2">Your Profile Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Professional Title:</span>
                          <span>{formData.title || "Not specified"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Experience:</span>
                          <span>{formData.experience || "Not specified"} years</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Hourly Rate:</span>
                          <span>${formData.hourlyRate || "0"}/hour</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Availability:</span>
                          <span>{formData.availability || "Not specified"}</span>
                        </div>
                        <div className="pt-2 border-t">
                          <span className="text-muted-foreground">Skills:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {skills.length > 0 ? (
                              skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs"
                                >
                                  {skill}
                                </span>
                              ))
                            ) : (
                              <span>No skills specified</span>
                            )}
                          </div>
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
