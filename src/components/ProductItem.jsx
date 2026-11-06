function ProductItem({ product, onAddToCart }) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-md border overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover"
        />

        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Product information */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.name}</h2>

        <p className="text-sm text-gray-500">{product.category}</p>

        <p className="mt-2">⭐ {product.rating || "No rating"}</p>

        {/* Price */}
        <div className="flex gap-2 items-center mt-2">
          <span className="font-bold text-lg">Rs. {product.price}</span>

          {product.originalPrice && (
            <span className="line-through text-gray-400">
              Rs. {product.originalPrice}
            </span>
          )}
        </div>

        {/* Button */}
        <button
          onClick={() => onAddToCart?.(product)}
          className="bg-black text-white w-full py-2 rounded-lg mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
