import ThemeToggle from "./ThemeToggle";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Medal,
  UserRound,
  Settings,
  LogOut
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="m-2 h-220 border-r-2">
      <aside className="w-60 px-6 flex justify-between flex-col h-full">
        <h1 className="text-2xl font-bold dark:font-light">Quizora</h1>
        <div className="py-8 flex justify-between flex-col h-full">
          <ul
            className="flex justify-center flex-col text-white
          font-medium gap-4"
          >
            <li
              className="flex gap-3 px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] cursor-pointer active:scale-95
              transition-all duration-200 shadow-lg shadow-violet-500/25 text-center rounded-2xl"
            >
              <LayoutDashboard />
              Dashboard
            </li>
            <li
              className="flex gap-3 px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] cursor-pointer active:scale-95
              transition-all duration-200 shadow-lg shadow-violet-500/25 text-center rounded-2xl"
            >
              <BookOpen />
              All Quizes
            </li>
            <li
              className="flex gap-3 px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] cursor-pointer active:scale-95
              transition-all duration-200 shadow-lg shadow-violet-500/25 text-center rounded-2xl"
            >
            <Trophy />
              Leaderboard
            </li>
            <li
              className="flex gap-3 px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] cursor-pointer active:scale-95
              transition-all duration-200 shadow-lg shadow-violet-500/25 text-center rounded-2xl"
            ><Medal />
              Achievements
            </li>
            <li
              className="flex gap-3 px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] cursor-pointer active:scale-95
              transition-all duration-200 shadow-lg shadow-violet-500/25 text-center rounded-2xl"
            >
              <UserRound />
              Profile
            </li>
            <li
              className="flex gap-3 px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] cursor-pointer active:scale-95
              transition-all duration-200 shadow-lg shadow-violet-500/25 text-center rounded-2xl"
            >
              <Settings />
              Settings
            </li>
          </ul>
          <button
            className="flex gap-3 px-6 py-3 text-white w-full bg-[#8B5CF6] hover:bg-[#7C3AED] cursor-pointer active:scale-95
            transition-all duration-200 shadow-lg shadow-violet-500/25 text-center rounded-2xl"
          >
            <LogOut/>
            Log Out
          </button>
        </div>
        <ThemeToggle />
      </aside>
    </div>
  );
};

export default Sidebar;
