import { useEffect, useState } from "react";
import type userInterface from "./interfaces/interfaces";

const Home = () => {
  const env = import.meta.env;
  const [user, setUser] = useState<userInterface | null>(null);

  // useEffect(() => {
  //   fetch(`${env.VITE_BACKEND_URL}/home`)
  //     .then((res) => res.json())
  //     .then((data) => setUser(data));
  // }, []);
  // console.log(user?.data);
  const toggleProfileBox = (type = "hide") => {
    const profileBox = document.querySelector("#profile-box");
    if (type.toLowerCase() == "show") {
      if (profileBox?.classList.contains("hidden")) {
        profileBox?.classList.remove("hidden");
        return;
      }
    } else {
      profileBox?.classList.add("hidden");
    }
  };

  const toggleHamburgerIcon = () => {
    const hamburgerIcon = document.querySelector("#hamburger-icon");
    console.log(hamburgerIcon?.checked);
    if (!hamburgerIcon?.checked) {
      document.querySelector("#nav-items")?.classList.remove("max-md:hidden");
      return;
    }
    document.querySelector("#nav-items")?.classList.add("max-md:hidden");
  };

  return (
    <div className="">
      <nav className="px-8 flex justify-between items-center relative h-10 bg-blue-400 max-md:gap-4 w-full">
        <span>Cuizzz</span>
        <div className="flex flex-col items-end relative duration-700 w-full">
          <div className="min-md:hidden">
            <label
              htmlFor="hamburger-icon"
              onClick={() => {
                toggleHamburgerIcon();
              }}
              className="flex flex-col gap-1 cursor-pointer"
            >
              <span
                className="block w-4 h-0.5 bg-red-400"
                id="first-bar"
              ></span>
              <span
                className="block w-4 h-0.5 bg-red-400"
                id="second-bar"
              ></span>
              <span
                className="block w-4 h-0.5 bg-red-400"
                id="third-bar"
              ></span>
            </label>
            <input type="checkbox" id="hamburger-icon" className="hidden" />
          </div>
          <ul
            id="nav-items"
            className="relative flex justify-center items-center w-full h-full gap-4 max-md:flex-col max-md:h-fit max-md:gap-4 max-md:hidden max-md:absolute max-md:top-7 max-md:bg-blue-400 max-md:w-full"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Leaderboard</a>
            </li>
            <li>
              <a href="#">All quiz</a>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <label
            onMouseEnter={() => {
              toggleProfileBox("show");
            }}
            className="cursor-pointer"
          >
            👤
            <div
              onMouseLeave={() => {
                toggleProfileBox("hide");
              }}
              id="profile-box"
              className="hidden relative top-2"
            >
              <ul className="absolute flex flex-col justify-around h-36 w-38 px-2 py-1 right-0 border-2">
                <li className="bg-blue-300 px-2 py-1">
                  <a href="#">Profile</a>
                </li>
                <li className="bg-blue-300 px-2 py-1">
                  <a href="#">Self leaderboard</a>
                </li>
                <li className="bg-blue-300 px-2 py-1">
                  <a href="#">Log out</a>
                </li>
              </ul>
            </div>
          </label>
        </div>
      </nav>
      <h1>Home Page</h1>
      <div className="flex gap-2 justify-center ">
        <a
          href="/auth/login"
          className="bg-red-400 px-4 py-2 active:translate-y-1 rounded-4xl"
        >
          Go at login form
        </a>
        <a
          href="/auth/reg"
          className="bg-red-400 px-4 py-2 active:translate-y-1 rounded-4xl"
        >
          Go to registration form
        </a>
      </div>
    </div>
  );
};

export default Home;
