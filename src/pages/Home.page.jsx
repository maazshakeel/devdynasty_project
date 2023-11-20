import AccordionAbout from "../components/AccordionAbout";
import Navbar from "../components/Navbar";
import Province from "../components/Province";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Loader from "../components/Loader";

function HomePage() {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main>
        <Welcome />
        <div className="w-full flex flex-col justify-center gap-7 items-center mt-4">
          <div className="p-4 px-12 w-fit border-primary border-solid border-2 rounded-lg hover:bg-green-100/25">
            <h1 className="font-bold lg:text-3xl md:text-3xl sm:text-2xl text-xl">Pulau<br /><span className="text-primary">Jawa</span></h1>
          </div>
          <Province />
          <p className="font-bold opacity-80">Klik Pulaunya Untuk Detail
            Lebih Lanjut!</p>
        </div>
        <div className="w-[60%] m-auto pt-11">
          <Slider slides={slides} />
        </div>
        <AccordionAbout />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default HomePage;
