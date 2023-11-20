import React from 'react'

const Heading = ({ firstText, secondText }) => {
    return (
        <div className="p-4 px-12 w-fit border-primary border-solid border-2 rounded-lg hover:bg-green-100/25 transition-all">
            <h1 className="font-bold lg:text-3xl md:text-3xl sm:text-2xl text-xl transition-all">{firstText}<br /><span className="text-primary">{secondText}</span></h1>
        </div>
    )
}

export default Heading