import { useEffect, useState } from 'react';

function useDebounce(data, timeWait) {
    const [debounce, setDebounce] = useState(() => data);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebounce(data);
        }, timeWait);

        return () => {
            clearTimeout(timeOut);
        };
    }, [data, timeWait]);

    return debounce;
}

export default useDebounce;
