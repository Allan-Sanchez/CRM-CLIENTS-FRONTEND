import "../styles/globals.css";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "../config/apollo";
import OrderState from "../context/orders/OrderState";


function MyApp({ Component, pageProps }) {
  return (
    // <>
    <ApolloProvider client={client}>
      <OrderState>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </OrderState>
    </ApolloProvider>
    // </>
  );
}

export default MyApp;
