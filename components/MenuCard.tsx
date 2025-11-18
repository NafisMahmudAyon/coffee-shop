'use client'
import { Badge, Button } from '@/components/aspect-ui';
import { MenuItem } from '@/data/menuData';
import { toggleFavorite } from '@/store/favoritesSlice';
import { RootState } from '@/store/store';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';



interface MenuCardProps {
  item: MenuItem;
  className?: string;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.items.includes(item.id)
  );

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(item.id));
  };


  return (
    <div className="group grid grid-rows-subgrid row-span-4 bg-background rounded-xl overflow-hidden shadow-lg hover-lift hover:shadow-2xl hover:bg-background-hover transition-all duration-300 gap-0">
      <div className="relative aspect-4/3 overflow-hidden grid-rows-subgrid">
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={400}
          className="w-full object-cover group-hover:scale-110 transition-all duration-500 md:grayscale group-hover:grayscale-0"
        />
        {/* Favorite Button */}
        <Button
          variant="ghost"
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 bg-transparent hover:bg-transparent rounded-full shadow-md p-0"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
              }`}
          />
        </Button>
        {/* Category Badge */}
        <Badge
          variant={item.category === 'Hot' ? 'default' : 'outline'}
          className={`absolute bottom-3 left-3 text-text text-shadow-lg ${item.category === 'Hot' ? 'bg-background' : 'border-text'}`}
        >
          {item.category}
        </Badge>
      </div>
      {/* <div className="p-5 grid-rows-subgrid row-span-3 grid "> */}
      <h3 className="text-xl font-bold text-text p-5 pb-0 ">{item.name}</h3>
      <p className="text-sm font-light text-text-muted mb-4 px-5 grid-rows-subgrid">{item.description}</p>
      <div className="flex justify-between items-center px-5 pb-5">
        <span className="text-xl font-semibold">{item.price}</span>
        <Button
          className="bg-text hover:bg-text/90 text-background shadow-lg hover:shadow-xl transition-all rounded-full font-light"
        >
          Order Now
        </Button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default MenuCard;
