import Head from "next/head";
import Sidebar from "./Sidebar";
import {useRouter} from "next/router";

const Layout = ({ children }) => {

  const router = useRouter();

  console.log(router.pathname)
  return (
    <>
      <Head>
        <title>CRM- Admin Clients</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />
      </Head>
      {router.pathname === "/login" || router.pathname === "/register" ?(
        <div className="w-full bg-gray-300 h-screen pt-20">{children}</div>
      ):(

        <div className="min-h-screen flex flex-row bg-gray-100">
          <Sidebar />
  
          <div>{children}</div>
        </div>
      )}
    </>
  );
};

export default Layout;
