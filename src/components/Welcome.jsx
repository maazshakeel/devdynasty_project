import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import the blur effect CSS

import Image from '/src/assets/img/header_image.jpg';
import PlaceholderImage from '/src/assets/img/header_image.png'; // Replace with your actual placeholder image path

export default function Welcome() {
    return (
        // <div className="relative w-full h-[250px]">
        //     <LazyLoadImage
        //         src={Image}
        //         alt="Header Image"
        //         className="w-full h-full object-cover object-center"
        //         style={{ maxHeight: '250px', width: '100%', height: '250px' }}
        //         width={'100%'} // Set your desired width
        //         placeholderSrc={PlaceholderImage}
        //         effect="blur"
        //     />
        //     <p className="absolute bottom-2 left-2 z-10 w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-4xl opacity-90 text-white font-semibold font-default">
        //         Welcome To MuseumJawa!
        //     </p>
        //     <div className="absolute top-0 left-0 w-full h-full opacity-70 shadow-gradient"></div>
        // </div>
        <div className='w-full sm:flex sm:flex-row sm:item-stretch sm:h-[400px] lg:h-[600px] border-solid border-y-[1px]'>
            <div className="w-full h-[270px] bg-white font-poppins box-border px-[5%] pt-[44px] sm:w-[45%] sm:h-[100%] sm:pl-[5%] sm:pr-0 sm:flex sm:pt-0 sm:items-center">
                <div className="">
                    <h1 className='font-semibold text-3xl w-[80%] mb-[11px] leading-[32.608px] md:text-4xl lg:text-[50px] lg:leading-none lg:w-full'>Welcome To MuseumJawa!</h1>
                    <p className='w-[80%] font-light text-sm mb-[10px] sm:w-full lg:w-[80%] lg:text-lg lg:mb-[20px]'>Jelajahi kekayaan budaya dari Jawa melalui pengalaman interaktif yang unik dan memukau!</p>
                    <button className='w-[110px] h-[35px] bg-[#135f1a] hover:bg-[#05670D] font-default text-center text-white rounded-[5px] lg:w-[150px] lg:h-[45px] lg:text-xl shadow-md'>Explore</button>
                </div>
            </div>
            <div className="w-full h-[350px] sm:relative sm:w-[55%] sm:h-[100%]">
                <LazyLoadImage
                    src={Image}
                    alt="Header Image"
                    draggable='false'
                    className='w-full h-full object-cover object-center sm:img-shape sm:object-left lg:object-left'
                    // width={'100%'} // Set your desired width
                />
            </div>
        </div>
    )
}