
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-10 dark:bg-indigo-600 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center dark:text-white-400">
          © 2024 <a href="https://flowbite.com/" className="hover:underline">GENIZ POLC™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/about" className="hover:underline me-4 md:me-6">Shop</Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:underline me-4 md:me-6">Home</Link>
          </li>
          <li>
            <Link to="/licensing" className="hover:underline me-4 md:me-6">Cart</Link>
          </li>
        
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
