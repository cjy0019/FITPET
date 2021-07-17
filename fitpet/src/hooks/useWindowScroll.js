import { useState, useEffect } from 'react';

export default function useWindowScroll() {
  const [yOffset, setYoffset] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, [yOffset]);

  function scroll() {
    setYoffset(window.pageYOffset);
  }

  return yOffset;
}
