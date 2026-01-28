import React from "react";
import { FiLogOut, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Flavors", path: "/flavors" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

const navLinkClass = ({ isActive }) =>
  `
  relative text-sm font-medium tracking-wide
  transition-colors duration-300
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-full after:bg-black
  after:scale-x-0 after:origin-left
  after:transition-transform after:duration-300
  ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}
`;

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    navigate("/signin");
  };

  return (
    <nav className="fixed top-0 z-30 w-full bg-white text-black border-b border-slate-200">
      <div className="mx-auto max-w-[1140px] px-6 h-16 flex items-center justify-between">
        {/* LEFT: Navigation */}
        <ul className="flex items-center gap-10">
          {NAV_LINKS.map(({ name, path }) => (
            <li key={name}>
              <NavLink to={path} className={navLinkClass}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-1.5 border border-slate-300 rounded-md">
            <input
              type="text"
              placeholder="Search products"
              className="w-40 bg-transparent text-sm focus:outline-none"
            />
            <FiSearch className="text-slate-500" />
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="text-xl hover:text-slate-600 transition-colors"
          >
            <FiShoppingCart />
          </Link>
          {loggedIn &&<Link to="/upload"><button className="px-4 py-1">Upload</button></Link> }

          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="flex justify-center items-center gap-2 border px-4 py-1 rounded-full"
            >
              Logout
              <FiLogOut />
            </button>
          ) : (
            <Link to="/signin" className=" flex justify-center items-center gap-2 border px-4 py-1 rounded-full">
              <FiUser />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
