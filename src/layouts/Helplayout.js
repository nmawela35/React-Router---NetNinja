import { Outlet,NavLink } from "react-router-dom";

function Helplayout() {
  return (
    <div className="help-layout">

      <h2>Website Help</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,</p>
      
      <nav>
        <NavLink to="faq">View the faq</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

        <Outlet/>

    </div>
  );
}

export default Helplayout;
