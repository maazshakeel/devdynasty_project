import { useCallback, useState } from "react";

function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

export default function detailCard({ object, setIsOpenHandlerTrue }) {
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
  return (
    <div
      className={`w-full  bg-[#E8F0C1] border-solid border-2 drop-shadow-md shadow-inner rounded-lg overflow-hidden mb-3 sm:w-[400px] sm:shrink-0`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
      }}
    >
      <div className="w-full h-[180px] bg-slate-200 overflow-hidden border-b-2">
        <img src={object.img} alt="" width={"100%"} height={"auto"} />
      </div>
      <div className="p-5">
        <h1 className="text-3xl font-bold">{object.title}</h1>
        <p className="text-slate-900 mb-5">{object.subtitle}</p>

        <p>
          {object.description} <br />
          <span
            className="font-bold text-green-800 "
            onClick={() => {
              setIsOpenHandlerTrue();
            }}
          >
            Read More
          </span>
        </p>
      </div>
    </div>
  );
}
