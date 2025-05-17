import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { publicRoutes } from "../../../routes/routes";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyShop</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {publicRoutes.map(({ path, name }) => (
            <Link
              key={path}
              to={path}
              className="hover:text-blue-600 transition duration-300"
            >
              {name ?? path}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
            Đăng nhập
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Đăng ký
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <nav className="flex flex-col space-y-3 mt-2">
            {publicRoutes.map(({ path }) => (
              <a
                key={path}
                href={path}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {path === "/" ? "Trang chủ" : path.replace("/", "")}
              </a>
            ))}
            <hr />
            <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg mt-2">
              Đăng nhập
            </button>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg mt-2">
              Đăng ký
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
