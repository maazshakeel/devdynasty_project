import { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import DetailCard from "../components/DetailCard";
import ModalProvince from "../components/ModalProvince";
import { useAppContext } from "../context/AppContext";
import dataCultures from "../data/dataCultures";
import FilterCultureButtons from "../components/FilterCultureButtons";

const ProvinceDetailsPage = () => {
  const { province } = useParams();
  const modifiedProvince = province.charAt(0).toUpperCase() + province.slice(1);
  const { isOpen } = useAppContext();

  const dataProvinceCulture = dataCultures.filter(
    (data) => data.province == modifiedProvince,
  );

  const allData = [
    ...dataProvinceCulture[0].seniTradisional.bajuAdat,
    ...dataProvinceCulture[0].seniTradisional.seniBelaDiri,
    ...dataProvinceCulture[0].seniTradisional.seniRupa,
    ...dataProvinceCulture[0].arsitektur.rumahAdat,
    ...dataProvinceCulture[0].alatMusikDanTariTradisional.alatMusik,
    ...dataProvinceCulture[0].alatMusikDanTariTradisional.tariTradisional,
    ...dataProvinceCulture[0].tempatBersejarah,
  ];

  const [filteredData, setFilteredData] = useState(allData);

  const handleFilterData = (category) => {
    if (category !== "All") {
      setFilteredData(
        allData.filter((data) => {
          return data.category.includes(category);
        }),
      );
    } else {
      setFilteredData(allData);
    }
    console.log(filteredData);
  };

  return (
    <div
      style={{
        backgroundColor: isOpen && "#999999",
      }}
      className="bg-[#E8F0C1] min-h-screen"
    >
      <header>
        <Navbar />
      </header>
      <main className="font-default">
        <div className="w-full">
          <div className="w-full flex justify-center items-center mt-2 flex-col">
            <div className="p-4 px-12 w-fit transition-all">
              <h1 className="font-bold leading-9 text-center lg:text-4xl md:text-4xl sm:text-3xl text-3xl transition-all">
                <span className="">Explore Culture</span>{" "}
                <span className="text-primary">of {modifiedProvince}</span>
              </h1>
            </div>
            <div className="mt-[3px] bg-green-100/25 p-2 border-solid border-2 border-green-200 w-fit rounded-md flex gap-1">
              <FaInfoCircle color="rgb(22 101 52)" />
              <p className="font-medium text-xs sm:text-sm opacity-80 text-start">
                Lihat semua budaya {modifiedProvince} mulai dari Seni,
                Arsitektur, sampai Tempat Bersejarah!
              </p>
            </div>

            <FilterCultureButtons filterData={handleFilterData} />
          </div>

          <div
            style={{
              backgroundColor: isOpen && "#999999",
            }}
            className="w-full mt-10 mx-auto bg-[#E8F0C1] p-5 lg:p-2  font-poppins 
          sm:flex sm:gap-2 sm:flex-nowrap sm:items-start sm:overflow-x-auto 
          md:flex-wrap md:justify-center md:gap-4 "
          >
            {filteredData.map((object, i) => (
              <div key={i}>
                <DetailCard object={object} />
              </div>
            ))}
          </div>

          <ModalProvince />
        </div>
      </main>
    </div>
  );
};

export default ProvinceDetailsPage;
