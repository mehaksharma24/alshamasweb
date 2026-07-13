import { useState, useCallback, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup';
import HomePage from './pages/HomePage';
import OurStoryPage from './pages/OurStoryPage';
import TheDifferencePage from './pages/TheDifferencePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import LocationsPage from './pages/LocationsPage';
import HalalPage from './pages/HalalPage';
import ContactPage from './pages/ContactPage';

function getPath() {
  return window.location.hash.replace('#', '') || '/';
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [path, setPath] = useState(getPath);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handler = () => setPath(getPath());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const renderPage = () => {
    if (path === '/') return <HomePage navigate={navigate} />;
    if (path === '/our-story') return <OurStoryPage navigate={navigate} />;
    if (path === '/the-difference') return <TheDifferencePage />;
    if (path === '/products') return <ProductsPage navigate={navigate} />;
    if (path.startsWith('/products/')) return <ProductDetailPage slug={path.replace('/products/', '')} navigate={navigate} />;
    if (path === '/recipes') return <RecipesPage navigate={navigate} />;
    if (path.startsWith('/recipes/')) return <RecipeDetailPage slug={path.replace('/recipes/', '')} navigate={navigate} />;
    if (path === '/locations') return <LocationsPage />;
    if (path === '/halal') return <HalalPage />;
    if (path === '/contact') return <ContactPage />;
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-gray-800 mb-4">Page Not Found</h1>
          <button onClick={() => navigate('/')} className="text-brand-red hover:underline">Go Home</button>
        </div>
      </div>
    );
  };

  return (
    <>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <div className={`transition-opacity duration-300 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar currentPath={path} navigate={navigate} />
        <main>{renderPage()}</main>
        <Footer navigate={navigate} />
        <NewsletterPopup />
      </div>
    </>
  );
}
