import { MapPin, Users, Clock, MoreVertical, X } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const TripDetails = ({ tripId }: { tripId?: string }) => {
    console.log(tripId);
    const position: [number, number] = [51.5074, -0.1278];

    return (
        <div className="w-96 border-l border-slate-200 bg-white mx-4">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Trip Delta</h2>
                <button
                    className="text-slate-400 hover:text-slate-600"
                    title="close"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            <div className="p-4">
                <p className="text-sm text-slate-600 mb-4">
                    Here is the description of the trip, wherever this comes
                    from. It may be optional!
                </p>

                <div className="h-48 rounded-lg mb-4 overflow-hidden">
                    <MapContainer
                        center={position}
                        zoom={13}
                        className="w-full h-full"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position}>
                            <Popup>A location in London</Popup>
                        </Marker>
                    </MapContainer>
                </div>

                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium mb-2">Travelling</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-slate-400" />
                                <span className="text-sm">Phillip Burn</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-slate-400" />
                                <span className="text-sm">Group Bravo</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-slate-400" />
                                <span className="text-sm">Tracker Delta</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-slate-400" />
                                <span className="text-sm">Vehicle Charlie</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-2">Breakdown</h3>
                        <div className="space-y-6">
                            <div className="relative pl-6 border-l-2 border-slate-200">
                                <div className="absolute -left-2 top-0">
                                    <div className="w-7 h-7 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
                                        A
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-slate-400" />
                                        <span className="text-sm">
                                            Brixton station, London
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative pl-6 border-l-2 border-slate-200">
                                <div className="absolute -left-2 top-0">
                                    <div className="w-7 h-7 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
                                        B
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-slate-400" />
                                        <span className="text-sm">
                                            Battersea park hotel, London
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-slate-400" />
                                        <span className="text-sm">
                                            Today, 08:30
                                        </span>
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        By car
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        0 of 2 arrived
                                    </div>
                                </div>
                            </div>

                            <div className="relative pl-6">
                                <div className="absolute -left-2 top-0">
                                    <div className="w-7 h-7 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
                                        C
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-slate-400" />
                                            <span className="text-sm">
                                                Phillip Burn is overdue
                                            </span>
                                        </div>
                                        <button
                                            className="text-slate-400 hover:text-slate-600"
                                            title="phili"
                                        >
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <button className="w-full py-2 text-center text-blue-600 hover:bg-blue-50 rounded-md border-2">
                        Open Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};
