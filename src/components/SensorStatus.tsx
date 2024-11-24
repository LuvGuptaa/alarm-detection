import { FaMicrochip } from "react-icons/fa";

const SensorStatus = () => {
    return (
        <div className="flex flex-col justify-between bg-gradient-to-r from-white to-gray-50 shadow-lg rounded-lg p-6 min-h-[200px]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                    <FaMicrochip className="text-green-500" /> Sensor Status
                </h2>
                <span className="text-sm text-gray-500">{new Date().toLocaleString()}</span>
            </div>
            <div className="text-gray-600">
                <p>
                    <strong>Raspberry Pi:</strong> <span className="text-red-500 font-semibold">Offline</span>
                </p>
            </div>
        </div>
    );
};


export default SensorStatus;
