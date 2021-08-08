import { useState, useEffect } from 'react';

const useFoldingSection = (ref, height = 10) => {
  const [isFold, setIsFold] = useState(false);

  useEffect(() => {
    if (isFold) {
      ref.current.style = `visibility : visible; height: ${height}rem; opacity:1;`;
    } else {
      ref.current.style = 'visibility : hidden; height: 0rem; opacity:0';
    }
  }, [height, isFold, ref]);

  return [isFold, setIsFold];
};

export default useFoldingSection;
