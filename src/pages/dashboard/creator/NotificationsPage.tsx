
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
import { Switch } from "@/components/ui/switch";
import { Bell, Calendar, MessageSquare, User, Star, CheckCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  type: "message" | "project" | "system" | "review";
  read: boolean;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "New Message",
      description: "Sarah Johnson sent you a message about your project.",
      time: "10 minutes ago",
      type: "message",
      read: false,
    },
    {
      id: 2,
      title: "Specialist Joined",
      description: "Michael Chang joined your E-commerce Mobile App project.",
      time: "2 hours ago",
      type: "project",
      read: false,
    },
    {
      id: 3,
      title: "Project Update",
      description: "Your project 'E-commerce Mobile App' has been updated.",
      time: "1 day ago",
      type: "project",
      read: true,
    },
    {
      id: 4,
      title: "System Maintenance",
      description: "The platform will be down for maintenance on May 15, 2025, from 2:00 AM to 4:00 AM UTC.",
      time: "2 days ago",
      type: "system",
      read: true,
    },
    {
      id: 5,
      title: "New Review",
      description: "You received a 5-star review from Amanda Lee.",
      time: "3 days ago",
      type: "review",
      read: true,
    },
  ]);

  const [settings, setSettings] = useState({
    email: {
      messages: true,
      projects: true,
      system: false,
      reviews: true,
    },
    push: {
      messages: true,
      projects: true,
      system: true,
      reviews: false,
    },
  });

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-5 w-5 text-blue-500" />;
      case "project":
        return <Calendar className="h-5 w-5 text-green-500" />;
      case "system":
        return <Bell className="h-5 w-5 text-red-500" />;
      case "review":
        return <Star className="h-5 w-5 text-yellow-500" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  return (
    <DashboardLayout userType="creator">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Notifications</h1>
          <Button variant="ghost" size="sm" onClick={markAllAsRead}>
            <CheckCheck className="mr-2 h-4 w-4" />
            Mark all as read
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            {notifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`transition-colors ${notification.read ? 'bg-background' : 'bg-accent/20'}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-full bg-muted p-2">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{notification.title}</h3>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {notification.description}
                      </p>
                    </div>
                    {!notification.read && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => markAsRead(notification.id)}
                      >
                        Mark as read
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="unread" className="space-y-4">
            {notifications.filter(n => !n.read).length > 0 ? (
              notifications
                .filter(n => !n.read)
                .map((notification) => (
                  <Card 
                    key={notification.id} 
                    className="bg-accent/20"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 rounded-full bg-muted p-2">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium">{notification.title}</h3>
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.description}
                          </p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => markAsRead(notification.id)}
                        >
                          Mark as read
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Bell className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No unread notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    You've caught up on all your notifications.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure how and when you receive notifications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-blue-500" />
                          <h4 className="font-medium">Messages</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Receive emails when you get new messages.
                        </p>
                      </div>
                      <Switch
                        checked={settings.email.messages}
                        onCheckedChange={(checked) =>
                          setSettings({
                            ...settings,
                            email: { ...settings.email, messages: checked },
                          })
                        }
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-green-500" />
                          <h4 className="font-medium">Projects</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about project updates.
                        </p>
                      </div>
                      <Switch
                        checked={settings.email.projects}
                        onCheckedChange={(checked) =>
                          setSettings({
                            ...settings,
                            email: { ...settings.email, projects: checked },
                          })
                        }
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <Bell className="h-4 w-4 text-red-500" />
                          <h4 className="font-medium">System</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about system updates and maintenance.
                        </p>
                      </div>
                      <Switch
                        checked={settings.email.system}
                        onCheckedChange={(checked) =>
                          setSettings({
                            ...settings,
                            email: { ...settings.email, system: checked },
                          })
                        }
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <h4 className="font-medium">Reviews</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Receive emails when you get new reviews.
                        </p>
                      </div>
                      <Switch
                        checked={settings.email.reviews}
                        onCheckedChange={(checked) =>
                          setSettings({
                            ...settings,
                            email: { ...settings.email, reviews: checked },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4">Push Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-blue-500" />
                          <h4 className="font-medium">Messages</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Receive push notifications for new messages.
                        </p>
                      </div>
                      <Switch
                        checked={settings.push.messages}
                        onCheckedChange={(checked) =>
                          setSettings({
                            ...settings,
                            push: { ...settings.push, messages: checked },
                          })
                        }
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-green-500" />
                          <h4 className="font-medium">Projects</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Receive push notifications for project updates.
                        </p>
                      </div>
                      <Switch
                        checked={settings.push.projects}
                        onCheckedChange={(checked) =>
                          setSettings({
                            ...settings,
                            push: { ...settings.push, projects: checked },
                          })
                        }
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <Bell className="h-4 w-4 text-red-500" />
                          <h4 className="font-medium">System</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Receive push notifications about system updates.
                        </p>
                      </div>
                      <Switch
                        checked={settings.push.system}
                        onCheckedChange={(checked) =>
                          setSettings({
                            ...settings,
                            push: { ...settings.push, system: checked },
                          })
                        }
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <h4 className="font-medium">Reviews</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Receive push notifications for new reviews.
                        </p>
                      </div>
                      <Switch
                        checked={settings.push.reviews}
                        onCheckedChange={(checked) =>
                          setSettings({
                            ...settings,
                            push: { ...settings.push, reviews: checked },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
