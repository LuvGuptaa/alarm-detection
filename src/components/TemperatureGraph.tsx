import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TemperatureGraph = ({ data }: { data: Array<{ timestamp: number; temp: number }> }) => {

    const formatTimestamp = (timestamp: any) => {
        if (!timestamp) return "N/A";
        const date = new Date(timestamp);
        date.setMinutes(date.getMinutes() + 330);
        return date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });
    };
    // Format the timestamps to IST
    const formattedData = data.map((item) => ({
        ...item,
        time: formatTimestamp(item.timestamp),
    }));

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Temperature Graph</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={formattedData}>
                    <XAxis dataKey="time" label={{ value: "Time", position: "insideBottom", dy: 10 }} />
                    <YAxis label={{ value: "Temperature (°C)", angle: -90, position: "insideLeft", dx: -10 }} />
                    <Tooltip
                        labelFormatter={(label) => `Time: ${label}`}
                        formatter={(value) => [`${value}°C`, "Temperature"]}
                    />
                    <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TemperatureGraph;
