
import "../styles/home.scss";
import Image from "next/image";
export default function Home() {
  return (
  <div>
    {/* landing page */}

    {/* navbar */}
<nav className="bg-customlavendar h-12 flex justify-end items-center md:h-12 2xl:h-16 w-full">
  <ul className="flex gap-3 md:gap-4 2xl:gap-9 2xl:text-lg text-[#FFE5E5] mx-4  md:mx-10">
    <li>Projects</li>
    <li>About me</li>
  </ul>
</nav>


{/* hero page */}

<div className="flex flex-col justify-center items-center ">
  <div className="flex flex-col items-center w-full h-screen">
    <h1 className="text-center text-6xl 2xl:text-8xl drop-shadow-md md:mt-20 mt-10  text-[#FFE5E5] hero-heading font-bold">Welcome to my portfolio</h1>

    <div className=" w-[70%] md:w-1/2 border-b  border-[#5F4793] transform -translate-y-10 flex justify-center  items-center overflow-visible">
      <Image src="/cat.svg" width={500} height={500} alt="cat" className="size-20 transform translate-y-[3rem] translate-x-20 md:translate-x-44 2xl:translate-x-80"/>
    </div>
    <div className="w-2/3  md:w-1/2 md:h-40 2xl:h-52 2xl:mt-8 bg-[#8165C0] " >
    <div></div>
      <p className="p-5 2xl:text-2xl 2xl:p-7 ">
     Myself <span style={{ color: '#FFB0B0' }}>Amisha Nair</span>, an ambitiously lazy coder who has a keen interest in web technologies like Next.js and React.js. 
      I also occasionally delve into the creative side of web technologies, exploring tools like GSAP and Three.js. 
      </p>
      <div className="flex justify-end">
        <Image src="/paws.svg" width={50} height={50} alt="down arrow" />
      </div>
    </div>
    <div className="bg-black sm:hidden 2xl:h-52 md:h-40 -z-30 w-52 md:w-1/2 transform md:translate-x-3 -translate-y-36 translate-x-10 md:-translate-y-[8.9rem] 2xl:-translate-y-[12rem]">
    </div>
  </div>
</div>



  </div>
  );
}
