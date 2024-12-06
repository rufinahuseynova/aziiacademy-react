import { Link } from "react-router-dom";
import "../css/navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={scrolled ? "window-scroll" : ""}>
      <div className="container nav_container">
        <Link to="/">
          <h4>AZİİ ACADEMY</h4>
        </Link>
        <ul className={`nav_menu ${menuOpen ? "show-menu" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Akademiya
            </Link>
          </li>
          <li>
            <Link to="/haqqimizda" onClick={closeMenu}>
              Haqqımızda
            </Link>
          </li>
          <li>
            <Link to="/tedris-saheleri" onClick={closeMenu}>
              Tədris sahələri
            </Link>
          </li>
          <li>
            <Link to="/bizimle-elaqe" onClick={closeMenu}>
              Bizimlə əlaqə
            </Link>
          </li>
        </ul>
        <button
          id="open-menu-btn"
          onClick={openMenu}
          style={{ display: menuOpen ? "none" : "inline-block" }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <button
          id="close-menu-btn"
          onClick={closeMenu}
          style={{ display: menuOpen ? "inline-block" : "none" }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
