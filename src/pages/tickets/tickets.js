import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { headerTitleActions } from "../../store/commonTitle";

const Tickets = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.headerTitle.users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      dispatch(headerTitleActions.setUsers(data))
    }).catch(err => console.log(err))
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(headerTitleActions.changeHeaderTitle("Tickets"));
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
    <>
      <div>
        <h1>Tickets</h1>

        <div>
          <button onClick={handleNavigateProductPage.bind(null, 1)}>
            go to the product page
          </button>
          <button onClick={handleNavigateProductPage.bind(null, 2)}>
            go to the product page
          </button>
        </div>

        <div style={{ margin: "20px 0" }}>
          <button onClick={handleNavigateRatingPage.bind(null, 1)}>
            go to the ratings page 1
          </button>
          <button onClick={handleNavigateRatingPage.bind(null, 2)}>
            go to the ratings page 2
          </button>
        </div>

        <div>
          <button onClick={handleNavigateTypesList.bind(null, 1)}>
            go to the rating lists page 1
          </button>
          <button onClick={handleNavigateTypesList.bind(null, 2)}>
            go to the ticket lists page 2
          </button>
        </div>
      </div>

      <div>
        {users.map(item => (<h1 key={item.id}>{item.name}</h1>))}
      </div>
    </>
  );
};

export default Tickets;
