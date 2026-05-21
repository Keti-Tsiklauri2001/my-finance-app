import Image from "next/image";

import { Transaction } from "@/src/types/types";
function formatAmount(amount: number) {
  const sign = amount > 0 ? "+" : "-";
  return `${sign}$${Math.abs(amount).toFixed(2)}`;
}

type Props = {
  transactions: Transaction[];
};

export default function TransactionsList({ transactions }: Props) {
  function formatDate(dateString: string) {
    return dateString.split("T")[0];
  }
  return (
    <div className="flex flex-col gap-4 w-full max-w-[996px] mx-auto">
      {transactions.map((tx, index) => (
        <div key={index}>
          <div className="flex items-center justify-between gap-4 px-4 py-2 rounded-lg">
            {/* LEFT */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#F8F4F0] relative shrink-0">
                <Image
                  src={tx.avatar}
                  alt={tx.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col md:flex-row md:w-[300px] md:justify-between">
                <p className="font-bold text-sm text-[#201F24] ">{tx.name}</p>

                <p className="text-xs text-[#696868] whitespace-nowrap ">
                  {tx.category}
                </p>
              </div>
            </div>

            {/* DATE + AMOUNT */}
            <div className="flex flex-col md:flex-row md:w-[300px] md:justify-between">
              <div className="text-xs text-[#696868]">
                {formatDate(tx.date)}
              </div>

              <div
                className={`font-bold text-sm ${
                  tx.amount > 0 ? "text-[#201F24]" : "text-[#277C78]"
                }`}
              >
                {formatAmount(tx.amount)}
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#F2F2F2]" />
        </div>
      ))}
    </div>
  );
}
