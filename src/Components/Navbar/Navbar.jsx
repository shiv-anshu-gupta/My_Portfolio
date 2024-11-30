import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menu, setMenu] = useState(""); // Track the active menu item for hover effect

  const handleConnectClick = () => {
    navigate(isConnected ? "/" : "/connect");
    setIsConnected(!isConnected);
  };

  return (
    <div className="sticky top-0 w-full bg-black text-white shadow-md z-50 ">
      <div className="flex justify-between p-4">
        <h2 className="text-2xl lg:text-4xl font-AlexBrush text-transparent bg-clip-text bg-gradient-to-r from-[#d299c2] to-[#fef9d7]">
          Shivanshu
        </h2>

        {/* Menu for Desktop */}
        <ul className="hidden md:flex space-x-6 justify-center">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <AnchorLink
                href={`#${item}`}
                offset={50}
              >
                <p
                  className="cursor-pointer"
                  onMouseEnter={() => setMenu(item)}
                  onMouseLeave={() => setMenu("")}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
                <hr
                  className={`mt-1 h-[4px] bg-teal-800 rounded-lg border-0 transition-all duration-500 ${
                    menu === item ? "w-full" : "w-0"
                  }`}
                />
              </AnchorLink>
            </li>
          ))}
         
        </ul>
        <div className="rounded-lg hover:bg-gray-200 mt-2 mr-4">
            <button
              className="hidden md:flex rounded-lg bg-gradient-to-r from-[#d299c2] to-[#fef9d7] p-2 cursor-pointer
              hover:bg-white 
              hover:translate-x-[-7.5%] hover:translate-y-[-7.5%] transition duration-1000  ease-in-out text-gray-600  cursor-pointer"
              onClick={handleConnectClick}
            >
              Connect with me
            </button>
          </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <AiOutlineClose className="hover:text-red-600" size={24} /> : <AiOutlineMenu className="hover:text-blue-400" size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-start space-y-4 pb-4">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <AnchorLink href={`#${item}`} offset={300} onClick={() => setIsMenuOpen(false)}>
                <p
                  className="cursor-pointer"
                  onMouseEnter={() => setMenu(item)}
                  onMouseLeave={() => setMenu("")}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
                <hr
                  className={`mt-1 h-[4px] bg-teal-800 rounded-lg border-0 transition-all duration-500 ${
                    menu === item ? "w-full" : "w-0"
                  }`}
                />
              </AnchorLink>
            </li>
          ))}
          <li>
            <button
              className="px-2 py-2  bg-gradient-to-r from-[#d299c2] to-[#fef9d7] text-gray-600 rounded-lg"
              onClick={() => {
                handleConnectClick();
                setIsMenuOpen(false);
              }}
            >
              Connect with me
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
