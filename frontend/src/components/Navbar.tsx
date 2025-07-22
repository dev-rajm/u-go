import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-red-500">
      <div className="">
        <img src="/logo.png" alt="Black colored tick mark" />
      </div>
      <div className="flex space-x-8">
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link>
        <div>Theming</div>
      </div>
    </nav>
  );
};

export default Navbar;
