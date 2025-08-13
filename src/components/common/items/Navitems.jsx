import React from "react";
import { navLinks } from "../Helper";
import Link from "next/link";

function Navitems({ direction = "row", onClick }) {
  return (
    <ul
      className={`flex font-Montserrat font-medium transition-all duration-300 ${
        direction === "column" ? "flex-col gap-4 text-lg" : "flex-row gap-8"
      }`}
    >
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link
            href={link.url}
            onClick={onClick} // <-- yaha add kiya
            className="nav-link relative text-gray-800 hover:text-[#AD544E] transition-all duration-300"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navitems;
