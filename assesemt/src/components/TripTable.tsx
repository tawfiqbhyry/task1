import React, { useMemo, useState } from "react";
import { Check, Calendar, CircleDashed, AlertTriangle } from "lucide-react";
import { Trip, Column } from "../types";
import { ColumnManager } from "./trip/ColumnManger";
import { TableHeader } from "./trip/TableHeader";
import { TableBody } from "./trip/TableBody";
import { useTableSort } from "../hooks/useSortable";
import { StatusBadge } from "./trip/StatusBadge";
import { TablePagination } from "./trip/TablePagination";
import { TripDetails } from "./TripDetails";
import TableLabel from "./trip/TableLabel";

const initialColumns: Column[] = [
    {
        key: "name",
        label: "Name",
        visible: true,
        sortable: true,
        render: (value, row) => (
            <div className="flex items-center gap-2">
                {row.profile ? (
                    <Check className="w-5 h-5 text-slate-400" />
                ) : (
                    <CircleDashed className="w-5 h-5 text-slate-400" />
                )}
                <span>{value}</span>
            </div>
        ),
    },
    {
        key: "start",
        label: "Start Date",
        visible: true,
        sortable: true,
        render: (value) => (
            <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{value}</span>
            </div>
        ),
    },
    {
        key: "end",
        label: "End Date",
        visible: true,
        sortable: true,
        render: (value) => (
            <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{value}</span>
            </div>
        ),
    },
    {
        key: "travelling",
        label: "Travelling",
        visible: true,
        sortable: true,
        render: (value) =>
            typeof value === "string" ? (
                <span>{value}</span>
            ) : (
                <span>{value} People</span>
            ),
    },
    {
        key: "status",
        label: "Status",
        visible: true,
        sortable: true,
        render: (value) => <StatusBadge status={value} />,
    },
    {
        key: "issues",
        label: "Issues",
        visible: true,
        sortable: true,
        render: (value) =>
            value ? (
                <div className="flex items-center gap-2 text-amber-600">
                    <AlertTriangle className="w-4 h-4" />
                    <span>{value}</span>
                </div>
            ) : null,
    },
];

export const Table: React.FC<{ initialData: Trip[] }> = ({ initialData }) => {
    const [columns, setColumns] = useState<Column[]>(initialColumns);
    const { data, sortConfig, sortData } = useTableSort(initialData);
    const [selectedTrip, setSelectedTrip] = useState<string>();

    const toggleColumn = (columnKey: keyof Trip) => {
        setColumns(
            columns.map((col) =>
                col.key === columnKey ? { ...col, visible: !col.visible } : col
            )
        );
    };

    const visibleColumns = useMemo(
        () => columns.filter((column) => column.visible),
        [columns]
    );

    return (
        <div className="flex">
            <div className="flex-1 space-y-4">
                <TableLabel />
                <ColumnManager
                    columns={columns}
                    onToggleColumn={toggleColumn}
                />
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full border-collapse">
                        <TableHeader
                            columns={visibleColumns}
                            sortConfig={sortConfig}
                            onSort={sortData}
                        />
                        <TableBody
                            selectedTripId={selectedTrip || ""}
                            data={data}
                            columns={visibleColumns}
                            onRowClick={(tripId) => setSelectedTrip(tripId)}
                        />
                    </table>
                    <TablePagination />
                </div>
            </div>
            <TripDetails tripId={selectedTrip} />
        </div>
    );
};

export default Table;
