import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="font-default w-full bg-white text-center p-3 text-2xl font-semibold">
            <h1>
                <Link to="/wrong">
                    Museum<span className="text-primary">Jawa</span>
                </Link>
            </h1>
        </nav>
    )
}