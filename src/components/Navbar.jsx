import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function Navbar() {
  const { isOpen } = useAppContext();
  return (
    <nav
      style={{
        backgroundColor: isOpen ? "#999999" : "#E8F0C1",
        borderBottomColor: isOpen && "black",
        borderBottomWidth: isOpen && "1px",
      }}
      className={`font-default w-full bg-[#E8F0C1] text-center py-3 pb-3 mb-3 text-2xl font-semibold border-solid border-b-2`}
    >
      <h1>
        <Link to="/" className="flex items-center justify-center">
          <img
            src="/img/logo.png"
            width={22}
            height={22}
            className="mr-1 pb-1"
          />
          <div>
            Museum<span className="text-primary">Jawa</span>
          </div>
        </Link>
      </h1>
    </nav>
  );
}
