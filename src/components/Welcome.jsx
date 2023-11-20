import LazyLoad from 'react-lazyload';

export default function Welcome() {
    return (
        <div className="relative w-full h-[250px]">
            <LazyLoad height={250} offset={100}>
                <img
                    src="/src/assets/img/header_image.png"
                    alt="Header Image"
                    className="w-full h-full object-cover object-center"
                    style={{ maxHeight: '250px' }}
                />
            </LazyLoad>
            <p className="absolute bottom-2 left-2 z-10 w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-4xl opacity-90 text-white font-semibold font-default">
                Welcome To MuseumJawa!
            </p>
            <div className="absolute top-0 left-0 w-full h-full opacity-70 shadow-gradient"></div>
        </div>
    );
}