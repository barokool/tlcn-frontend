import { useEffect, useState } from 'react';

const useDimensions = () => {
  const [windowDimension, detectHW] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimension]);

  return {
    width: windowDimension.width,
    height: windowDimension.height,
    isMobile: windowDimension.width < 768,
    mobileSize: 768,
  };
};

export default useDimensions;
