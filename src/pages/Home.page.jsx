import AccordionAbout from "../components/AccordionAbout";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Welcome from "../components/Welcome";

function HomePage() {
  const sliderData = ['https://source.unsplash.com/640x480?cultural','https://source.unsplash.com/640x480?indonesia']
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main>
        <Welcome />
        <AccordionAbout />
        <Slider swiperData={sliderData}/>
      </main>
    </>
  );
}

export default HomePage;
