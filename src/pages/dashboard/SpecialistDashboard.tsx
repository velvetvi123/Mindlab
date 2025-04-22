
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  User,
  Briefcase,
  Clock,
  Star,
  Eye,
  MessageSquare,
  ChevronRight,
} from "lucide-react";

export default function SpecialistDashboard() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Mobile App",
      client: "Tech Innovations Inc.",
      status: "In Progress",
      deadline: "June 30, 2025",
    },
  ]);

  return (
    <DashboardLayout userType="specialist">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Specialist Dashboard</h1>
          <Button>
            <Briefcase className="mr-2 h-4 w-4" /> Browse Projects
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Active Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.length}</div>
              <p className="text-xs text-muted-foreground">
                +1 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Profile Views
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">
                +10 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Average Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= 4.8 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Earnings This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3,250</div>
              <p className="text-xs text-muted-foreground">
                +$1,200 from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Current Projects</CardTitle>
              <CardDescription>
                Your active projects and their status
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
                            <User className="mr-1 h-4 w-4" />
                            {project.client}
                          </div>
                          <div className="flex items-center">
                            <div className="mr-1 h-2 w-2 rounded-full bg-green-500" />
                            {project.status}
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            {project.deadline}
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
                    You have no active projects. Click "Browse Projects" to find opportunities.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Profile Activity</CardTitle>
              <CardDescription>
                Who's been viewing your profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Tech Innovations Inc.</p>
                      <p className="text-sm text-muted-foreground">
                        Viewed your profile
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Digital Solutions Group</p>
                      <p className="text-sm text-muted-foreground">
                        Viewed your profile
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">4 days ago</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Startup Ventures LLC</p>
                      <p className="text-sm text-muted-foreground">
                        Viewed your profile
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">1 week ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>
                Latest communications from clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Tech Innovations Inc.</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Hi there! Just checking in on the progress of the UI screens for the e-commerce app. Do you have any updates to share?
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Digital Solutions Group</p>
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Thanks for submitting your profile! We're interested in discussing a potential project with you. Are you available for a call next week?
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Messages
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
