import { useEffect, useState } from "react";

interface UseDebounceProps {
  value: string;
  delay: number;
}

const useDebounce = ({ value, delay }: UseDebounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  });

  return debouncedValue;
};

export default useDebounce;
