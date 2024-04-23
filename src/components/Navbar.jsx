import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import React from "react";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = React.useState("");
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Abduvaliev <span className="sm:block hidden">| JS Mastery</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } duration-500  hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a
                className="text-[15px] md:text-[18px] lg:text-[20px]"
                href={`#${link.id}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px] object-contain cursor-pointer "
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[120px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-center flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } duration-500  hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a
                    className="text-[15px] md:text-[18px] lg:text-[20px]"
                    href={`#${link.id}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
