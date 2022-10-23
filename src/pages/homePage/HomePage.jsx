import { Card } from "../../component/cardComponent/Card";
import "./HomePage.css";
import { useGetAllProductsQuery } from "../../redux/services/productsApi";

export const HomePage = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading)
    return (
      <div className="home-container">
        <span>Loading....</span>
      </div>
    );

  if (error)
    return (
      <div className="home-container">
        <span>Something went wrong :(</span>
      </div>
    );

  return (
    <div className="home-container">
      {data?.map((item, i) => (
        <Card key={i} product={item} />
      ))}
    </div>
  );
};
