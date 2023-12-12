import { useCallback, useState } from "react";
import throttle from "../../lib/throttle";
import { useAppContext } from "../context/AppContext";

export default function detailCard({ object }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 19;
      const rotateY = (centerX - x) / 19;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    [],
  );
  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const colors = [
    // "bg-[#ff5d5d] text-black",
    // "bg-[#fff503] text-black",
    // "bg-[#ffb443] text-black",
    // "bg-[#dd7dff] text-black",
    "bg-[#000000] text-white",
    // "bg-[#00ff75] text-black",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const { isOpen, setIsOpen, modalData, setModalData } = useAppContext();
  return (
    <div
      className={`w-full font-default z-0 bg-white border-solid border-2 drop-shadow-md shadow-inner rounded-lg overflow-hidden mb-3 sm:w-[400px] sm:shrink-0`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,

        backgroundColor: isOpen && "#999999",
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
      }}
    >
      <div
        className={`absolute ${randomColor} h-10 w-38 px-2 rounded-full z-50 right-[5px] top-[5px] text-xs flex items-center justify-center font-bold transition-colors duration-1000`}
      >
        {object.category}
      </div>
      <div className="w-full h-[180px] bg-slate-200 overflow-hidden border-b-2">
        <img src={object.img} alt="" width={"100%"} height={"auto"} />
      </div>
      <div className="p-5 overflow-hidden ">
        <h1 className="text-3xl font-bold">{object.title}</h1>
        <p className="text-slate-900 mb-5">{object.subtitle}</p>

        <p className="h-20 ">{object.desc} </p>
      </div>
      <div
        className="font-bold w-fit px-5 py-2 text-green-800"
        onClick={() => {
          setModalData(object);
          setIsOpen(true);
        }}
      >
        <div className="p-0 pb-3 pt-1">
          <button
            className={`${randomColor} select-none font-sans font-bold uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none duration-1000`}
            type="button"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
