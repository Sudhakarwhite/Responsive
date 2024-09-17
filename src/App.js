import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Brand from './Component/Brand/Brand'
import Section from "./Component/Section/Box";
import Carousel from "./Component/Slider/slider";
import Help from "./Component/Help/help";
// import BlogList from "./Blog";
import BlogArticle from "./Component/Blog/blogs";
// import Section, { Box } from "./Component/Box";
// import { Brand } from "./Component/Brand";
import Footer from "./Component/Footer/footer";
// import { Help } from "./Component/help";
// import Navbar from "./Component/Navbar";
import PricingTable from "./Component/Pricing/Pricingtable";
// import Carousel from "./Component/slider";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Brand />
      </div>
      <div className="demo">
        <Section />
      </div>
      <div className="Carousel">
        <Carousel />
      </div>
      <div className="Help">
        <Help />
      </div>
      <div className="PricingTable">
        <PricingTable />
      </div>
      <div className="BlogArticle">
        <BlogArticle />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
