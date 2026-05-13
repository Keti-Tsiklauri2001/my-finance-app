import Header from "@/src/components/Header";
import Pagination from "@/src/components/Pagination";

export default function Transactions() {
  return (
    <div>
      <Header header="transactions" />
      <Pagination totalItems={190} itemsPerPage={19} />
    </div>
  );
}
