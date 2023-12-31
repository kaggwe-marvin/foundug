import React from "react";
import FoundLogo from "../foundug-logo";
import Link from "next/link";

const Header2 = () => {
  return (
    <div className="navbar bg-primary p-6">
      <div className="navbar-start">
        <Link
          role="button"
          href="/"
          className="text-lg  btn btn-neutral md:block">
          <FoundLogo />
        </Link>
      </div>
      <div className="navbar-end ">
        <div className="dropdown">
          <div
            aria-label="mobile dropdown menu"
            tabIndex={0}
            role="button"
            className="btn btn-neutral btn-square mx-4 sm:hidden ">
            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link
                href="/found"
                className="text-sm text-primary"
                aria-label="Browse Found items">
                I{"'"}ve Found
              </Link>
            </li>

            <li>
              <Link
                href="/lost"
                className="text-sm text-primary"
                aria-label="Report items">
                I{"'"}ve Lost
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-primary"
                aria-label="Support for Lost and found platform">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <Link
                role="button"
                href="/found"
                className="text-lg  btn btn-neutral"
                aria-label="Browse Found items">
                I{"'"}ve Found
              </Link>
            </li>

            <li>
              <Link
                role="button"
                href="/lost"
                className="text-lg  btn btn-neutral "
                aria-label="Report Lost items">
                I{"'"}ve Lost
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header2;
