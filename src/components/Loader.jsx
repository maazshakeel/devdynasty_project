const Loader = () => {
    let circleCommonClasses = 'h-14 w-14 bg-green-600 rounded-full';

    return (
        <div className='flex justify-center items-center h-screen gap-5'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
};

export default Loader;
