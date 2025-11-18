'use client';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/aspect-ui';
import Icon from './Icon';

const Hero = () => {
  const scrollToMenu = () => {
    const menu = document.getElementById('menu');
    if (menu) {
      menu.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden rounded-t-xl">
      <div className="relative container mx-auto px-4 pt-12 text-center grid md:grid-cols-2 gap-8 items-center text-text max-w-[1200px]">
        <div className="w-full space-y-6 md:space-y-8 fade-in-up">
          <div className="">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Brew Haven
            </h1>
            <p className="text-2xl md:text-3xl text-coffee-light font-light">
              Where Every Cup Tells a Story
            </p>
          </div>
          <p className="text-base md:text-lg text-text-muted font-light max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dicta velit inventore illo facere placeat adipisci iusto doloribus? Assumenda illo modi repellat expedita rem ipsa vero cupiditate fugit blanditiis dolorem.
          </p>
          <Button
            onClick={scrollToMenu}
            size="large"
            className="bg-text hover:bg-text/90 text-background shadow-lg hover:shadow-xl transition-all rounded-full font-light"
          >
            Explore Menu
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>
        <div className='flex items-center justify-center text-text'>
          <Icon className="text-text hover:text-[#342a1f] w-full max-w-100 transition-all duration-500" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-text/70" />
      </div>
    </section>
  );
};

export default Hero;
