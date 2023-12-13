// import { useAppContext } from "../context/AppContext";
//
// export default function ModalProvince() {
//   const { isOpen, setIsOpen, modalData, setModalData } = useAppContext();
//   return (
//     <div>
//       <div
//         style={{
//           height: isOpen && "90vh",
//           opacity: isOpen && "0.97",
//         }}
//         className={`w-full transition-all duration-500 transform h-[0vh]  z-50 bg-[#E8F0C1] border-2 fixed bottom-0 rounded-tr-3xl rounded-tl-2xl font-default`}
//       >
//         <div
//           onClick={() => {
//             setModalData(null);
//             setIsOpen(false);
//           }}
//           className="absolute right-5 top-5 text-2xl font-extrabold border-solid border-2 rounded-full h-10 w-10 text-center bg-slate-700 text-white flex items-center justify-center hover:cursor-pointer"
//         >
//           <span>X</span>
//         </div>
//
//         {isOpen && (
//           <div className="flex">
//             <div className="h-auto w-auto object-cover">
//               <img
//                 src={modalData.img}
//                 className="rounded-lg"
//                 alt="tradition"
//                 width={"15%"}
//                 height={"auto"}
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <h1 className="text-5xl font-extrabold">{modalData.title}</h1>
//               <h1 className="text-3xl font-bold text-slate-500">
//                 {modalData.subtitle}
//               </h1>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useAppContext } from "../context/AppContext";
import Slider from "./Slider";

export default function ModalProvince() {
  const { isOpen, setIsOpen, modalData, setModalData } = useAppContext();

  let slides = [
    "/img/previewBanten.png",
    "/img/previewJakarta.png",
    "/img/previewJawaBarat.png",
    "/img/previewJawaTengah.png",
    "/img/previewYogyakarta.png",
    "/img/previewJawaTimur.png",
  ];

  return (
    <div className="">
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

          <div className="p-28 md:ml-24">
            <div className="flex mb-5 items-center gap-5">
              <img
                src={modalData.img}
                alt="tradition-image"
                width={"15%"}
                className="rounded-lg"
              />

              <div className="flex flex-col justify-between gap-2">
                <h2 className="text-3xl font-bold mb-4">{modalData.title}</h2>
                <h3 className="text-2xl font-semibold text-slate-600">
                  {modalData.subtitle}
                </h3>
              </div>
            </div>

            <p className="text-gray-700 text-xl font-medium w-3/4">
              {modalData.desc}
            </p>
            <div className="w-full sm:w-[75%] mt-5 md:w-[60%]">
              <h2 className="text-3xl font-semibold font-default ml-5 sm:ml-2">
                Preview
              </h2>
              <div className="pt-5">
                <Slider slides={slides} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
