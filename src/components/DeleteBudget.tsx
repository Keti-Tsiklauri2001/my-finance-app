import { Budget } from "../types/types";

type DeleteBudgetProps = {
  showDelete: boolean;
  selectedBudget: Budget | null;
  onClose: () => void;
  onDelete: () => void;
};

export default function DeleteBudget({
  showDelete,
  selectedBudget,
  onClose,
  onDelete,
}: DeleteBudgetProps) {
  if (!showDelete || !selectedBudget) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-[#201F24]">
          Delete “{selectedBudget.category}”?
        </h2>

        <p className="text-sm text-[#696868]">
          Are you sure you want to delete this budget? This action cannot be
          undone.
        </p>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-[#201F24] cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="px-4 py-2 rounded-lg bg-red-600 text-white cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
