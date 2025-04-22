
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Filter, Search, Star, X } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for specialists
const mockSpecialists = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4.9,
    hourlyRate: 85,
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    experience: "8 years",
    bio: "Experienced full-stack developer specializing in building scalable web applications. I've helped startups and established businesses launch successful digital products.",
    availability: "Full-time"
  },
  {
    id: "2",
    name: "Sophia Chen",
    role: "UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 5.0,
    hourlyRate: 75,
    skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Prototyping"],
    experience: "6 years",
    bio: "Award-winning UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences across web and mobile platforms.",
    availability: "Part-time"
  },
  {
    id: "3",
    name: "Marcus Williams",
    role: "Mobile Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4.7,
    hourlyRate: 90,
    skills: ["React Native", "iOS", "Android", "Swift", "Kotlin"],
    experience: "7 years",
    bio: "Mobile development expert who has published over 20 apps with millions of downloads. Specialized in cross-platform and native mobile applications.",
    availability: "Full-time"
  },
  {
    id: "4",
    name: "Priya Patel",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4.8,
    hourlyRate: 95,
    skills: ["Product Strategy", "Roadmapping", "User Stories", "Agile", "Data Analysis"],
    experience: "9 years",
    bio: "Strategic product manager with experience at both startups and Fortune 500 companies. Expert in taking products from concept to market successfully.",
    availability: "Full-time"
  },
  {
    id: "5",
    name: "David Kim",
    role: "DevOps Engineer",
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4.6,
    hourlyRate: 80,
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Infrastructure as Code"],
    experience: "5 years",
    bio: "DevOps specialist focused on building robust, scalable infrastructure and deployment pipelines. I help teams deliver software faster and more reliably.",
    availability: "Contract"
  },
  {
    id: "6",
    name: "Emma Rodriguez",
    role: "Digital Marketer",
    avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4.9,
    hourlyRate: 70,
    skills: ["SEO", "Content Marketing", "Social Media", "PPC", "Analytics"],
    experience: "7 years",
    bio: "Results-driven digital marketer with expertise in growing online presence and driving conversions. I've helped businesses increase their traffic by an average of 200%.",
    availability: "Part-time"
  },
];

// Skills for filtering
const allSkills = [
  "React", "Node.js", "TypeScript", "JavaScript", "Python", "AWS", "MongoDB", 
  "UI Design", "UX Research", "Figma", "Adobe XD", "Prototyping",
  "React Native", "iOS", "Android", "Swift", "Kotlin",
  "Product Strategy", "Roadmapping", "User Stories", "Agile", "Data Analysis",
  "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code",
  "SEO", "Content Marketing", "Social Media", "PPC", "Analytics"
];

export default function SpecialistsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [rateRange, setRateRange] = useState([0, 100]);
  const [filteredSpecialists, setFilteredSpecialists] = useState(mockSpecialists);
  const [showFilters, setShowFilters] = useState(false);

  // Filter specialists based on search, skills, and rate range
  useEffect(() => {
    const filtered = mockSpecialists.filter((specialist) => {
      // Filter by search term
      const matchesSearch =
        searchTerm === "" ||
        specialist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        specialist.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        specialist.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        specialist.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Filter by selected skills
      const matchesSkills =
        selectedSkills.length === 0 ||
        selectedSkills.every((skill) =>
          specialist.skills.includes(skill)
        );

      // Filter by rate range
      const matchesRate =
        specialist.hourlyRate >= rateRange[0] &&
        specialist.hourlyRate <= rateRange[1];

      return matchesSearch && matchesSkills && matchesRate;
    });

    setFilteredSpecialists(filtered);
  }, [searchTerm, selectedSkills, rateRange]);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedSkills([]);
    setRateRange([0, 100]);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/20 py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">
              <span className="gradient-heading">Browse</span> Specialists
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect specialist for your project from our community of
              vetted experts across various fields and technologies.
            </p>

            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search specialists by name, role, or skills..."
                  className="pl-10 pr-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-6">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full flex items-center justify-center"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>

              {/* Filters */}
              <div
                className={`${
                  showFilters ? "block" : "hidden"
                } lg:block lg:col-span-1`}
              >
                <div className="sticky top-20 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="h-8 text-sm"
                    >
                      Clear All
                    </Button>
                  </div>

                  {/* Rate Range Filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-2">Hourly Rate</h3>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 100]}
                        max={100}
                        step={5}
                        value={rateRange}
                        onValueChange={setRateRange}
                        className="my-4"
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          ${rateRange[0]}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          ${rateRange[1]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Skills</h3>
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                      {allSkills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className={`text-xs h-7 w-full justify-start ${
                              selectedSkills.includes(skill)
                                ? "bg-primary/10 border-primary"
                                : ""
                            }`}
                            onClick={() => toggleSkill(skill)}
                          >
                            {selectedSkills.includes(skill) && (
                              <Check className="mr-1 h-3 w-3 text-primary" />
                            )}
                            {skill}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="lg:col-span-3 mt-6 lg:mt-0">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredSpecialists.length} specialists
                  </p>
                  <Tabs defaultValue="relevance" className="w-auto">
                    <TabsList>
                      <TabsTrigger value="relevance">Relevance</TabsTrigger>
                      <TabsTrigger value="rating">Rating</TabsTrigger>
                      <TabsTrigger value="hourly">Hourly Rate</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Selected Filters */}
                {(selectedSkills.length > 0 || rateRange[0] > 0 || rateRange[1] < 100) && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedSkills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {skill}
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => toggleSkill(skill)}
                        />
                      </Badge>
                    ))}
                    {(rateRange[0] > 0 || rateRange[1] < 100) && (
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        ${rateRange[0]} - ${rateRange[1]}/hr
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => setRateRange([0, 100])}
                        />
                      </Badge>
                    )}
                  </div>
                )}

                {/* Specialists Grid */}
                {filteredSpecialists.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredSpecialists.map((specialist) => (
                      <Card
                        key={specialist.id}
                        className="overflow-hidden card-hover"
                      >
                        <CardContent className="p-0">
                          <div className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                                <img
                                  src={specialist.avatar}
                                  alt={specialist.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-bold truncate">
                                  {specialist.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {specialist.role}
                                </p>
                                <div className="flex items-center mt-1">
                                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                  <span className="ml-1 text-sm font-medium">
                                    {specialist.rating}
                                  </span>
                                  <span className="mx-2 text-muted-foreground">•</span>
                                  <span className="text-sm text-muted-foreground">
                                    ${specialist.hourlyRate}/hr
                                  </span>
                                  <span className="mx-2 text-muted-foreground">•</span>
                                  <span className="text-sm text-muted-foreground">
                                    {specialist.experience}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p className="mt-4 text-sm line-clamp-2">
                              {specialist.bio}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-1">
                              {specialist.skills.slice(0, 4).map((skill) => (
                                <Badge
                                  key={skill}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                              {specialist.skills.length > 4 && (
                                <Badge variant="outline" className="text-xs">
                                  +{specialist.skills.length - 4}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="bg-muted/30 p-4 flex justify-between items-center border-t">
                            <span className="text-sm">
                              <span className="font-medium">Availability:</span>{" "}
                              {specialist.availability}
                            </span>
                            <Link to={`/specialists/${specialist.id}`}>
                              <Button variant="default" size="sm">
                                View Profile
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 border rounded-lg">
                    <h3 className="text-lg font-medium">No specialists found</h3>
                    <p className="text-muted-foreground mt-1">
                      Try adjusting your filters or search query
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={clearFilters}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/20 py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to collaborate with top specialists?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Create an account to submit your project and get matched with
              the perfect specialist for your needs.
            </p>
            <div className="mt-8">
              <Link to="/signup">
                <Button size="lg">Create Your Account</Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
