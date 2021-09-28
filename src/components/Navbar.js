import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [canvas, setCanvas] = useState(false);
  return (
    <header
      className="pt-2 fixed top-0 inset-x-0 px-5 sm:px-10 bg-primary/50 w-full z-30 backdrop-blur-md transition duration-400 
     text-gray-700 dark:bg-transparent dark:text-white"
    >
      <nav className="w-full flex items-start md:items-center py-4 container mx-auto">
        <div className="flex items-center justify-start flex-1 gap-2">
          <div className="flex items-center justify-center bg-secondary px-3 py-2 rounded-md">
            K
          </div>
          Logo
        </div>
        <div
          className={`md:flex items-center justify-center gap-2 flex-grow  flex-col md:flex-row ${
            canvas
              ? "flex transition duration-500 ease-in-out pt-20"
              : "hidden transition duration-500 ease-in-out"
          }`}
        >
          <hr className="w-full border-t-2 border-black text-blue-300 md:hidden" />
          <Link href="#">
            <a className="btn-list transition duration-500 ease-in-out">Home</a>
          </Link>
          <Link href="#">
            <a className="btn-list transition duration-500 ease-in-out">
              About
            </a>
          </Link>
          <Link href="#">
            <a className="btn-list transition duration-500 ease-in-out">
              Advocacy
            </a>
          </Link>
          <Link href="#">
            <a className="btn-list transition duration-500 ease-in-out">Blog</a>
          </Link>
          <Link href="#">
            <a className="btn-list transition duration-500 ease-in-out">
              Membersip
            </a>
          </Link>
        </div>
        <div className="flex justify-end items-center flex-1">
          <button className="btn hidden md:flex text-white bg-black">
            Join
          </button>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setCanvas(!canvas)}
          >
            {canvas ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M31.1 128H416C433.7 128 448 113.7 448 96S433.7 64 416 64H31.1C14.33 64 0 78.33 0 95.1S14.33 128 31.1 128zM480 224H95.1C78.33 224 64 238.3 64 256s14.33 32 31.1 32h384C497.7 288 512 273.7 512 256S497.7 224 480 224zM416 384H31.1C14.33 384 0 398.3 0 415.1S14.33 448 31.1 448H416C433.7 448 448 433.7 448 416S433.7 384 416 384z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
