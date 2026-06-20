"use client";

import AddNewPotModal from "@/src/components/AddNewPotModal";
import Header from "@/src/components/Header";
import PotsList from "@/src/components/PotsList";
import { Pot } from "@/src/types/types";
import { useEffect, useState } from "react";
import { pots as initialPots } from "@/src/data/data-pots";

export default function Pots() {
  const [showAddPotModal, setShowAddPotModal] = useState(false);
  const [pots, setPots] = useState<Pot[]>(initialPots);
  const [isLoaded, setIsLoaded] = useState(false);

  const STORAGE_KEY = "pots";

  // LOAD
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setPots(JSON.parse(saved));
    }

    setIsLoaded(true);
  }, []);

  // SAVE (ONLY ONCE)
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(pots));
  }, [pots, isLoaded]);

  if (!isLoaded) {
    return <div className="p-6">Loading...</div>;
  }

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
