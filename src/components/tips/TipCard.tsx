import { X } from "lucide-react";

interface TipCardProps {
  tip: {
    id: number;
    title: string;
    content: string;
    tag: string;
    color: string; // can be "#fef08a" (hex) or "blue"/"yellow"/etc.
  };
  onDelete: (id: number) => void;
}

const TipCard = ({ tip, onDelete }: TipCardProps) => {
  // Static mapping to Tailwind classes (kept explicitly in code to avoid purge)
  const colorClassMap: Record<string, string> = {
    yellow: "bg-yellow-200",
    blue: "bg-blue-200",
    green: "bg-green-200",
    pink: "bg-pink-200",
    purple: "bg-purple-200",
    red: "bg-red-200",
    orange: "bg-orange-200",
    gray: "bg-gray-200",
  };

  // Determine whether value is a hex color (starts with '#') or a name
  const isHex = typeof tip.color === "string" && tip.color.startsWith("#");

  // Pick class if named color and exists in map, otherwise fallback
  const bgClass = !isHex ? colorClassMap[tip.color] || "bg-gray-200" : "";

  return (
    <div
      // If hex -> use inline style. If named -> use static class (so Tailwind keeps it).
      className={`text-black rounded-xl p-4 relative shadow-md transition-transform hover:scale-[1.02] ${bgClass}`}
      style={isHex ? { backgroundColor: tip.color } : undefined}
    >
      {/* Delete button */}
      <button
        onClick={() => onDelete(tip.id)}
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        aria-label="Delete tip"
      >
        <X size={16} />
      </button>

      {/* Tag */}
      <div className="text-xs font-semibold mb-2 flex items-center gap-1">
        <span className="px-2 py-0.5 rounded-full bg-white/60 text-gray-800">
          #{(tip.tag || "general").toString().toLowerCase()}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-1">{tip.title}</h3>

      {/* Content */}
      <p className="text-sm text-gray-800 whitespace-pre-wrap">{tip.content}</p>
    </div>
  );
};

export default TipCard;
