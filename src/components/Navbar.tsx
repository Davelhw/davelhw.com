// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          DaveLHW
        </Link>
        <ul className="flex space-x-6 text-gray-700 text-md font-medium">
          <li>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
