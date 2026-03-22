import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
      <img src="" alt="smartstay" className="w-15 h-15"/>
        SmartStay
      </Link>

      {/* Search Bar */}
      <div className="hidden md:flex items-center border rounded-full px-4 py-2 w-1/3">
        <input
          type="text"
          placeholder="Search destinations..."
          className="outline-none w-full"
        />
      </div>

      {/* User Section */}
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-8 h-8 rounded-full"
            />
            <span className="hidden md:block">My Profile</span>
          </div>
        ) : (
          <button
            onClick={() => setIsLoggedIn(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;