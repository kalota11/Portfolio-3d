import { useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="flex flex-col sm:flex-row gap-6">
    {navLinks.map((item) => (
      <li key={item.id}>
        <a
          href={item.href}
          onClick={onClick}
          className="text-gray-300 hover:text-white transition duration-300 text-lg"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <a
            href="/"
            className="text-2xl font-bold text-white tracking-wide hover:text-indigo-400 transition"
          >
            Ebad
          </a>
          <button
            onClick={toggleMenu}
            className="sm:hidden text-gray-300 hover:text-white"
          >
            <img
              src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
              alt="menu"
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div> 
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        } bg-black`}
      >
        <nav className="px-6 pb-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;