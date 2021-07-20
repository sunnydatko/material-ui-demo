import { useEffect, useState, useCallback } from 'react';

// constants
import { Breakpoints } from 'helpers/theme';

const useIsScreenSize = (size = Breakpoints.Medium) => {
  const [isScreenSize, setIsScreenSize] = useState(window.innerWidth < size);
  const handleSizeChange = useCallback(
    () => setIsScreenSize(window.innerWidth < size),
    [size]
  );

  useEffect(() => {
    window.addEventListener('resize', handleSizeChange);

    return () => {
      window.removeEventListener('resize', handleSizeChange);
    };
  }, [handleSizeChange]);

  return isScreenSize;
};

export default useIsScreenSize;
