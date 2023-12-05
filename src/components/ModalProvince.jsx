import { useAppContext } from "../context/AppContext";

export default function ModalProvince() {
  const { isOpen, setIsOpen } = useAppContext();
  return (
    <div
      style={{
        height: isOpen && "90vh",
        opacity: isOpen && "0.97",
      }}
      className={`w-full transition-all duration-500 transform h-[0vh]  z-50 bg-[#E8F0C1] border-2 fixed bottom-0 rounded-tr-3xl rounded-tl-2xl font-default`}
    >
      <div
        onClick={() => setIsOpen(false)}
        className="absolute right-5 top-5 text-2xl font-extrabold border-solid border-2 rounded-full h-10 w-10 text-center bg-slate-700 text-white flex items-center justify-center hover:cursor-pointer"
      >
        <span>X</span>
      </div>
    </div>
  );
}
