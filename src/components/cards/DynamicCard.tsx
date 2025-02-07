import Image from 'next/image';
import cn from 'classnames';

type CardProps = {
  image: string;
  title: string;
  description: string;
  className?: string;
};

const DynamicCard = ({ image, title, className }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-xl h-96 overflow-hidden flex flex-col items-center  shadow-xl bg-[#8165C0]',
        className
      )}
    >
      {/* Image Container */}
      <div
        className=" rounded-xl overflow-hidden mt-5 transform transition-transform ease-in-out hover:scale-[1.1]"
        style={{ aspectRatio: '1 / 1' }}
      >
        <Image
          src={image}
          alt={title}
          width="400"
          height="400"
         
          quality={100}
          objectFit="contain"
          objectPosition="center"
          className="rounded-xl"
        />
      </div>

      {/* Content Container */}
      <div className="text-center">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-black text-heading mt-4 py-2">
          {title}
        </h3>

     
      </div>
    </div>
  );
};

export default DynamicCard;