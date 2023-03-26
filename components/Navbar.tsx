import React, { useState } from "react";
interface NavItem {
  label: string;
  page: string;
}
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className=" w-full mx-auto px-4 shadow">
      <h2 className=" text-2xl font-bold">Kadeem Lewis</h2>
      <nav>
        <menu className="md:flex md:space-x-6  ">
          {NAV_ITEMS.map((item, index) => (
            <li>
              <a key={index}>{item.label}</a>
            </li>
          ))}
        </menu>
        <button>Resume</button>
      </nav>
    </header>
  );
};
