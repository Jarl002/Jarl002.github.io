import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink className="brand" to="/">
          JG
        </NavLink>

        <nav className="site-nav" aria-label="Primær navigation">
          <NavLink to="/" end>
            Forside
          </NavLink>
          <NavLink to="/projects">Projekter</NavLink>
          <NavLink to="/about">Om mig</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
