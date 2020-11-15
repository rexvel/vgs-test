import { useRef } from 'react';
import _ from 'lodash';

const useDebounce = (fn: any, delay: number = 1000): any => {
  const { current: debouncedFn } = useRef(_.debounce(fn, delay));

  return debouncedFn || (() => { });
}

export default useDebounce;
