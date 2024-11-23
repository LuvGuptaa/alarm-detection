const SensorStatus = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold mb-6 text-gray-700 border-b pb-4">
                Sensor Status
            </h2>
            <p className="text-gray-600 text-lg">
                <span className="font-medium">Raspberry Pi:</span>{" "}
                <span className="text-green-500 font-semibold">Online</span>
            </p>
            <p className="text-gray-600 text-lg mt-3">
                <span className="font-medium">Last Updated:</span>{" "}
                {new Date().toLocaleString()}
            </p>
        </div>
    );
};

export default SensorStatus;
