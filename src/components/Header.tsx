"use client";
import { useState } from "react";
import { Button, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderMobileMenu = () => {
    if (isMobileMenuOpen) {
      return (
        <div className="md:hidden">
          <Link href="/" className="text-l block py-2 hover:text-washed">
            Home
          </Link>
          <Link href="/about" className="text-l block py-2 hover:text-washed">
            About
          </Link>
          <Link
            href="/contact-us"
            className="text-l block py-2 hover:text-washed"
          >
            Contact Us
          </Link>
        </div>
      );
    }
    return null;
  };

  return (
    <nav id="header" className="text-white">
      <Box className="w-full mx-auto container flex flex-wrap items-center justify-between mt-0 py-2">
        <Box className="logo-wrapper pl-4 flex items-center">
          <Link
            href="/"
            className="toggleColor no-underline hover-no-underline font-bold text-2xl lg:text-4xl"
          >
            <Image
              src="/assets/images/logo/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="h-14 w-14 object-contain ml-4"
            />
          </Link>
        </Box>
        <div className="mobile-menu-button md:hidden">
          <button className="text-gray-700 p-2" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http:www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 4H4a1 1 0 100 2h8a1 1 0 100-2zM4 10a1 1 0 110-2h8a1 1 0 110 2H4zm8 3a1 1 0 100 2H4a1 1 0 100-2h8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {renderMobileMenu()}
        </div>
        <Box className="nav-menu-wrapper mr-10 pr-10 flex items-center justify-between space-x-10">
          <Link href="/" className="text-l hover:text-washed">
            Home
          </Link>
          <Link href="/about" className="text-l hover:text-washed">
            About
          </Link>
          <Link href="/contact-us" className="text-l hover:text-washed">
            Contact Us
          </Link>
        </Box>
        <Box className="flex items-center justify-between space-x-4 nav-button">
          <Link href="#" className="text-l ">
            <Button
              variant="outlined"
              className="bg-transparent text-white border border-burnt hover:border-washed font-light py-2 px-4 rounded"
            >
              Login
            </Button>
          </Link>
          <Link href="#" className="text-l pr-10 ">
            <Button
              className="bg-burnt text-white hover:bg-washed font-light py-2 px-4 rounded"
            >
              Sign Up
            </Button>
          </Link>
        </Box>
      </Box>
    </nav>
  );
};
