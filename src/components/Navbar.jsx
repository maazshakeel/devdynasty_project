import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className=" font-default w-full bg-white text-center p-3 text-2xl font-semibold">
            <Link to="/">
                <h1 className="">Museum<span className="text-primary">Jawa</span></h1>
            </Link>
        </nav>
    )
}