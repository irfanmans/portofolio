import { IoClose, IoMenu } from "react-icons/io5";
import Logo from "../ui/Logo";
import { useEffect, useState } from "react";
import iconbrand from "../assets/images/iconbrand.png";

const navItems = [
  { label: "Beranda", id: "beranda" },
  { label: "Tentang Saya", id: "tentang-saya" },
  { label: "Work & Education", id: "work-education" },
  { label: "Tech Stack & Tools", id: "tech-stack" },
  { label: "Sertifikat", id: "sertifikat" },
  { label: "Project", id: "project" },
  { label: "Hubungi Saya", id: "hubungi-saya" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  function handleOpenMenu() {
    setOpenMenu((prev) => !prev);
  }

  function handleNavClick(id: string) {
    const target = document.getElementById(id);

    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetTop - 90, behavior: "smooth" });
    }
    setOpenMenu(false);
  }

  useEffect(function () {
    function handleScroll() {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full md:px-25 fixed top-0 left-0 right-0 z-50 transition-all duration-300
  ${scroll ? "bg-white shadow-md py-3" : "bg-transparent py-5 px-5"}`}
    >
      <div className="flex justify-between items-center px-5">
        <Logo src={iconbrand} width={scroll ? 100 : 110} />

        <nav className="hidden md:block">
          <ul className="flex gap-5 text-sm">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="cursor-pointer hover:text-yellow-500 transition-colors duration-200"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          {openMenu ? (
            <IoClose
              onClick={handleOpenMenu}
              size={30}
              className="cursor-pointer text-gray-500"
            />
          ) : (
            <IoMenu
              onClick={handleOpenMenu}
              size={30}
              className="cursor-pointer text-gray-500"
            />
          )}
        </div>
      </div>

      {openMenu && (
        <nav className="absolute top-full left-0 right-0 w-full h-screen bg-white shadow-md md:hidden">
          <ul
            className={`flex flex-col justify-center items-center h-full gap-5 text-lg text-center cursor-pointer`}
          >
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="cursor-pointer hover:text-yellow-500 transition-colors duration-200"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
