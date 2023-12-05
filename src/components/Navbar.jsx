import { Link } from "react-router-dom";
import { AppContextProvider } from "../context/AppContext";
import { useContext } from "react";
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
      className={`font-default w-full bg-[#E8F0C1] text-center py-3 pb-5 text-2xl font-semibold`}
    >
      <h1>
        <Link to="/">
          Museum<span className="text-primary">Jawa</span>
        </Link>
      </h1>
    </nav>
  );
}
