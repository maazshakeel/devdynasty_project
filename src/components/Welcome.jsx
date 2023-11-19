export default function Welcome(){
    return(
        <div className="w-full h-[250px] relative bg-[url(/src/assets/img/header_img.png)] bg-no-repeat bg-cover bg-center">
            <p className="text-4xl text-white font-semibold w-1/2 z-10 font-default absolute bottom-2 left-2">Welcome To MuseumJawa!</p>
            <div className="w-full h-full absolute shadow-gradient top-0 left-0 opacity-70"></div>
        </div>
    )
}