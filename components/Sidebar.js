import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden min-w-sidebar">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl uppercase text-indigo-500">CRM</h1>
      </div>
      <ul className="flex flex-col py-4">
        <li>
          <Link href="/">
            <a
              href="#"
              className={`${
                router.pathname === "/" ? "text-gray-800 translate-x-2" : ""
              } flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800`}
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-home"></i>
              </span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a
              href="#"
              className={`${
                router.pathname === "/users"
                  ? "text-gray-800 translate-x-2"
                  : ""
              } flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800`}
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-user"></i>
              </span>
              <span className="text-sm font-medium">Users</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/orders">
            <a
              href="#"
              className={`${
                router.pathname === "/orders"
                  ? "text-gray-800 translate-x-2"
                  : ""
              } flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800`}
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-shopping-bag"></i>
              </span>
              <span className="text-sm font-medium">Orders</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a
              href="#"
              className={`${
                router.pathname === "/products"
                  ? "text-gray-800 translate-x-2"
                  : ""
              } flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800`}
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-cart"></i>
              </span>
              <span className="text-sm font-medium">Products </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/clients">
            <a
              href="#"
              className={`${
                router.pathname === "/clients"
                  ? "text-gray-800 translate-x-2"
                  : ""
              } flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800`}
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-face"></i>
              </span>
              <span className="text-sm font-medium">Clients </span>
            </a>
          </Link>
        </li>

        <li>
          <a
            href="#"
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              <i className="bx bx-log-out"></i>
            </span>
            <span className="text-sm font-medium">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
