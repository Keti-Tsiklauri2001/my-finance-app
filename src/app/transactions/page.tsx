import Header from "@/src/components/Header";
import Pagination from "@/src/components/Pagination";
import TransactionsList from "@/src/components/TransactionsList";

export default function Transactions() {
  return (
    <div>
      <Header header="transactions" />
      <TransactionsList />
      <Pagination totalItems={190} itemsPerPage={19} />
    </div>
  );
}
