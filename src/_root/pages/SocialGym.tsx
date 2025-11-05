import { GymGroupCard } from "@/components/gym/GymGroupCard";
import { WeeklyGraph } from "@/components/gym/WeeklyGraph";

const SocialGym = () => {
  const gymGroups = [
    {
      name: "Iron Warriors",
      members: [
        { name: "Alex M.", online: true },
        { name: "Mike R.", online: false },
        { name: "Sarah K.", online: true },
        { name: "Emma L.", online: true },
      ],
    },
    {
      name: "Fitness Legends",
      members: [
        { name: "David W.", online: false },
        { name: "Tom H.", online: true },
        { name: "Lisa P.", online: false },
        { name: "Anna S.", online: true },
      ],
    },
    {
      name: "Beast Mode",
      members: [
        { name: "Chris B.", online: true },
        { name: "Jake F.", online: false },
        { name: "Maya T.", online: true },
        { name: "Nina K.", online: true },
      ],
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 bg-background text-white min-h-screen">
      {/* Left side */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold">Social Gym Concept</h2>
        <p className="text-light-3 mb-4">Gym Groups</p>

        {gymGroups.map((group, i) => (
          <GymGroupCard key={i} group={group} />
        ))}
      </div>

      {/* Right side */}
      <div className="w-full sm:w-[40%]">
        <WeeklyGraph />
      </div>
    </div>
  );
};

export default SocialGym;