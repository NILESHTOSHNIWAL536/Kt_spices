"use client";
import { useState, useEffect } from "react";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Product", href: "/product" },
  { label: "Contact Us", href: "/contact" }
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // toggle for demo

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <header className="bg-white  sticky top-0 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Logo + Brand */}
        <Link href={"/"} className="flex items-center space-x-2" >
          <img
            src="https://www.banyanbotanicals.com/cdn/shop/files/garam-masala-product-banner-1.jpg?v=1748619578&width=1280"
            alt="Logo"
            width="50"
            height="50"
            // className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold text-gray-800">
             Kt spices
          </span>
        </Link>

        {/* Center: Navbar Links */}
        <nav className="hidden md:flex items-center space-x-6 bg-black px-8 py-2 rounded-full shadow">
          {navLinks.map(link => (
            <Link
              href={link.href}
              key={link.label}
              className="
                text-white text-base font-semibold px-3 py-1
                relative transition
                after:content-[''] after:block after:h-[3px] after:bg-yellow-400 after:scale-x-0 after:transition-transform after:origin-left
                hover:after:scale-x-100 after:absolute after:left-0 after:right-0 after:bottom-0
              "
              style={{ letterSpacing: '0.03em' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
          </div>

            {/* <div className="px-4"></div> */}

          {/* Cart */}
          <Link href="/cart">
          <button className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-indigo-600" />
            <span className="absolute -top-1 -right- bg-red-500 text-white text-xs rounded-full px-1">
              2
            </span>
          </button>
          </Link>

        

          {/* Profile or Sign In */}
          {isLoggedIn ? (
            <button className="flex items-center space-x-2 hover:bg-gray-100 rounded-full px-3 py-1 transition">
              <User className="w-6 h-6 text-gray-700" />
              <span className="text-sm font-medium">Profile</span>
            </button>
          ) : (
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition">
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Overlay and Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Mobile Dropdown Menu */}
          <div className="md:hidden border-t bg-white px-4 py-3 space-y-3 fixed top-[64px] left-0 w-full z-50 shadow">
            {/* Center Links on mobile */}
            <div className="flex flex-col space-y-2 mb-2">
              {navLinks.map(link => (
                <a
                  href={link.href}
                  key={link.label}
                  className="text-base font-semibold text-[#3d2620] py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
            </div>

            <div className="flex items-center justify-between">
              <button className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-indigo-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  2
                </span>
              </button>
              {isLoggedIn ? (
                <button className="flex items-center space-x-2 hover:bg-gray-100 rounded-full px-3 py-1 transition">
                  <User className="w-6 h-6 text-gray-700" />
                  <span className="text-sm font-medium">Profile</span>
                </button>
              ) : (
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition">
                  Sign In
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
