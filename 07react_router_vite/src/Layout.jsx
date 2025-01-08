import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Child route content will be rendered here */}
      </main>
    </div>
  )
}

export default Layout
