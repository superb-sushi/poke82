import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog"
import CardFront from "@/components/CardFront"

import Image from "next/image"
import { useState } from "react";

interface Member {
  role: string;
  name: string;
  member_type: string; // Ownself
  member_nickname: string; // Ownself
  ability: string;
  ability_desc: string;
  move_1: string;
  move_1_power: number;
  move_1_desc: string;
  move_2: string;
  move_2_power: number;
  move_2_desc: string;
  verse: string; // Ownself
  image_url: string;
  isClicked: boolean;
}

const getColors = (type: string) => {
  const t = type.toLowerCase();

  switch (t) {
    case "fire":
      return [
        "bg-red-500", 
        "bg-orange-500", 
        "bg-gradient-to-br from-red-600 via-yellow-600 to-red-700"
      ];

    case "fairy":
      return [
        "bg-pink-500", 
        "bg-fuchsia-400", 
        "bg-gradient-to-br from-fuchsia-600 via-pink-400 to-purple-600"
      ];

    case "fighting":
      return [
        "bg-red-700", 
        "bg-amber-600", 
        "bg-gradient-to-br from-red-950 via-red-700 to-amber-700"
      ];

    case "flying":
      return [
        "bg-sky-400", 
        "bg-purple-400", 
        "bg-gradient-to-br from-blue-900 via-sky-800 to-purple-900"
      ];

    case "ice":
      return [
        "bg-cyan-100", 
        "bg-blue-300", 
        "bg-gradient-to-br from-blue-950 via-cyan-500 to-blue-800"
      ];

    case "grass":
      return [
        "bg-green-500", 
        "bg-lime-500", 
        "bg-gradient-to-br from-green-700 via-lime-400 to-emerald-700"
      ];

    case "water":
      return [
        "bg-blue-500", 
        "bg-cyan-500", 
        "bg-gradient-to-br from-cyan-900 via-blue-500 to-cyan-900"
      ];

    case "electric":
      return [
        "bg-gold-600", 
        "bg-gold-800", 
        "bg-gradient-to-br from-yellow-800 via-yellow-400 to-yellow-800"
      ];

    case "normal":
      return [
        "bg-stone-700", 
        "bg-stone-500", 
        "bg-gradient-to-br from-[#2C2C2C] via-[#66625D] to-[#2C2C2C]"
      ];

    default:
      return [
        "bg-gray-400", 
        "bg-gray-500", 
        "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      ];
  }
};


const CardBack = ({person}: {person: Member}) => {

  const [isClicked, setIsClicked] = useState<boolean>(person.isClicked);

  const triggerWiggle = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 700); // reset after animation
  };

  return (
    <Dialog>
        <DialogTrigger>
            <div className="relative hover:shadow-2xl hover:scale-[1.02] cursor-pointer duration-200 bg-[#7e93a5] border-[#1800ad] border-4 rounded-lg flex items-center justify-center aspect-card h-[300px] align-self-center justify-self-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src={"/pokeball.png"} alt="Pokeball" height={115} width={115} className="" />
                </div>
                <div className={`${person.name.length > 7 && !/\s/.test(person.name) ? "text-[40px]" :  "text-[50px]"} tracking-tighter leading-10 text-wrap text-center font-shrikhand text-[#ffde59] font-outline-2 rotate-340 max-w-[200px]`}>
                    {person.name.toLowerCase()}
                </div>
            </div>
        </DialogTrigger>
        <DialogContent onClick={triggerWiggle} className={`${getColors(person.member_type)[2]} cursor-pointer ${isClicked ? "rarity-wiggle rarity-sparkle" : ""} duration-200 metallic-card border-[#c0c0c0] border-4 rounded-lg w-full animate-gradient-x`}>
            <div className="w-full max-w-[450px] overflow-hidden flex justify-center items-center">
                <CardFront person={person}/>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default CardBack