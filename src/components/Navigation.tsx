"use client"
export default function Navigation() {
  return (
    <nav className="bg-customlavendar border-b-2 border-[#5F4793] h-12 flex justify-end items-center md:h-12 2xl:h-16 w-full">
      <ul className="flex gap-3 md:gap-4 2xl:gap-9 2xl:text-lg text-white mx-4 md:mx-10">
        <li>Projects</li>
        <li>About me</li>
      </ul>
    </nav>
  );
}