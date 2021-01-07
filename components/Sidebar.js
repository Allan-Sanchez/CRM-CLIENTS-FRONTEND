import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const logout = () =>{
    localStorage.removeItem('token');
    router.push('/login');
  }

  return (
    <>
      <div className=" hidden sm:flex flex-col w-20 lg:w-72 bg-white rounded-r-3xl overflow-hidden min-w-sidebar">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl uppercase text-indigo-500">CRM</h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <Link href="/">
              <a
                href="#"
                className={`${
                  router.pathname === "/"
                    ? "text-gray-800 translate-x-2 border-l-4 border-indigo-500"
                    : ""
                } flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800`}
              >
                <span
                  className={` ${
                    router.pathname === "/" ? "text-gray-800 translate-x-2" : ""
                  } inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400`}
                >
                  <i className="bx bx-home"></i>
                </span>
                <span className="hidden lg:inline-block text-sm font-medium">
                  Dashboard
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a
                href="#"
                className={`${
                  router.pathname === "/users"
                    ? "text-gray-800 translate-x-2 border-l-4 border-indigo-800"
                    : ""
                } flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800`}
              >
                <span
                  className={` ${
                    router.pathname === "/users"
                      ? "text-gray-800 translate-x-2"
                      : ""
                  } inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400`}
                >
                  <i className="bx bx-user"></i>
                </span>
                <span className="hidden lg:inline-block text-sm font-medium">
                  Users
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/orders">
              <a
                href="#"
                className={`${
                  router.pathname === "/orders"
                    ? "text-gray-800 translate-x-2 border-l-4 border-indigo-800"
                    : ""
                } flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800`}
              >
                <span
                  className={` ${
                    router.pathname === "/orders"
                      ? "text-gray-800 translate-x-2"
                      : ""
                  } inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400`}
                >
                  <i className="bx bx-shopping-bag"></i>
                </span>
                <span className="hidden lg:inline-block text-sm font-medium">
                  Orders
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a
                href="#"
                className={`${
                  router.pathname === "/products"
                    ? "text-gray-800 translate-x-2 border-l-4 border-indigo-800"
                    : ""
                } flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800`}
              >
                <span
                  className={` ${
                    router.pathname === "/products"
                      ? "text-gray-800 translate-x-2"
                      : ""
                  } inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400`}
                >
                  <i className="bx bx-cart"></i>
                </span>
                <span className="hidden lg:inline-block text-sm font-medium">
                  Products{" "}
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/clients">
              <a
                href="#"
                className={`${
                  router.pathname === "/clients"
                    ? "text-gray-800 translate-x-2 border-l-4 border-indigo-800"
                    : ""
                } flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800`}
              >
                <span
                  className={` ${
                    router.pathname === "/clients"
                      ? "text-gray-800 translate-x-2"
                      : ""
                  } inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400`}
                >
                  <i className="bx bx-face"></i>
                </span>
                <span className="hidden lg:inline-block text-sm font-medium">
                  Clients{" "}
                </span>
              </a>
            </Link>
          </li>

          <li>
            <a
              onClick={() => logout()}
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-log-out"></i>
              </span>
              <span className="hidden lg:inline-block text-sm font-medium">
                Logout
              </span>
            </a>
          </li>
        </ul>
      </div>
      <nav className="fixed sm:hidden bottom-0 h-12 bg-white w-full z-10">
        <ul className="flex justify-center h-full items-center">
          <li className={`${router.pathname === "/" ? "border-indigo-500" : ""} px-4 py-1 border-b-4 `}>
            <Link href="/">
              <a href="#">
                <span className="text-2xl">
                  <i className="bx bx-home"></i>
                </span>
              </a>
            </Link>
          </li>

          <li className={`${router.pathname === "/users" ? "border-indigo-500" : ""} px-4 py-1 border-b-4 `}>
            <Link href="/users">
              <a href="#">
                <span className="text-2xl">
                  <i className="bx bx-user"></i>
                </span>
              </a>
            </Link>
          </li>

          <li className={`${router.pathname === "/orders" ? "border-indigo-500" : ""} px-4 py-1 border-b-4 `}>
            <Link href="/orders">
              <a href="#">
                <span className="text-2xl">
                  <i className="bx bx-shopping-bag"></i>
                </span>
              </a>
            </Link>
          </li>

          <li className={`${router.pathname === "/products" ? "border-indigo-500" : ""} px-4 py-1 border-b-4 `}>
            <Link href="/products">
              <a href="#">
                <span className="text-2xl">
                  <i className="bx bx-cart"></i>
                </span>
              </a>
            </Link>
          </li>

          <li className={`${router.pathname === "/clients" ? "border-indigo-500" : ""} px-4 py-1 border-b-4 `}>
            <Link href="/clients">
              <a href="#">
                <span className="text-2xl">
                  <i className="bx bx-face"></i>
                </span>
              </a>
            </Link>
          </li>

         
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
