import { FaMicrochip } from "react-icons/fa";
import { useRealtimeData } from "../hooks/useFirestoreData";

const SensorStatus = () => {
    const sensorData = useRealtimeData("data/distance");

    const getStatus = () => {
        if (!sensorData || !sensorData.timestamp) return "Offline";
        const now = new Date();
        const lastReceived = new Date(sensorData.timestamp);
        lastReceived.setMinutes(lastReceived.getMinutes() + 330); // Convert to IST
        const diff = (now.getTime() - lastReceived.getTime()) / (1000 * 60); // Difference in minutes
        return diff <= 5 ? "Online" : "Offline";
    };

    const status = getStatus();

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
                    <span
                        className={`font-semibold ${status === "Online" ? "text-green-500" : "text-red-500"
                            }`}
                    >
                        {status}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SensorStatus;
