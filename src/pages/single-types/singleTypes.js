import { useParams } from "react-router-dom";

export const SingleTypes = () => {
    const params = useParams()
  return (
    <>
      <h1>Single types {params.typesId}</h1>
    </>
  );
};
