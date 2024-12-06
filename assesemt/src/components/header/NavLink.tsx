import React from "react";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    isActive: boolean;
    onClick: (href: string) => void;
    variant?: "default" | "primary";
};

const NavLink = ({
    href,
    children,
    isActive,
    onClick,
    variant = "default",
}: NavLinkProps) => {
    const baseStyles =
        "px-4 text-sm font-medium transition-all font-roboto duration-200";
    const variantStyles =
        variant === "primary" ? "bg-[#1a1a1a] rounded-md py-1.5" : "";

    return (
        <button
            onClick={() => onClick(href)}
            className={`
                ${baseStyles}
                ${variantStyles}
                ${
                    isActive
                        ? "text-[#72d0d4]"
                        : "text-white hover:text-[#72d0d4]"
                }
            `}
        >
            <span className="relative inline-block">
                {children}
                <span
                    className={`
                        absolute 
                        bottom-0 
                        left-0 
                        h-0.5 
                        bg-[#72d0d4]
                        transition-all 
                        duration-300 
                        ease-out
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                />
            </span>
        </button>
    );
};

export default NavLink;
