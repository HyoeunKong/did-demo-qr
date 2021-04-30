import 'styled-components';

declare module 'styled-components' {
    interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            greyishBrown: string;
        };
        dimensions: {
            screenWidth: number;
            screenHeight: number;
        };
    }
}
