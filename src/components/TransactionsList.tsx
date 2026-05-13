import Image from "next/image";
import { transactions } from "../data/data-transactions";

function formatAmount(amount: number) {
  const sign = amount > 0 ? "+" : "-";
  return `${sign}$${Math.abs(amount).toFixed(2)}`;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function TransactionsList() {
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
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col min-w-0 md:flex-row md:justify-between md:w-[300px] ">
                <p className="font-bold text-sm sm:text-sm text-[#201F24] truncate">
                  {tx.name}
                </p>

                <p className="text-xs text-[#696868] truncate md:float-right">
                  {tx.category}
                </p>
              </div>
            </div>

            {/* DATE (hidden on very small screens if needed) */}
            <div className="flex flex-col md:flex-row  md:w-[300px] md:justify-between">
              <div className="   text-xs text-[#696868]">
                {formatDate(tx.date)}
              </div>

              {/* AMOUNT */}
              <div
                className={` font-bold text-sm sm:w-[120px] ${
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
