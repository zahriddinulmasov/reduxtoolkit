import { Link, useParams, useLocation } from "react-router-dom";

const OverviewRating = () => {
  const params = useParams();
  const location = useLocation();
  return (
    <div>
      <h1>OverviewRating {params.id}</h1>

      <Link to={`${location.pathname}/amounts`}>Football</Link>

      <Link to={`${location.pathname}/amounts`}>Boks</Link>
    </div>
  );
};

export default OverviewRating;
