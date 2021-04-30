import React from 'react';
import { Text } from 'react-native';

import { ITestAtom } from './TestAtom.interface';

import { TestAtomStyled } from './styles';

export const TestAtom: React.FC<ITestAtom> = ({ filled ,onPress}) => {
    return (
        <TestAtomStyled onPress={onPress} filled={filled}>
            <Text>QR CODE SCAN</Text>
        </TestAtomStyled>
    );
};
