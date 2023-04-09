import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    image: "",
    about: "",
  });

  function handleForm(val, name) {
    if (name === "image") {
      const file = val.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData({
          ...formData,
          [name]: reader.result,
        });
      };
    } else {
      setFormData({
        ...formData,
        [name]: val,
      });
    }
  }
  // console.log("formData:", formData);

  useEffect(() => {
    const localStorageData = localStorage.getItem("formData");
    if (localStorageData) {
      setFormData(JSON.parse(localStorageData));
    }
  }, []);

  const handleSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();
    try {
      let id = localStorage.getItem("userId");
      const res = await axios
        .put(`https://643257813e05ff8b372489a4.mockapi.io/Crud/` + id, formData)
        .then((res) => navigate("/home"));
      console.log("data created succesfully", res.data);
      localStorage.removeItem("formData");
    } catch (error) {
      console.log("error creating data", error);
    }
  };

  return (
    <div className="bg-green-600 fixed top-0 left-0 h-full w-full overflow-auto">
      <div className="w-ful h-16 flex items-center px-14 justify-center">
        <h1 className="text-3xl text-black-200 font-semibold font-Montesarrat">
          <Link to="/home">CRUD</Link>
        </h1>
      </div>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-5">Update User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
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
              value={formData.designation}
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
              // value={formData.image}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              onChange={(e) => handleForm(e, "image")}
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
              value={formData.about}
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
