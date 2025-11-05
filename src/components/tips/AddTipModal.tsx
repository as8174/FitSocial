import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface AddTipModalProps {
  onAddTip: (tip: {
    id: number;
    title: string;
    content: string;
    tag: string;
    color: string;
  }) => void;
  onClose: () => void;
}

export const AddTipModal = ({ onAddTip, onClose }: AddTipModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [color, setColor] = useState("#fef08a"); // Default yellow

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    const newTip = {
      id: Date.now(),
      title,
      content,
      tag: tag || "General",
      color,
    };

    onAddTip(newTip);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-dark-2 text-white rounded-xl p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add a New Tip</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shad-input"
          />
          <Textarea
            placeholder="Write your tip..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shad-textarea"
          />
          <Input
            placeholder="Tag (e.g. Nutrition, Workout)"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="shad-input"
          />

          <div className="flex items-center gap-3">
            <label htmlFor="color" className="text-sm text-light-2">
              Color:
            </label>
            <input
              id="color"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-10 h-8 rounded cursor-pointer border-none"
            />
          </div>

          <div className="flex justify-between mt-4">
            <Button type="submit" className="shad-button_primary">
              Add Tip
            </Button>
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTipModal;