import { useAppContext } from "../context/AppContext";

export default function ModalProvince() {
  const { isOpen, setIsOpen, modalData, setModalData } = useAppContext();

  return (
    <div className="overflow-y-hidden">
      {isOpen && (
        <div
          style={{
            height: "70vh",
            opacity: "0.97",
          }}
          className={`w-full overflow-y-scroll h-[0vh]  z-50 bg-[#E8F0C1] border-2 fixed bottom-0 rounded-tr-3xl rounded-tl-2xl font-default`}
        >
          <div
            onClick={() => {
              setModalData(null);
              setIsOpen(false);
            }}
            className="fixed right-5 mt-5 text-2xl font-extrabold border-solid border-2 rounded-full h-10 w-10 text-center bg-slate-700 text-white flex items-center justify-center hover:cursor-pointer"
          >
            <span>X</span>
          </div>

          <div className="p-20  md:p-28 md:ml-24">
            <div className="flex mb-5 flex-col md:flex-row md:gap-5 md:items-center">
              <img
                src={modalData.img}
                alt="tradition-image"
                className="rounded-lg md:w-[20%]"
              />

              <div className="flex flex-col justify-between gap-2 mt-2">
                <h2 className="text-3xl font-bold mb-4">{modalData.title}</h2>
                <h3 className="text-2xl font-semibold text-slate-600">
                  {modalData.subtitle}
                </h3>
              </div>
            </div>

            <p className="text-gray-700 text-xl font-medium w-full md:w-3/4">
              {modalData.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
