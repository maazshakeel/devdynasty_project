import React, { useEffect, useState } from "react";
import Banten from "../components/provinces/Banten";
import JawaBarat from "../components/provinces/JawaBarat";
import JawaTengah from "../components/provinces/JawaTengah";
import JawaTimur from "../components/provinces/JawaTimur";
import Yogyakarta from "../components/provinces/Yogyakarta";
import DkiJakarta from "./provinces/DkiJakarta";
import { Link } from "react-router-dom";
import Heading from "./Heading";

const Province = () => {
  const [isBantenHovered, setIsBantenHovered] = useState(false);
  const [isDkiJakartaHovered, setIsDkiJakartaHovered] = useState(false);
  const [isJawaBaratHovered, setIsJawaBaratHovered] = useState(false);
  const [isJawaTengahHovered, setIsJawaTengahHovered] = useState(false);
  const [isYogyakartaHovered, setIsYogyakartaHovered] = useState(false);
  const [isJawaTimurHovered, setIsJawaTimurHovered] = useState(false);

  const [firstText, setFirstText] = useState("Pulau");
  const [secondText, setSecondText] = useState("Jawa");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
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

  useEffect(() => {
    if (isBantenHovered) {
      setFirstText("Provinsi");
      setSecondText("Banten");
    }
  }, [
    isBantenHovered,
    isDkiJakartaHovered,
    isJawaBaratHovered,
    isJawaTengahHovered,
    isYogyakartaHovered,
    isJawaTimurHovered,
  ]);

  const onBantentHoverHandler = (val) => {
    if (val) {
      setFirstText("Provinsi");
      setSecondText("Banten");
    } else {
      setFirstText("Pulau");
      setSecondText("Jawa");
    }
    setIsBantenHovered(val);
  };

  const onDkiJakartaHoverHandler = (val) => {
    if (val) {
      setFirstText("Provinsi");
      setSecondText("DKI Jakarta");
    } else {
      setFirstText("Pulau");
      setSecondText("Jawa");
    }
    setIsDkiJakartaHovered(val);
  };
  const onJawaBaratHoverHandler = (val) => {
    if (val) {
      setFirstText("Provinsi");
      setSecondText("Jawa Barat");
    } else {
      setFirstText("Pulau");
      setSecondText("Jawa");
    }
    setIsJawaBaratHovered(val);
  };
  const onJawaTengahHoverHandler = (val) => {
    if (val) {
      setFirstText("Provinsi");
      setSecondText("Jawa Tengah");
    } else {
      setFirstText("Pulau");
      setSecondText("Jawa");
    }
    setIsJawaTengahHovered(val);
  };
  const onYogjakartaHoverHandler = (val) => {
    if (val) {
      setFirstText("Provinsi");
      setSecondText("Yogjakarta");
    } else {
      setFirstText("Pulau");
      setSecondText("Jawa");
    }
    setIsYogyakartaHovered(val);
  };
  const onJawaTimurHoverHandler = (val) => {
    if (val) {
      setFirstText("Provinsi");
      setSecondText("Jawa Timur");
    } else {
      setFirstText("Pulau");
      setSecondText("Jawa");
    }
    setIsJawaTimurHovered(val);
  };

  return (
    <div className="w-full flex flex-col justify-center gap-7 items-center">
      <Heading firstText={firstText} secondText={secondText} />
      <div
        style={{
          filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.25))",
        }}
        className="flex justify-center group transition-all"
      >
        <Link
          to={`${isMobile ? "/choose" : "/banten/details"}`}
          className="mr-[-1rem] transition-all lg:group-hover:mr-[0.5rem]"
          aria-label="banten"
          onMouseEnter={() => onBantentHoverHandler(true)}
          onMouseLeave={() => onBantentHoverHandler(false)}
        >
          <Banten />
        </Link>
        <Link
          to={`${isMobile ? "/choose" : "/dkijakarta/details"}`}
          className="absolute start-[53px] top-[5px] transition-all lg:group-hover:start-[60px] lg:group-hover:scale-150"
          aria-label="dkijakarta"
          onMouseEnter={() => onDkiJakartaHoverHandler(true)}
          onMouseLeave={() => onDkiJakartaHoverHandler(false)}
        >
          <DkiJakarta />
        </Link>
        <Link
          to={`${isMobile ? "/choose" : "/jawabarat/details"}`}
          aria-label="jawabarat"
          onMouseEnter={() => onJawaBaratHoverHandler(true)}
          onMouseLeave={() => onJawaBaratHoverHandler(false)}
          className="mr-[-1rem] transition-all lg:group-hover:mr-[0.5rem] lg:group-hover:ml-[0.5rem]"
        >
          <JawaBarat />
        </Link>
        <div className="mr-[-2rem] mt-4 transition-all lg:group-hover:mr-[0.5rem]">
          <div className="flex flex-col items-center">
            <Link
              to={`${isMobile ? "/choose" : "/jawatengah/details"}`}
              aria-label="jawatengah"
              onMouseEnter={() => onJawaTengahHoverHandler(true)}
              onMouseLeave={() => onJawaTengahHoverHandler(false)}
              className="mb-[-1.6rem] transition-all lg:group-hover:mb-[1px]"
            >
              <JawaTengah />
            </Link>
            <Link
              to={`${isMobile ? "/choose" : "/yogjakarta/details"}`}
              aria-label="yogjakarta"
              onMouseEnter={() => onYogjakartaHoverHandler(true)}
              onMouseLeave={() => onYogjakartaHoverHandler(false)}
              className="ml-[1.6rem] z-10"
            >
              <Yogyakarta />
            </Link>
          </div>
        </div>
        <Link
          to={`${isMobile ? "/choose" : "/jawatimur/details"}`}
          aria-label="jawatimur"
          onMouseEnter={() => onJawaTimurHoverHandler(true)}
          onMouseLeave={() => onJawaTimurHoverHandler(false)}
          className="mt-[1.9rem]"
        >
          <JawaTimur />
        </Link>
      </div>
    </div>
  );
};

export default Province;
