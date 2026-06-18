import { useState } from "react";
import Image from "next/image";

interface EditBudgetModalProps {
  onClose: () => void;
  onSave: (data: { category: string; maximum: number; theme: string }) => void;
  budget: {
    category: string;
    maximum: number;
    theme: string;
  };
}

export default function EditBudgetModal({
  onClose,
  onSave,
  budget,
}: EditBudgetModalProps) {
  const [category, setCategory] = useState(budget.category);
  const [maximum, setMaximum] = useState(String(budget.maximum));
  const [theme, setTheme] = useState(budget.theme);

  const handleSubmit = () => {
    if (!category || !maximum) return;

    onSave({
      category,
      maximum: Number(maximum),
      theme,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-[300px] md:w-[560px] h-[490px] bg-white rounded-[12px] p-8 flex flex-col gap-5">
        {/* TITLE */}
        <div className="flex justify-between items-center">
          <h1 className="text-[20px] md:text-[32px] font-bold text-[#201F24]">
            Edit Budget
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
        <p className="text-sm text-[#696868]">Update your budget details.</p>

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
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full h-[53px] bg-[#201F24] text-white rounded-lg font-bold cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
