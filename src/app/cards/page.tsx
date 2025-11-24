"use client"
import CardBack from "@/components/CardBack"
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
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
  isClicked: boolean;
}

const CardPage = () => {

  const default_82 = [
  {
    name: "Zechary",
    role: "core member",
    image_url: "/zech.jpg",
    member_nickname: "zec",
    member_type: "Normal",
    ability: "Tech Boost",
    ability_desc: "Resolves all tech issues within a radius of one house!",
    move_1: "Instant Charge",
    move_1_desc: "Carries powerbank around. All nearby phones +50% battery!",
    move_1_power: 40,
    move_2: "Seniority Buff",
    move_2_desc: "Effortlessly guide younger members. His calm presence restores order and boosts the team’s morale.",
    move_2_power: 80,
    verse: "'The worst thing for a Christian is not how many bad things you could have done. But how many good things that you did not do.' - CJ",
    isClicked: false
  },
  {
    name: "Yong Xin",
    role: "core member",
    image_url: "/yongxin.jpg",
    member_nickname: "White Sentinel",
    member_type: "Ice",
    ability: "Frozen Guard",
    ability_desc: "Reduces damage from physical attacks.",
    move_1: "Frostbite Jab",
    move_1_desc: "A chilling punch that slows the target.",
    move_1_power: 35,
    move_2: "Glacial Wall",
    move_2_desc: "Creates a barrier of ice that absorbs damage.",
    move_2_power: 0,
    verse: "Though your sins are like scarlet, they shall be white as snow.",
    isClicked: false
  },
  {
    name: "Belle",
    role: "core member",
    image_url: "/belle.jpg",
    member_nickname: "belle",
    member_type: "Fairy",
    ability: "Blessing Breeze",
    ability_desc: "Radiates a soft protective aura. Boost the morale of nearby allies, granting them +10 positivity.",
    move_1: "Enchanting Insight",
    move_1_desc: "By speaking wisdom wrapped in friendliness, the user is able to communicate with anyone from any age range!",
    move_1_power: 65,
    move_2: "Radiant Bless-Up",
    move_2_desc: "Fire a dazzling wave of warmth to an ally. Increases ally appreciation!",
    move_2_power: 50,
    verse: "Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.",
    isClicked: false
  },
  {
    name: "Joshua",
    role: "core member",
    image_url: "/joshua.jpg",
    member_nickname: "Earthshaker",
    member_type: "Fighting",
    ability: "Iron Fist",
    ability_desc: "Increases damage of all physical moves.",
    move_1: "Quake Punch",
    move_1_desc: "A heavy punch that shakes the ground.",
    move_1_power: 65,
    move_2: "Stone Guard",
    move_2_desc: "Raises defense significantly for one turn.",
    move_2_power: 0,
    verse: "The strong shall stand firm in the Lord.",
    isClicked: false
  },
  {
    name: "Valerie",
    role: "alumni",
    image_url: "/placeholder.svg",
    member_nickname: "Blazeborn",
    member_type: "Fire",
    ability: "Flame Spirit",
    ability_desc: "Boosts fire-type moves when HP is low.",
    move_1: "Inferno Kick",
    move_1_desc: "A blazing kick that scorches the opponent.",
    move_1_power: 70,
    move_2: "Heatwave Burst",
    move_2_desc: "Creates a wave of heat that damages all enemies.",
    move_2_power: 55,
    verse: "For our God is a consuming fire.",
    isClicked: false
  },
  {
    name: "Jean",
    role: "cell member",
    image_url: "/jean.jpg",
    member_nickname: "Blue Current",
    member_type: "Water",
    ability: "Aqua Shield",
    ability_desc: "Reduces water damage taken by allies.",
    move_1: "Tidal Strike",
    move_1_desc: "Slams enemies with a wave of water.",
    move_1_power: 50,
    move_2: "Healing Rain",
    move_2_desc: "Restores HP of all allies over time.",
    move_2_power: 0,
    verse: "He leads me beside still waters.",
    isClicked: false
  },
  {
    name: "Greg",
    role: "cell member",
    image_url: "/greg.jpg",
    member_nickname: "Green Thumb",
    member_type: "Grass",
    ability: "Nature's Blessing",
    ability_desc: "Gradually restores allies' health each turn.",
    move_1: "Vine Whip",
    move_1_desc: "Whips enemies with thick vines.",
    move_1_power: 45,
    move_2: "Leaf Shield",
    move_2_desc: "Blocks one attack and counterattacks lightly.",
    move_2_power: 20,
    verse: "The earth is the Lord's and all it contains.",
    isClicked: false
  },
  {
    name: "Hannah",
    role: "cell member",
    image_url: "/hannah.jpg",
    member_nickname: "Blazing Inferno",
    member_type: "Fire",
    ability: "Burning Passion",
    ability_desc: "Deals bonus damage when HP is above 50%.",
    move_1: "Fireball",
    move_1_desc: "Launches a blazing fireball at the enemy.",
    move_1_power: 60,
    move_2: "Flame Charge",
    move_2_desc: "Charges forward engulfed in flames.",
    move_2_power: 50,
    verse: "Set your hearts on fire with His love.",
    isClicked: false
  },
  {
    name: "Gabriel",
    role: "cell member",
    image_url: "/gabriel.jpg",
    member_nickname: "Wind Runner",
    member_type: "Flying",
    ability: "Air Glide",
    ability_desc: "Avoids the first attack each turn.",
    move_1: "Gale Kick",
    move_1_desc: "Kicks with a burst of wind.",
    move_1_power: 40,
    move_2: "Aerial Slash",
    move_2_desc: "Fast strike from above.",
    move_2_power: 55,
    verse: "He makes the wind His messenger.",
    isClicked: false
  },
  {
    name: "Cheyne",
    role: "cell member",
    image_url: "/cheyne.jpg",
    member_nickname: "cheyne",
    member_type: "Fire",
    ability: "Flame Rally",
    ability_desc: "Rally individuals & reignite dead conversations in the entire room.",
    move_1: "Insane Inferno",
    move_1_desc: "Conjure crazy thoughts and conversations that empower allies and scorch nearby enemies.",
    move_1_power: 80,
    move_2: "Ember Melody",
    move_2_desc: "User enriches herself in fire-filled inspiration, before unleashing killer melodious notes. (x1-4 times)",
    move_2_power: 50,
    verse: "The grass withers and the flowers fall, but the word of our God endures forever.",
    isClicked: false
  },
  {
    name: "Isaiah",
    role: "cell member",
    image_url: "/isaiah.jpg",
    member_nickname: "Blazeborn",
    member_type: "Fire",
    ability: "Flame Spirit",
    ability_desc: "Boosts fire-type moves when HP is low.",
    move_1: "Inferno Kick",
    move_1_desc: "A blazing kick that scorches the opponent.",
    move_1_power: 70,
    move_2: "Heatwave Burst",
    move_2_desc: "Creates a wave of heat that damages all enemies.",
    move_2_power: 55,
    verse: "For our God is a consuming fire.",
    isClicked: false
  },
  {
    name: "Jair",
    role: "cell member",
    image_url: "/jair.jpg",
    member_nickname: "Blazeborn",
    member_type: "Water",
    ability: "Water Spirit",
    ability_desc: "Boosts fire-type moves when HP is low.",
    move_1: "Inferno Kick",
    move_1_desc: "A blazing kick that scorches the opponent.",
    move_1_power: 70,
    move_2: "Heatwave Burst",
    move_2_desc: "Creates a wave of heat that damages all enemies.",
    move_2_power: 55,
    verse: "For our God is a consuming fire.",
    isClicked: false
  },
  {
    name: "Maegan",
    role: "cell member",
    image_url: "/maegan.jpg",
    member_nickname: "maegyyy",
    member_type: "Fire",
    ability: "Fiery Revelation",
    ability_desc: "All knowledge has been enhanced (fuelled) by 50%",
    move_1: "Inferno Punch",
    move_1_desc: "Throw a blazing punch that leaves enemies scathed. (Her cell leader is immune to this attack)!",
    move_1_power: 70,
    move_2: "Conduction Stance",
    move_2_desc: "Generate regenerative heat. +5 HP every turn!",
    move_2_power: 5,
    verse: "When the going gets tough, the tough keep going",
    isClicked: false
  },
  {
    name: "Nigel",
    role: "cell member",
    image_url: "/placeholder.svg",
    member_nickname: "Blazeborn",
    member_type: "Fire",
    ability: "Flame Spirit",
    ability_desc: "Boosts fire-type moves when HP is low.",
    move_1: "Inferno Kick",
    move_1_desc: "A blazing kick that scorches the opponent.",
    move_1_power: 70,
    move_2: "Heatwave Burst",
    move_2_desc: "Creates a wave of heat that damages all enemies.",
    move_2_power: 55,
    verse: "For our God is a consuming fire.",
    isClicked: false
  },
  {
    name: "Kaelyn",
    role: "cell member",
    image_url: "/kaelyn.jpg",
    member_nickname: "kiong (biggest back)",
    member_type: "Electric",
    ability: "Quick Recharge",
    ability_desc: "Bounce back from tiredness with shocking speed, restoring full hype and inspiring allies. (-1 bubble tea)",
    move_1: "Static Hand Stand",
    move_1_desc: "Performs electrifying hand stand that stuns all enemies.",
    move_1_power: 60,
    move_2: "Circuit Overdrive",
    move_2_desc: "Unleash a large blast of electricity, paralysing all foes. Requires a recharge (-1 bubble tea).",
    move_2_power: 90,
    verse: "Hello.",
    isClicked: false
  },
  {
    name: "Callum",
    role: "cell member",
    image_url: "/callum.jpg",
    member_nickname: "Yoshi",
    member_type: "Grass",
    ability: "Rooted Resolve",
    ability_desc: "Unaffected by distraction, user's quiet resilience steadies himself.",
    move_1: "Photosynthesizer",
    move_1_desc: "Uses light to produce harmonious notes. All allies receive +10 inspiration.",
    move_1_power: 50,
    move_2: "Nature's Language",
    move_2_desc: "User resolves back to unfamiliar music, confusing enemies.",
    move_2_power: 75,
    verse: "'LIFE IS LIKE A SHOE, YOU CANNOT DRINK A COW BECAUSE THE EARTH IS CARROT THINK ABOUT IT' ~ Victor Boniface",
    isClicked: false
  },
  {
    name: "Emmanuel",
    role: "cell member",
    image_url: "/emmanuel.jpg",
    member_nickname: "Blazeborn",
    member_type: "Fire",
    ability: "Flame Spirit",
    ability_desc: "Boosts fire-type moves when HP is low.",
    move_1: "Inferno Kick",
    move_1_desc: "A blazing kick that scorches the opponent.",
    move_1_power: 70,
    move_2: "Heatwave Burst",
    move_2_desc: "Creates a wave of heat that damages all enemies.",
    move_2_power: 55,
    verse: "For our God is a consuming fire.",
    isClicked: false
  },
  {
    name: "Amelia",
    role: "cell member",
    image_url: "/amelia.jpg",
    member_nickname: "Mynn",
    member_type: "Fairy",
    ability: "Pixie Charm",
    ability_desc: "A playful aura that boosts happiness and teamwork around the user.",
    move_1: "Wishful Wink",
    move_1_desc: "A twinkling glance that strikes fear in the hearts of enemies",
    move_1_power: 70,
    move_2: "Gleam Dance",
    move_2_desc: "Channel inner K-POP energy to blast foes away.",
    move_2_power: 60,
    verse: "‘I can do all things through Christ who strengthens me.",
    isClicked: false
  },
  {
    name: "Sophia",
    role: "cell member",
    image_url: "/sophia.jpg",
    member_nickname: "Blazeborn",
    member_type: "Fire",
    ability: "Flame Spirit",
    ability_desc: "Boosts fire-type moves when HP is low.",
    move_1: "Inferno Kick",
    move_1_desc: "A blazing kick that scorches the opponent.",
    move_1_power: 70,
    move_2: "Heatwave Burst",
    move_2_desc: "Creates a wave of heat that damages all enemies.",
    move_2_power: 55,
    verse: "For our God is a consuming fire.",
    isClicked: false
  },
  {
    name: "Mirabel",
    role: "cell member",
    image_url: "/mirabel.jpg",
    member_nickname: "Mimi",
    member_type: "Fire",
    ability: "Blazing Roast",
    ability_desc: "Consumes all snacks and sweets within a 5m distance, converting them into attacking strength.",
    move_1: "Burn a Garden",
    move_1_desc: "Eliminates all enemies in any Roblox game.",
    move_1_power: 70,
    move_2: "Ashened Emote",
    move_2_desc: "Petrify enemies with the bombastic side-eye. 50% chance to emote, dealing extra damage.",
    move_2_power: 50,
    verse: "Adam.",
    isClicked: false
  },
  {
    name: "Raeann",
    role: "cell member",
    image_url: "/placeholder.svg",
    member_nickname: "rae",
    member_type: "Fairy",
    ability: "Warm Guard",
    ability_desc: "Shields allies with a soft aura of quiet encouragement.",
    move_1: "Nourish",
    move_1_desc: "Bakes batches of pastries that empower all allies. (+10 ATK to all allies)",
    move_1_power: 40,
    move_2: "Prayer Burst",
    move_2_desc: "Erupts in thoughtful prayer, shielding allies from incoming attacks.",
    move_2_power: 60,
    verse: "Have I not commanded you? Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go.",
    isClicked: false
  },
  ] as Member[];

  const [people, setPeople] = useState<Array<Member>>(default_82);

  return (
    <div className="h-screen grid lg:grid-cols-5 sm:grid-cols-1 items-center w-screen bg-[#2e2927] p-1 relative">
        <div className="text-[#FFFFFF] bg-[url('/cardsbg.png')] lg:col-span-2 lg:flex hidden bg-contain bg-no-repeat h-full justify-center items-center font-spartan text-[90px] font-bold text-center">
            card collection
        </div>
        <div className="col-span-3 grid lg:grid-cols-3 sm:grid-cols-1 gap-y-4 h-[95%] overflow-y-scroll">
          {people.map((pax, id) => (
            <CardBack person={pax} key={id}/>
          ))}
        </div>
        <Link href="/" className="absolute bottom-5 left-5">
          <CircleArrowLeft stroke={'white'} size={30}/>
        </Link>
    </div>
  )
}

export default CardPage