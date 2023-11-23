import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { FaInfoCircle } from "react-icons/fa";


const ProvinceDetailsPage = (props) => {
    const { province } = useParams()
    const modifiedProvince = province.charAt(0).toUpperCase() + province.slice(1);
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='font-default'>
                <div className='w-full'>
                    <div className='w-full flex justify-center items-center mt-2 flex-col'>
                        {/* <Heading firstText="See All Culture" secondText={`About ${modifiedProvince}`} /> */}
                        <div className="p-4 px-12 w-fit hover:bg-green-100/25 transition-all">
                            <h1 className="font-bold leading-9 text-center lg:text-4xl md:text-4xl sm:text-3xl text-3xl transition-all"><span className=''>Explore Culture</span>{' '}<span className="text-primary">of {modifiedProvince}</span></h1>
                        </div>
                        <div className='mt-[3px] bg-green-100 p-2 border-solid border-2 border-green-200 max-w-xs rounded-md sm:max-w-xl flex gap-1'>
                            <FaInfoCircle color='rgb(22 101 52)' />
                            <p className="font-medium text-xs sm:text-sm  opacity-80 text-start">
                                Lihat semua budaya Banten mulai dari Seni, Arsitektur, sampai Destinasi Wisata!
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProvinceDetailsPage