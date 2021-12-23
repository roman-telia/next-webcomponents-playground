import { renderToString } from "@teliads/components/hydrate";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { parse } from "node-html-parser";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Stencil renderToString options (optional): https://stenciljs.com/docs/hydrate-app#configuration-options
    const renderToStringOptions = {
      prettyHtml: true,
    };

    const initialProps = await Document.getInitialProps(ctx);
    const document = await renderToString(
      initialProps.html,
      renderToStringOptions
    );

    // Stencil hydrate generate a full page HTML
    // We need only content inside body
    const root = parse(document.html);
    const html = root.querySelector("body").innerHTML;

    return {
      ...initialProps,
      html,
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
