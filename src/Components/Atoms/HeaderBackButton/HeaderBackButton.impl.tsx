import React from 'react';
import { View, TouchableOpacity } from 'react-native';

// import BackButtonSVG from '@Assets/images/header_back_btn.svg';
import { theme } from '@Definitions/Styled';
import { HeaderButtonProps } from './HeaderBackButton.interface';


export const HeaderBackButton: React.FC<HeaderButtonProps> = ({ onPress }) => {
    return (
        <View
            style={{
                paddingHorizontal: 15,
                paddingVertical: 8
            }}>
            <TouchableOpacity onPress={onPress}>
                {/* <BackButtonSVG */}
                  
                />
            </TouchableOpacity>
        </View>
    );
};
