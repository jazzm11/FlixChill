import { Link } from "react-router-dom";
import { useState } from "react";
import "/src/views/navbar.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/logo.png" alt="Logo" />
      </Link>

      {/* Hamburger Menu (Only on small screens) */}
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ✖
        </button>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/moviepage" onClick={() => setIsOpen(false)}>
              Movies
            </Link>
          </li>
          <li>
            <Link to="/seriespage" onClick={() => setIsOpen(false)}>
              Series
            </Link>
          </li>
        </ul>
      </nav>

      {/* Search Input (Hidden on small screens) */}
      <input type="text" placeholder="Search movie" className="search-input" />
    </header>
  );
}

export default Navigation;
