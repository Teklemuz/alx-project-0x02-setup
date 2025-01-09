import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home">
              <a className="hover:text-blue-300">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="hover:text-blue-300">About</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className="hover:text-blue-300">Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
