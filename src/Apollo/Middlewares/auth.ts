import { setContext } from '@apollo/client/link/context';

export const authLink = setContext((_request, _previousContext) => ({
    headers: {
        ..._previousContext.headers,
        'x-ibct-client-secret': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRTZWNyZXQiOiJFVVhDTUVCNHZqRzFaVFBpU2hwUERDMW1paHdjV0prTDZLWjV6a05YeExERCIsImlhdCI6MTYxNjU3MjQwMn0.lbI55W4JlM3FT0X5pBAwVSzILWLpZMAzNQ38wAXZmpnP29G_58WGpCnRPmbcAtDmnBEOTFnj36jSxnVW3UuHosHrhMB-NuTGft0SNih5ymRGbAmLh7uoGJ4a0PKqIcDrf3HYg3RJxO8RpYJPQLUTP-fl0x18UxfjZUd3auflkE0-26J0h39LF4aFRIXGcN2FPAicU1K5bdmbEl8Lym1NKZmwdpHs2Yd-KXzJ0Tx7X-Ye4K-IFciolmrJDo4zza-hxtpAB93E0ozcAGvX6GN-SRHW12_4h9u5ejwsg3p45SP_wyQTPg-iYy8IC2vB_60aZmgiJYCa-SMWytMMEwQKIw`,
    },
}));
