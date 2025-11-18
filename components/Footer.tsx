import { Coffee, Instagram, Facebook, Twitter, Phone, Map } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background text-text py-12 rounded-b-xl">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="w-6 h-6" />
              <span className="text-xl font-bold">Brew Haven</span>
            </div>
            <p className="text-text-muted">
              Where every cup tells a story. Experience the finest artisanal coffee.
            </p>
            <div className='flex items-center gap-4'>
              <div className='w-8 h-8 bg-text text-background flex items-center justify-center rounded-full'><Phone className='w-4 h-4' /></div>
              <p className="text-text">(555) 123-4567</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='w-8 h-8 bg-text text-background flex items-center justify-center rounded-full'><Map className='w-4 h-4' /></div>
              <p className="text-text">123 Coffee Street<br />
                Bean City, BC 12345</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='w-8 h-8 bg-text text-background flex items-center justify-center rounded-full'><Phone className='w-4 h-4' /></div>
              <p className="text-text">hello@brewhaven.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link href="#hero" className="hover:text-text text-text-muted transition-colors">Home</Link></li>
              <li><Link href="#menu" className="hover:text-text text-text-muted transition-colors">Menu</Link></li>
              <li><Link href="#about" className="hover:text-text text-text-muted transition-colors">About</Link></li>
              <li><Link href="#contact" className="hover:text-text text-text-muted transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-text/10 pt-4 text-center text-text-muted">
          <p>&copy; {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
