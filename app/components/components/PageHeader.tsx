import { ReactNode } from "react";

type PageHeaderProps = {
  children: ReactNode;
};

function PageHeader({ children }: PageHeaderProps) {
  return (
    <div className="py-[0.0937rem] mb-8 flex flex-wrap items-center justify-between">
      {children}
    </div>
  );
}

export default PageHeader;
