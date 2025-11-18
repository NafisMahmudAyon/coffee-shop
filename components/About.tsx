'use client';
import { motion } from "framer-motion";
import Image from "next/image";


const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-4">
        
        <motion.h2 className="text-4xl md:text-5xl font-bold text-center text-text mb-12 fade-in-up" initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          Our Story
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center w-full mx-auto">
          <motion.div className="order-2 md:order-1 flex justify-center " initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <Image
              src={"/about-coffee.jpg"}
              alt="Vintage coffee grinder and roasted coffee beans"
              width={600}
              height={400}
              className="w-full max-w-[400px] object-cover md:h-100 rounded-2xl shadow-2xl md:grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
          <motion.div className="order-1 md:order-2 space-y-6 " initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className="space-y-4 text-text-muted text-lg">
              <p className="text-balance">
                Founded in 2015, Brew Haven began with a simple mission: to create a welcoming space where coffee lovers could experience exceptional brews and genuine hospitality. What started as a small neighborhood cafe has grown into a beloved community gathering place.
              </p>
              <p className="text-balance">
                We source our beans from sustainable farms around the world, working directly with growers who share our commitment to quality and ethical practices. Each cup is carefully crafted by our skilled baristas who are passionate about the art of coffee making.
              </p>
              <p className="text-balance">
                More than just a coffee shop, Brew Haven is a place where stories are shared, friendships are formed, and every visit feels like coming home. We believe that great coffee brings people together, and we&apos;re honored to be part of your daily ritual.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
