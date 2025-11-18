'use client'
import { Card, CardContent, Carousel, CarouselControl, CarouselIndicators, CarouselItem, CarouselSlides } from '@/components/aspect-ui';
import { testimonials } from '@/data/menuData';
import Autoplay from 'embla-carousel-autoplay';
import { Star } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  // avg of testimonials ratings
  const avgRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;
  return (
    <section id="testimonials" className="py-20 mt-20 bg-muted/30">
      <div className="max-w-[1200px] w-full mx-auto px-4 grid gap-12 grid-cols-1 md:grid-cols-2 ">
        <div className="text-center mb-16 fade-in-up order-2">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-text-muted text-balance mx-auto">
            Don&apos;t just take our word for it - hear from our wonderful community of coffee lovers.
          </p>
          <div className='inline-flex gap-2 items-center mx-auto mt-4'>
            <h3 className='text-text font-bold text-5xl'>{avgRating.toFixed(1)}</h3>
            <div className='flex flex-col items-start'>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => {
                  const fill = Math.min(1, Math.max(0, avgRating - i));
                  return (
                    <div key={i} className="relative w-6 h-6">
                      <Star className="w-6 h-6 text-text" />
                      {fill > 0 && (
                        <div
                          className="absolute left-0 top-0 h-full overflow-hidden pointer-events-none"
                          style={{ width: `${fill * 100}%` }}
                        >
                          <Star className="w-6 h-6 fill-text text-text" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-text-muted">Based on 5000+ reviews</p>
            </div>
          </div>
        </div>

        <div className="w-full order-2 md:order-1 fade-in-up">
          <Carousel options={{ loop: true, align: 'start' }}
            plugins={[Autoplay()]}
            className=''>
            <CarouselSlides className=''>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className='flex-[0_0_100%] lg:flex-[0_0_50%] select-none'>
                  <Card key={testimonial.id} className="hover-lift bg-background hover:bg-background-hover hover:shadow-xl pt-0 overflow-hidden group transition-all duration-300">
                    <div className='overflow-hidden'>
                      <Image src={testimonial.avatarUrl} width={400} height={400} alt={testimonial.name} className='w-full h-68 object-cover md:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500' />
                    </div>
                    <CardContent className="p-6 py-1 space-y-4 grid">
                      <div className="flex items-center gap-4">
                        <div className='flex w-full justify-between items-center'>
                          <h3 className="font-semibold text-text">{testimonial.name}</h3>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 transition-all duration-500 ${i < testimonial.rating ? 'fill-text text-text group-hover:text-amber-400 group-hover:fill-amber-400' : 'text-text group-hover:text-amber-400'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-text-muted italic grid-cols-subgrid grid-rows-subgrid">
                        &quot;{testimonial.text}&quot;
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselSlides>
            <CarouselControl className='relative mx-auto z-50'>
              <CarouselIndicators className=' mx-auto max-w-max' />
            </CarouselControl>
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
