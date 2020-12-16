import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    
    colors: {
      background: string;
      background_darker: string;
      background_text: string;
      background_dt: string;
    };
  }
}
