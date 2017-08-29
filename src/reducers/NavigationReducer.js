import AppNavigation from "../navigation/AppNavigation";

export default (reducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
});
