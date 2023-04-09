import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Update() {
  const [userData, setUserData] = useState([]);
  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    designation: "",
    image: "",
    about: "",
  });


  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(`https://643257813e05ff8b372489a4.mockapi.io/Crud`); // Update the URL and API endpoint as needed
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSelectUser = (userId) => {
    const selectedUser = userData.find((user) => user.id === userId);
    setFormValues(selectedUser);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://643257813e05ff8b372489a4.mockapi.io/Crud/${formValues.id}`, formValues); // Update the URL and API endpoint as needed
      alert("User data updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };
  return (
    <div className="bg-green-600 h-screen">
      <div className="w-ful h-16 flex items-center px-14 justify-center">
        <h1 className="text-3xl text-black-200 font-semibold font-Montesarrat">
          <Link to="/home">CRUD</Link>
        </h1>
      </div>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-5">Update User</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {userData.map((user) => (
            <div
              key={user.id}
              className={`bg-white rounded-md overflow-hidden shadow-md ${
                formValues.id === user.id ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleSelectUser(user.id)}
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                <p className="text-gray-600 mb-2">{user.designation}</p>
                <p className="text-gray-500">{user.about}</p>
              </div>
            </div>
          ))}
        </div>
        {formValues.id && (
          <form className="mt-10" onSubmit={handleSubmit}>
            <label className="block mb-3">
              <span className="text-gray-700 font-medium">Name:</span>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-3">
              <span className="text-gray-700 font-medium">Designation:</span>
              <input
                type="text"
                name="designation"
                value={formValues.designation}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-3">
              <span className="text-gray-700 font-medium">Image URL:</span>
              <input
                type="text"
                name="image"
                value={formValues.image}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
            <label className="block mb-3">
              <span className="text-gray-700 font-medium">About:</span>
              <textarea
                name="about"
                value={formValues.about}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Update User
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Update;
