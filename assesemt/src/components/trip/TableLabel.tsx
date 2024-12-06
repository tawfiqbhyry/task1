import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

const TableLabel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tripData, setTripData] = useState({
        title: "",
        description: "",
        travelers: [],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsOpen(false);
    };

    return (
        <>
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-bold font-roboto text-2xl text-[#354952]">
                    Assessment
                </h1>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <button
                            className="bg-[#354952] text-white px-4 py-2 text-center rounded-md"
                            type="button"
                        >
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="fas fa-plus-circle px-2 text-white"
                            />
                            <span className="pr-3">Add</span>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>New trip</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <Label>Overview</Label>
                                    <Input
                                        placeholder="Trip to London Zoo and beyond"
                                        value={tripData.title}
                                        onChange={(e) =>
                                            setTripData({
                                                ...tripData,
                                                title: e.target.value,
                                            })
                                        }
                                        className="mt-1"
                                    />
                                    <textarea
                                        placeholder="A big fun day out!"
                                        value={tripData.description}
                                        onChange={(e) =>
                                            setTripData({
                                                ...tripData,
                                                description: e.target.value,
                                            })
                                        }
                                        className="mt-2 w-full p-2 border rounded-md"
                                        rows={3}
                                    />
                                </div>

                                <div>
                                    <Label>Who is travelling</Label>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <div className="bg-green-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                            Phillip Burn
                                            <X className="h-3 w-3 cursor-pointer" />
                                        </div>
                                        <div className="bg-green-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                            Tracker Delta
                                            <X className="h-3 w-3 cursor-pointer" />
                                        </div>
                                        <div className="bg-green-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                            Group Bravo
                                            <X className="h-3 w-3 cursor-pointer" />
                                        </div>
                                        <div className="bg-green-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                            Vehicle Charlie
                                            <X className="h-3 w-3 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 mt-6">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-[#354952] text-white hover:bg-[#2a3b42]"
                                >
                                    Add a journey
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};

export default TableLabel;
