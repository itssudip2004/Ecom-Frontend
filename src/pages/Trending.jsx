import products from "../Data/products";
import ProductList from "../components/ProductList";

function Trending() {
  const trendingProducts = products.filter((product) => product.trending);

  return <ProductList title="Trending Products" products={trendingProducts} />;
}

export default Trending;
