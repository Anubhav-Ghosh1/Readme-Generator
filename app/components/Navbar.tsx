import { IoLogoGithub } from "react-icons/io";
import { FaStar } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full text-white px-8 py-4 border-b border-gray-700 bg-gray-800 flex items-center justify-between">
      <h1 className="text-lg font-medium">GitHub README Generator</h1>
      <div className="space-x-4 flex">
        <a href="">
          <p className="flex items-center gap-1">
            Star on
            <IoLogoGithub />
          </p>
        </a>
        <a href="/about" className="">
          About
        </a>
      </div>
    </nav>
  );
}
