import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds:{
      values:[
        {
          name:"grey",
          value:"#808080"
        }
      ]
    }
  },
};

export default preview;
