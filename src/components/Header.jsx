import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral py-2 etxt-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          <Link
            to="/login"
            className="text-slate-50 link link-hover text-xs sm:text-sm"
          >
            Sign in / Guest
          </Link>
          <Link
            to="/register"
            className="text-slate-50 link link-hover text-xs sm:text-sm"
          >
            Create an account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
