import React from "react";
import { STATUS_COLORS } from "../../constants";

type StatusBadgeProps = {
    status: string;
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => (
    <div
        className={`px-3 py-1 rounded-full border ${
            STATUS_COLORS[status as keyof typeof STATUS_COLORS]
        } text-sm font-medium`}
    >
        {status}
    </div>
);
