import "./index.css";
import Navbar from "./components/navbar/Navbar";
import ContainerGallery from "./components/gallery/ContainerGallery";
import Banner from "./components/gallery/Banner";
import BestSeller from "./components/gallery/BestSeller";
import Promote from "./components/Promote";
import FooterContainer from "./components/footer/FooterContainer";
function App() {
  return (
    <>
      <Navbar />
      <ContainerGallery />
      <Banner />
      <BestSeller />
      <Promote />
      <FooterContainer />
    </>
  );
}

export default App;
