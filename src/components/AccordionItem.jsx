import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AccordionItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleClick() {
        setIsOpen(!isOpen);
    }

    // Generate a unique ID for the heading
    const headingId = `accordion-heading-${title.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <div onClick={toggleClick} className="border border-[#B6C2E2] rounded-lg hover:cursor-pointer px-5 py-2 font-default sm:w-[75%] sm:self-center md:w-[60%]">
            <div className="flex justify-between">
                <h2 id={headingId} className="font-semibold text-lg md:text-xl">
                    {title}
                </h2>
                <button aria-labelledby={headingId} onClick={toggleClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        style={{
                            transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
                            transition: "0.2s ease-out",
                        }}
                    >
                        <path d="M2.12 0.290001L6 4.17L9.88 0.290001C10.27 -0.0999986 10.9 -0.0999986 11.29 0.290001C11.68 0.680001 11.68 1.31 11.29 1.7L6.7 6.29C6.31 6.68 5.68 6.68 5.29 6.29L0.700001 1.7C0.310001 1.31 0.310001 0.680001 0.700001 0.290001C1.09 -0.0899986 1.73 -0.0999986 2.12 0.290001Z" fill="#323232" />
                    </svg>
                </button>
            </div>
            <div
                className={`overflow-hidden transition ${isOpen ? "max-h-96" : "max-h-0 "}`}
                style={{ transition: isOpen ? "0.5s " : "0.1s " }}
            >
                <p>{content}</p>
            </div>
        </div>
    );
}
