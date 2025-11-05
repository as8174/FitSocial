import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const PersonalTimeTable = () => {
  const [notes, setNotes] = useState("");
  const [isSaved, setIsSaved] = useState(true);
  const { toast } = useToast();

  // Load saved notes from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("workoutNotes");
    if (saved) setNotes(saved);
  }, []);

  // Save to localStorage whenever user manually saves
  const handleSave = () => {
    localStorage.setItem("workoutNotes", notes);
    setIsSaved(true);
    toast({ title: "All changes saved ✅" });
  };

  // Clear all notes
  const handleClear = () => {
    setNotes("");
    localStorage.removeItem("workoutNotes");
    toast({ title: "Cleared successfully 🧹" });
  };

  // Detect unsaved changes
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
    setIsSaved(false);
  };

  return (
    <div className="flex flex-col p-6 bg-background text-white min-h-screen space-y-6">
      <h2 className="text-2xl font-bold">🗓️ Personal Time Table</h2>

      <Card className="bg-dark-2 border border-dark-4">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Your Workout Schedule & Notes</CardTitle>
          <span className="text-sm text-light-3">
            {isSaved ? "Saved" : "Unsaved changes..."}
          </span>
        </CardHeader>
        <CardContent>
          <textarea
            value={notes}
            onChange={handleChange}
            className="w-full h-[400px] p-4 rounded-md bg-dark-3 text-light-1 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Write down your workout schedule, plans, or notes here..."
          />

          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-primary-400">
              {isSaved ? "✓ All changes saved" : "* Changes not saved"}
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleSave}
                className="bg-primary-500 hover:bg-primary-600 text-white"
              >
                Save
              </Button>
              <Button
                onClick={handleClear}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Clear
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-light-2">
        <Card className="bg-dark-2 border border-dark-4">
          <CardHeader>
            <CardTitle className="text-lg">Quick Tips</CardTitle>
          </CardHeader>
          <CardContent>
            Use this notepad to track your workout routines, meals, or goals.
          </CardContent>
        </Card>

        <Card className="bg-dark-2 border border-dark-4">
          <CardHeader>
            <CardTitle className="text-lg">Formatting</CardTitle>
          </CardHeader>
          <CardContent>
            Use bullets (•), dashes (–), or numbers to organize content.
          </CardContent>
        </Card>

        <Card className="bg-dark-2 border border-dark-4">
          <CardHeader>
            <CardTitle className="text-lg">Auto-Save</CardTitle>
          </CardHeader>
          <CardContent>
            Click “Save Changes” to persist your notes between sessions.
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonalTimeTable;