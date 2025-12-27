import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-black">Real My Rook</h1>
      <nav className="space-x-4">
        <a href="#features" className="text-gray-700 hover:text-black">Features</a>
        <a href="#about" className="text-gray-700 hover:text-black">About</a>
        <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
