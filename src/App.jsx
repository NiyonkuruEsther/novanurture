import Footer from "./components/Footer";
import Quote from "./components/Quote";
import Statistics from "./components/Statistics";
import Subscribe from "./components/Subscribe";
import About from "./pages/About";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import MainProtectedLayout from "./pages/Dashboard";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Testimonies from "./pages/Testimonies";

function App() {
  return (
    <MainProtectedLayout />
    // <>
    //   <Home />
    //   <Statistics />
    //   <About />
    //   <Quote />
    //   <Gallery />
    //   <Subscribe />
    //   <Testimonies />
    //   <FAQ />
    //   <Footer />
    // </>
  );
}

export default App;
