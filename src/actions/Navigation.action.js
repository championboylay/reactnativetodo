import { NavigationActions } from "react-navigation";

const navigateTo = routeName => () => NavigationActions.navigate({ routeName });

export const navigateToMainScreen = navigateTo("MainScreen");
export const navigateToTaskFormScreen = navigateTo("TaskFormScreen");
