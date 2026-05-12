type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
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
      "
    >
      <p className="text-white text-[14px] leading-[150%] font-bold">{text}</p>
    </button>
  );
}
