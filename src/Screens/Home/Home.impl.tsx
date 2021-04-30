import React from 'react';
import { useTranslation } from 'react-i18next';

import { TestAtom } from '@Components/Atoms';
import { Container, TopText, Middle, Centered } from './styled';

import { IHomePage } from './Home.interface';
import RouterActions from '@Services/RouterActions';
import { QRCODE_SCREEN_NAME } from '@Constants/index';

const Home: React.FunctionComponent<IHomePage.IProps> = () => {
    const { t } = useTranslation();
    
    return (
        <Container key={1}>
            
            <Middle>
                <Centered>
                    <TestAtom  onPress={() => {RouterActions.push(QRCODE_SCREEN_NAME)}}/>
                </Centered>
            </Middle>
        </Container>
    );
};

export default Home;
