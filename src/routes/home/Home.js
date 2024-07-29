import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate  = useNavigate();

  const handleClick = () => {
      navigate("/create-room")
  }

  return (
    <div>
      <div className="flex justify-between items-center fixed top-0 text-white w-full p-3 bg-inherit">
        <div className=" text-2xl md:text-4xl  font-bold  ml-3 ">
          CLUB-CODING
        </div>
        <div className="flex justify-evenly items-center text-1xl font-medium  md:text-2xl md:font-semibold ">
          <button className=" m-2 hover:text-yellow-300">Login</button>
          <button className=" m-2 hover:text-yellow-300">Signup</button>
        </div>
      </div>

      <div className=" h-[100vh] hero step1 ">
        <div className="flex justify-center tt items-center flex-col p-5 h-[100vh]">
          <p className=" text-4xl md:text-7xl font-bold text-white ">
            WELCOME TO CLUB-CODING PLATFORM{" "}
          </p>
          <p className=" text-1xl md:text-2xl font-medium text-white my-4">
            CODE WITH YOUR PEERS EFFICIENTLY USING THE CLUB-CODING PLATFORM
          </p>

          <button
            onClick={handleClick}
            className=" h-auto p-3 m-2 bg-white text-black font-semibold rounded hover:bg-blue-300 "
          >
            Try it out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
