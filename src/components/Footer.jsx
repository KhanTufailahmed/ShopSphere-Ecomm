import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navigate = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ];
  const social = [
    { icon: <FaFacebook />, index: "1", href: "" },
    { icon: <FaSquareXTwitter />, index: "2", href: "" },
    { icon: <FaGithub />, index: "3", href: "" },
    { icon: <FaLinkedin />, index: "4", href: "" },
  ];
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div>
          <h3 className="text-xl font-semibold ">ShopSphere </h3>
          <p className="mt-4">
            Where Convenience Meets Affordability! Get the latest trends,
            exclusive deals, and fast shipping—only at ShopSphere .
          </p>
        </div>
        <div className="flex flex-col md:items-center ">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {navigate.map((nav) => (
              <li>
                <Link className="hover:underline" key={nav.label} to={nav.href}>
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            {social.map((social) => (
              <NavLink
                className={`hover:text-gray-400`}
                key={social.index}
                to={social.href}
              >
                {social.icon}
              </NavLink>
            ))}
          </div>
          <form className="flex items-center justify-center mt-8 ">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600 cursor-pointer ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; 2025 <span className="font-semibold">ShopSphere </span>. All
            rights reserved.
          </p>
          <div className="text-center text-gray-600 text-sm py-4">
            <p>
              Designed & Developed by a{" "}
              <span className="font-semibold">Learner</span>
            </p>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="" className="font-semibold hover:underline">
              Privacy Policy
            </a>
            <a href="" className="font-semibold hover:underline">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
