import Quote from "./components/Quote";
import Statistics from "./components/Statistics";
import Subscribe from "./components/Subscribe";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Testimonies from "./pages/Testimonies";

function App() {
  return (
    <>
      <Home />
      <Statistics />
      <About />
      <Quote />
      <Gallery />
      <Subscribe />
      <Testimonies />
      <FAQ />
    </>
  );
}

export default App;
