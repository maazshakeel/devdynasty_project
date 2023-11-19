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
        }} className="flex justify-center">
            <div className="mr-[-1rem]">
                <Banten />
            </div>
            <div className="absolute start-[53px] top-[5px]">
                <DkiJakarta />
            </div>
            <div className="mr-[-1rem]">
                <JawaBarat />
            </div>
            <div className="mr-[-2rem] mt-4">
                <div className="flex flex-col items-center">
                    <div className="mb-[-1.5rem]">
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