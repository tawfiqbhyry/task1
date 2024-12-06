import { useState } from "react";
import LeftNav from "./header/LeftNav";
import UserMenu from "./header/UserMenu";

const Header = () => {
    const [currentPath, setCurrentPath] = useState("/remit-alpha");

    const handleNavigate = (path: string) => {
        setCurrentPath(path);
    };

    return (
        <header className="w-full bg-[#354953] text-whi border-b border-gray-200 shadow-sm">
            <div className="py-3 w-full mx-auto px-4 flex items-center justify-between">
                <LeftNav activePath={currentPath} onNavigate={handleNavigate} />
                <UserMenu />
            </div>
        </header>
    );
};

export default Header;
