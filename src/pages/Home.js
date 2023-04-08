import React from "react";
import Read from "./components/Read";

function Home() {
  return (
    <div className="bg-green-600 h-screen">
      <Read/>
      <div className="w-[100vw] h-40 justify-center items-center flex mt-8 container mx-auto px-4">
        <h1 className="text-3xl font-bold text-black ">DATA</h1>
      </div>
    </div>
  );
}

export default Home;