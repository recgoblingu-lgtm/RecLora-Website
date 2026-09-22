import React from 'react';
import { Route, Switch } from 'wouter';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import ProfileView from "./pages/ProfileView";
import RoomDetail from "./pages/RoomDetail";
import RoomsList from "./pages/RoomsList";
import ShopCatalog from "./pages/ShopCatalog";
import CreatorHub from "./pages/CreatorHub";
import ArticleView from "./pages/ArticleView";
import AnnouncementsDirectory from "./pages/AnnouncementsDirectory";
import ContentEditor from "./pages/ContentEditor";
import DownloadPage from "./pages/DownloadPage";
import EventsPage from "./pages/EventsPage";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      {/* Core Hub Routes */}
      <Route path="/" component={Home} />
      <Route path="/news" component={AnnouncementsDirectory} />
      <Route path="/announcements" component={AnnouncementsDirectory} />
      
      {/* Sample Profile Route */}
      <Route path="/profile" component={ProfileView} />
      <Route path="/user/:handle" component={ProfileView} />
      <Route path="/u/:handle" component={ProfileView} />

      {/* Rooms Routes */}
      <Route path="/rooms" component={RoomsList} />
      <Route path="/rooms/:slug" component={RoomDetail} />
      <Route path="/room/:slug" component={RoomDetail} />

      {/* Marketplace & Inventions */}
      <Route path="/shop" component={ShopCatalog} />
      <Route path="/shop/:slug" component={ShopCatalog} />

      {/* Creator Hub, Academy & Documents */}
      <Route path="/creator" component={CreatorHub} />
      <Route path="/creator/p/:slug" component={ArticleView} />
      <Route path="/creator/academy/:slug" component={ArticleView} />
      <Route path="/creator/docs/:slug" component={ArticleView} />
      
      {/* Utilities & Community */}
      <Route path="/editor" component={ContentEditor} />
      <Route path="/download" component={DownloadPage} />
      <Route path="/events" component={EventsPage} />

      {/* 404 Catch-All */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
