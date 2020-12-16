import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {gql, useMutation} from '@apollo/client';
import {useRouter} from 'next/router';
import { PushSpinner } from "react-spinners-kit";

const MUTATION_LOGIN = gql`
mutation loginUser($input: LoginInput) {
  loginUser(input: $input) {
    token
  }
}

`;
const Login = () => {
  const router  = useRouter();
  const [loginUser] = useMutation(MUTATION_LOGIN);
  const [message, getMessage] = useState(null);
  const [messageInfo, getMessageInfo] = useState({});
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid Email").required("Email is required"),
      password: yup.string().required("Password is required"),
    }),
    onSubmit: async(values) => {

      const {email, password} = values;
      try {
        const {data,loading} = await loginUser({
          variables:{
            input:{
              email,
              password
            }
          }
        });

        if (loading) {
          return(
            <PushSpinner size={30} color="#686769" loading={loading} />
            );
        }
      localStorage.setItem('token',data.loginUser.token);
       getMessage(true);
        getMessageInfo({
          typeError: "Success",
          message: `login successfully`,
        });

        setTimeout(() => {
          getMessage(null);
          getMessageInfo({});
          router.push('/');
        }, 2000);


      } catch (error) {
        getMessage(true);
        getMessageInfo({
          typeError: "Error",
          message: error.message,
        });

        setTimeout(() => {
          getMessage(null);
          getMessageInfo({});
        }, 2000);
      }
    },
  });
  const AlertMessage = () => {
    return (
      <div className=" absolute top-2 right-1/3 flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div
          className={
            messageInfo.typeError === "Error"
              ? "flex justify-center items-center w-12 bg-red-500"
              : "flex justify-center items-center w-12 bg-green-500"
          }
        >
          {messageInfo.typeError === "Error" ? (
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
          )}
        </div>

        <div className="-mx-3 py-2 px-4">
          <div className="mx-3">
            <span
              className={
                messageInfo.typeError === "Error"
                  ? "text-red-500 font-semibold"
                  : "text-green-500 font-semibold"
              }
            >
              {messageInfo.typeError}
            </span>
            <p className="text-gray-600 text-sm">{messageInfo.message}!</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {message ? AlertMessage() : null}
      <div className="flex max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden lg:max-w-4xl ">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(/imageDashboard.svg)`,
          }}
        ></div>

        <div className="w-full py-8 px-6 md:px-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            CRM Admin Clients
          </h2>

          <p className="text-xl text-gray-600 text-center">Welcome back!</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase hover:underline"
            >
              Login
            </a>

            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-4">
              <label
                className="block text-gray-600 text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                className="bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:ring"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.email}</p>
                </div>
              ) : null}
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500 hover:underline">
                  Forget Password?
                </a>
              </div>

              <input
                id="password"
                className="bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:ring"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-gray-500 uppercase hover:underline"
            >
              or sign up
            </a>

            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
