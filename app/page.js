import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   
   <div className="main flex w-[99vw] h-[50vh] rounded-lg py-10 mx-2 my-10 bg-purple-100">
    <div className="left w-1/2 h-full flex flex-col justify-center items-center">
    <p className="font-bold text-3xl">Shorten your URL here.</p>
    <p className="text-gray-400">You can shorten your URL here without login or credentials.</p>
    <div className="btns space-x-4 py-5">
    <Link href="/shorten"><button className="bg-purple-400 py-1 px-2 rounded-lg text-white">Start here</button></Link>
    <button className="bg-purple-400 py-1 px-2 rounded-lg text-white">Github</button>
    </div>
    </div>
    <div className="right w-1/2 h-full  relative">
    <Image src={"/webdev.gif"} alt="mainimage" height={100} width={500} />
    </div>
   </div>
   
  );
}
