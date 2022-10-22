import { useEffect, useState } from "react";

import { Card } from "../../component/cardComponent/Card";
import "./HomePage.css";
import { fetchProductsApi } from "../../api/FetchProducsApi";

export const HomePage = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetchProductsApi()
      .then((res) => setdata(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="home-container">
      {data?.map((item, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};
