export const MemberAvatar = ({ member }: any) => {
  const initials = member.name
    .split(" ")
    .map((n: string) => n[0])
    .join("");

  return (
    <div className="flex items-center gap-2 bg-dark-3 px-3 py-2 rounded-xl">
      <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-green-700 text-white font-bold">
        {initials}
        <span
          className={`absolute bottom-0 right-0 w-2 h-2 rounded-full ${
            member.online ? "bg-green-400" : "bg-gray-500"
          }`}
        ></span>
      </div>
      <span className="text-sm">{member.name}</span>
    </div>
  );
};
