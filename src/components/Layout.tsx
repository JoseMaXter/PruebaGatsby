import React, { ReactElement } from "react";
import { Link } from "gatsby";

type ILayout = {
  children: ReactElement;
};

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <div className="m-2 flex flex-col items-center">
      <header className="flex gap-8 m-6">
        <Link className="text-gray-800 text-lg font-bold" to="/about">
          About
        </Link>
        <Link className="text-gray-800 text-lg font-bold" to="/posts">
          Posts
        </Link>
      </header>
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
