import Logo from "./Logo";
import Contants from "./Contants";
import Search from "./Search";
import Cart from "./cart";

function Topbar() {
  return (
    <div className="grid grid-cols-[auto_1fr] md:grid-cols-3 items-center gap-3 p-3 border border-black-50">
      <Logo />
      <Contants />
      <div className="col-span-2 md:col-span-1 flex justify-end">
        <Search />
        <Cart />
      </div>
    </div>
  );
}

export default Topbar;
