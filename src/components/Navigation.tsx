"use client"
import Button from "./effects/3d-type-button";

export default function Navigation() {
  return (
    <nav className="bg-customlavendar border-b-2 border-[#5F4793]  flex justify-end items-center md:h-12 2xl:h-16 w-full">
      <ul className="flex gap-2 md:gap-4 2xl:gap-9 2xl:text-lg text-white mx-4 md:mx-10">
        <li>
           <Button handleclick={() => console.log("hello")}>Project</Button>
          </li>
       

        <li>
            <Button handleclick={() => console.log("hello")}>About</Button>
        </li>
        <li>
           <Button handleclick={() => console.log("hello")}>Resume</Button>
        </li>
      </ul>
    </nav>
  );
}