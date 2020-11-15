import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

type UseDispatchActionReturnType = (...args: any[]) => void;

export default (action: (...args: any[]) => void): UseDispatchActionReturnType => {
  const dispatch = useDispatch();

  return useCallback((...args) => dispatch(action(...args)), [dispatch,action]);
};
