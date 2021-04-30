import React, { useEffect, createRef } from 'react';
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';

import { theme } from '@Definitions/Styled';
import Home from '@Screens/Home/Home.impl';
import RouterActions from '@Services/RouterActions';
import QRScanner from '@Screens/QRScanner';
import { HOME_SCREEN_NAME, QRCODE_SCREEN_NAME } from '@Constants/index';
import { HeaderBackButton } from '@Components/Atoms';

export const navigationRef = createRef<NavigationContainerRef>();

const Stack = createStackNavigator();

export const rootStack = () => {
    return (
        <Stack.Navigator initialRouteName={HOME_SCREEN_NAME}>
            <Stack.Screen
                name={HOME_SCREEN_NAME}
                component={Home}
                options={{
                    title: 'HOME',
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTintColor: theme.colors.secondary
                }}
            />
            <Stack.Screen
                name={QRCODE_SCREEN_NAME}
                component={QRScanner}
                options={{
                    title: 'QRScanner',
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTintColor: theme.colors.secondary,
                  
                }}
            />
        </Stack.Navigator>
        
    );
};

export const AppContainer = () => {
    useEffect(() => {
        RouterActions.setNavigationReference(navigationRef);
    }, []);

    return (
        <NavigationContainer ref={navigationRef} onReady={() => {
            RouterActions.setIsReady(true);
        }}>
            {rootStack()}
        </NavigationContainer>
    );
};
