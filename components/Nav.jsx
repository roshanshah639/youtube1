import React from "react";

const Nav = ({ num }) => {
  return (
    <div className="bg-red-600 text-white px-5 py-2 font-md">
      <h1>Navbar</h1>
      <p>{num}</p>
    </div>
  );
};

export default Nav;
