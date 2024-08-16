import { NavLink, Outlet } from "react-router-dom";

function Rootlayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobs Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default Rootlayout;
