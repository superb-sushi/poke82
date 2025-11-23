import { Sparkle, Sparkles } from "lucide-react";
import Image from "next/image"

interface Member {
  role: string;
  name: string;
  member_nickname: string;
  member_type: string;
  ability: string;
  ability_desc: string;
  move_1: string;
  move_1_power: number;
  move_1_desc: string;
  move_2: string;
  move_2_power: number;
  move_2_desc: string;
  verse: string;
  image_url: string;
}

const getColors = (type: string) => {
  const t = type.toLowerCase();

  switch (t) {
    case "fire":
      return ["bg-red-500", "bg-orange-500", "bg-red-800"];

    case "fairy":
      return ["bg-pink-400", "bg-fuchsia-400", "bg-pink-700"];

    case "fighting":
      return ["bg-red-700", "bg-amber-600", "bg-red-900"];

    case "flying":
      return ["bg-sky-400", "bg-purple-400", "bg-blue-800"];

    case "ice":
      return ["bg-cyan-300", "bg-blue-300", "bg-blue-900"];

    case "grass":
      return ["bg-green-500", "bg-lime-500", "bg-green-800"];

    case "water":
      return ["bg-blue-500", "bg-cyan-500", "bg-blue-900"];

    default:
      // generic fallback: steel-ish
      return ["bg-gray-400", "bg-gray-500", "bg-gray-700"];
  }
};

const CardFront = ({person}: {person: Member}) => {

    const colours = getColors(person.member_type);

  return (
    <div className="flex flex-col justify-start items-center aspect-card gap-2 w-full">
        <div id="top" className="h-[20px] flex text-white items-center w-full justify-between">
            <div></div>
            <div className="flex items-end gap-1">
                <div className="text-[14px]">
                    {person.role}
                </div>
                <div className="text-[19px] font-bold">
                    {person.name}
                </div>
            </div>
            <div className="flex items-end gap-1 pr-1.5">
                <div className="text-[14px]">
                    HP
                </div>
                <div className="text-[19px] font-bold">
                    100
                </div>
            </div>
        </div>
        <div className="w-full h-[42%] mb-4">
            <div id="pic" className="relative w-full h-[100%]">
                <Image src={person.image_url} alt={`Image of ${person.name}`} fill className="object-cover"/>
            </div>
            <div className="w-full h-[14px] text-[12px] bg-[#c0c0c0] flex items-center justify-center italic">
                {person.member_nickname + " | Type: " + person.member_type}
            </div>
        </div>
        <div id="content" className="flex flex-col gap-2 text-white w-full border-b-3 pb-3">
            <div id="ability" className="flex flex-col gap-1">
                <div id="ability-top" className="flex justify-between w-full">
                    <div id="ability-tag" className={`italic text-white font-bold rounded-xl px-4 flex items-center justify-center ${colours[0]}`}>
                        Ability
                    </div>
                    <div className="font-semibold">
                        {person.ability}
                    </div>
                    <div></div>
                </div>
                <div id="ability-desc">
                    {person.ability_desc}
                </div>
            </div>
            <div id="move1" className="flex flex-col gap-1">
                <div id="move1-top" className="flex justify-between w-full">
                    <div id="move1-tag" className={`italic text-white font-bold rounded-xl px-4 flex items-center justify-center ${colours[1]}`}>
                        Move #1
                    </div>
                    <div className="font-semibold">
                        {person.move_1}
                    </div>
                    <div className="font-semibold">
                        {person.move_1_power}
                    </div>
                </div>
                <div id="move1-desc">
                    {person.move_1_desc}
                </div>
            </div>
            <div id="move2" className="flex flex-col gap-1">
                <div id="move2-top" className="flex justify-between w-full">
                    <div id="move2-tag" className={`italic text-white font-bold rounded-xl px-4 flex items-center justify-center ${colours[1]}`}>
                        Move #2
                    </div>
                    <div className="font-semibold">
                        {person.move_2}
                    </div>
                    <div className="font-semibold">
                        {person.move_2_power}
                    </div>
                </div>
                <div id="move2-desc">
                    {person.move_2_desc}
                </div>
            </div>
        </div>
        <div>

        </div>
        <div className="flex items-center gap-5">
            <Sparkles stroke="gold" size={30}/>
            <div className="italic text-white flex text-start">
                {'"' + person.verse + '"'}
            </div>
        </div>
    </div>
  )
}

export default CardFront