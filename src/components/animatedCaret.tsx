import { useState, useEffect } from "react";

export default function AnimatedCaret() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible((prevIsVisible) => !prevIsVisible);
        }, 500);


        return () => clearInterval(interval);
    }, [])

    return <span className={isVisible ? "animated-caret" : "animated-caret hidden"}>|</span>;
}