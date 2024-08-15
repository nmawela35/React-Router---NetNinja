import {createBrowserRouter, BrowserRouter, Route, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom";

// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from "./pages/Contact";



function App() {
  const newRouter = createBrowserRouter(createRoutesFromElements(
      <Route>
        <Route path="home" element={<Home/>}/>
        <Route path ="about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Route>
  ))
  
    return (
      <>
      <BrowserRouter>

    <header>
      <nav>
        <h1>JobaRouter</h1>
        <NavLink path="/" to="home">Home</NavLink>
        <NavLink to= "about">About</NavLink>
        <NavLink to= "contact">Contact</NavLink>
      </nav>
    </header>
      </BrowserRouter>

    <main>
      <RouterProvider router={newRouter}/>
    </main>
      </>

  );
}

export default App;
