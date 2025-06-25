import React, { useState } from "react";
import { motion } from "framer-motion";
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
	return <div>
				<h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to nixbytes</h1>
				<p className="text-gray-700 text-lg">
				This is your new React website powered by Vite and TailwindCSS.
				</p>
			</div>
}

function Media() {
  return (
    <div className="max-w-xl mx-auto aspect-video bg-white-300">
	  <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Test Video
      </h2>
      <iframe
        src="https://player.vimeo.com/video/120266444?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo video"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}

function About() {
	return <h1 className="text-3xl text-purple-600">Contact us</h1>;
}

function Contact() {
	return (<h1 className="text-3xl text-gray-600 hover:text-blue-600">
		<a href="https://www.linkedin.com/in/jarrod-nix/">LinkedIn</a>
		</h1>);
}


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
					<Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
					<Link to="/media" className="text-gray-700 hover:text-blue-600">Media</Link>
					<Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
					<Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
					</div>
				</div>
			</div>
		</nav>

		{/* Main Content */}
		<main className="flex items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
			{/* Routes */}
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/media" element={<Media />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			</Routes>

			{/*
		  For example, style={{marginRight: spacing + 'em'}} when using JSX.
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
			*/}
		</main>
		</div>
	);
}

