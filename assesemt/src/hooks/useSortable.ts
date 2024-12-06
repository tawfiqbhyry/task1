import { useState } from 'react';
import { Trip, SortConfig } from '../types';

export const useTableSort = (initialData: Trip[]) => {
    const [data, setData] = useState<Trip[]>(initialData);
    const [sortConfig, setSortConfig] = useState<SortConfig>(null);

    const sortData = (key: keyof Trip) => {
        let direction: "ascending" | "descending" = "ascending";
        if (sortConfig?.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }

        const sortedData = [...data].sort((a, b) => {
            if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
            if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
            return 0;
        });

        setData(sortedData);
        setSortConfig({ key, direction });
    };

    return { data, setData, sortConfig, sortData };
};