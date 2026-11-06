import ProductList from "../components/ProductList";
import products from "../Data/products";

function Products() {
  return <ProductList title="All Products" products={products} />;
}

export default Products;
