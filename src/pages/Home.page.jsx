import AccordionAbout from "../components/AccordionAbout";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

function HomePage() {
  return (
    <>
      <header className="sticky top-0">
        <Navbar />
      </header>
      <main>
        <Welcome />
        <AccordionAbout />
      </main>
    </>
  );
}

export default HomePage;
