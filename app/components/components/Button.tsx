import React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "destroy";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant: ButtonVariant;
  isActionButton?: boolean;
  isLoading?: boolean;
};

function Button({
  children,
  icon,
  variant,
  isActionButton = false,
  isLoading = false,
  disabled,
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const baseStyle = isActionButton
    ? "text-preset-4-bold p-4"
    : "p-0 text-preset-4";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "text-content-inverse bg-surface-inverse hover:bg-surface-inverse-hover",
    secondary:
      "text-content-main bg-surface-secondary hover:bg-surface-secondary-hover border border-surface-secondary hover:border-border-base",
    tertiary: "bg-transparent text-content-secondary hover:text-content-main",
    destroy:
      "bg-surface-destroy hover:bg-surface-destroy-hover text-content-inverse",
  };

  return (
    <button
      onClick={onClick}
      data-variant={variant}
      disabled={isLoading || disabled}
      className={`focusable-ring flex justify-center items-center gap-3 rounded-lg hover:cursor-pointer transition-colors duration-700 disabled-button ease-in-out ${baseStyle} ${variants[variant]} relative ${className}`}
      {...props}
    >
      <div className={`${isLoading ? "opacity-0" : ""}`}>{children}</div>

      {icon && (
        <span className={`${isLoading ? "opacity-0" : ""}`}>{icon}</span>
      )}
    </button>
  );
}

export default Button;
