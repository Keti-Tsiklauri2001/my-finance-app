"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#201F24] z-50">
      {/* ================= XL SIDEBAR ================= */}
      <aside
        className={`
          hidden xl:flex flex-col h-screen bg-[#201F24]
          rounded-r-2xl transition-all duration-500 ease-in-out
          ${collapsed ? "w-[88px]" : "w-[300px]"}
          
        `}
      >
        {/* LOGO */}
        <div className="relative h-[21px] ml-8 mt-10 mb-10">
          {/* LARGE LOGO */}
          <Image
            src="/images/logo-large.svg"
            alt="Logo"
            width={120}
            height={21}
            className={`
      absolute left-0 top-0 transition-all duration-300
      ${collapsed ? "opacity-0 scale-95" : "opacity-100 scale-100"}
    `}
          />

          {/* SMALL LOGO */}
          <Image
            src="/images/logo-small.svg"
            alt="Logo"
            width={20}
            height={20}
            className={`
      absolute left-0 top-0 transition-all duration-300
      ${collapsed ? "opacity-100 scale-100" : "opacity-0 scale-95"}
    `}
          />
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-1 pr-4 flex-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <button
                key={item.label}
                onClick={() => router.push(item.href)}
                className={`
                  flex items-center py-4 rounded-r-xl
                  cursor-pointer transition-all duration-300 ease-out
                  hover:bg-white/5
                  ${collapsed ? "justify-center px-0" : "gap-4 px-8"}
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

                <div
                  className={`
    overflow-hidden transition-all duration-300
    ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
  `}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* MINIMIZE */}
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className={`
            flex items-center transition-all duration-300
            text-[#B3B3B3] hover:text-white cursor-pointer
            mb-6
            ${collapsed ? "justify-center px-0" : "gap-4 px-8"}
          `}
        >
          <Image
            alt="sidebar"
            width={20}
            height={20}
            src="/images/budgets.svg"
            className={`
              transition-transform duration-500
              ${collapsed ? "rotate-180" : ""}
            `}
          />

          {!collapsed && <span className="text-sm">Minimize Menu</span>}
        </button>
      </aside>

      {/* ================= MD TABLET ================= */}
      <div className="hidden md:flex fixed bottom-0 left-1/2 -translate-x-1/2 xl:hidden w-full h-[74px] bg-[#201F24] items-center justify-center rounded-xl">
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
    </div>
  );
}
