import React from 'react';
import Light from './light';

export default function TrafficLight() {
    const lightCount = 3;
    const [color, setColor] = React.useState(['red', '', '']);

    React.useEffect(() => {
        let count = 0;
        const timer = setInterval(() => {
            count++
            if (count === 1) {
                setColor(['red', '', ''])
            }
            if (count === 4) {
                setColor(['', 'yellow', ''])
            }
            if (count === 7) {
                setColor(['', '', 'green'])
                clearInterval(timer)
            }
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <>
            TrafficLight
            <Light count={lightCount} color={color} />
        </>
    );
}
