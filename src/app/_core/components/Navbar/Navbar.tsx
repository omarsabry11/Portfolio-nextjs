"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [darkMode] = useState(true);
  const [pathName, setPathName] = useState(usePathname());

  console.log(usePathname());


  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode]);
  return (
    <nav
      className={`dark:bg-[#030714] bg-gray-100 shadow-lg  py-3 z-10 max-md:py-5`}
    >
      <div className="w-[80%] mx-auto text-white flex justify-between items-center">
        <Link onClick={() => setPathName("/")} href="/" className="flex items-center gap-3">
          <Image
            src={"/images/Photo2.png"}
            alt="Logo"
            width={40}
            height={40}

          ></Image>
          <div>
            <p className="font-semibold dark:text-white text-[#070B18] max-md:text-sm">
              Omar Sabry
            </p>
            <p className="dark:text-[#FFC400] text-[#6032CC]  font-semibold max-md:text-sm text-sm">
              Frontend Engineer
            </p>
          </div>
        </Link>

        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center bg-transparent p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Large Screen */}
        <ul
          className={`md:flex items-center text-[#070B18] dark:text-white gap-6 hidden ${isMenuOpen ? "block" : "hidden"
            } mt-4 md:mt-0`}
        >
          {LINKS.map((item, index) => (
            <li key={index}>
              <Link
                onClick={() => setPathName(item.href.toLowerCase())}
                className={`${pathName === item.href.toLowerCase() ? "activeNav" : ""
                  } duration-300 hover:text-[#8C5EF6]`}
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Small Screen */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 mt-4 bg-[#030714] text-white py-4">

          {LINKS.map((item, index) => (
            <li key={index}>
              <Link
                onClick={() => {
                  setPathName(item.href.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`${pathName === item.href.toLowerCase() ? "activeNav" : ""
                  } duration-300 hover:text-[#8C5EF6]`}
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}

        </ul>
      )}
    </nav>
  );
}
