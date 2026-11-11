import { Link, useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  return (
    <div>
      <h2>Student {id} Details </h2>
      <Link to="/students">Back to Students </Link>
    </div>
  );
}

export default Details;
