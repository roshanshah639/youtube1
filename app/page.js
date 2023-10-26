"use client";
import { MyContext } from "@/Helper/Context";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useState } from "react";

const Home = () => {
  const [userdata, setUserdata] = useState("");
  const [num, setNum] = useState(10);
  const user = useContext(MyContext);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setUserdata(JSON.stringify(response.data));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>{user} </p>
      <Header />
      <button
        onClick={getData}
        className="px-5 py-3 bg-green-500 m-5 rounded text-white font-bold"
      >
        Click to Get Data
      </button>
      {userdata}
    </div>
  );
};

export default Home;
