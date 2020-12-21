import "../styles/globals.css";
import Layout from "../components/Layout";
import { ApolloProvider } from '@apollo/client';
import client from "../config/apollo";

// import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    // <>
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
    // </>
  );
}

export default MyApp;
