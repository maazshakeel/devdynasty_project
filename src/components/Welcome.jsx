import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Import the blur effect CSS

import Image from "/src/assets/img/culturaljava.png";
import PlaceholderImage from "/src/assets/img/culturaljava.png"; // Replace with your actual placeholder image path

export default function Welcome() {
  return (
    <div className="w-full h-full bg-[#E8F0C1] flex flex-col items-start justify-between gap-5 sm:flex-row sm:justify-between sm:items-center lg:gap-7">
      <div className="w-72 flex flex-col gap-3 ml-5 mb-10 md:mb-20 md:w-80 lg:w-[40rem] lg:mb-48 lg:ml-20 lg:gap-3">
        <h1 className="font-bold text-3xl tracking-wide leading-[32.608px] sm:text-3xl md:text-4xl lg:text-5xl lg:leading-none lg:w-full ">
          <span className="text-[#F4BB3F]">Welcome To</span>{" "}
          <span className="text-[#447036]">MuseumJawa!</span>
        </h1>
        <p className="font-medium text-[#222221] text-sm sm:w-full lg:w-[80%] lg:text-lg">
          Jelajahi kekayaan budaya dari Jawa melalui pengalaman interaktif yang
          unik dan memukau!
        </p>
        <button className="w-[110px] h-[35px] font-bold bg-[#447036] hover:bg-[#457036] font-default text-center text-[#F7F7F7] rounded-[5px] lg:w-[150px] lg:h-[45px] lg:text-xl shadow-md">
          Explore
        </button>
      </div>
      <div className="h-full w-full md:w-[60%] lg:w-[56%] aspect-square pt-10">
        <LazyLoadImage
          src={Image}
          alt="Header Image"
          draggable="false"
          rel="preload"
          placeholderSrc={PlaceholderImage}
          width={"100%"}
          height={"100%"}
          effect="blur"
          className="object-cover object-center sm:rounded-tl-[30%] relative"
        />
      </div>
    </div>
  );
}
