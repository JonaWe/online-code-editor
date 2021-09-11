import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgLight: string;
      bgMedium: string;
      bgDark: string;
      bgBlack: string;
      fcPrimary: string;
    };
  }
}
