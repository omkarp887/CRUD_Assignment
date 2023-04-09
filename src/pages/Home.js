import React, { useEffect, useState } from "react";
import axios from "axios";
import Read from "./components/Read";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function Home() {
  const [userData, setUserData] = useState([]);

  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://643257813e05ff8b372489a4.mockapi.io/Crud`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = (userId) => {
    console.log(`Update user with ID : ${userId}`);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://643257813e05ff8b372489a4.mockapi.io/Crud/${userId}`);
      console.log("Data deleted successfully");
      // Update userData state by removing the deleted user
      setUserData(userData.filter(user => user.id !== userId));
    } catch (error) {
      console.log("Error deleting data", error);
    }
  };
  

  return (
    <div className="bg-green-600 h-screen">
      {/* <Read /> */}
      <div className="w-ful h-16 flex items-center px-14 justify-center">
        <h1 className="text-3xl text-black-200 font-semibold font-Montesarrat">
          CRUD
        </h1>
      </div>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-5 justify-center items-center flex">
          Home Page
        </h1>
        <Link
          to="/create-user"
          className="hover:bg-teal-600hover:border-2 hover:border-white hover:text-green-600 hover:shadow-md rounded-lg bg-black font-bold text-white py-2 px-2 justify-center items-center flex"
        >
          Go to Create Page
        </Link>
        <Read userData={userData} handleUpdate={handleUpdate} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default Home;
