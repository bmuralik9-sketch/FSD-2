import { Link } from "react-router-dom";

function Students() {
  return (
    <div>
      <h1>Students Page</h1>
      <nav className="students-nav">
        <Link to="/details/1">Go to Student 1 Details </Link>
        <Link to="/details/2">Go to Student 2 Details </Link>
        <Link to="/details/3">Go to Student 3 Details </Link>
      </nav>
    </div>
  );
}

export default Students;
