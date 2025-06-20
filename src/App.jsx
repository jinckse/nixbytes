import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Nav Bar */}
      <nav className="bg-gray shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">nixbytes</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
        <div>
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to nixbytes</h1>
          <p className="text-gray-700 text-lg">
            This is your new React website powered by Vite and TailwindCSS.
          </p>
        </div>
		<div>
	  		<button 
	  			onClick={() =>setShow(!show)}
	  			className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Toggle Greeting
        </button>
	  	{show && (
          <div className="transition-opacity duration-500 ease-in-out">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to nixbytes</h1>
            <p className="text-gray-700 text-lg">
              This is your new React website powered by Vite and TailwindCSS.
            </p>
          </div>
        )}
		</div>
      </main>
    </div>
  );
}

