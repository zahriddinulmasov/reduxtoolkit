import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { headerTitleActions } from "../../store/commonTitle";

const Ideas = () => {
  const dispetch = useDispatch();

  useEffect(() => {
    dispetch(headerTitleActions.changeHeaderTitle("Ideals"));
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();

  const handleNavigateProductPage = (id) => {
    navigate(`/statistics/${id}/products`);
  };

  const handleNavigateRatingPage = (id) => {
    navigate(`/rating/${id}/amounts`);
  };

  const handleNavigateTypesList = (id) => {
    navigate(`/ticket/${id}/types`);
  };

  return (
    <div>
      <h1>Ideas</h1>

      <div>
        <button onClick={handleNavigateProductPage.bind(null, 1)}>
          go to products page 1
        </button>
        <button onClick={handleNavigateProductPage.bind(null, 2)}>
          go to products page 2
        </button>
      </div>

      <div style={{ margin: "20px 0" }}>
        <button onClick={handleNavigateRatingPage.bind(null, 1)}>
          go to ratings page 1
        </button>
        <button onClick={handleNavigateRatingPage.bind(null, 2)}>
          go to ratings page 2
        </button>
      </div>

      <div>
        <button onClick={handleNavigateTypesList.bind(null, 1)}>
          go to ticket lists page 1
        </button>
        <button onClick={handleNavigateTypesList.bind(null, 2)}>
          go to ticket lists page 2
        </button>
      </div>
    </div>
  );
};

export default Ideas;
