import { useState, useEffect } from "react";
import MotionLog from "./MotionLog";
import SensorStatus from "./SensorStatus";
import AudioLog from "./AudioLog";
import TemperatureGraph from "./TemperatureGraph";
import { useRealtimeData } from "../hooks/useFirestoreData";
import { motion } from "framer-motion";

const Dashboard = () => {
    const [temperatureData, setTemperatureData] = useState<
        Array<{ timestamp: number; temp: number }>
    >([]);
    const motionData = useRealtimeData("data/distance");

    useEffect(() => {
        if (motionData?.temp && motionData?.timestamp) {
            setTemperatureData((prev) => {
                const newData = [
                    ...prev,
                    { timestamp: motionData.timestamp, temp: motionData.temp },
                ];
                return newData.slice(-50); // Keep only the last 50 data points
            });
        }
    }, [motionData]);

    return (
        <div className="min-h-screen px-10 py-8 bg-gray-100">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold mb-12 text-center text-gray-800"
            >
                Alarm System Dashboard
            </motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <MotionLog />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                >
                    <SensorStatus />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                >
                    <AudioLog />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <TemperatureGraph data={temperatureData} />
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
