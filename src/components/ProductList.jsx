import ProductItem from "./ProductItem";

function ProductList({ title, products }) {
  function handleAddToCart(product) {
    console.log("Added to cart:", product);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
