import React, { useEffect, useState } from "react";
import axios from "axios";
import Read from "./components/Read";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";

function Home() {
  const [userData, setUserData] = useState([]);

  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make HTTP GET request to fetch data
        const response = await axios.get(
          `https://643257813e05ff8b372489a4.mockapi.io/Crud`
        ); // Update the URL and API endpoint as needed
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = (userId) => {
    console.log(`Upadate user with ID : ${userId}`);
  };

  return (
    <div className="bg-green-600 h-screen">
      <Read />
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
      </div>
      <div className="w-[100vw] h-2 justify-center items-center flex mt-8 container mx-auto px-4">
        <div className="container mx-auto mt-10 w-[100vw] max-h-0 justify-between ">
          <h1 className="text-3xl font-bold text-black px-1 w-ful h-20 mx-auto flex justify-center ">
            DATA
          </h1>
          {/* <h1 className="text-3xl font-bold mb-5">Read Users</h1> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {userData.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-md overflow-hidden shadow-md"
              >
                {/* Display User Data */}
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-1/2 h-16 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                  <p className="text-gray-600 mb-2">{user.designation}</p>
                  <p className="text-gray-500">{user.about}</p>
                  <div className="flex justify-center max-h-1 mb-4 mt-1">
                    <Link to="/edit-user">
                    <button
                      className="flex items-center mt-4 text-blue-600 hover:text-blue-700"
                      onClick={() => handleUpdate(user.id)}
                    >
                      <AiOutlineEdit className="mr-1" />
                      Edit
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
