import { useEffect } from 'react';
import { useWindowSize } from 'react-use';
import { sizes } from 'containers/App/styled';

export default function useIsPhone() {
  const getPhone = () =>
    window.matchMedia(`(max-width: ${sizes.phone}px)`).matches;
  let isPhone = getPhone();

  const windowSize = useWindowSize();
  useEffect(() => {
    isPhone = getPhone();
  }, [windowSize]);

  return isPhone;
}
