import { FaMicrochip } from "react-icons/fa";
import { useRealtimeData } from "../hooks/useFirestoreData";

const SensorStatus = () => {
    const sensorData = useRealtimeData("data/distance");

    // Calculate the status and last online time
    const calculateStatus = () => {
        if (!sensorData || !sensorData.timestamp) return { status: "Offline", lastOnline: null };

        const now = new Date();
        const lastReceived = new Date(sensorData.timestamp);
        lastReceived.setMinutes(lastReceived.getMinutes() + 330); // Convert to IST
        const diffInSeconds = (now.getTime() - lastReceived.getTime()) / 1000; // Difference in seconds

        if (diffInSeconds <= 10) {
            return { status: "Online", lastOnline: null };
        }

        return { status: "Offline", lastOnline: diffInSeconds };
    };

    const { status, lastOnline } = calculateStatus();

    // Format the "last online" time difference
    const formatTimeDifference = (seconds: number) => {
        if (seconds < 60) return `${Math.floor(seconds)} seconds ago`;
        const minutes = seconds / 60;
        if (minutes < 60) return `${Math.floor(minutes)} minutes ago`;
        const hours = minutes / 60;
        if (hours < 24) return `${Math.floor(hours)} hours ago`;
        const days = hours / 24;
        return `${Math.floor(days)} days ago`;
    };

    return (
        <div className="flex flex-col justify-between bg-gradient-to-r from-white to-gray-50 shadow-lg rounded-lg p-6 min-h-[200px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                    <FaMicrochip className={status === "Online" ? "text-green-500" : "text-red-500"} /> Sensor Status
                </h2>
                <span className="text-sm text-gray-500">{new Date().toLocaleString()}</span>
            </div>
            <div className="text-gray-600">
                <p>
                    <strong>Raspberry Pi:</strong>{" "}
                    <span className={`font-semibold ${status === "Online" ? "text-green-500" : "text-red-500"}`}>
                        {status}
                    </span>
                </p>
                {status === "Offline" && lastOnline && (
                    <p>
                        <strong>Last Online:</strong>{" "}
                        <span className="text-gray-500">{formatTimeDifference(lastOnline)}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default SensorStatus;
