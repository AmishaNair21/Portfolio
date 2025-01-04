
import "../styles/home.scss";
import Image from "next/image";
export default function Home() {
  return (
  <div>
    {/* landing page */}

    {/* navbar */}
<nav className="bg-customlavendar flex justify-end items-center md:h-12 w-full">
  <ul className="flex gap-4 text-[#FFE5E5] mx-10">
    <li>Projects</li>
    <li>About me</li>
  </ul>
</nav>


{/* hero page */}

<div className="flex flex-col justify-center items-center ">
  <div className="flex flex-col items-center w-full h-screen">
    <h1 className="text-center text-6xl drop-shadow-md mt-20 text-[#FFE5E5] hero-heading font-bold">Welcome to my portfolio</h1>

    <div className="w-1/2 border-b border-[#5F4793] transform -translate-y-10 flex justify-center items-center overflow-visible">
      <Image src="/cat.svg" width={500} height={500} alt="cat" className="size-20 transform translate-y-[3rem] translate-x-44"/>
    </div>
    <div className="w-1/2 h-40 bg-[#8165C0] " >
    <div></div>
      <p className="p-5">
     Myself <span style={{ color: '#FFB0B0' }}>Amisha Nair</span>, an ambitiously lazy coder who has a keen interest in web technologies like Next.js and React.js. 
      I also occasionally delve into the creative side of web technologies, exploring tools like GSAP and Three.js. 
      </p>
      <div className="flex justify-end">
        <Image src="/paws.svg" width={50} height={50} alt="down arrow" />
      </div>
    </div>
    <div className="bg-black h-40 -z-20 w-1/2   transform translate-x-3 -translate-y-[8.9rem] ">
    </div>
  </div>
</div>



  </div>
  );
}
