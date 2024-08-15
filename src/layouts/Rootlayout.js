import { NavLink, Outlet } from "react-router-dom";

function Rootlayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>JobaRouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default Rootlayout;
