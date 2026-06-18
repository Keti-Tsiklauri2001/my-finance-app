import PotCard from "./PotCard";
import { Pot } from "../types/types";

type Props = {
  pots: Pot[];
};

export default function PotsList({ pots }: Props) {
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
