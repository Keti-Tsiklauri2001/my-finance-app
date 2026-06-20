"use client";

import { useState } from "react";
import PotCard from "./PotCard";
import AddMoneyModal from "./AddMoneyModal";
import WithdrawModal from "./WithdrawModal";
import { Pot } from "../types/types";
import EditPotModal from "./EditPotModal";
import DeletePot from "./DeletePot";

type Props = {
  pots: Pot[];
  setPots: React.Dispatch<React.SetStateAction<Pot[]>>;
};

export default function PotsList({ pots, setPots }: Props) {
  const [selectedPot, setSelectedPot] = useState<Pot | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const openDelete = (pot: Pot) => {
    setSelectedPot(pot);
    setShowDelete(true);
  };
  const openEdit = (pot: Pot) => {
    setSelectedPot(pot);
    setShowEdit(true);
  };
  const openAdd = (pot: Pot) => {
    setSelectedPot(pot);
    setShowAdd(true);
  };

  const openWithdraw = (pot: Pot) => {
    setSelectedPot(pot);
    setShowWithdraw(true);
  };
  const deletePot = (pot: Pot) => {
    setPots((prev) => prev.filter((p) => p.name !== pot.name));

    if (selectedPot?.name === pot.name) {
      setSelectedPot(null);
      setShowAdd(false);
      setShowWithdraw(false);
      setShowEdit(false);
    }
  };
  return (
    <div className="flex flex-col gap-6 xl:w-[1020px] mx-auto">
      <div className="xl:grid xl:grid-cols-2 xl:gap-6 flex flex-col gap-[24px]">
        {pots.map((pot) => (
          <PotCard
            key={pot.name}
            pot={pot}
            onAdd={() => openAdd(pot)}
            onWithdraw={() => openWithdraw(pot)}
            onEdit={() => openEdit(pot)}
            onDelete={() => openDelete(pot)}
          />
        ))}
      </div>
      {showEdit && selectedPot && (
        <EditPotModal
          pot={selectedPot}
          onClose={() => setShowEdit(false)}
          onSave={(updatedPot) => {
            setPots((prev) =>
              prev.map((p) => (p.name === selectedPot.name ? updatedPot : p)),
            );

            setShowEdit(false);
          }}
        />
      )}
      {/* ADD MONEY MODAL */}
      {showAdd && selectedPot && (
        <AddMoneyModal
          potName={selectedPot.name}
          currentTotal={selectedPot.total}
          onClose={() => setShowAdd(false)}
          onAdd={(amount) => {
            setPots((prev) =>
              prev.map((p) =>
                p.name === selectedPot.name
                  ? { ...p, total: p.total + amount }
                  : p,
              ),
            );

            setShowAdd(false);
          }}
        />
      )}

      {/* WITHDRAW MODAL */}
      {showWithdraw && selectedPot && (
        <WithdrawModal
          potName={selectedPot.name}
          currentTotal={selectedPot.total}
          onClose={() => setShowWithdraw(false)}
          onWithdraw={(amount) => {
            setPots((prev) =>
              prev.map((p) =>
                p.name === selectedPot.name
                  ? { ...p, total: p.total - amount }
                  : p,
              ),
            );

            setShowWithdraw(false);
          }}
        />
      )}
      {showDelete && selectedPot && (
        <DeletePot
          showDelete={showDelete}
          selectedPot={selectedPot}
          onClose={() => setShowDelete(false)}
          onDelete={() => {
            setPots((prev) => prev.filter((p) => p.name !== selectedPot.name));
            setShowDelete(false);
          }}
        />
      )}
    </div>
  );
}
