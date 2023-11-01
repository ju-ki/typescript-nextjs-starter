import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../src/themes";

// createGlobalStyle でグローバルスタイルを定義
const GlobalStyles = createGlobalStyle`
  /* ここにグローバルスタイルを定義 */
`;

export const decorators = [
  (Story: React.ComponentType) => (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];

// その他の Storybook パラメータの設定
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
