"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  {
    label: "Overview",
    href: "/",
    icon: "/images/icon-nav-overview.svg",
    iconActive: "/images/overview.svg",
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: "/images/icon-nav-transactions.svg",
    iconActive: "/images/transactions.svg",
  },
  {
    label: "Budgets",
    href: "/budgets",
    icon: "/images/icon-nav-budgets.svg",
    iconActive: "/images/budgets.svg",
  },
  {
    label: "Pots",
    href: "/pots",
    icon: "/images/icon-nav-pots.svg",
    iconActive: "/images/pots.svg",
  },
  {
    label: "Recurring Bills",
    href: "/recurring-bills",
    icon: "/images/icon-nav-recurring-bills.svg",
    iconActive: "/images/recurring-bills.svg",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* ================= XL SIDEBAR ================= */}
      <aside className="hidden xl:flex flex-col w-[300px] h-screen bg-[#201F24] rounded-r-2xl">
        <div className="px-8 py-10">
          <Image
            src="/images/logo-large.svg"
            alt="Logo"
            width={120}
            height={21}
          />
        </div>
        <nav className="flex flex-col gap-1 pr-4 flex-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <button
                key={item.label}
                onClick={() => router.push(item.href)}
                className={`
                  flex items-center gap-4 px-8 py-4 rounded-r-xl
                  cursor-pointer transition-all duration-300 ease-out
                  hover:bg-white/5
                  ${
                    isActive
                      ? "bg-[#F8F4F0] text-[#201F24] border-l-4 border-[#277C78]"
                      : "text-[#B3B3B3]"
                  }
                `}
              >
                <Image
                  src={isActive ? item.iconActive : item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                />

                <span className="font-semibold">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="px-8 py-6 text-[#B3B3B3] text-sm cursor-pointer hover:text-white transition">
          Minimize Menu
        </div>
      </aside>

      {/* ================= MD TABLET ================= */}
      <div className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 xl:hidden w-[100%] h-[74px] bg-[#201F24] items-center justify-center rounded-xl">
        <div className="flex gap-10">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <button
                key={item.label}
                onClick={() => router.push(item.href)}
                className={`
                  flex flex-col items-center gap-1 px-4 py-2 cursor-pointer
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#F8F4F0] text-[#201F24] border-b-4 border-[#277C78]"
                      : "text-[#B3B3B3]"
                  }
                `}
              >
                <Image
                  src={isActive ? item.iconActive : item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                />

                <span className="text-[12px] font-bold">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-[52px] bg-[#201F24] flex items-center justify-between px-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <button
              key={item.label}
              onClick={() => router.push(item.href)}
              className={`
                flex flex-col items-center justify-center w-full
                cursor-pointer transition-all duration-300
                ${
                  isActive
                    ? "text-[#277C78] border-b-2 border-[#277C78]"
                    : "text-[#B3B3B3]"
                }
              `}
            >
              <Image
                src={isActive ? item.iconActive : item.icon}
                alt={item.label}
                width={20}
                height={20}
              />
            </button>
          );
        })}
      </div>
    </>
  );
}
