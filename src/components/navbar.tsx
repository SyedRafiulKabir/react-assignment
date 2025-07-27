import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { useData } from "@/context/data-context";

const Navbar = () => {
    const { lang, setLang } = useData();
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Dropdown data for each menu item
    const menuItems = [
        {
            title: "Class 6-12",
            link: "/classes",
            dropdown: [
                { name: "Class 6", link: "/class-6" },
                { name: "Class 7", link: "/class-7" },
                { name: "Class 8", link: "/class-8" },
                { name: "Class 9-10", link: "/class-9-10" },
                { name: "Class 11-12", link: "/class-11-12" },
            ],
        },
        {
            title: "Skills",
            link: "/skills",
            dropdown: [
                { name: "Digital Marketing", link: "/digital-marketing" },
                { name: "Graphic Design", link: "/graphic-design" },
                { name: "Web Development", link: "/web-development" },
                { name: "Freelancing", link: "/freelancing" },
            ],
        },
        {
            title: "Admission",
            link: "/admission",
            dropdown: [
                { name: "University Admission", link: "/university-admission" },
                { name: "College Admission", link: "/college-admission" },
                { name: "Scholarships", link: "/scholarships" },
            ],
        },
        {
            title: "Online Batch",
            link: "/online-batch",
            dropdown: [
                { name: "Current Batches", link: "/current-batches" },
                { name: "Upcoming Batches", link: "/upcoming-batches" },
                { name: "Batch Schedule", link: "/batch-schedule" },
            ],
        },
        {
            title: "English Centre",
            link: "/english-centre",
            dropdown: [
                { name: "Spoken English", link: "/spoken-english" },
                { name: "IELTS Preparation", link: "/ielts" },
                { name: "English Grammar", link: "/grammar" },
            ],
        },
        {
            title: "More",
            link: "/more",
            dropdown: [
                { name: "About Us", link: "/about" },
                { name: "Blog", link: "/blog" },
                { name: "Contact", link: "/contact" },
            ],
        },
    ];

    const toggleDropdown = (title: string) => {
        setActiveDropdown(activeDropdown === title ? null : title);
    };

    return (
        <nav className=" sticky top-0 z-50 border-b bg-white md:h-[65px]">
            <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7">
                {/* Mobile Menu Button (Hidden on desktop) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-gray-700"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>

                {/* Logo - Mobile */}
                <div className="md:hidden">
                    <a className="h-[27px] w-[100px]" href="/">
                        <div
                            className="opacity-0 transition-opacity duration-300 ease-in-out"
                            style={{ fontSize: 0, opacity: 0 }}
                        >
                            <img
                                alt="10ms"
                                src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                                width="100"
                                height="27"
                                decoding="async"
                                style={{ color: "transparent" }}
                            />
                        </div>
                    </a>
                </div>

                <div className="flex gap-2">
                    <button
                        className="xl:hidden"
                        type="button"
                        name="menu-toggle"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M21 17.9995V19.9995H3V17.9995H21ZM17.4038 3.90332L22 8.49951L17.4038 13.0957L15.9896 11.6815L19.1716 8.49951L15.9896 5.31753L17.4038 3.90332ZM12 10.9995V12.9995H3V10.9995H12ZM12 3.99951V5.99951H3V3.99951H12Z"></path>
                        </svg>
                        <span className="sr-only">menu</span>
                    </button>
                    <div className="md:hidden">
                        <a className="h-[27px] w-[100px]" href="/">
                            <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out">
                                <img
                                    alt="10ms"
                                    data-original-src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                                    fetchPriority="high"
                                    width="100"
                                    height="27"
                                    decoding="async"
                                    data-nimg="1"
                                    src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                                />
                            </div>
                        </a>
                    </div>
                </div>
                {/* Logo - Desktop */}
                <div className="items-center hidden gap-9 md:flex">
                    <a className="h-[27px] w-[100px]" href="/">
                        <img
                            alt="10ms"
                            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                            width="100"
                            height="27"
                            decoding="async"
                            style={{ color: "transparent" }}
                        />
                    </a>
                </div>
                {/* Search box - Desktop */}
                <div className="flex-1 hidden w-full pr-4 md:block">
                    <div className="w-full">
                        <div className="relative flex w-full flex-col items-center bg-white  z-50">
                            <div className="  shadow-0 rounded-b-[23px] flex w-full items-center gap-2 rounded-t-[23px] border-0 px-[12px] py-2 md:border">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 27 24"
                                >
                                    <path
                                        fill="#fff"
                                        d="M0 0H26.514V23.99H0z"
                                    ></path>
                                    <path
                                        fill="#111827"
                                        d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"
                                    ></path>
                                    <path
                                        fill="#F1844C"
                                        d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"
                                    ></path>
                                </svg>
                                <input
                                    type="search"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                                    className="w-full flex-1 placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#7C818A] focus:outline-none"
                                    name="Search"
                                    value=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Section - Navigation with Dropdowns (Hidden on mobile) */}
                <div className="hidden mr-4 xl:block">
                    <div className="hidden xl:flex items-center gap-2 lg:gap-4 text-sm font-medium text-[#4B5563] relative">
                        {menuItems.map((item) => (
                            <div key={item.title} className="relative group">
                                <a
                                    href={item.link}
                                    className="flex items-center justify-center gap-0.5 cursor-pointer text-sm font-medium text-[#4B5563] hover:text-green-500"
                                    onClick={(e) => {
                                        // prevent default navigation if it has dropdown
                                        if (item.dropdown?.length) {
                                            e.preventDefault();
                                            toggleDropdown(item.title);
                                        }
                                    }}
                                >
                                    <p className="mb-0">{item.title}</p>
                                    {item.dropdown && item.title !== "More" && (
                                        <ChevronDown className="w-5 h-5 mt-[2px]" />
                                    )}
                                </a>

                                {activeDropdown === item.title && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                        <div className="py-1">
                                            {item.dropdown.map((subItem) => (
                                                <a
                                                    key={subItem.name}
                                                    href={subItem.link}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green"
                                                >
                                                    {subItem.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    <button
                        onClick={() => setLang(lang === "BN" ? "EN" : "BN")}
                        className="text-sm border rounded px-2 py-1 hover:bg-gray-100"
                    >
                        {lang}
                    </button>
                    <span className="text-green-600 font-semibold hidden sm:inline">
                        16910
                    </span>
                    <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded">
                        লগ-ইন
                    </button>
                </div>

                {/* Mobile Menu (Hidden on desktop) */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-20 p-4">
                        {menuItems.map((item) => (
                            <div key={item.title} className="mb-4">
                                <div
                                    className="flex items-center justify-between py-2 px-3 cursor-pointer hover:bg-gray-50 rounded"
                                    onClick={() => toggleDropdown(item.title)}
                                >
                                    <a href={item.link} className="font-medium">
                                        {item.title}
                                    </a>
                                    {item.title !== "More" && (
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${
                                                activeDropdown === item.title
                                                    ? "transform rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    )}
                                </div>

                                {activeDropdown === item.title && (
                                    <div className="pl-4 mt-1">
                                        {item.dropdown.map((subItem) => (
                                            <a
                                                key={subItem.name}
                                                href={subItem.link}
                                                className="block py-2 px-3 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 rounded"
                                            >
                                                {subItem.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;