import { ReactNode } from "react";

export type Trip = {
    name: string;
    start: string;
    end: string;
    travelling: number | string;
    profile: string;
    status: string;
    issues: string;
};

export type Column = {
    key: keyof Trip;
    label: string;
    visible: boolean;
    sortable: boolean;
    render?: (value: any, row: Trip) => ReactNode;
};

export type SortConfig = {
    key: keyof Trip;
    direction: "ascending" | "descending";
} | null;
