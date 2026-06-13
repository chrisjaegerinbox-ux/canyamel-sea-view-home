import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import UeberUns from "./pages/UeberUns";
import Canyamel from "./pages/Canyamel";
import Preise from "./pages/Preise";
import Zahlungsabwicklung from "./pages/Zahlungsabwicklung";
import Apartment from "./pages/Apartment";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";
import FAQPage from "./pages/FAQ";
import Legal from "./pages/Legal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/canyamel" element={<Canyamel />} />
            <Route path="/preise" element={<Preise />} />
            <Route path="/zahlungsabwicklung" element={<Zahlungsabwicklung />} />
            <Route path="/apartment" element={<Apartment />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/legal" element={<Legal />} />
            {/* Redirects from old routes */}
            <Route path="/raumaufteilung" element={<Navigate to="/apartment" replace />} />
            <Route path="/ausstattung" element={<Navigate to="/apartment" replace />} />
            <Route path="/datenschutz" element={<Navigate to="/legal#datenschutz" replace />} />
            <Route path="/impressum" element={<Navigate to="/legal#impressum" replace />} />
            <Route path="/rechtliche-grundlage" element={<Navigate to="/legal#rechtliches" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
