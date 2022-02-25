import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    searchApi("dessert");
  }, []);

  const searchApi = async (term) => {
    setLoading(true);
    await yelp
      .get("/search", {
        params: {
          limit: 50,
          term,
          location: "istanbul",
        },
      })
      .then((response) => {
        setResults(response.data.businesses);
        setLoading(false);
      })
      .catch((err) => setErrorMessage(`${err.name} : ${err.message}`));
  };

  return [results, errorMessage, loading, searchApi];
};
