import { menuItems } from '@/data/menuData';
import MenuCard from './MenuCard';

const MenuSection = () => {
  return (
    <section id="menu" className="pt-24 md:pt-20 pb-20 bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium coffee drinks, each made with passion and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
