import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>JobaRouter</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to= "about">About</NavLink>
        <NavLink to= "contact">Contact</NavLink>
      </nav>
    </header>

    <main>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path ="about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </main>

    </BrowserRouter>
  );
}

export default App;
