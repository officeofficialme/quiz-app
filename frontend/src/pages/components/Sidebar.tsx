import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import HamIcon from "./HamIcon";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Medal,
  UserRound,
  Settings,
  LogOut,
} from "lucide-react";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const loc = useLocation();

  const active = loc.pathname;

  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeColor =
    "text-white bg-[#8B5CF6] hover:bg-[#7C3AED] active:scale-95 shadow-lg shadow-violet-500/25";

  return (
    <div className="m-1 h-[calc(100dvh-8px)] min-h-[calc(100dvh-8px)] max-md:h-auto">
      <aside
        className={`relative w-60 h-full max-md:w-full max-md:h-auto max-md:min-h-0 max-md:block max-md:px-3 max-md:py-2 rounded-l-2xl dark:bg-linear-to-br border border-[#292B59] from-[#080B14] via-[#17112D] to-[#3b0bac] px-6 py-6 flex justify-between flex-col`}
      >
        <h1 className="text-2xl font-bold">Quizora</h1>

        <div
          id="nav-container"
          style={{
            height: isOpen ? "430px" : "0px",
            transition: "height 1s ease-in-out",
          }}
          className={`flex flex-col justify-between overflow-hidden md:h-full md:flex-1 md:min-h-0 md:py-6 max-md:w-full`}
        >
          <nav className="py-6 flex flex-col gap-4 text-black dark:text-white font-medium max-md:gap-2">
            <Link
              to="/"
              className={`flex max-md:mb-1 gap-3 px-6 py-3 ${
                active === "/"
                  ? activeColor
                  : "hover:border hover:border-[#7C3AED]"
              } cursor-pointer transition-all duration-200 text-center rounded-2xl`}
            >
              <LayoutDashboard />
              Dashboard
            </Link>

            <Link
              to="/allquiz"
              className={`flex max-md:mb-1 gap-3 px-6 py-3 ${
                active === "/allquiz"
                  ? activeColor
                  : "hover:border hover:border-[#7C3AED]"
              } cursor-pointer transition-all duration-200 text-center rounded-2xl`}
            >
              <BookOpen />
              All Quizes
            </Link>

            <Link
              to="/leaderboard"
              className={`flex max-md:mb-1 gap-3 px-6 py-3 ${
                active === "/leaderboard"
                  ? activeColor
                  : "hover:border hover:border-[#7C3AED]"
              } cursor-pointer transition-all duration-200 text-center rounded-2xl`}
            >
              <Trophy />
              Leaderboard
            </Link>

            <Link
              to="/achievements"
              className={`flex max-md:mb-1 gap-3 px-6 py-3 ${
                active === "/achievements"
                  ? activeColor
                  : "hover:border hover:border-[#7C3AED]"
              } cursor-pointer transition-all duration-200 text-center rounded-2xl`}
            >
              <Medal />
              Achievements
            </Link>

            <Link
              to="/profile"
              className={`flex max-md:mb-1 gap-3 px-6 py-3 ${
                active === "/profile"
                  ? activeColor
                  : "hover:border hover:border-[#7C3AED]"
              } cursor-pointer transition-all duration-200 text-center rounded-2xl`}
            >
              <UserRound />
              Profile
            </Link>

            <Link
              to="/settings"
              className={`flex max-md:mb-1 gap-3 px-6 py-3 ${
                active === "/settings"
                  ? activeColor
                  : "hover:border hover:border-[#7C3AED]"
              } cursor-pointer transition-all duration-200 text-center rounded-2xl`}
            >
              <Settings />
              Settings
            </Link>
          </nav>

          <button className="flex gap-3 text-shadow-gray-800 dark:text-white w-full cursor-pointer active:scale-95 justify-center transition-all duration-200 text-center rounded-2xl outline-none">
            <span className="flex hover:text-red-600 active:text-red-700 mb-2">
              <LogOut />
              Log Out
            </span>
          </button>
        </div>

        <div className="flex items-center gap-1 max-md:absolute max-md:top-0 max-md:right-0">
          <HamIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          <Link to="/profile" className="hidden max-md:block"><UserRound size={20} className="ml-2"/></Link>
          <ThemeToggle/>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
