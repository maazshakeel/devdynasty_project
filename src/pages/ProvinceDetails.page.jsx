import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";

const ProvinceDetailsPage = (props) => {
  const { province } = useParams();
  const modifiedProvince = province.charAt(0).toUpperCase() + province.slice(1);
  return (
    <div className=" bg-[#E8F0C1] h-screen">
      <header>
        <Navbar />
      </header>
      <main className="font-default ">
        <div className="w-full">
          <div className="w-full flex justify-center items-center mt-2 flex-col">
            {/* <Heading firstText="See All Culture" secondText={`About ${modifiedProvince}`} /> */}
            <div className="p-4 px-12 w-fit transition-all">
              <h1 className="font-bold leading-9 text-center lg:text-4xl md:text-4xl sm:text-3xl text-3xl transition-all">
                <span className="">Explore Culture</span>{" "}
                <span className="text-primary">of {modifiedProvince}</span>
              </h1>
            </div>
            <div className="mt-[3px] bg-green-100/25 p-2 border-solid border-2 border-green-200 max-w-xs rounded-md sm:max-w-xl flex gap-1">
              <FaInfoCircle color="rgb(22 101 52)" />
              <p className="font-medium text-xs sm:text-sm  opacity-80 text-start">
                Lihat semua budaya Banten mulai dari Seni, Arsitektur, sampai
                Destinasi Wisata!
              </p>
            </div>
          </div>

          <div className="w-[100vw] mt-10 mx-auto bg-red-50 p-2 font-poppins sm:flex sm:gap-2 sm:flex-nowrap sm:items-start sm:overflow-x-auto md:flex-wrap md:justify-center">
            <div className="w-full bg-white shadow-md rounded-lg overflow-hidden mb-3 sm:w-[400px] sm:shrink-0">
              <div className="w-full h-[180px] bg-slate-200 overflow-hidden">
                <img src="https://asset.kompas.com/crops/kuaDEQ1XCaWY_YIRQoRqnnOQ6yw=/73x0:735x441/750x500/data/photo/2021/03/16/605092498232a.png" alt="" width={"auto"} height={"auto"}/>
              </div>
              <div className="p-5">
              <h1 className="text-3xl font-bold">Baju Pangsi</h1>
              <p className="text-slate-300 mb-5">Baju Adat DKI Jakarta</p>
              
              <p>Baju adat pria Banten disebut dengan baju pangsi. Baju pangsi terdiri dari celana pangsi, baju pangsi, dan ikat kepala. <br /> <a href="#" className="font-bold ">Read More</a></p>
              </div>
            </div>
            <div className="w-full bg-white shadow-md rounded-lg overflow-hidden mb-3 sm:w-[400px] sm:shrink-0">
              <div className="w-full h-[180px] bg-slate-200 overflow-hidden">
                <img src="https://asset.kompas.com/crops/kuaDEQ1XCaWY_YIRQoRqnnOQ6yw=/73x0:735x441/750x500/data/photo/2021/03/16/605092498232a.png" alt="" width={"auto"} height={"auto"}/>
              </div>
              <div className="p-5">
              <h1 className="text-3xl font-bold">Baju Pangsi</h1>
              <p className="text-slate-300 mb-5">Baju Adat DKI Jakarta</p>
              
              <p>Baju adat pria Banten disebut dengan baju pangsi. Baju pangsi terdiri dari celana pangsi, baju pangsi, dan ikat kepala. <br /> <a href="#" className="font-bold ">Read More</a></p>
              </div>
            </div>
            <div className="w-full bg-white shadow-md rounded-lg overflow-hidden mb-3 sm:w-[400px] sm:shrink-0">
              <div className="w-full h-[180px] bg-slate-200 overflow-hidden">
                <img src="https://asset.kompas.com/crops/kuaDEQ1XCaWY_YIRQoRqnnOQ6yw=/73x0:735x441/750x500/data/photo/2021/03/16/605092498232a.png" alt="" width={"auto"} height={"auto"}/>
              </div>
              <div className="p-5">
              <h1 className="text-3xl font-bold">Baju Pangsi</h1>
              <p className="text-slate-300 mb-5">Baju Adat DKI Jakarta</p>
              
              <p>Baju adat pria Banten disebut dengan baju pangsi. Baju pangsi terdiri dari celana pangsi, baju pangsi, dan ikat kepala. <br /> <a href="#" className="font-bold ">Read More</a></p>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProvinceDetailsPage;
