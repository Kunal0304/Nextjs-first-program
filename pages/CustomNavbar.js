import Link from "next/link";
import React from "react";

function CustomNavbar() {
  return (
    <nav className="Navbar">
      <ul className="Editul">
        <li className="Editli">
          <Link href="/"> Home</Link>
        </li>
        <li className="Editli">
          <Link href="/about">About</Link>
        </li>
        <li className="Editli">
          <Link href="/blog"> Blog</Link>
        </li>
        <li className="Editli">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default CustomNavbar;
