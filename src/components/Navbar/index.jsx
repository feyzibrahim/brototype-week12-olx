import React from "react";

function Navbar() {
  return (
    <nav className="flex px-10 py-2 bg-gray-100 items-center border-b-4 border-white shadow sticky">
      <div>
        <img
          src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
          alt="Something"
          className="w-11"
        />
      </div>
      <input
        placeholder="India"
        className="border-2 border-black rounded py-2 px-2 mx-2"
      />
      <input
        placeholder="Find Cars, Mobile Phones and more..."
        className="flex-grow border-2 border-black rounded py-2 px-2 mx-2"
      />
      <select>
        <option>English</option>
        <option>Hindi</option>
      </select>
      <button>Login</button>
      <button>+ Sell</button>
    </nav>
  );
}

export default Navbar;
