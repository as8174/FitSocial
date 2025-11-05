import { MemberAvatar } from "./MemberAvatar";

export const GymGroupCard = ({ group }: any) => {
  return (
    <div className="bg-dark-2 p-4 rounded-2xl shadow-md flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">{group.name}</h3>
        <span className="text-light-3 text-sm">{group.members.length} members</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {group.members.map((member: any, i: number) => (
          <MemberAvatar key={i} member={member} />
        ))}
      </div>
    </div>
  );
};
