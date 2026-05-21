type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="
        flex items-center justify-center
        gap-4
        w-[155px] h-[53px]
        md:w-[154px]
        p-4
        bg-[#201F24]
        rounded-[8px]
        cursor-pointer
      "
      onClick={onClick}
    >
      <p className="text-white text-[14px] leading-[150%] font-bold capitalize">
        {text}
      </p>
    </button>
  );
}
