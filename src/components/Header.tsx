import Button from "./Button";

type HeaderProps = {
  header: string;
  buttonText?: string;
  onButtonClick?: () => void;
};
export default function Header({
  header,
  buttonText,
  onButtonClick,
}: HeaderProps) {
  return (
    <div
      className="
        flex items-center justify-between
        py-[8px]
        gap-6
        w-[343px]
        md:w-[688px]
        xl:w-[1200px]
        max-w-[1440px]
        h-[56px]
        self-stretch
        mx-auto
     
        xl:p-6
        xl:mt-4
      "
    >
      <p className="text-[32px] leading-[120%] font-bold text-[#201F24]  h-[38px] capitalize">
        {header}
      </p>

      {buttonText && <Button text={buttonText} onClick={onButtonClick} />}
    </div>
  );
}
