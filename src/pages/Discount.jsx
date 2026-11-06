import products from "../Data/products";
import ProductList from "../components/ProductList";

function Discount() {
  const discountedProducts = products.filter(
    (product) => product.originalPrice > product.price,
  );

  return (
    <ProductList title="Discounted Products" products={discountedProducts} />
  );
}

export default Discount;
