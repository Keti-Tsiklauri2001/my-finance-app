import { useState } from "react";
import Image from "next/image";

interface AddNewPotModalProps {
  onClose: () => void;
  onAdd: (pot: {
    name: string;
    target: number;
    total: number;
    theme: string;
  }) => void;
}

export default function AddNewPotModal({
  onClose,
  onAdd,
}: AddNewPotModalProps) {
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  const [theme, setTheme] = useState("#277C78");

  const handleSubmit = () => {
    if (!name || !target) return;

    onAdd({
      name,
      target: Number(target),
      total: 0,
      theme,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-[300px] md:w-[560px] bg-white rounded-[12px] p-8 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] md:text-[32px] font-bold text-[#201F24]">
            Add New Pot
          </h1>

          <button
            onClick={onClose}
            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
          >
            <Image
              src="/images/icon-close.svg"
              alt="close"
              width={32}
              height={32}
            />
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-[#696868]">
          Create a savings pot to help track your progress towards a goal.
        </p>

        {/* Name */}
        <div>
          <label className="text-xs font-bold text-[#696868]">Pot Name</label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Vacation"
            className="w-full mt-1 h-[45px] border border-[#98908B] rounded-lg px-4 outline-none"
          />
        </div>

        {/* Target */}
        <div>
          <label className="text-xs font-bold text-[#696868]">
            Target Amount
          </label>

          <input
            value={target}
            onChange={(e) => {
              if (Number(e.target.value) < 0) return;
              setTarget(e.target.value);
            }}
            type="number"
            min={0}
            placeholder="e.g. 5000"
            className="w-full mt-1 h-[45px] border border-[#98908B] rounded-lg px-4 outline-none"
          />
        </div>

        {/* Theme */}
        <div>
          <label className="text-xs font-bold text-[#696868]">
            Theme Color
          </label>

          <input
            type="color"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full mt-1 h-[45px] border border-[#98908B] rounded-lg px-2 cursor-pointer"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full h-[53px] bg-[#201F24] text-white rounded-lg font-bold cursor-pointer"
        >
          Add Pot
        </button>
      </div>
    </div>
  );
}
