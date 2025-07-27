import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const items: string[] = [
  'সিটি করে যা শিখবেন',
  'কোর্স সম্পর্কে বিস্তারিত',
  'কোর্স এক্সক্লুসিভ ফিচার',
  'এই কোর্সের সাথে ফ্রি পাচ্ছেন–',
  'শিক্ষার্থী...',
];

const Menus: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const distance = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center gap-2 px-2">
      <button
        onClick={() => scroll('left')}
        className="p-2 rounded-full bg-gray-400 text-white"
        aria-label="Scroll Left"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth"
      >
        {items.map((text, index) => (
          <span key={index} className="text-gray-700 text-sm shrink-0">
            {text}
          </span>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="p-2 rounded-full bg-gray-400 text-white"
        aria-label="Scroll Right"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Menus;
