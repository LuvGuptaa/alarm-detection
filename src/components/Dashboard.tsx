import MotionLog from "./MotionLog";
import SensorStatus from "./SensorStatus";
import AudioLog from "./AudioLog";
import { motion } from "framer-motion";

const Dashboard = () => {
    return (
        <div className="min-h-screen px-32 py-12 bg-gray-100">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold mb-16 text-center text-gray-800"
            >
                Alarm System Dashboard
            </motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            </div>
        </div>
    );
};

export default Dashboard;
