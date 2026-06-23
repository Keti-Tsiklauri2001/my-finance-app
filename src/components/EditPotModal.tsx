import { useState } from "react";
import Image from "next/image";
import { Pot } from "../types/types";

interface EditPotModalProps {
  pot: Pot;
  onClose: () => void;
  onSave: (updatedPot: Pot) => void;
}

export default function EditPotModal({
  pot,
  onClose,
  onSave,
}: EditPotModalProps) {
  const [name, setName] = useState(pot.name);
  const [target, setTarget] = useState(String(pot.target));
  const [theme, setTheme] = useState(pot.theme);

  const handleSubmit = () => {
    if (!name || !target) return;

    onSave({
      ...pot,
      name,
      target: Number(target),
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
            Edit Pot
          </h1>

          <button onClick={onClose} className="cursor-pointer">
            <Image
              src="/images/icon-close.svg"
              alt="close"
              width={32}
              height={32}
            />
          </button>
        </div>

        <p className="text-sm text-[#696868]">
          Update your savings pot details.
        </p>

        {/* Pot Name */}
        <div>
          <label className="text-xs font-bold text-[#696868]">Pot Name</label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setTarget(e.target.value)}
            type="number"
            min={0}
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

        <button
          onClick={handleSubmit}
          className="w-full h-[53px] bg-[#201F24] text-white rounded-lg font-bold"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
