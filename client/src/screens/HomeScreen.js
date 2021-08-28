import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { getAllProducts } from "../redux/actions/productsActions";
import FAQ from "../components/FAQ";

const HomeScreen = () => {
  const getAllProductsState = useSelector((state) => state.products);
  const { data, loading, error } = getAllProductsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      {data && (
        <div className="px-4 flex flex-col md:grid md:grid-cols-2 md:gap-4 lg:gap-x-6 lg:gap-y-12 xl:grid-cols-3">
          {data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      {loading && <LoadingSpinner />}
      {error && <h1>{error.message}</h1>}
      <FAQ />
    </div>
  );
};

export default HomeScreen;
