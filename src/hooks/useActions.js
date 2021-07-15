import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

/**
 * useActions hook - binds and memoizes the action creators
 * @param {*} actions
 * @returns action creators
 */
const useActions = (actions) => {
  const dispatch = useDispatch();
  return useMemo(() => {
    if (Array.isArray(actions)) {
      return actions.map((a) => bindActionCreators(a, dispatch));
    }
    return bindActionCreators(actions, dispatch);
  }, [dispatch, actions]);
};
export default useActions;
