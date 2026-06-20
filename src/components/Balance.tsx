"use client";

const balance = {
  current: 4836.0,
  income: 3814.25,
  expenses: 1700.5,
};

function formatMoney(value: number) {
  return `$${value.toFixed(2)}`;
}

export default function Balance() {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-[1100px] mx-auto w-full">
      {/* CURRENT BALANCE */}
      <div className="flex flex-col gap-3 p-5 h-[111px] flex-1 bg-[#201F24] rounded-xl text-white">
        <p className="text-[14px] leading-[150%]">Current Balance</p>
        <h1 className="text-[32px] font-bold leading-[120%]">
          {formatMoney(balance.current)}
        </h1>
      </div>

      {/* INCOME */}
      <div className="flex flex-col gap-3 p-5 h-[111px] flex-1 bg-white rounded-xl border border-[#E6E4E3]">
        <p className="text-[14px] leading-[150%] text-[#696868]">Income</p>
        <h1 className="text-[32px] font-bold leading-[120%] text-[#201F24]">
          {formatMoney(balance.income)}
        </h1>
      </div>

      {/* EXPENSES */}
      <div className="flex flex-col gap-3 p-5 h-[111px] flex-1 bg-white rounded-xl border border-[#E6E4E3]">
        <p className="text-[14px] leading-[150%] text-[#696868]">Expenses</p>
        <h1 className="text-[32px] font-bold leading-[120%] text-[#201F24]">
          {formatMoney(balance.expenses)}
        </h1>
      </div>
    </div>
  );
}
