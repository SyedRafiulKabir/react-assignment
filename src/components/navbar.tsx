import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const Navbar = () => {
    const [lang, setLang] = useState<"EN" | "BN">("BN");

    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                {/* Logo */}
                <a href="https://10minuteschool.com/en/">
                    <img
                    src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                    alt="10 Minute School"
                    className="h-10 w-auto"
                />
                </a>

                {/* Search Box */}
                <div className="flex items-center border rounded-full px-3 py-1 w-[320px] text-sm bg-gray-100 text-gray-600">
                    <Search className="w-4 h-4 mr-2" />
                    <input
                        type="text"
                        placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                        className="bg-transparent outline-none w-full placeholder:text-gray-500"
                    />
                </div>
            </div>

            {/* Center Section - Links */}
            <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
                {[
                    "Class 6–12",
                    "Skills",
                    "Admission",
                    "Online Batch",
                    "English Centre",
                ].map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-1 cursor-pointer"
                    >
                        <span>{item}</span>
                        <ChevronDown className="w-3 h-3" />
                    </div>
                ))}
                <div className="cursor-pointer">More</div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                {/* Language Toggle */}
                <button
                    onClick={() => setLang(lang === "BN" ? "EN" : "BN")}
                    className="text-sm border rounded px-2 py-1"
                >
                    {lang}
                </button>

                {/* Phone */}
                <span className="text-green-600 font-semibold">16910</span>

                {/* Login Button */}
                <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded">
                    লগ-ইন
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
