import Logo from "../ui/Logo";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <header className="bg-transparent transition-all duration-700 ease-in-out w-full
    ">
      <nav className=" flex justify-between relative h-16 item-center py-4 px-6 lg:px-16 lg:py-6">
        <Logo path='/'/>
        <NavLinks/>
      </nav>
    </header>
  );
}

// sticky top-0 z-50
export default Header;
