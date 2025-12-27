import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-around">
      <Link className="text-white font-bold" to="/">Home</Link>
      <Link className="text-white font-bold" to="/about">About</Link>
      <Link className="text-white font-bold" to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

