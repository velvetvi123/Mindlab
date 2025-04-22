
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AlertTriangle, CreditCard, Key, Loader2, Lock, Save, Shield, User } from "lucide-react";
import { PasswordInput } from "@/components/auth/password-input";

const accountFormSchema = z.object({
  email: z.string().email(),
  currentPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  newPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match.",
  path: ["confirmPassword"],
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] = useState(true);
  const [theme, setTheme] = useState("system");
  
  const accountForm = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      email: "jane.smith@example.com",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmitPassword = async (data: AccountFormValues) => {
    setIsLoading(true);
    console.log("Password change submitted:", data);
    // In a real app, this would update the password via an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    accountForm.reset({
      email: data.email,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setIsLoading(false);
  };

  return (
    <DashboardLayout userType="creator">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your account settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Form {...accountForm}>
                  <form className="space-y-6">
                    <FormField
                      control={accountForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>
                            This is the email you use to log in.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Danger Zone</h3>
                  <div className="rounded-md border border-destructive/50 p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertTriangle className="mr-2 h-4 w-4" />
                          Delete Account
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Permanently delete your account and all of your content.
                        </p>
                      </div>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...accountForm}>
                    <form 
                      onSubmit={accountForm.handleSubmit(onSubmitPassword)} 
                      className="space-y-6"
                    >
                      <FormField
                        control={accountForm.control}
                        name="currentPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                placeholder="••••••••" 
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={accountForm.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                placeholder="••••••••" 
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={accountForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                placeholder="••••••••" 
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Updating...
                          </>
                        ) : (
                          <>
                            <Save className="mr-2 h-4 w-4" />
                            Update Password
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>
                    Add an extra layer of security to your account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-muted-foreground" />
                      <p className="font-medium">Two-factor authentication</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Secure your account with two-factor authentication.
                    </p>
                  </div>
                  <Switch
                    checked={twoFactorEnabled}
                    onCheckedChange={setTwoFactorEnabled}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>API Keys</CardTitle>
                  <CardDescription>
                    Manage your API keys for external integrations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 border rounded-md">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Key className="mr-2 h-5 w-5 text-muted-foreground" />
                        <p className="font-medium">Primary API Key</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Created on April 10, 2025
                      </p>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">View Key</Button>
                      <Button variant="outline" size="sm">Regenerate</Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Key className="mr-2 h-4 w-4" />
                    Create New API Key
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Manage how you receive notifications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="font-medium">Email Notifications</label>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications for important updates.
                      </p>
                    </div>
                    <Switch
                      checked={emailNotificationsEnabled}
                      onCheckedChange={setEmailNotificationsEnabled}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="font-medium">Marketing Emails</label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about new features and special offers.
                      </p>
                    </div>
                    <Switch defaultChecked={false} />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="font-medium">Weekly Digest</label>
                      <p className="text-sm text-muted-foreground">
                        Receive a weekly summary of your account activity.
                      </p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
                <CardDescription>
                  Manage your billing information and subscription.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Current Plan</h3>
                  <div className="rounded-md border p-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">Pro Plan</p>
                        <p className="text-sm text-muted-foreground">
                          Billed annually
                        </p>
                      </div>
                      <p className="font-medium">$99/year</p>
                    </div>
                    <div className="mt-4 space-x-2">
                      <Button variant="outline" size="sm">Change Plan</Button>
                      <Button variant="outline" size="sm">Cancel Subscription</Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Payment Method</h3>
                  <div className="rounded-md border p-4">
                    <div className="flex items-center space-x-4">
                      <CreditCard className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground">
                          Expires 04/25
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-x-2">
                      <Button variant="outline" size="sm">Update</Button>
                      <Button variant="outline" size="sm">Remove</Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Billing History</h3>
                  <div className="rounded-md border divide-y">
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Pro Plan - Annual</p>
                        <p className="text-sm text-muted-foreground">
                          April 10, 2025
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$99.00</p>
                        <Button variant="link" size="sm" className="p-0 h-auto">
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Pro Plan - Annual</p>
                        <p className="text-sm text-muted-foreground">
                          April 10, 2024
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$99.00</p>
                        <Button variant="link" size="sm" className="p-0 h-auto">
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize the appearance of the application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="font-medium">Theme</label>
                    <Select
                      value={theme}
                      onValueChange={setTheme}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Select a theme for the dashboard.
                    </p>
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
