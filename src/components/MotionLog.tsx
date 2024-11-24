import { FaWalking } from "react-icons/fa";
import { useRealtimeData } from "../hooks/useFirestoreData";

const MotionLog = () => {
    const motionData = useRealtimeData("data/distance");

    const formatTimestamp = (timestamp: any) => {
        if (!timestamp) return "N/A";
        const date = new Date(timestamp);
        return date.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        });
    };

    return (
        <div className="flex flex-col justify-between bg-gradient-to-r from-white to-gray-50 shadow-lg rounded-lg p-6 min-h-[200px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                    <FaWalking className="text-blue-500" /> Motion Logs
                </h2>
                <span className="text-sm text-gray-500">{motionData ? formatTimestamp(motionData.timestamp) : "N/A"}</span>
            </div>
            <div className="text-gray-600">
                {motionData ? (
                    <>
                        <p>
                            <strong>Motion Detected:</strong> {motionData.detected ? "Yes" : "No"}
                        </p>
                        <p>
                            <strong>Temperature:</strong> {motionData.temp || "N/A"}°C
                        </p>
                        <p>
                            <strong>Distance:</strong> {motionData.distance || "N/A"} cm
                        </p>
                    </>
                ) : (
                    <p>No motion data available.</p>
                )}
            </div>
        </div>
    );
};


export default MotionLog;
