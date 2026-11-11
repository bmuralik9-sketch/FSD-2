import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Vasireddy Venkatadri Institute of Technology</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/students">Students</Link>
      </nav>
    </header>
  );
}

export default Header;
