import { useState, useEffect } from 'react';

export default function useWindowScroll() {
  const [yOffset, setYoffset] = useState(
    window.pageYOffset ||
      window.scrollY ||
      document.documentElement.scrollTop || // 익스9 이하 버전 지원
      document.body.scrollTop,
  ); // 오페라 크롬 사파리 지원function headerChange() {

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
