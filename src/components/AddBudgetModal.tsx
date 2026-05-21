import { useState } from "react";
import Image from "next/image";

interface AddBudgetModalProps {
  onClose: () => void;
  onAdd: (data: { category: string; maximum: number; theme: string }) => void;
}

export default function AddBudgetModal({
  onClose,
  onAdd,
}: AddBudgetModalProps) {
  const [category, setCategory] = useState("");
  const [maximum, setMaximum] = useState("");
  const [theme, setTheme] = useState("#277C78");

  const handleSubmit = () => {
    if (!category || !maximum) return;

    onAdd({
      category,
      maximum: Number(maximum),
      theme,
    });

    setCategory("");
    setMaximum("");
    setTheme("#277C78");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-[300px] md:w-[560px] h-[490px] bg-white rounded-[12px] p-8 flex flex-col gap-5">
        {/* TITLE */}
        <div className="flex justify-between items-center">
          <h1 className="text-[20px] md:text-[32px] font-bold text-[#201F24]">
            Add New Budget
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

        {/* DESCRIPTION */}
        <p className="text-sm text-[#696868]">
          Create a budget to track your spending and stay on target.
        </p>

        {/* CONTENT */}
        <div className="flex flex-col gap-4">
          {/* Category */}
          <div>
            <label className="text-xs font-bold text-[#696868]">
              Budget Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Entertainment"
              className="w-full mt-1 h-[45px] border border-[#98908B] rounded-lg px-4 outline-none"
            />
          </div>

          {/* Maximum Spending */}
          <div>
            <label className="text-xs font-bold text-[#696868]">
              Maximum Spending
            </label>
            <input
              value={maximum}
              onChange={(e) => {
                const value = e.target.value;

                if (Number(value) < 0) return;

                setMaximum(value);
              }}
              placeholder="e.g. 2000"
              type="number"
              min={0}
              className="w-full mt-1 h-[45px] border border-[#98908B] rounded-lg px-4 outline-none"
            />
          </div>

          {/* Theme (Color) */}
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
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full h-[53px] bg-[#201F24] text-white rounded-lg font-bold cursor-pointer"
        >
          Add Budget
        </button>
      </div>
    </div>
  );
}
