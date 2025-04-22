
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/hooks/use-theme";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import SpecialistsPage from "./pages/SpecialistsPage";
import PricingPage from "./pages/PricingPage";
import NotFound from "./pages/NotFound";
import CreatorDashboard from "./pages/dashboard/CreatorDashboard";
import SpecialistDashboard from "./pages/dashboard/SpecialistDashboard";
import OnboardingCreator from "./pages/onboarding/OnboardingCreator";
import OnboardingSpecialist from "./pages/onboarding/OnboardingSpecialist";

// Creator Dashboard Pages
import CreatorProfilePage from "./pages/dashboard/creator/ProfilePage";
import CreatorMessagesPage from "./pages/dashboard/creator/MessagesPage";
import CreatorNotificationsPage from "./pages/dashboard/creator/NotificationsPage";
import CreatorSettingsPage from "./pages/dashboard/creator/SettingsPage";

// Specialist Dashboard Pages
import SpecialistProfilePage from "./pages/dashboard/specialist/ProfilePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/specialists" element={<SpecialistsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            
            {/* Creator Dashboard Routes */}
            <Route path="/dashboard/creator" element={<CreatorDashboard />} />
            <Route path="/dashboard/creator/profile" element={<CreatorProfilePage />} />
            <Route path="/dashboard/creator/messages" element={<CreatorMessagesPage />} />
            <Route path="/dashboard/creator/notifications" element={<CreatorNotificationsPage />} />
            <Route path="/dashboard/creator/settings" element={<CreatorSettingsPage />} />
            
            {/* Specialist Dashboard Routes */}
            <Route path="/dashboard/specialist" element={<SpecialistDashboard />} />
            <Route path="/dashboard/specialist/profile" element={<SpecialistProfilePage />} />
            
            {/* Onboarding Routes */}
            <Route path="/onboarding/creator" element={<OnboardingCreator />} />
            <Route path="/onboarding/specialist" element={<OnboardingSpecialist />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
