import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import {ServerStyleSheet} from "styled-components"

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }


export default class MyDoument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage;

      try{
        ctx.renderPage= () =>originalRenderPage({
          enhanceApp:(App) => (props) => 
            sheet.collectStyles(<App {...props} />),
        })

        const initProps = await Document.getInitialProps(ctx);
        return {
          ...initProps,
          styles:[
            initProps.styles,
            sheet.getStyleElement()
          ]
        }
      } finally{
        sheet.seal()
      }
  }
}