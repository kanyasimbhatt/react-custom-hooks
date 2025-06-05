
// const debounced = useDebouncedValue(inputValue, delay);
// Return a debounced version of a given value. 
// The value should only update after the user stops typing for a specified delay (e.g., 500ms).

import { useEffect, useState } from "react"

export const useDebouncedValue = <T>(inputValue: T, delay: number) => {
    const [value, setValue] = useState<T>(inputValue);
    const timer = setTimeout(()=>{
        setValue(inputValue)
    }, delay)
    useEffect(()=>{
        clearTimeout(timer)
    }, [inputValue, delay]);

    return value;
}