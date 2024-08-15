import {createBrowserRouter,Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from "./pages/Contact";
import Rootlayout from "./layouts/Rootlayout";



function App() {
  
  const newRouter = createBrowserRouter(createRoutesFromElements(
                    <Route path="/" element={<Rootlayout/>}>
                      <Route index element={<Home/>}/>
                      <Route path ="about" element={<About/>}/>
                      <Route path="contact" element={<Contact/>}/>
                    </Route>
  ))
  
    return (

    <main>
      <RouterProvider router={newRouter}/>
    </main>


  );
}

export default App;
