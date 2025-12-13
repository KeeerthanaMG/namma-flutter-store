import { useEffect, useState } from 'react';

const DashCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Hide default cursor
        document.body.style.cursor = 'none';

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            // Restore default cursor on cleanup
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed pointer-events-none z-[9999] transition-all duration-75 ease-out"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div className="relative w-14 h-14">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse-glow" />
                <img
                    src="/dash.png"
                    alt="Dash cursor"
                    className="relative w-full h-full object-contain drop-shadow-lg animate-bounce-subtle"
                    draggable={false}
                />
            </div>
        </div>
    );
};

export default DashCursor;
