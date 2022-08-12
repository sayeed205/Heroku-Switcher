import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout(); // Initialize the useLogout hook.
  const { user } = useAuthContext(); // Initialize the useAuthContext hook.

  const handleLogout = () => {
    logout();
  };

  const [isOpen, setIsOpen] = useState(false); // Initialize the isOpen state.

  const links = [
    { name: "Apps", link: "/apps" },
    { name: "How to", link: "/how-to" },
  ];

  return (
    <header className="max-w-7xl mx-auto px-8 md:mx-8 flex xl:mx-auto h-24 items-center justify-between">
      <Link
        to="/"
        className="font-bold text-5xl text-heroku z-10 cursor-pointer hover:scale-105 transition-all ease-in duration-400"
      >
        <h1>HS</h1>
      </Link>

      <nav className="flex gap-6">
        <ul
          className={`md:flex md:items-center z-[1] text-black text-center md:z-auto md:static absolute w-full left-0 md:w-auto backdrop-blur md:backdrop-blur-none md:py-0 space-x-4 py-3 transition-all duration-500 ease-in ${
            isOpen ? "top-[95px]" : "top-[-499px]"
          }`}
        >
          <li className="my-7 md:px-3 text-xl md:my-0 " key={6942069}>
            {user && <span>{user.email}</span>}
          </li>
          {user &&
            links.map((link) => (
              <li
                className="my-7 md:px-3 p-1 text-xl md:my-0 hover:text-heroku lg:hover:bg-heroku lg:hover:text-white rounded transition ease-in duration-300"
                key={link.name}
              >
                <NavLink to={link.link}>{link.name}</NavLink>
              </li>
            ))}
          {user && (
            <>
              <li
                key={6969420}
                className="my-7 md:px-3 p-1 text-xl text-red-600 md:hover:bg-red-600  md:hover:text-white rounded transition duration-300"
              >
                <button onClick={handleLogout}>Log out</button>
              </li>
            </>
          )}
          {!user && (
            <>
              <li
                key={42069}
                className="my-7 text-lg py-2 px-6 md:my-0 hover:text-heroku lg:hover:bg-heroku lg:hover:text-white rounded transition ease-in duration-300 text-heroku"
              >
                <Link to={"/login"}>Login</Link>
              </li>
              <li
                key={69420}
                className="my-7 text-lg py-2 px-6 md:my-0 md:text-heroku lg:hover:bg-heroku lg:hover:text-white rounded-3xl transition ease-in duration-300 md:border-2 md:border-heroku"
              >
                <Link to={"/signup"}>Sign up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" cursor-pointer transition-all ease-in-out z-[2] md:hidden"
      >
        <div
          className={` w-8 h-1 rounded-md transition-all ease-in-out after:absolute after:w-10 after:h-1 after:bg-black after:rounded-md after:transition-all after:ease-in-out after:translate-y-3 before:absolute before:w-10 before:h-1 before:bg-black before:rounded-md before:transition-all before:ease-in-out before:-translate-y-3 ${
            isOpen
              ? "bg-transparent -translate-x-12 before:translate-x-12 after:translate-x-12 before:rotate-45 after:-rotate-45 before:translate-y-0 after:-translate-y-0"
              : "bg-black "
          }`}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
