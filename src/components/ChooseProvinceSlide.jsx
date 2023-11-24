import { useState } from "react"
import dataProvince from "../data/dataProvince"
import { Link } from "react-router-dom"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function ChooseProvinceSlide() {

    const [index, setIndex] = useState(0)

    function handleNextClick() {
        if (index + 1 === dataProvince.length) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    function handlePreviousClick() {
        if (index === 0) {
            setIndex(dataProvince.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    let province = dataProvince[index]

    return (
        <div className="flex flex-col items-center mx-auto min-h-full max-w-screen-sm">
            <div className="p-5 mt-5 w-fit border-primary border-solid border-2 rounded-lg">
                <h1 className="tracking-widest font-bold text-4xl transition-all text-center">Provinsi<br /> <span className="text-primary">{province.name}</span></h1>
            </div>
            <div className="mx-8 m-14">
                <button onClick={handlePreviousClick} className="absolute lg:left-[32%] left-[5%] top-[44%]">
                    <FaChevronLeft size={30} />
                </button>
                <Link to={province.link} className="self-center" >
                    <img src={province.img} />
                </Link>
                <button onClick={handleNextClick} className="absolute lg:right-[32%] right-[5%] top-[44%]">
                    <FaChevronRight size={30} />
                </button>
            </div>

            <div className="p-3 bg-gray rounded-lg mt-10 mb-2">
                <h2 className="font-semibold text-2xl">{province.name}</h2>
                <p>{province.desc}</p>
            </div>
        </div>
    )
}
