import { UserCircle } from "lucide-react";

const UserMenu = () => {
    return (
        <div className="flex items-center">
            <button
                className="hover:bg-gray-100 rounded-full transition-all duration-200 ease-in-out"
                type="button"
                title="User menu"
            >
                <UserCircle className="w-6 h-6 text-white hover:text-gray-500 transition-colors ease-in-out" />
            </button>
        </div>
    );
};

export default UserMenu;
