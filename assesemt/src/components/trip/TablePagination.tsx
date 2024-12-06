export const TablePagination = () => {
    return (
        <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-600">
                <span>Items per page:</span>
                <select className="border rounded-md px-2 py-1" title="select">
                    <option>5</option>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-sm text-slate-600">1-5 of 500</span>
                <div className="flex gap-1">
                    <button
                        className="p-1 rounded hover:bg-slate-100"
                        title="next"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        className="p-1 rounded hover:bg-slate-100"
                        title="pre"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
