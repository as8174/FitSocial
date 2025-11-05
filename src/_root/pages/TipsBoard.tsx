import { useState } from "react";
import { Button } from "@/components/ui/button";
import TipCard from "@/components/tips/TipCard";
import AddTipModal from "@/components/tips/AddTipModal";

const filterOptions = ["All Tips", "Workout", "Nutrition", "Motivation"];

const TipsBoard = () => {
  const [tips, setTips] = useState([
    {
      id: 1,
      title: "Progressive Overload",
      content:
        "Gradually increase weight, reps, or sets each week to keep challenging your muscles and promote growth.",
      tag: "Workout",
      color: "bg-yellow-200",
    },
    {
      id: 2,
      title: "Hydration is Key",
      content:
        "Drink at least 8-10 glasses of water daily. Proper hydration improves performance and recovery.",
      tag: "Nutrition",
      color: "bg-blue-200",
    },
    {
      id: 3,
      title: "Rest Days Matter",
      content:
        "Your muscles grow during rest, not during workouts. Schedule 1–2 rest days per week.",
      tag: "Workout",
      color: "bg-green-200",
    },
    {
      id: 4,
      title: "Mind–Muscle Connection",
      content:
        "Focus on feeling the target muscle working during each exercise. Quality over quantity!",
      tag: "Motivation",
      color: "bg-purple-200",
    },
  ]);

  const [selectedFilter, setSelectedFilter] = useState("All Tips");
  const [showModal, setShowModal] = useState(false);

  // filter tips by tag
  const filteredTips =
    selectedFilter === "All Tips"
      ? tips
      : tips.filter(
          (tip) => tip.tag.toLowerCase() === selectedFilter.toLowerCase()
        );

  // add new tip
  const handleAddTip = (newTip: any) => {
    setTips((prev) => [
      { id: Date.now(), ...newTip, color: newTip.color || "bg-pink-200" },
      ...prev,
    ]);
  };

  // delete a tip
  const handleDelete = (id: number) => {
    setTips((prev) => prev.filter((tip) => tip.id !== id));
  };

  return (
    <div className="p-6 bg-background text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">💡 Tips Board</h2>
        <Button
          onClick={() => setShowModal(true)}
          className="bg-green-500 hover:bg-green-600 text-black"
        >
          + Add Tip
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {filterOptions.map((opt) => (
          <Button
            key={opt}
            onClick={() => setSelectedFilter(opt)}
            className={`rounded-full px-4 py-1 ${
              selectedFilter === opt
                ? "bg-green-500 text-black"
                : "bg-dark-3 text-white hover:bg-dark-4"
            }`}
          >
            {opt}
          </Button>
        ))}
      </div>

      {/* Tips Grid */}
      {filteredTips.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTips.map((tip) => (
            <TipCard key={tip.id} tip={tip} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No tips found for this category.</p>
      )}

      {/* Modal */}
      {showModal && (
        <AddTipModal onClose={() => setShowModal(false)} onAddTip={handleAddTip} />
      )}
    </div>
  );
};

export default TipsBoard;
