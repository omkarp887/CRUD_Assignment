import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Create() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    image: "",
    about: "",
  });

  function handleForm(val, name) {
    setFormData({
      ...formData,
      [name]: val,
    });
  }
  // console.log("formData:", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://643257813e05ff8b372489a4.mockapi.io/Crud`, formData);
      console.log("data created succesfully", res.data);
      
    } catch (error) {
      console.log("error creating data", error);
    }
  }

  return (
    <div className="bg-green-600 h-screen">
      <div className="w-ful h-16 flex items-center px-14 justify-center">
        <h1 className="text-3xl text-black-200 font-semibold font-Montesarrat">
          <Link to="/home">CRUD</Link>
        </h1>
      </div>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-5">Create User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Enter name"
              onChange={(e) => handleForm(e.target.value, "name")}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="designation" className="block font-medium mb-1">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Enter designation"
              onChange={(e) => handleForm(e.target.value, "designation")}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="image" className="block font-medium mb-1">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              onChange={(e) => handleForm(e.target.value, "image")}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="about" className="block font-medium mb-1">
              About
            </label>
            <textarea
              id="about"
              name="about"
              className="border border-gray-300 rounded-md px-3 py-2 w-full h-32 resize-none"
              placeholder="Enter about information"
              onChange={(e) => handleForm(e.target.value, "about")}
              required
            />
          </div>
          <button
            type="submit"
            className="hover:bg-teal-600hover:border-2 hover:border-white hover:text-green-600 hover:shadow-md rounded-lg bg-black font-bold text-white py-2 px-2"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
