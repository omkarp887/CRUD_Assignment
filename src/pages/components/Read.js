import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function Read({ userData, handleUpdate, handleDelete }) {
  return (
    <div className="py-10 bg-green-600 h-full">
      <div className="">
        <h1 className="text-3xl font-bold text-black px-1 w-ful h-20 mx-auto flex justify-center ">
          DATA
        </h1>
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
                className="w-1/2 h-30 py-2 mx-auto flex rounded-full"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                <p className="text-gray-600 mb-2">{user.designation}</p>
                <p className="text-gray-500">{user.about}</p>
                <div className="flex justify-end max-h-1 mb-4 mt-1">
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
                <div>
                  <button
                    type="delete"
                    onClick={() => handleDelete(user.id)}
                    className="flex items-center mt-4 mb-4 text-red-600 hover:text-red-700"
                  >
                    <MdDelete className="inline-block ml-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Read;
