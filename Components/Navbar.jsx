import Image from "next/image";
import Logo from "./ui/Logo";

export default function Navbar() {
  return (
  <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Logo/>
      </div>
  </nav>
  );
}