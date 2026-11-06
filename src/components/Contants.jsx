import { Link } from "react-router-dom";

function Contants() {
  return (
    <div className="grid grid-cols-4 items-center gap-2 md:gap-8 text-xl md:text-lg whitespace-nowrapcol-span-2 md:col-span-1">
      <Link to="/">Products</Link>
      <Link to="/trending">Trending</Link>
      <Link to="/offers">Offers</Link>
      <Link to="/discount">Discount</Link>
    </div>
  );
}

export default Contants;
