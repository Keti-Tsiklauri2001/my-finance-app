import { ReactNode } from "react";

interface PaginationNumberProps {
  isActive?: boolean;
  isEllipsis?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

function PaginationNumber({
  isActive = false,
  children,
  onClick,
  isEllipsis = false,
}: PaginationNumberProps) {
  return (
    <button
      onClick={onClick}
      tabIndex={isEllipsis ? -1 : 0}
      aria-hidden={isEllipsis ? "true" : "false"}
      aria-label={isEllipsis ? undefined : `Page ${children}`}
      aria-current={isActive ? "page" : undefined}
      className={`border size-10 flex items-center justify-center text-preset-4 rounded-lg transition-all duration-200 ease-in-out focusable-ring
        ${
          isActive
            ? "bg-[#201F24] text-white border-[#201F24]  cursor-default"
            : isEllipsis
              ? "text-content-main border-border-base pointer-events-none cursor-default"
              : "text-content-main hover:bg-surface-tertiary-hover hover:text-content-inverse border-border-base cursor-pointer"
        }
      `}
    >
      {children}
    </button>
  );
}

export default PaginationNumber;
