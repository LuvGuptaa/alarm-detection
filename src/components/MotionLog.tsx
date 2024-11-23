import { useRealtimeData } from "../hooks/useFirestoreData";

const MotionLog = () => {
    const motionData = useRealtimeData("data/distance");

    // Helper function to format the timestamp
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
        <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold mb-6 text-gray-700 border-b pb-4">
                Motion Logs
            </h2>
            {motionData ? (
                <ul>
                    <li className="py-3">
                        <p className="text-gray-600 text-lg">
                            <span className="font-medium">Timestamp:</span> {formatTimestamp(motionData.timestamp)}
                        </p>
                        <p className="text-gray-600 text-lg">
                            <span className="font-medium">Detected:</span>{" "}
                            {motionData.detected ? "Yes" : "No"}
                        </p>
                        <p className="text-gray-600 text-lg">
                            <span className="font-medium">Distance:</span> {motionData.distance || "N/A"}
                        </p>
                    </li>
                </ul>
            ) : (
                <p className="text-gray-500">No motion data available.</p>
            )}
        </div>
    );
};

export default MotionLog;
