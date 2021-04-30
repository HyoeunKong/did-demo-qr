'use strict';
import React,{useState} from 'react';
import {Text} from "react-native";
import {QRScannerProps} from './QRScanner.interface';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import fs from "fs";
import DATA  from "./data"

import { VpsInterface } from '@Interfaces/vps.interface';
import { VcsInterface } from '@Interfaces/vcs.interface';
import {
    QrDataService,
    VpsService,
    VcStatusTrxService,
    Common,
} from "@ibct-dev/lit-library";
import { QrCodeService } from '@Services/QrCode';
import RouterActions from '@Services/RouterActions';
import Toast from 'react-native-tiny-toast';
import { ToastStyle } from './styled';
const QRScanner: React.FC<QRScannerProps.IProps> = () => {
  

    
    const getData = async (event:any) =>  {
       
        try{
            if(event.data !== "")
            {
                const signedVc = event.data
                console.log(signedVc,'n')

                const data = Buffer.from(JSON.stringify(DATA)).toString("base64");
                const encodedSignedVc = Buffer.from(signedVc).toString("base64")
                console.log(encodedSignedVc,"e")
                const result = await QrCodeService.sendVerifiedUser(encodedSignedVc)
                
                console.log(result,'result')
              
                if(result){
                        Toast.show("학생증 인증이 완료되었습니다.", {
                            duration: 500,
                            position: Toast.position.CENTER,
                            containerStyle: ToastStyle
                        });

                        RouterActions.pop()
                }
                else{
                    Toast.show("유효하지 않은 QR 입니다.", {
                        duration: 500,
                        position: Toast.position.CENTER,
                        containerStyle: ToastStyle
                    });

                    RouterActions.pop()
                }     
             }
            
        }
        catch(error){
            console.log(error)
            alert("QR스캔에 실패했습니다. 다시 시도해주세요.")
            RouterActions.pop()
        }
    }

    
        return ( 
        <>
    <QRCodeScanner  showMarker={true} onRead={getData} />
    
</>
    );      
};


export default QRScanner