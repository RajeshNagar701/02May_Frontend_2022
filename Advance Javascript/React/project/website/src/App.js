import React from "react";
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Features from "./pages/Features";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import Header from "./component/Header";
import Footer from "./component/Footer";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<><Header/><Index/> <Footer/></> }></Route>
        <Route path="/index" element={<><Header/><Index/> <Footer/></>}></Route>
        <Route path="/about" element={<><Header/><About/><Footer/></>}></Route>
        <Route path="/blog" element={<><Header/><Blog/><Footer/></>}></Route>
        <Route path="/contact" element={<><Header/><Contact/><Footer/></>}></Route>
        <Route path="/detail" element={<><Header/><Detail/><Footer/></>}></Route>
        <Route path="/product" element={<><Header/><Product/><Footer/></>}></Route>
        <Route path="/features" element={<><Header/><Features/><Footer/></>}></Route>
        <Route path="/service" element={<><Header/><Service/><Footer/></>}></Route>
        <Route path="/team" element={<><Header/><Team/><Footer/></>}></Route>
        <Route path="/testimonial" element={<><Header/><Testimonial/><Footer/></>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
