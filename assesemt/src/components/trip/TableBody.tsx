import React from "react";
import { Column, Trip } from "../../types";
import L from "leaflet";


delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export const TableBody: React.FC<{
    data: Trip[];
    columns: Column[];
    onRowClick: (tripId: string) => void;
    selectedTripId: string;
}> = ({ data, columns, onRowClick, selectedTripId }) => (
    <tbody>
        {data.map((row, index) => (
            <tr
                key={index}
                className={`border-b border-slate-100 last:border-none hover:bg-slate-50 cursor-pointer
                    ${
                        row.name === selectedTripId
                            ? "bg-blue-50 hover:bg-blue-50"
                            : ""
                    }`}
                onClick={() => onRowClick(row.name)}
            >
                {columns.map((column) => (
                    <td
                        key={column.key}
                        className="px-4 py-3 text-sm text-slate-600"
                    >
                        {column.render
                            ? column.render(row[column.key], row)
                            : row[column.key]}
                    </td>
                ))}
            </tr>
        ))}
    </tbody>
);
