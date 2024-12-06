import Table from "./TripTable";

export default function TripManagement() {
    const data = [
        {
            name: "Unknown journey",
            start: "12 Aug 24",
            end: "n/a",
            travelling: "Profile name",
            profile: "",
            status: "In progress",
            issues: "",
        },
        {
            name: "Trip Bravo",
            start: "12 Aug 24",
            end: "13 Aug 24",
            travelling: 3,
            profile: "",
            status: "Not started",
            issues: "2 Nearby",
        },
        {
            name: "Trip Charlie",
            start: "12 Aug 24",
            end: "13 Aug 24",
            travelling: 3,
            profile: "",
            status: "Not started",
            issues: "",
        },
        {
            name: "Trip Delta",
            start: "12 Aug 24",
            end: "13 Aug 24",
            travelling: 0,
            profile: "",
            status: "In progress",
            issues: "1 Overdue",
        },
        {
            name: "Trip Echo",
            start: "12 Aug 24",
            end: "13 Aug 24",
            travelling: 3,
            profile: "",
            status: "In progress",
            issues: "",
        },
        {
            name: "Trip Foxtrot",
            start: "12 Aug 24",
            end: "13 Aug 24",
            travelling: 2,
            profile: "",
            status: "Completed",
            issues: "",
        },
        {
            name: "Trip Juliet",
            start: "12 Aug 24",
            end: "13 Aug 24",
            travelling: 3,
            profile: "",
            status: "Cancelled",
            issues: "",
        },
    ];
    return (
        <div className="flex flex-col px-4 my-10 h-full">
            <Table initialData={data} />
        </div>
    );
}
