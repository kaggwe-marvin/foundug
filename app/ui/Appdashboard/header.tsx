import React from "react";
import FoundLogo from "../foundug-logo";
import Link from "next/link";
import Backbtn from "./back-btn";

const Header = () => {
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
        <div className="">
          <Link
            href="/"
            aria-label="mobile back button"
            role="button"
            className="btn btn-neutral btn-square mx-4  ">
            <Backbtn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
