import React, { useState } from "react";

const FilterCultureButtons = ({ filterData }) => {
  const [active, setActive] = useState(1);
  const [expand, setExpand] = useState(false);

  const [filterText, setFilterText] = useState("All");

  const handleFilterButtonClick = (filter, index) => {
    filterData(filter);
    setActive(index);
    setExpand(!expand);
    setFilterText(filter);
  };

  const colors = [
    "bg-[#ff5d5d] text-black",
    "bg-[#fff503] text-black",
    "bg-[#ffb443] text-black",
    "bg-[#dd7dff] text-black",
    "bg-[#000000] text-white",
    "bg-[#00ff75] text-black",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <div className="mt-5 bg-white hidden lg:rounded-full rounded-3xl border-solid border-2 lg:flex flex-row flex-wrap gap-4 p-2 font-medium">
        <button
          className={`rounded-full ${
            active !== 1 && "hover:bg-slate-100"
          } transition hover:font-semibold py-4 px-10 ${
            active === 1
              ? "bg-black text-white font-semibold hover:bg-black"
              : ""
          }`}
          onClick={() => handleFilterButtonClick("All", 1)}
        >
          All
        </button>
        <button
          className={`rounded-full ${
            active !== 2 && "hover:bg-slate-100"
          } transition hover:font-semibold py-4 px-10 ${
            active === 2
              ? "bg-black text-white font-semibold hover:bg-black"
              : ""
          }`}
          onClick={() => handleFilterButtonClick("Seni Tradisional", 2)}
        >
          Seni Tradisional
        </button>
        <button
          className={`rounded-full ${
            active !== 3 && "hover:bg-slate-100"
          } transition hover:font-semibold py-4 px-10 ${
            active === 3
              ? "bg-black text-white font-semibold hover:bg-black"
              : ""
          }`}
          onClick={() => handleFilterButtonClick("Arsitektur", 3)}
        >
          Arsitektur
        </button>
        <button
          className={`rounded-full ${
            active !== 4 && "hover:bg-slate-100"
          } transition hover:font-semibold py-4 px-10 ${
            active === 4
              ? "bg-black text-white font-semibold hover:bg-black"
              : ""
          }`}
          onClick={() =>
            handleFilterButtonClick("Alat Musik Dan Tari Tradisional", 4)
          }
        >
          Alat Musik Dan Tari Tradisional
        </button>
        <button
          className={`rounded-full ${
            active !== 5 && "hover:bg-slate-100"
          } transition hover:font-semibold py-4 px-10 ${
            active === 5
              ? "bg-black text-white font-semibold hover:bg-black"
              : ""
          }`}
          onClick={() => handleFilterButtonClick("Tempat Bersejarah", 5)}
        >
          Tempat Bersejarah
        </button>
      </div>

      {/* Mobile Dropdown */}

      <div className="mt-5 w-[300px] flex lg:rounded-full rounded-3xl border-solid border-2 lg:hidden flex-col lg:flex-row flex-wrap gap-4 p-2 font-medium">
        <button
          className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 bg-gray font-semibold`}
          onClick={() => setExpand(!expand)}
        >
          {filterText}
        </button>
        {expand && (
          <>
            <button
              className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${
                active === 1 ? "bg-gray font-semibold" : ""
              }`}
              onClick={() => handleFilterButtonClick("All", 1)}
            >
              All
            </button>
            <button
              className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${
                active === 2 ? "bg-gray font-semibold" : ""
              }`}
              onClick={() => handleFilterButtonClick("Seni Tradisional", 2)}
            >
              Seni Tradisional
            </button>
            <button
              className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${
                active === 3 ? "bg-gray font-semibold" : ""
              }`}
              onClick={() => handleFilterButtonClick("Arsitektur", 3)}
            >
              Arsitektur
            </button>
            <button
              className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${
                active === 4 ? "bg-gray font-semibold" : ""
              }`}
              onClick={() =>
                handleFilterButtonClick("Alat Musik Dan Tari Tradisional", 4)
              }
            >
              Alat Musik Dan Tari Tradisional
            </button>
            <button
              className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${
                active === 5 ? "bg-gray font-semibold" : ""
              }`}
              onClick={() => handleFilterButtonClick("Tempat Bersejarah", 5)}
            >
              Tempat Bersejarah
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default FilterCultureButtons;
