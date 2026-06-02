import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Woofly</div>

      <ul className="nav-links">
        <li>
          <a href="#problem">The Problem</a>
        </li>
        <li>Meet Woofly</li>
        <li>For Dog Owners</li>
        <li>Technology</li>
        <li>Team</li>
      </ul>

      <button className="reserve-btn">
        Reserve →
      </button>
    </nav>
  );
}

export default Navbar;