import Image from "next/image";
import { BudgetWithData } from "../types/types";

interface Props {
  budgetsWithData: BudgetWithData[];
  onEdit: (budget: BudgetWithData) => void;
}

export default function BudgetCard({ budgetsWithData, onEdit }: Props) {
  return (
    <div className="flex flex-col gap-6 ">
      {budgetsWithData.map((budget, index) => {
        const { transactions, spent, free, percentage } = budget;

        return (
          <div
            key={index}
            className="
              bg-white
              rounded-[12px]
              flex flex-col gap-5
              w-full
              max-w-[343px]
              md:max-w-[608px]
              p-5 md:p-6
              mx-auto
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: budget.theme }}
                />

                <h2 className="text-[20px] font-bold text-[#201F24]">
                  {budget.category}
                </h2>
              </div>

              <button
                className="text-[#696868] text-lg cursor-pointer"
                onClick={() => onEdit(budget)}
              >
                ...
              </button>
            </div>

            {/* MAX + PROGRESS */}
            <div className="flex flex-col gap-4">
              <p className="text-[14px] text-[#696868]">
                Maximum of ${budget.maximum.toFixed(2)}
              </p>

              <div className="bg-[#F8F4F0] rounded-[4px] p-1 h-8 overflow-hidden">
                <div
                  className="h-full rounded-[4px]"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: budget.theme,
                  }}
                />
              </div>

              <div className="flex gap-4">
                <div className="flex flex-1 items-center gap-3">
                  <div
                    className="w-1 h-[43px] rounded-[8px]"
                    style={{ backgroundColor: budget.theme }}
                  />

                  <div>
                    <p className="text-[12px] text-[#696868]">Spent</p>
                    <p className="text-[14px] font-bold text-[#201F24]">
                      ${spent.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 items-center gap-3">
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

            {/* LATEST SPENDING */}
            <div className="bg-[#F8F4F0] rounded-[12px] p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-bold text-[#201F24]">
                  Latest Spending
                </h3>

                <button className="text-[14px] text-[#696868]">See All</button>
              </div>

              <div className="flex flex-col gap-3">
                {transactions.slice(0, 3).map((t, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={32}
                          height={32}
                          className="rounded-full object-cover"
                        />

                        <p className="text-[12px] font-bold text-[#201F24]">
                          {t.name}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[12px] font-bold text-[#201F24]">
                          ${Math.abs(t.amount).toFixed(2)}
                        </p>

                        <p className="text-[12px] text-[#696868]">
                          {new Date(t.date).toLocaleDateString()}
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
