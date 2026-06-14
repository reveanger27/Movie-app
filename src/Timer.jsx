import { useState, useEffect } from "react";

function Timer () {
    const [detik, setDetik] = useState(0);
    
    useEffect(() => {
        const interval= setInterval(() => {
            setDetik(detik+1)
        }, 1000)

        return () => clearInterval(interval);
    },[detik]);

    return (
        <div>
            <h2>Timer : {detik} Detik</h2>
        </div>
    );
}

export default Timer;