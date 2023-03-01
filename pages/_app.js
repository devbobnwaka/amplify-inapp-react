import { CartProvider } from "react-use-cart";
import "@/styles/globals.css";

import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);

import { withInAppMessaging } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";
import Notification from "@/components/Notification";

function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default withInAppMessaging(App, {components: {BannerMessage: Notification}});
