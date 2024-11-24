import { useRealtimeData } from "../hooks/useFirestoreData";
import { motion } from "framer-motion";

const AudioLog = () => {
    const audioData = useRealtimeData("data/audio");
    console.log("Audio Data:", audioData);
    // const formatTimestamp = (timestamp: any) => {
    //     if (!timestamp) return "N/A";
    //     const date = new Date(timestamp);
    //     return date.toLocaleString("en-US", {
    //         year: "numeric",
    //         month: "long",
    //         day: "numeric",
    //         hour: "numeric",
    //         minute: "numeric",
    //         second: "numeric",
    //         hour12: true,
    //     });
    // };
    if (!audioData) {
        return (
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Audio Logs</h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-500"
                >
                    No audio data available.
                </motion.p>
            </div>
        );
    }

    // Convert object to array if necessary
    const audioArray = Array.isArray(audioData)
        ? audioData
        : Object.values(audioData);

    console.log("Audio Array:", audioArray);
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Audio Logs</h2>
            <ul>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="border-b py-4"
                >
                    <p className="font-medium text-gray-700">November 24, 2024 at 7:58:38 AM</p>
                    <p className="text-gray-700">{audioArray[1]}</p>
                </motion.div>

            </ul>
        </div>
    );
};

export default AudioLog;
