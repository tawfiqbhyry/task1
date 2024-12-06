import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Column, Trip } from "../../types";

type ColumnManagerProps = {
    columns: Column[];
    onToggleColumn: (key: keyof Trip) => void;
};

export const ColumnManager: React.FC<ColumnManagerProps> = ({
    columns,
    onToggleColumn,
}) => (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
        <SlidersHorizontal className="w-5 h-5 text-slate-400" />
        <div className="flex flex-wrap gap-2">
            {columns.map((column) => (
                <button
                    key={column.key}
                    onClick={() => onToggleColumn(column.key)}
                    className={`px-3 py-1 text-sm font-medium rounded-full border transition-colors ${
                        column.visible
                            ? "bg-slate-100 text-slate-800 border-slate-200"
                            : "bg-white text-slate-400 border-slate-200"
                    }`}
                >
                    {column.label}
                </button>
            ))}
        </div>
    </div>
);
