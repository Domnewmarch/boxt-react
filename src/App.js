import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/Partners/Partners";
import How from "./components/How/how";
import './index.css';
import Review from "./components/Reviews/Review";
import Nav from "./components/Navbar/Nav-TailwindUI";


function App() {
  return (
    <>
       <Nav />
       <Hero />
       <Partners />
       <How />
       <Review />
    </>
   
  );
}

export default App;
