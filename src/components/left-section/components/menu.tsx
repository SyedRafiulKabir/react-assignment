import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';



interface MenusProps {
  menuItems: (string | undefined)[];
}

const Menus = ({menuItems}: MenusProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const distance = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-[65px] z-20 hidden bg-white md:block">
      <div className="relative">
        {/* Scroll Buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-2 py-1 bg-gray-500 shadow rounded-full opacity-50"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-2 py-1 bg-gray-500 shadow rounded-full opacity-50"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrollable Menu */}
        <div
          ref={scrollRef}
          className="scrollbar-hide relative flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-8"
        >
          <ul className="flex my-4 border-b flex-nowrap">
            {menuItems.map((item, index) => (
              <li key={index} className="whitespace-nowrap px-3 text-base text-gray-600">
                <button className="hover:text-green-600 transition">{item}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menus;
