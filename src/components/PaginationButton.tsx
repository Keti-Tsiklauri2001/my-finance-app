import Image from "next/image";
import { ReactNode } from "react";

type ButtonText = "Next" | "Prev" | string;

interface PaginationButtonProps {
  buttonText: ButtonText;
  onClick: () => void;
  isDisabled?: boolean;
}

function PaginationButton({
  buttonText,
  onClick,
  isDisabled = false,
}: PaginationButtonProps) {
  return (
    <button
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={`border border-border-base cursor-pointer text-content-main capitalize py-3 md:py-[0.593rem] px-4 text-preset-4 flex items-center gap-4 rounded-lg enabled:hover:bg-surface-tertiary-hover enabled:hover:text-content-inverse group h-10 w-12 md:w-24 transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 focusable-ring`}
      onClick={onClick}
      aria-label={`Go to ${buttonText === "Next" ? "next" : "previous"} page`}
    >
      {buttonText === "Next" && (
        <span className="hidden md:inline-block">{buttonText}</span>
      )}

      <span className="size-4 flex items-center justify-center text-content-secondary group-enabled:group-hover:text-content-inverse transition-colors duration-200">
        {buttonText === "Next" ? (
          <Image
            src="/images/icon-caret-right.svg"
            alt="caret"
            width={12}
            height={12}
          />
        ) : (
          <Image
            src="/images/icon-caret-left.svg"
            alt="caret"
            width={12}
            height={12}
          />
        )}
      </span>

      {buttonText !== "Next" && (
        <span className="hidden md:inline-block">{buttonText}</span>
      )}
    </button>
  );
}

export default PaginationButton;
