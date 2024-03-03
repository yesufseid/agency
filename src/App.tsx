import Navbar from './components/Navbar/navbar'
import './App.css'
import Hero from './components/Hero/Hero'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import BrandsLogo from './components/BrandsLogo/Brand';
import Services from './components/Service';
import Testimonial from './components/Testimanial';
import Blog from "./components/Blogs/BlogsComp"
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='dark:bg-black '>
         <Navbar />
         <Hero />
         <BrandsLogo />
         <Services />
         <Testimonial />
         <Blog />
         <Footer />
      </div>
     
    </>
  )
}

export default App
