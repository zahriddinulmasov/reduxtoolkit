import { Link, useLocation, useParams } from "react-router-dom";

const OverviewSingle = () => {
  const params = useParams();
  const location = useLocation()

  return (
    <div>
      <h4>overviewSingle {params.id}</h4>

      <Link to={`${location.pathname}/products`}>Tech</Link>

      <Link to={`${location.pathname}/products`}>Notebooks</Link>
    </div>
  );
};

export default OverviewSingle;
