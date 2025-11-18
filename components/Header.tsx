'use client';
import { Button } from '@/components/aspect-ui';
import { RootState } from '@/store/store';
import { toggleTheme } from '@/store/themeSlice';
import { Heart, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const favoritesCount = useSelector((state: RootState) => state.favorites.items.length);
  const theme = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 md:top-6 lg:top-10 z-50 max-w-[1200px] w-full border-b border-text/10 left-1/2 -translate-x-1/2 transition-all duration-500 ${isScrolled ? 'bg-background/15 backdrop-blur-md shadow-md rounded-full top-2 md:top-6!' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 pl-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-text hover:text-text-muted transition-colors"
          >
            Brew Haven
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className={`text-text-muted hover:text-text transition-colors ${isScrolled ? 'text-text! hover:text-text-muted text-shadow-md' : ''}`}>
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className={`text-text-muted hover:text-text transition-colors ${isScrolled ? 'text-text! hover:text-text-muted text-shadow-md' : ''}`}>
              Menu
            </button>
            <button onClick={() => scrollToSection('about')} className={`text-text-muted hover:text-text transition-colors ${isScrolled ? 'text-text! hover:text-text-muted text-shadow-md' : ''}`}>
              About
            </button>
            <button onClick={() => scrollToSection('testimonials')} className={`text-text-muted hover:text-text transition-colors ${isScrolled ? 'text-text! hover:text-text-muted text-shadow-md' : ''}`}>
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className={`text-text-muted hover:text-text transition-colors ${isScrolled ? 'text-text! hover:text-text-muted text-shadow-md' : ''}`}>
              Contact
            </button>
          </nav>

          <div className="flex items-center md:gap-4">
            <button className="relative p-2 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-text text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            <Button
              variant="ghost"

              onClick={() => dispatch(toggleTheme())}
              className="hover:bg-accent"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <>
            <div
              className="fixed bg-background/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <nav className="absolute top-full right-0 mr-4 bg-background border border-text/10 rounded-lg shadow-lg p-4 flex flex-col gap-4 md:hidden min-w-[200px]">
              <button onClick={() => scrollToSection('hero')} className="text-left text-shadow-sm hover:text-primary transition-colors py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-left text-shadow-sm hover:text-primary transition-colors py-2">
                Menu
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-shadow-sm hover:text-primary transition-colors py-2">
                About
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-shadow-sm hover:text-primary transition-colors py-2">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-shadow-sm hover:text-primary transition-colors py-2">
                Contact
              </button>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
