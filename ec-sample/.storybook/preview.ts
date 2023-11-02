import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../src/themes";

// createGlobalStyle でグローバルスタイルを定義
const GlobalStyles = createGlobalStyle`
  /* ここにグローバルスタイルを定義 */
`;

const parser = require("@babel/parser");
const babel = require("@babel/core");

const code = "your JavaScript code here";
const options = {
  // Babelのオプションを指定
};



// export const decorators = [
//   (Story: React.ComponentType) => (
//     <>
//       <GlobalStyles />
//       <ThemeProvider theme={theme}>
//         <Story />
//       </ThemeProvider>
//     </>
//   )
// ];

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
