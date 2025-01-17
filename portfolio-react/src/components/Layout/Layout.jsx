import {Outlet} from 'react-router-dom';
import Header from '../Header/Header';

function Layout() {
  return (
    <div className="bg-[#000] text-white min-h-screen">
      <Header />
      <main className="h-full main-content">
        <Outlet /> {/* Renders the child route components */}
      </main>
    </div>
  )
}

export default Layout
