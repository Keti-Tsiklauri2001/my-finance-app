// BudgetCard.tsx

import { budgets } from "@/data/data-budgets";
import { transactions } from "./data-transactions";

export default function BudgetCard() {
  return (
    <div className="flex flex-col gap-6">
      {budgets.map((budget, index) => {
        const filteredTransactions = transactions.filter(
          (transaction) => transaction.category === budget.category,
        );

        const spent = filteredTransactions.reduce(
          (acc, current) => acc + Math.abs(current.amount),
          0,
        );

        const free = budget.maximum - spent;

        const percentage = (spent / budget.maximum) * 100;

        return (
          <div
            key={index}
            className="
              bg-white
              rounded-[12px]
              p-8
              flex
              flex-col
              gap-5
              w-full
              max-w-[608px]
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: budget.theme,
                  }}
                />

                <h2 className="text-[20px] leading-[120%] font-bold text-[#201F24]">
                  {budget.category}
                </h2>
              </div>

              <button className="text-[#696868]">...</button>
            </div>

            {/* Progress */}
            <div className="flex flex-col gap-4">
              <p className="text-[14px] text-[#696868]">
                Maximum of ${budget.maximum.toFixed(2)}
              </p>

              {/* Progress Bar */}
              <div className="bg-[#F8F4F0] rounded-[4px] p-1 h-8">
                <div
                  className="h-full rounded-[4px]"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: budget.theme,
                  }}
                />
              </div>

              {/* Spent / Free */}
              <div className="flex items-center gap-4">
                {/* Spent */}
                <div className="flex flex-1 items-center gap-4">
                  <div
                    className="w-1 h-[43px] rounded-[8px]"
                    style={{
                      backgroundColor: budget.theme,
                    }}
                  />

                  <div>
                    <p className="text-[12px] text-[#696868]">Spent</p>

                    <p className="text-[14px] font-bold text-[#201F24]">
                      ${spent.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Free */}
                <div className="flex flex-1 items-center gap-4">
                  <div className="w-1 h-[43px] rounded-[8px] bg-[#F8F4F0]" />

                  <div>
                    <p className="text-[12px] text-[#696868]">Free</p>

                    <p className="text-[14px] font-bold text-[#201F24]">
                      ${free.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Spending */}
            <div className="bg-[#F8F4F0] rounded-[12px] p-5 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-bold text-[#201F24]">
                  Latest Spending
                </h3>

                <button className="text-[14px] text-[#696868]">See All</button>
              </div>

              <div className="flex flex-col gap-3">
                {filteredTransactions.map((transaction) => (
                  <div key={transaction.date}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={transaction.avatar}
                          alt={transaction.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />

                        <p className="text-[12px] font-bold text-[#201F24]">
                          {transaction.name}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[12px] font-bold text-[#201F24]">
                          ${Math.abs(transaction.amount).toFixed(2)}
                        </p>

                        <p className="text-[12px] text-[#696868]">
                          {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="h-[1px] bg-[#696868]/15 mt-3" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
