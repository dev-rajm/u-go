import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="flex justify-between h-[3.9rem] px-3 lg:px-8 bg-white">
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="Black colored tick mark" className="size-8" />
        <h1 className="text-3xl ml-1 font-medium -tracking-wider">
          U <span className="text-green-500">Go</span>
        </h1>
      </Link>
      <div className="flex items-center space-x-3 lg:space-x-8">
        <ThemeToggle />
        <Link
          to="/login"
          className="bg-black text-white px-4 lg:px-5 py-2 font-semibold text-sm lg:text-base"
        >
          Log in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
