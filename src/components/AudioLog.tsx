import { useFirestoreData } from "../hooks/useFirestoreData";
import { motion } from "framer-motion";

const AudioLog = () => {
    const audioData = useFirestoreData("audio");

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Audio Logs</h2>
            <ul>
                {audioData.length > 0 ? (
                    audioData.map((audio) => (
                        <motion.li
                            key={audio.id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="border-b py-4"
                        >
                            <p className="font-medium">{audio.timestamp}:</p>
                            <p>{audio.text}</p>
                            <span className="text-sm text-gray-500">
                                Intensity: {audio.intensity_db} dB
                            </span>
                        </motion.li>
                    ))
                ) : (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-500"
                    >
                        No audio captured recently.
                    </motion.p>
                )}
            </ul>
        </div>
    );
};

export default AudioLog;
