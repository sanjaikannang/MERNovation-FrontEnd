import React from "react";

const HomePage = () => {
  return (
    <>
      {/* NavBar Section  */}
      <nav className="bg-white-800 p-4 text-grey flex justify-between items-center">
        <div className="text-2xl text-grey font-bold">
          <span className=" text-green-600 font-bold">Harvest</span> Hub
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="text-white font-medium px-4 py-1 rounded-md bg-green-500 shadow-2xl hover:bg-green-600"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="text-white font-medium px-4 py-1 rounded-md bg-green-500 shadow-2xl hover:bg-green-600"
          >
            Signup
          </button>
        </div>
      </nav>

    <h1>HomaPage </h1>
    </>
  );
};

export default HomePage;
