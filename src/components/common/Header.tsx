import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { publicRoutes } from "../../routes/routes";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Lấy user từ localStorage
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuRoutes = publicRoutes.filter(
    (route) => route.path !== "/login" && route.path !== "/register"
  );

  const MenuLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {menuRoutes.map(({ path, name }) => (
        <Link
          key={path}
          to={path}
          className="hover:text-blue-600 transition duration-300"
          onClick={onClick}
        >
          {name}
        </Link>
      ))}
    </>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">MyShop</div>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <MenuLinks />
        </nav>

        {/* Desktop Right-side */}
        <div className="hidden md:flex space-x-4 items-center">
          {user ? (
            <>
              <span className="text-gray-700">👤 {user.fullname}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-50 transition"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                Đăng nhập
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Đăng ký
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
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
            <MenuLinks onClick={() => setIsOpen(false)} />
            <hr />
            {user ? (
              <>
                <span className="text-gray-700">👤 {user.fullname}</span>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full py-2 border border-red-600 text-red-600 rounded-lg mt-2"
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg mt-2 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="w-full py-2 bg-blue-600 text-white rounded-lg mt-2 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Đăng ký
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
