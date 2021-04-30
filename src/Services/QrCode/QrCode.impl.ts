// import { QR_READ_DISMISSED, QR_READ_FAILURE, QR_SCAN_SCREEN } from '@Constants';
import { PERMISSIONS, check, request } from 'react-native-permissions';
import { Alert, Platform, Linking } from 'react-native';
// import { ServiceError } from '@Errors';
import { I18n } from '@I18n';
import { getApolloClient } from '@Apollo';
import { setRequestList } from '@Apollo/Operations/Mutations/setRequestList';
import RouterActions from '../RouterActions';

export type permissionResult = 'unavailable' | 'denied' | 'blocked' | 'granted';

export class QrCodeService {
    static async sendVerifiedUser(qrData: string): Promise<boolean> {
        try {
            const apolloClient = await getApolloClient();
            const sendVerifiedUserResult = await apolloClient.mutate({
                mutation: setRequestList,
                variables: {
                    args: {
                        agencyId: '4fceb132-72ee-4de3-af2a-db15c7e1f6d8',
                        qrData,
                    },
                },
            });
            const { result } = sendVerifiedUserResult.data.setRequestList;
            return result;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
