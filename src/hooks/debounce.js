import React, { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {

  const [debouncedValue, setDebouncedValue] = useState(value);
  const [firstRender, setFirstRender] = useState(true)

  useEffect(
    () => { 
            const handler = setTimeout(() => { 
                setDebouncedValue(value) 
            }, delay);

        return () => {
            clearTimeout(handler);
        };
    },[value] );
    return debouncedValue;
}