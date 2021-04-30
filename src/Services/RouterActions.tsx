import { RefObject } from 'react';
import {
    DrawerActions,
    StackActions,
    NavigationContainerRef,
    Route,
} from '@react-navigation/native';

let navigatorRef: NavigationContainerRef | null;
let isReady: boolean = false;

export const RouterActions = {
    setNavigationReference: (
        navigation: RefObject<NavigationContainerRef>
    ): void => {
        navigatorRef = navigation.current || null;
    },
    setIsReady: (status: boolean): void => {
        isReady = status;
    },
    getIsReady: (): boolean => {
        return isReady;
    },
    push: (screen: string, props: object = {}): void => {
        navigatorRef?.dispatch(StackActions.push(screen, props));
    },
    replace: (screen: string, props: object = {}): void => {
        navigatorRef?.dispatch(StackActions.replace(screen, props));
    },
    pop: (): void => {
        navigatorRef?.dispatch(StackActions.pop(1));
    },
    popToTop: (): void => {
        navigatorRef?.dispatch(StackActions.popToTop());
    },
    drawerToggle: (): void => {
        navigatorRef?.dispatch(DrawerActions.toggleDrawer());
    },
    currentRoute: (): Route<string, object | undefined> | undefined => {
        const current = navigatorRef?.getCurrentRoute();
        return current;
    },
    getRootState: (): any => {
        const rootState = navigatorRef?.getRootState();
        return rootState;
    },
};

export default RouterActions;
