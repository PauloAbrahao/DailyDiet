import "styled-components/native";
import {theme} from "@config/theme/";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}

