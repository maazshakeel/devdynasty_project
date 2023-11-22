import React from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import { useParams } from 'react-router-dom'

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
                    <div className='w-full flex justify-center items-center mt-4 flex-col'>
                        <Heading firstText="See All Culture" secondText={`About ${modifiedProvince}`} />
                        <p className="font-normal opacity-80 text-center mt-4">Lihat semua budaya Banten mulai dari Seni, Arsitektur, sampai Destinasi Wisata!</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProvinceDetailsPage