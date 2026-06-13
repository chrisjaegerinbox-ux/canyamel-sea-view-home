import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-4">
          {t('notFound.title')}
        </h2>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {t('notFound.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-warm hover:shadow-warm-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            {t('notFound.home')}
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('notFound.back')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
