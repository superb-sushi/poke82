"use client"
import CardBack from "@/components/CardBack"
import { useState } from "react"

interface Member {
  role: string;
  name: string;
  member_type: string;
  member_nickname: string;
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

const CardPage = () => {

  const default_82 = [
    {
      name: "Rafaela Doe",
      role: "Support",
      image_url: "/placeholder.svg",
      member_nickname: "The Shield",
      member_type: "Fairy",
      ability: "Guardian Aura",
      ability_desc: "Reduces incoming damage for all allies by 20% for one turn.",
      move_1: "Healing Pulse",
      move_1_desc: "Restores health to the weakest ally.",
      move_1_power: 40,
      move_2: "Radiant Shield",
      move_2_desc: "Creates a barrier that blocks the next enemy attack.",
      move_2_power: 60,
      verse: "Let your light shine before others.",
    },
    {
      role: 'Cell Core',
      name: 'Yong Xin',
      member_nickname: 'YX',
      member_type: 'Water',
      ability: 'People Person',
      ability_desc: 'People love you!',
      move_1: 'Power 1',
      move_1_power: 90,
      move_1_desc: 'Power 1 desc',
      move_2: 'Power 2',
      move_2_power: 80,
      move_2_desc: 'Power 2 desc',
      verse: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind!',
      image_url: "/placeholder.svg",
    },
      {
      role: 'Cell Core',
      name: 'Yong Xin',
      member_nickname: 'YX',
      member_type: 'Flying',
      ability: 'People Person',
      ability_desc: 'People love you! People love you! People love you!People love you!People love you!People love you!',
      move_1: 'Power 1',
      move_1_power: 90,
      move_1_desc: 'Power 1 desc',
      move_2: 'Power 2',
      move_2_power: 80,
      move_2_desc: 'Power 2 desc',
      verse: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind!',
      image_url: "/placeholder.svg",
    },
      {
      role: 'Cell Core',
      name: 'Yong Xin',
      member_nickname: 'YX',
      member_type: 'Grass',
      ability: 'People Person',
      ability_desc: 'People love you!',
      move_1: 'Power 1',
      move_1_power: 90,
      move_1_desc: 'Power 1 desc',
      move_2: 'Power 2',
      move_2_power: 80,
      move_2_desc: 'Power 2 desc',
      verse: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind!',
      image_url: "/placeholder.svg",
    },
    {
      role: 'Cell Core',
      name: 'Yong Xin',
      member_nickname: 'YX',
      member_type: 'Ice',
      ability: 'People Person',
      ability_desc: 'People love you!',
      move_1: 'Power 1',
      move_1_power: 90,
      move_1_desc: 'Power 1 desc',
      move_2: 'Power 2',
      move_2_power: 80,
      move_2_desc: 'Power 2 desc',
      verse: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind!',
      image_url: "/placeholder.svg",
    }, 
    {
      role: 'Cell Core',
      name: 'Yong Xin',
      member_nickname: 'YX',
      member_type: 'Fighting',
      ability: 'People Person',
      ability_desc: 'People love you!',
      move_1: 'Power 1',
      move_1_power: 90,
      move_1_desc: 'Power 1 desc',
      move_2: 'Power 2',
      move_2_power: 80,
      move_2_desc: 'Power 2 desc',
      verse: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind!',
      image_url: "/placeholder.svg",
    },
      {
      role: 'Cell Core',
      name: 'Yong Xin',
      member_nickname: 'YX',
      member_type: 'Fire',
      ability: 'People Person',
      ability_desc: 'People love you!',
      move_1: 'Power 1',
      move_1_power: 90,
      move_1_desc: 'Power 1 desc',
      move_2: 'Power 2',
      move_2_power: 80,
      move_2_desc: 'Power 2 desc',
      verse: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind!',
      image_url: "/placeholder.svg",
    }
  ] as Member[];

  const [people, setPeople] = useState<Array<Member>>(default_82);

  return (
    <div className="h-screen grid lg:grid-cols-5 sm:grid-cols-1 items-center w-screen bg-[#2e2927] p-1">
        <div className="text-[#FFFFFF] bg-[url('/cardsbg.png')] lg:col-span-2 lg:flex hidden bg-contain bg-no-repeat h-full justify-center items-center font-spartan text-[90px] font-bold text-center">
            card collection
        </div>
        <div className="col-span-3 grid lg:grid-cols-3 sm:grid-cols-1 gap-y-4 h-[95%] overflow-y-scroll">
          {people.map((pax, id) => (
            <CardBack person={pax} key={id}/>
          ))}
        </div>
    </div>
  )
}

export default CardPage