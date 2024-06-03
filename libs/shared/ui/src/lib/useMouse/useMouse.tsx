import { useEffect, useState } from "react";

export function useMouse(active: boolean) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            setMousePosition({
                x: event.clientX,
                y: event.clientY
            });
        }
        
        if (active) {
            window.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [active]);

    return mousePosition;
}