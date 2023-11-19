import AccordionAbout from "../components/AccordionAbout";
import Navbar from "../components/Navbar";
import Province from "../components/Province";
import Welcome from "../components/Welcome";

function HomePage() {
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
        <AccordionAbout />
      </main>
    </>
  );
}

export default HomePage;
