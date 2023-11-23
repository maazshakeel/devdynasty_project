import ChooseProvinceSlide from "../components/ChooseProvinceSlide";
import Navbar from "../components/Navbar";

export default function ChooseProvincePage() {
    return (
        <>
            <header className="sticky top-0 z-50">
                <Navbar />
            </header>
            <main className="font-default">
                <ChooseProvinceSlide />
            </main>
        </>
    )
}