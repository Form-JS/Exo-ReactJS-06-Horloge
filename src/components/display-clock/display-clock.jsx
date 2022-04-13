import { useEffect, useState } from 'react';

const DisplayClock = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        console.log('Tick');

        const timerId = setTimeout(() => {
            setNow(new Date());
        }, 200);

        return () => {
            console.log('Tack');
            clearTimeout(timerId);
        };
    });

    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = now.getMinutes().toLocaleString('fr-fr', { minimumIntegerDigits: 2 });
    const secondes = now.getSeconds().toString().padStart(2, '0');

    return (
        <span>{hours} : {minutes} : {secondes}</span>
    );
};

export default DisplayClock;