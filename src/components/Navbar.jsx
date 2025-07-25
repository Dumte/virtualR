import { useState } from "react";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: 1, label: "Features", href: "#", path: "/features" },
  { id: 2, label: "Workflow", href: "#", path: "/workflow" },
  { id: 3, label: "Pricing", href: "#", path: "/pricing" },
  { id: 4, label: "Testimonials", href: "#", path: "/testimonials" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // A function to toggle the mobile menu button;
  const toggleMenu = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={Logo} alt="page logo" className="h-10 w-10 mr-2" />
            <span className="tracking-tight text-xl">VirtualR</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12 text-white">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="py-2 px-3 hover:bg-orange-500 hover:rounded-md"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-md hover:bg-neutral-700/80"
            >
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-red-800"
            >
              Create an account
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 w-full bg-neutral-900 p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item) => (
                <li key={item.id} className="py-4 hover:text-orange-500/90">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-5">
              <a href="#" className="py-2 px-3 border rounded-md hover:bg-gray-800">
                Sign In
              </a>
              <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-red-800">
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
