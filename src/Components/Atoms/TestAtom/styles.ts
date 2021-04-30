import styled from 'styled-components/native';

interface ITestAtomStyled {
    filled?: boolean;
}

export const TestAtomStyled = styled.TouchableOpacity<ITestAtomStyled>`
    border-color: ${({ theme }) => theme.colors.secondary};
    border-width: 1px;
    border-radius: 3px;
    padding: 8px;
`;
