import React from 'react'
import Banten from "../components/provinces/Banten";
import JawaBarat from "../components/provinces/JawaBarat";
import JawaTengah from "../components/provinces/JawaTengah";
import JawaTimur from "../components/provinces/JawaTimur";
import Yogyakarta from "../components/provinces/Yogyakarta";
import DkiJakarta from './provinces/DkiJakarta';

const Province = () => {
    return (
        <div style={{
            filter: 'drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.25))'
        }} className="flex justify-center group">
            <div className="mr-[-1rem] transition-all group-hover:mr-[0.5rem]">
                <Banten />
            </div>
            <div className="absolute start-[53px] top-[5px] transition-all group-hover:start-[60px] group-hover:scale-150">
                <DkiJakarta />
            </div>
            <div className="mr-[-1rem] transition-all group-hover:mr-[0.5rem] group-hover:ml-[0.5rem]">
                <JawaBarat />
            </div>
            <div className="mr-[-2rem] mt-4 transition-all group-hover:mr-[0.5rem]">
                <div className="flex flex-col items-center">
                    <div className="mb-[-1.5rem] transition-all group-hover:mb-[1px]">
                        <JawaTengah />
                    </div>
                    <div className="ml-[1.5rem]">
                        <Yogyakarta />
                    </div>
                </div>
            </div>
            <div className="mt-[1.9rem]">
                <JawaTimur />
            </div>
        </div>
    )
}

export default Province