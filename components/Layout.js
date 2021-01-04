import Head from "next/head";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import Navbar from '../components/Navbar';
const Layout = ({ children }) => {
  const router = useRouter();

  // console.log(router.pathname);
  return (
    <>
      <Head>
        <title>CRM-Admin Clients</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer', 'asdf');
    `,
          }}
        />
      </Head>
      {router.pathname === "/login" || router.pathname === "/register" ? (
        <div className="w-full bg-gray-300 h-screen pt-20">{children}</div>
      ) : (
        <div className="min-h-screen flex flex-row">
          <Sidebar />

          <div className="w-full bg-gray-200">
          <Navbar/>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
