import { pots } from "@/src/data/data-pots";
import PotCard from "./PotCard";

export default function PotsList() {
  return (
    <div className="flex flex-col gap-6 xl:w-[1020px] mx-auto">
      <div className="xl:grid xl:grid-cols-2 xl:gap-6 flex flex-col gap-[24px]">
        {pots.map((pot) => (
          <PotCard key={pot.name} pot={pot} />
        ))}
      </div>
    </div>
  );
}
