"use client";

import AddNewPotModal from "@/src/components/AddNewPotModal";
import Header from "@/src/components/Header";
import PotsList from "@/src/components/PotsList";
import { Pot } from "@/src/types/types";
import { useState } from "react";
import { pots as initialPots } from "@/src/data/data-pots";

export default function Pots() {
  const [pots, setPots] = useState<Pot[]>(initialPots);
  const [showAddPotModal, setShowAddPotModal] = useState(false);

  return (
    <div className="bg-[#F8F4F0] flex flex-col xl:gap-[32px] gap-[20px]">
      {showAddPotModal && (
        <AddNewPotModal
          onClose={() => setShowAddPotModal(false)}
          onAdd={(newPot) => {
            setPots((prev) => [...prev, newPot]);
          }}
        />
      )}

      <Header
        header="pots"
        buttonText="add new pot"
        onButtonClick={() => setShowAddPotModal(true)}
      />

      <PotsList pots={pots} setPots={setPots} />
    </div>
  );
}
