import { useState } from "react";
import Image from "next/image";

interface Props {
  potName: string;
  onClose: () => void;
  onAdd: (amount: number) => void;
  currentTotal: number;
}

export default function AddMoneyModal({
  potName,
  onClose,
  onAdd,
  currentTotal,
}: Props) {
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    const value = Number(amount);
    if (!value || value <= 0) return;

    onAdd(value);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-[320px] md:w-[560px] bg-white rounded-xl p-8 flex flex-col gap-6">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-3xl font-bold text-[#201F24]">
            Add Money to {potName}
          </h1>

          <button onClick={onClose}>
            <Image
              src="/images/icon-close.svg"
              alt="close"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* INFO */}
        <p className="text-sm text-[#696868]">
          Current saved: <span className="font-bold">${currentTotal}</span>
        </p>

        {/* INPUT */}
        <div>
          <label className="text-xs font-bold text-[#696868]">
            Amount to add
          </label>

          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            min={0}
            placeholder="e.g. 50"
            className="w-full mt-1 h-[45px] border border-[#98908B] rounded-lg px-4 outline-none"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full h-[53px] bg-[#201F24] text-white rounded-lg font-bold"
        >
          Add Money
        </button>
      </div>
    </div>
  );
}
