import React from 'react'

function Create() {
  return (
    <div className='bg-green-600 h-screen'>
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Create User</h1>
      <form>
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
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="image" className="block font-medium mb-1">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            placeholder="Enter image URL"
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

export default Create