import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#128D6C] w-full relative">
        <div className="w-full h-[401px] flex justify-between items-start p-3 relative">
            {/* Logo */}
            <div className="flex items-start space-x-4">
            <img src="src/assets/logoo.png" alt="logo" />
            <img src="src/assets/text.png" alt="text" className="mt-7" />
            </div>

            {/* Desktop Links */}
            <div className="hidden sm:flex text-[16px] font-medium text-white items-center space-x-4">
                <Link to="/login">Login</Link>
                <Link to="/signup">Register</Link>
            </div>

            {/* Mobile Toggle + Menu Container */}
            <div className="sm:hidden relative">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white z-20 relative"
                aria-label="Toggle menu"
            >
                <GiHamburgerMenu size={24} />
            </button>

            {/* Mobile Links Dropdown */}
            <div
                className={`${isOpen ? 'block' : 'hidden'} absolute right-0 mt-2 bg-gray-100 shadow-md rounded-md w-40 py-2 space-y-2 z-10`}
            >
                <Link to="/login" className="block px-4 text-gray-800 hover:bg-gray-200 rounded">Login</Link>
                <Link to="/signup" className="block px-4 text-gray-800 hover:bg-gray-200 rounded">Register</Link>

            </div>
            </div>
        </div>
    </nav>

  );
};

export default Nav;
