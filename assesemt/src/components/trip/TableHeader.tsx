import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Column, Trip, SortConfig } from '../../types';

type TableHeaderProps = {
    columns: Column[];
    sortConfig: SortConfig;
    onSort: (key: keyof Trip) => void;
};

export const TableHeader: React.FC<TableHeaderProps> = ({ columns, sortConfig, onSort }) => (
    <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
            {columns.map((column) => (
                <th
                    key={column.key}
                    onClick={() => column.sortable && onSort(column.key)}
                    className={`px-4 py-3 text-left text-sm font-medium text-slate-700 ${
                        column.sortable ? "cursor-pointer hover:bg-slate-100" : ""
                    }`}
                >
                    <div className="flex items-center gap-2">
                        <span>{column.label}</span>
                        {column.sortable && (
                            <div className="flex flex-col">
                                {sortConfig?.key === column.key ? (
                                    sortConfig.direction === "ascending" ? (
                                        <ChevronUp className="w-4 h-4" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4" />
                                    )
                                ) : (
                                    <ChevronUp className="w-4 h-4 text-slate-300" />
                                )}
                            </div>
                        )}
                    </div>
                </th>
            ))}
        </tr>
    </thead>
);
