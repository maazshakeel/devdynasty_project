import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function Slider({ slides }) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="overflow-hidden relative rounded-md">
            <div
                className={`flex transition ease-out duration-400`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s, index) => (
                    <img key={index} src={s} alt={`Slide ${index + 1}`} />
                ))}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousSlide} aria-label="Previous Slide">
                    <FaChevronLeft />
                </button>
                <button onClick={nextSlide} aria-label="Next Slide">
                    <FaChevronRight />
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => (
                    <div
                        onClick={() => {
                            setCurrent(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-2 h-2 cursor-pointer  ${i === current ? "bg-white" : "bg-slate-500"
                            }`}
                        role="button"
                        aria-label={`Go to Slide ${i + 1}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
