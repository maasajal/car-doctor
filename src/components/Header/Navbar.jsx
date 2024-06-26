import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  const navLinks = (
    <>
      <li key="home">
        <a href="/">home</a>
      </li>
      <li key="about">
        <a href="#about">about</a>
      </li>
      <li key="services">
        <a href="#services">services</a>
      </li>
      <li key="blog">
        <NavLink to="/blog">blog</NavLink>
      </li>
      <li key="contact">
        <NavLink to="/contact">contact</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 py-12 md:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 capitalize"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost h-full">
            <img src={logo} alt="Car doctor logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 capitalize">{navLinks}</ul>
        </div>
        <div className="navbar-end flex gap-7">
          <BsHandbag className="text-xl font-bold" />
          <FaSearch />
          <Link className="btn btn-outline text-red-400 px-5">Appointment</Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
