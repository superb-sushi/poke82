import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('/poke82.png')] bg-cover bg-center h-screen flex min-h-screen items-center justify-end pr-[10%]">
      <div className="flex-col gap-1">
        <div className="peer font-spartan text-[105px] font-bold tracking-tight text-[#FFFFFF]">this is <u>8.2</u></div>
        <div className="opacity-0 translate-y-[-25px] transition duration-400 ease-out peer-hover:opacity-100 peer-hover:translate-y-[-15px] hover:opacity-100 hover:translate-y-[-15px] flex justify-end group gap-2 items-center text-[#FFFFFF]">
          <span className="group-hover:opacity-100 opacity-0 duration-300 text-center">{">"}</span>
          <Link href="/cards" className="font-spartan text-[22.5px] peer cursor-pointer text-center">card collection</Link>
        </div>
      </div>
    </div>
  );
}
