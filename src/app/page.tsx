import Head from "next/head";
import Balance from "../components/Balance";
import Header from "../components/Header";
import OverviewPots from "../components/OverViewPots";

export default function Home() {
  return (
    <div>
      <Header header="Overview" />
      <Balance />

      <div>
        <OverviewPots />
      </div>
    </div>
  );
}
