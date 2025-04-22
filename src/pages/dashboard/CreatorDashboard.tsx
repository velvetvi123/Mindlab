import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Clock, Briefcase, Users, ChevronRight } from "lucide-react";
import { User } from "lucide-react";
import { NewProjectDialog } from "@/components/projects/new-project-dialog";
import { useToast } from "@/hooks/use-toast";

interface Project {
  id: number;
  title: string;
  status: string;
  specialists: number;
  budget: string;
  deadline: string;
}

export default function CreatorDashboard() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const handleProjectCreated = (newProject: Project) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    toast({
      title: "Project created",
      description: "Your new project has been created successfully.",
    });
  };

  return (
    <DashboardLayout userType="creator">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Creator Dashboard</h1>
          <Button onClick={() => setOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </div>

        <NewProjectDialog 
          open={open} 
          onOpenChange={setOpen}
          onProjectCreated={handleProjectCreated}
        />

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Active Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.length}</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Connected Specialists
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                +1 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Completed Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                Since you joined
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Your Projects</CardTitle>
              <CardDescription>
                Monitor and manage all your active projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              {projects.length > 0 ? (
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-lg border p-4"
                    >
                      <div className="space-y-1">
                        <h4 className="font-semibold">{project.title}</h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <div className={`mr-1 h-2 w-2 rounded-full ${
                              project.status === "In Progress" 
                                ? "bg-green-500" 
                                : "bg-yellow-500"
                            }`} />
                            {project.status}
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="mr-1 h-4 w-4" />
                            {project.budget}
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            {project.deadline}
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-4 w-4" />
                            {project.specialists} specialists
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="mt-2 md:mt-0">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-40 items-center justify-center rounded-lg border border-dashed">
                  <p className="text-center text-muted-foreground">
                    You have no active projects. Click "New Project" to get started.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Specialists</CardTitle>
              <CardDescription>
                Top specialists that match your project needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">
                        UI/UX Designer, 5 years exp.
                      </p>
                    </div>
                  </div>
                  <Button size="sm">View Profile</Button>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Michael Chang</p>
                      <p className="text-sm text-muted-foreground">
                        Frontend Developer, 7 years exp.
                      </p>
                    </div>
                  </div>
                  <Button size="sm">View Profile</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your latest actions and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-blue-500" />
                  <div>
                    <p className="font-medium">Project Created</p>
                    <p className="text-sm text-muted-foreground">
                      You created "E-commerce Mobile App" project
                    </p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-green-500" />
                  <div>
                    <p className="font-medium">Specialist Joined</p>
                    <p className="text-sm text-muted-foreground">
                      Sarah Johnson joined your "E-commerce Mobile App" project
                    </p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-yellow-500" />
                  <div>
                    <p className="font-medium">Message Received</p>
                    <p className="text-sm text-muted-foreground">
                      New message from Sarah Johnson
                    </p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
