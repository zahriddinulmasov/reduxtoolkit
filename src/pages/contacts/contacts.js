import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { headerTitleActions } from "../../store/commonTitle";

export const Contacts = () => {
  const dispetch = useDispatch();

  useEffect(() => {
    dispetch(headerTitleActions.changeHeaderTitle("Contacts"));
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();

  const handleNavigateProductPage = (id) => {
    navigate(`/statistics/${id}/products`);
  };

  const handleNavigateRatingPage = (id) => {
    navigate(`/rating/${id}/amounts`);
  };

  const handleNavigateTypesListPage = (id) => {
    navigate(`/ticket/${id}/types`);
  };

  return (
    <>
      <h1>Contacts</h1>

      <div>
        <button onClick={handleNavigateProductPage.bind(null, 1)}>
          go to the product page 1
        </button>
        <button onClick={handleNavigateProductPage.bind(null, 2)}>
          go to the product page 2
        </button>
      </div>

      <div style={{ margin: "20px 0" }}>
        <button onClick={handleNavigateRatingPage.bind(null, 1)}>
          go to the rating page 1
        </button>
        <button onClick={handleNavigateRatingPage.bind(null, 2)}>
          go to the rating page 2
        </button>
      </div>

      <div>
        <button onClick={handleNavigateTypesListPage.bind(null, 1)}>
          go to the types page 1
        </button>
        <button onClick={handleNavigateTypesListPage.bind(null, 2)}>
          go to the types page 2
        </button>
      </div>
    </>
  );
};
