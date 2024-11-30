import React from "react";

import { IoLogoGoogle } from "react-icons/io";

function Signup() {
  return (
    <div>
      <div className=" flex items-center justify-center h-screen">
        <div className="w-96 p-6 bg-white shadow-lg rounded-md">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign-Up
          </h1>
          <form>
            <div>
              <label className="block text-sm font-semibold text-grey-800">
                Name
              </label>
              <input
                type="Name"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label
                for="Email"
                className="block text-sm font-semibold text-grey-800"
              >
                Email
              </label>
              <input
                type="Email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <div>
                <label className="block text-sm font-semibold text-grey-800">
                  Passward
                </label>
                <input
                  type="Name"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <a href="#" className="text-xs text-purple-600 hover:underline">
                Forget Password?
              </a>
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Sign-Up
                </button>
              </div>
            </div>
          </form>
          <div className="w-full text-center">
            <IoLogoGoogle />
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already I have an account{" "}
            <a href="#" className="font-medium text-purple-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
      );
    </div>
  );
}

export default Signup;
