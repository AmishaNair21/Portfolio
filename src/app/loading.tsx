import Image from "next/image";



export default  function Loading() {

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-customlavendar">
      {/* Cat paw loading animation */}
      <div className="mb-8">
        <Image
          src="/paws.svg"
          width={100}
          height={100}
          alt="loading"
          className="animate-bounce"
        />
      </div>
      
      {/* Loading text */}
      <h2 className="text-[#FFE5E5] text-2xl font-bold animate-pulse">
        Loading...
      </h2>
      
      {/* Loading bar */}
      <div className="w-64 h-2 bg-[#5F4793]/30 rounded-full mt-4 overflow-hidden">
        <div className="h-full bg-[#FFE5E5]  animate-loading"></div>
      </div>
    </div>
  );
}