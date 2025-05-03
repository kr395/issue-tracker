'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoIosBug } from "react-icons/io";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  
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
              className={classNames(
                'hover:text-blue-300',
                "transition-all",
                currentPath === link.href && "font-bold"
              )}
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
