import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#fefbf6] px-6 py-4 flex items-center justify-between font-['SUSE_Mono'] shadow">
      {/* Left - Brand */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:underline">
            RouteMate
          </Link>
        </h1>
      </div>

      {/* Middle - Search + Host button (only md+) */}
      <div className="hidden md:flex items-center gap-3 flex-1 justify-center">
        <input
          type="text"
          placeholder="Search events..."
          className="px-3 py-1 border border-gray-300 rounded-lg outline-none w-60"
        />
        <Link
          to="/create"
          className="px-4 py-1 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Host
        </Link>
      </div>

      {/* Right - Hamburger / Login Signup */}
      <div className="flex items-center gap-4 relative">
        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:underline">
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile dropdown */}
        {open && (
          <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg p-4 w-48 md:hidden">
            <input
              type="text"
              placeholder="Search events..."
              className="px-3 py-1 border border-gray-300 rounded-lg outline-none mb-3 w-full"
            />
            <Link
              to="/create"
              className="mb-3 block px-4 py-1 bg-black text-white rounded-lg hover:bg-gray-800 text-center"
            >
              Host
            </Link>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:underline">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
