import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import DetailCard from "../components/DetailCard";
import ModalProvince from "../components/ModalProvince";
import { useAppContext } from "../context/AppContext";

const ProvinceDetailsPage = (props) => {
  const { province } = useParams();
  const modifiedProvince = province.charAt(0).toUpperCase() + province.slice(1);
  const { isOpen } = useAppContext();

  const testJSON = [
    {
      title: "Baju Pangsi",
      subtitle: "Baju Adat Dki Jakarta",
      description:
        "Pangsi Betawi adalah pakaian adat Betawi pria yang terdiri dari baju tikim dan celana pangsi.",
      img: "https://asset.kompas.com/crops/kuaDEQ1XCaWY_YIRQoRqnnOQ6yw=/73x0:735x441/750x500/data/photo/2021/03/16/605092498232a.png",
    },
    {
      title: "Baju Andada",
      subtitle: "Baju Adadadada",
      description:
        "Pangsi Betawi adalah pakaian adat Betawi pria yang terdiri dari baju tikim dan celana pangsi.",
      img: "https://source.unsplash.com/484x332?indonesian%20culture",
    },
    {
      title: "Baju fafs",
      subtitle: "Baju fafafa",
      description:
        "Pangsi Betawi adalah pakaian adat Betawi pria yang terdiri dari baju tikim dan celana pangsi.",
      img: "https://images.unsplash.com/photo-1667132713857-6c3369c06f7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=332&ixid=MnwxfDB8MXxyYW5kb218MHx8aW5kb25lc2lhbiBjdWx0dXJlfHx8fHx8MTcwMTMyNDg3Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=484",
    },
  ];
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
            <div className="mt-[3px] bg-green-100/25 p-2 border-solid border-2 border-green-200 max-w-xs rounded-md sm:max-w-xl flex gap-1">
              <FaInfoCircle color="rgb(22 101 52)" />
              <p className="font-medium text-xs sm:text-sm  opacity-80 text-start">
                Lihat semua budaya Banten mulai dari Seni, Arsitektur, sampai
                Destinasi Wisata!
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: isOpen && "#999999",
            }}
            className="w-full mt-10 mx-auto bg-[#E8F0C1] p-2 font-poppins 
          sm:flex sm:gap-2 sm:flex-nowrap sm:items-start sm:overflow-x-auto 
          md:flex-wrap md:justify-center md:gap-4"
          >
            {testJSON.map((object, i) => (
              <DetailCard key={i} object={object} />
            ))}
          </div>

          <ModalProvince />
        </div>
      </main>
    </div>
  );
};

export default ProvinceDetailsPage;
