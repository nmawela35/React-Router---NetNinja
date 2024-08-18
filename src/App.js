// import {createBrowserRouter,Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
// // pages
// import Home from './pages/Home'
// import About from './pages/About'
// import Rootlayout from "./layouts/Rootlayout";
// import Helplayout from "./layouts/Helplayout";
// import Contact from "./pages/help/Contact";
// import Faq from "./pages/help/Faq"
// import NotFound from "./pages/NotFound";
// import Careers from "./pages/Careers";
// import CareerLayout from "./layouts/CareerLayout";

// function App() {

//   const newRouter = createBrowserRouter(createRoutesFromElements(
//                 <Route path="/" element={<Rootlayout/>}>
//                     <Route index element={<Home/>}/>
//                     <Route path ="about" element={<About/>}/>
//                     <Route path="help" element = {<Helplayout/>}>
//                           <Route path="faq" element={<Faq/>} />
//                           <Route path="contact" element={<Contact/>}/>
//                     </Route>
//                     <Route path="careers" element={<CareerLayout/>}>
//                         <Route index element={<Careers/>}/>
//                     </Route>
//                     <Route path="*" element={<NotFound/>}/>
//                 </Route>
//   ))
//     return (
//     <main>
//       <RouterProvider router={newRouter}/>
//     </main>

//   );
// }
// export default App;

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from './pages/Careers'
import Rootlayout from "./layouts/Rootlayout";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import Helplayout from "./layouts/Helplayout";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<Helplayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
