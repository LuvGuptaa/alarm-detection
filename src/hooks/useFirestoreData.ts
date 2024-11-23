import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase/firebaseConfig";

export const useRealtimeData = (path: string) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const dbRef = ref(database, path);

        const unsubscribe = onValue(dbRef, (snapshot) => {
            const rawData = snapshot.val();
            console.log("Raw Data from Firebase:", rawData); // Debugging log
            setData(rawData || null); // Set null if no data
        });

        return () => unsubscribe();
    }, [path]);

    return data;
};
