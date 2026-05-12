"use client";
import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
export default function Budgets() {
  return (
    <div>
      <PageHeader>
        <PageTitle title={"Budgets"} headingId="budgets-title-id" />

        <Button
          onClick={(e) => e.stopPropagation()}
          isActionButton={true}
          variant={"primary"}
        >
          + Add New Budget
        </Button>
      </PageHeader>
    </div>
  );
}
