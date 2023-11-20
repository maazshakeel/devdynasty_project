import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import the blur effect CSS

import Image from '/src/assets/img/header_image.png';
import PlaceholderImage from '/src/assets/img/header_image.png'; // Replace with your actual placeholder image path

export default function Welcome() {
    return (
        <div className="relative w-full h-[250px]">
            <LazyLoadImage
                src={Image}
                alt="Header Image"
                className="w-full h-full object-cover object-center"
                style={{ maxHeight: '250px', width: '100%', height: '250px' }}
                width={'100%'} // Set your desired width
                placeholderSrc={PlaceholderImage}
                effect="blur"
            />
            <p className="absolute bottom-2 left-2 z-10 w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-4xl opacity-90 text-white font-semibold font-default">
                Welcome To MuseumJawa!
            </p>
            <div className="absolute top-0 left-0 w-full h-full opacity-70 shadow-gradient"></div>
        </div>
    );
}