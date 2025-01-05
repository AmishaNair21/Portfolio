
import "../styles/home.scss";
import Image from "next/image";
export default function Home() {
  return (
  <div>
    {/* landing page */}

    {/* navbar */}
<nav className="bg-customlavendar border-b-2 border-[#5F4793]  h-12 flex justify-end items-center md:h-12 2xl:h-16 w-full ">
  <ul className="flex gap-3 md:gap-4 2xl:gap-9 2xl:text-lg text-[#FFE5E5] mx-4  md:mx-10">
    <li>Projects</li>
    <li>About me</li>
  </ul>
</nav>


{/* hero page */}

<div className="flex flex-col justify-center items-center ">
  <div className="flex flex-col items-center w-full h-screen">
    <h1 className="text-center text-6xl 2xl:text-9xl drop-shadow-md md:mt-20 mt-10 2xl:mt-56 2xl:drop-shadow-xl  text-[#FFE5E5] hero-heading font-bold">Welcome to my portfolio</h1>

    <div className=" w-[70%] md:w-1/2 border-b  border-[#5F4793] transform -translate-y-10 flex justify-center  items-center overflow-visible">
      <Image src="/cat.svg" width={500} height={500} alt="cat" className="size-20 transform translate-y-[3rem] translate-x-20 md:translate-x-44 2xl:translate-x-80"/>
    </div>
    <div className="w-2/3  md:w-1/2 md:h-40  rounded-md border-b-8
    border-r-8 border-l-2 border-t-2
    border-[#5F4793]  2xl:h-72 2xl:mt-10 bg-[#8165C0] " >
    <div></div>
      <p className="p-5 2xl:text-4xl   2xl:p-10 ">
     Myself <span style={{ color: '#FFB0B0' }}>Amisha Nair</span>, an ambitiously lazy coder who has a keen interest in web technologies like Next.js and React.js. 
      I also occasionally delve into the creative side of web technologies, exploring tools like GSAP and Three.js. 
      </p>
      <div className="flex justify-end">
        <Image src="/paws.svg" width={50} height={50} alt="down arrow" />
      </div>
    </div>
  </div>
</div>



  </div>
  );
}
