import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible,setOpenSub) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
            setOpenSub(false)
        }else{
            setIsComponentVisible(true)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside,true);
        return () => {
            document.removeEventListener('click', handleClickOutside,true);
        };
    }, [handleClickOutside]);

    return { ref, isComponentVisible, setIsComponentVisible };
}