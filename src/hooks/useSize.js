import { useRef, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

export default function useSize() {
  const ref = useRef();
  const windowSize = useWindowSize();

  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    setSize({
      ...size,
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    });
  }, [windowSize]);

  return [ref, size];
}
