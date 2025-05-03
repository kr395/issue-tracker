import Link from "next/link";
import React from "react";
import { IoIosBug } from "react-icons/io";

const NavBar = () => {
  const navLinks = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex gap-4 border-b p-4 mb-5">
      <Link href="/">
        <IoIosBug className="text-2xl" />
      </Link>
      <ul className="flex gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className="text-zinc-300 hover:text-white transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
