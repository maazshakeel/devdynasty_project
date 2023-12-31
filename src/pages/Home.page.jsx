import AccordionAbout from "../components/AccordionAbout";
import Navbar from "../components/Navbar";
import Province from "../components/Province";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function HomePage() {
  let slides = [
    "/img/previewBanten.png",
    "/img/previewJakarta.png",
    "/img/previewJawaBarat.png",
    "/img/previewJawaTengah.png",
    "/img/previewYogyakarta.png",
    "/img/previewJawaTimur.png",
  ];

  return (
    <div className="max-w-screen h-screen overflow-x-hidden  bg-[#E8F0C1]">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className=" bg-[#E8F0C1]">
        <div className="h-auto bg-[#E8F0C1]">
          <LazyLoadComponent>
            <Welcome />
          </LazyLoadComponent>
        </div>
        <div className="w-full flex flex-col justify-center gap-7 items-center mt-7  bg-[#E8F0C1]">
          <Province />
          <p className="font-normal opacity-80">
            Klik Pulaunya Untuk Detail Lebih Lanjut!
          </p>
        </div>
        <div className="w-full sm:w-[75%] mt-5 sm:mx-auto md:w-[60%]">
          <h2 className="text-3xl font-semibold font-default ml-5 sm:ml-0">
            Preview
          </h2>
          <div className="pt-7">
            <Slider slides={slides} />
          </div>
        </div>
        <AccordionAbout />
      </main>
      <footer className=" bg-[#E8F0C1]">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
