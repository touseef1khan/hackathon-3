
import Navbar from "./components/header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/footer";
import Products from "./components/products";
import Slides from "./components/slides";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section/>
      <Footer/>
      <Products/>
      <Slides/>
    </div>
  );
}
