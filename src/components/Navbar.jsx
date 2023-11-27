import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="font-default w-full bg-[#E8F0C1] text-center py-3 pb-5 text-2xl font-semibold">
      <h1>
        <Link to="/">
          Museum<span className="text-primary">Jawa</span>
        </Link>
      </h1>
    </nav>
  );
}
