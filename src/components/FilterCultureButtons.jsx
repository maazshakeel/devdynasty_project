import React, { useState } from 'react';

const FilterCultureButtons = ({ filterData }) => {
    const [active, setActive] = useState(1);
    const [expand, setExpand] = useState(false);

    const [filterText, setFilterText] = useState("All")

    const handleFilterButtonClick = (filter, index) => {
        filterData(filter)
        setActive(index)
        setExpand(!expand)
        setFilterText(filter)
    }

    return (
        <>
            <div className="mt-5 hidden lg:rounded-full rounded-3xl border-solid border-2 lg:flex flex-row flex-wrap gap-4 p-2 font-medium">
                <button
                    className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${active === 1 ? 'bg-gray font-semibold' : ''}`}
                    onClick={() => handleFilterButtonClick("All", 1)}
                >
                    All
                </button>
                <button
                    className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${active === 2 ? 'bg-gray font-semibold' : ''}`}
                    onClick={() => handleFilterButtonClick("Seni Tradisional", 2)}
                >
                    Seni Tradisional
                </button>
                <button
                    className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${active === 3 ? 'bg-gray font-semibold' : ''}`}
                    onClick={() => handleFilterButtonClick("Arsitektur", 3)}
                >
                    Arsitektur
                </button>
                <button
                    className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${active === 4 ? 'bg-gray font-semibold' : ''}`}
                    onClick={() => handleFilterButtonClick("Alat Musik Dan Tari Tradisional", 4)}
                >
                    Alat Musik Dan Tari Tradisional
                </button>
                <button
                    className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${active === 5 ? 'bg-gray font-semibold' : ''}`}
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
                {
                    expand && (
                        <>
                            <button
                                className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${active === 1 ? 'bg-gray font-semibold' : ''}`}
                                onClick={() => handleFilterButtonClick("All", 1)}
                            >
                                All
                            </button>
                            <button
                                className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${active === 2 ? 'bg-gray font-semibold' : ''}`}
                                onClick={() => handleFilterButtonClick("Seni Tradisional", 2)}
                            >
                                Seni Tradisional
                            </button>
                            <button
                                className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${active === 3 ? 'bg-gray font-semibold' : ''}`}
                                onClick={() => handleFilterButtonClick("Arsitektur", 3)}
                            >
                                Arsitektur
                            </button>
                            <button
                                className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${active === 4 ? 'bg-gray font-semibold' : ''}`}
                                onClick={() => handleFilterButtonClick("Alat Musik Dan Tari Tradisional", 4)}
                            >
                                Alat Musik Dan Tari Tradisional
                            </button>
                            <button
                                className={`rounded-full hover:bg-gray transition hover:font-semibold py-4 px-10 ${active === 5 ? 'bg-gray font-semibold' : ''}`}
                                onClick={() => handleFilterButtonClick("Tempat Bersejarah", 5)}
                            >
                                Tempat Bersejarah
                            </button>
                        </>
                    )
                }
            </div>
        </>
    )
};

export default FilterCultureButtons;
