import { gql } from '@apollo/client';

export const setRequestList = gql`
    mutation setRequestList($args: SetRequestListArgs!) {
        setRequestList(args: $args) {
            result
            requestId
        }
    }
`;
