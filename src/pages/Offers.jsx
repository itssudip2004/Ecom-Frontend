import products from "../Data/products";
import ProductList from "../components/ProductList";

function Offers() {
  const offerProducts = products.filter((product) => product.offer);

  return <ProductList title="Special Offers" products={offerProducts} />;
}

export default Offers;
