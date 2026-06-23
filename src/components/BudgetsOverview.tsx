import Link from "next/link";
import SpendingSummary from "./SpendingSummary";
export default function BudgetsOverview() {
  return (
    <div className="pt-4 md:pt-8 ">
      <div className="w-[340px] md:w-[700px] xl:w-[360px] mx-auto">
        <div className="flex items-center justify-between ">
          <h2 className="text-[20px] font-bold leading-[120%] text-[#201F24]">
            My Budgets
          </h2>

          <Link
            href="/budgets"
            className="flex items-center gap-3 text-[14px] leading-[150%] text-[#696868]"
          >
            <span>See Details</span>
            <span className="text-[16px]">›</span>
          </Link>
        </div>
      </div>
      <SpendingSummary />
    </div>
  );
}
