// Return the width and height of a referenced DOM element, and update them on resize.
// const [ref, size] = useElementSize();

import { Ref, useEffect, useRef, useState } from "react"

const useElementSize = () => {
    const ref = useRef<HTMLElement | null>(null);
    const [size, setSize] = useState({
        height: 0, width: 0
    })
    useEffect(()=>{
        const rect = ref.current!.getBoundingClientRect();
        setSize({height: rect.height, width: rect.width})
    }, [ref.current!.getBoundingClientRect()])
    return [ref, size] as const;
}