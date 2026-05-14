import { Pot } from "../types/types";

type PotCardProps = {
  pot: Pot;
};

export default function PotCard({ pot }: PotCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col gap-8 w-[343px] md:w-[700px] xl:w-[500px]">
      {/* Header */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: pot.theme }}
          />

          <h2 className="text-[20px] font-bold text-[#201F24]">{pot.name}</h2>
        </div>

        <button className="cursor-pointer">•••</button>
      </div>

      {/* Saved */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#696868]">Total Saved</p>

          <h3 className="text-[32px] font-bold text-[#201F24]">${pot.total}</h3>
        </div>

        {/* Progress */}
        <div className="flex flex-col gap-3">
          <div className="h-2 bg-[#F8F4F0] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${pot.target}%`,
                backgroundColor: pot.theme,
              }}
            />
          </div>

          <div className="flex justify-between text-xs">
            <span className="font-bold text-[#696868]">{pot.target}%</span>

            <span className="text-[#696868]">Target of ${pot.target}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 bg-[#F8F4F0] rounded-lg py-4 font-bold text-sm cursor-pointer hover:bg-amber-100">
          + Add Money
        </button>

        <button className="flex-1 bg-[#F8F4F0] rounded-lg py-4 font-bold text-sm cursor-pointer cursor-pointer hover:bg-amber-100">
          Withdraw
        </button>
      </div>
    </div>
  );
}
