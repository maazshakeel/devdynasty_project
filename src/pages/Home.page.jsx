import AccordionAbout from "../components/AccordionAbout";
import Navbar from "../components/Navbar";
import Province from "../components/Province";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function HomePage() {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://source.unsplash.com/755x480?mountain",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main>
        <LazyLoadComponent>
          <Welcome />
        </LazyLoadComponent>
        <div className="w-full flex flex-col justify-center gap-7 items-center mt-7">
          <Province />
          <p className="font-normal opacity-80">Klik Pulaunya Untuk Detail
            Lebih Lanjut!</p>
        </div>
        <div className="w-full sm:w-[75%] mt-5 sm:mx-auto md:w-[60%]">
          <h2 className="text-3xl font-semibold font-default ml-5 sm:ml-0">Preview</h2>
          <div className="pt-7">
            <Slider slides={slides} />
          </div>
        </div>
        <AccordionAbout />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
