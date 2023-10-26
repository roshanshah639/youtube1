import { MyContext } from "@/Helper/Context";
import React, { useContext } from "react";

const Header = ({ num }) => {
  const user = useContext(MyContext);
  return (
    <div className="bg-green-500 p-5 text-white">
      <h1>i am Header</h1>
      <div>{user} </div>
    </div>
  );
};

export default Header;
