import { useEffect, useState } from "react";
import ChooseProvinceSlide from "../components/ChooseProvinceSlide";
import Navbar from "../components/Navbar";
import NoPage from "./NoPage.page";

export default function ChooseProvincePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 640);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <NoPage />
      ) : (
        <div className=" bg-[#E8F0C1] ">
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>
          <main className="font-default">
            <ChooseProvinceSlide />
          </main>
        </div>
      )}
    </>
  );
}
