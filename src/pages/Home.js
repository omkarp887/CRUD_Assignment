import React from "react";
import Read from "./components/Read";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-green-600 h-screen">
      <Read />
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-5 justify-center items-center flex">Home Page</h1>
        <Link to="/create-user"
          className="hover:bg-teal-600hover:border-2 hover:border-white hover:text-green-600 hover:shadow-md rounded-lg bg-black font-bold text-white py-2 px-2 justify-center items-center flex"
        >
          Go to Create Page
        </Link>
      </div>
      <div className="w-[100vw] h-10 justify-center items-center flex mt-8 container mx-auto px-4">
        <h1 className="text-3xl font-bold text-black ">DATA</h1>
        
      </div>
    </div>
  );
}

export default Home;
