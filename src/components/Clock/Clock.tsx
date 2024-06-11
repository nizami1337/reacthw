import { useEffect, useState } from "react"
import "./Clock.scss"

const Clock = () => {
    
    const [time, setTime] = useState<Date>();

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className="clock">
            <span>Current time is:</span>
            <h2>{time?.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock