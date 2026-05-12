import { useEffect, useRef } from "react";

type PageTitleProps = {
  title: string;
  headingId: string;
};

function PageTitle({ title, headingId }: PageTitleProps) {
  const pageTitle = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    pageTitle.current?.focus();
  }, []);

  return (
    <h1
      ref={pageTitle}
      tabIndex={-1}
      id={headingId}
      className="outline-none text-preset-1 text-content-main capitalize"
    >
      {title}
    </h1>
  );
}

export default PageTitle;
