import { useState } from "react";
import NavLink from "./NavLink";
import logo from "../../assets/react.svg";
import { ChevronDown } from "lucide-react";

const LeftNav = ({
    activePath,
    onNavigate,
}: {
    activePath: string;
    onNavigate: (path: string) => void;
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const remitOptions = [
        { path: "#remit-alpha-1", label: "Remit Option 1" },
        { path: "#remit-alpha-2", label: "Remit Option 2" },
        { path: "#remit-alpha-3", label: "Remit Option 3" },
        { path: "#remit-alpha-4", label: "Remit Option 4" },
        { path: "#remit-alpha-5", label: "Remit Option 5" },
    ];

    const navItems = [
        { path: "#control-centre", label: "Control Centre" },
        { path: "#trips", label: "Trips" },
        { path: "#insights", label: "Insights" },
        { path: "#admin", label: "Admin" },
    ];

    return (
        <div className="flex items-center gap-x-6">
            <div className="flex items-center justify-center w-8 h-8 bg-teal-600 rounded-md">
                <img
                    src={logo}
                    alt="Atlas Logo"
                    className="w-6 h-6 object-contain"
                />
            </div>
            <nav className="flex items-center gap-x-2">
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`
                            flex items-center gap-x-2
                            px-4 py-1.5
                            text-sm font-medium
                            bg-[#475b64] rounded-md
                            transition-all duration-200
                            outline-none
                            ${activePath.startsWith("#remit-alpha")
                                ? "text-[#72d0d4]"
                                : "text-white hover:text-[#72d0d4]"
                            }
                        `}
                    >
                        Remit Alpha
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 
                                      bg-[#1a1a1a] rounded-md shadow-lg 
                                      max-h-60 overflow-y-auto
                                      scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                            {remitOptions.map((option) => (
                                <button
                                    key={option.path}
                                    onClick={() => {
                                        onNavigate(option.path);
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`
                                        w-full text-left px-4 py-2
                                        text-sm font-medium
                                        transition-colors duration-200
                                        ${activePath === option.path
                                            ? "text-[#72d0d4] bg-[#2a2a2a]"
                                            : "text-white hover:text-[#72d0d4] hover:bg-[#2a2a2a]"
                                        }
                                    `}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        href={item.path}
                        isActive={activePath === item.path}
                        onClick={onNavigate}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default LeftNav;