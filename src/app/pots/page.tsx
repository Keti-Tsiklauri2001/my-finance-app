import Header from "@/src/components/Header";
import PotsList from "@/src/components/PotsList";
export default function Pots() {
  return (
    <div className="bg-[#F8F4F0] flex flex-col xl:gap-[32px] gap-[20px]">
      <Header header="pots" buttonText="add new pot" />
      <PotsList />
    </div>
  );
}
