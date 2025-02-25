import Image from 'next/image';
import cn from 'classnames';

type CardProps = {
  image: string;
  title: string;
  description?: string; // Made optional since it wasn't used in the original
  className?: string;
};

const DynamicCard = ({ image, title, description, className }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-xl h-96 flex flex-col shadow-xl bg-[#8165C0] overflow-hidden',
        className
      )}
    >
      {/* Image Container */}
      <div className="relative w-full pt-[100%] flex-shrink-0">
        <div className="absolute inset-0 m-4 transform transition-transform ease-in-out hover:scale-[1.05]">
          <Image
            src={image}
            alt={title}
            fill
            quality={100}
            className="rounded-xl object-cover"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-black text-center">
          {title}
        </h3>
        
        {/* Description (optional) */}
        {description && (
          <p className="text-sm md:text-base text-gray-800 text-center mt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default DynamicCard;