import { Outlet } from "react-router-dom";

//import Sidebar from "./Sidebar";
import Topbar from "../components/Topbar";

function Home() {
  return (
    <div>
      <Topbar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
