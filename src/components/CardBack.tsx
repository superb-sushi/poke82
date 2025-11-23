
interface Member {
  role: string;
  name: string;
  ability: string;
  ability_desc: string;
  move_1: string;
  move_1_power: number;
  move_1_desc: string;
  move_2: string;
  move_2_power: number;
  move_2_desc: string;
  verse: string;
}

const CardBack = ({person}: {person: Member}) => {
  return (
    <div className=" hover:scale-[1.02] cursor-pointer duration-200 bg-[#7e93a5] border-[#1800ad] border-4 rounded-lg flex items-center justify-center aspect-card h-[350px] align-self-center justify-self-center">
        <div className="leading-10 text-wrap text-center font-shrikhand text-[#ffde59] font-outline-2 text-[50px] rotate-340 max-w-[200px]">
            {person.name.toLowerCase()}
        </div>
    </div>
  )
}

export default CardBack