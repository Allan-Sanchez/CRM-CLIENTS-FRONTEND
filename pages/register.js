import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation, gql } from "@apollo/client";
import {useRouter} from 'next/router';

const NEW_USER = gql`
  mutation newUser($input: UserInput) {
    newUser(input: $input) {
      id
      name
      lastName
      email
      createdAt
    }
  }
`;

const Register = () => {
  const [newUser] = useMutation(NEW_USER);
  const [message, getMessage] = useState(null);
  const [messageInfo, getMessageInfo] = useState({});
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      lastName: yup.string().required("Last name is required"),
      email: yup.string().email("Invalid Email").required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characteres"),
    }),
    onSubmit: async (values) => {
      const { name, lastName, email, password } = values;
      try {
        const { data } = await newUser({
          variables: {
            input: {
              name,
              lastName,
              email,
              password,
            },
          },
        });
        console.log(data);
        getMessage(true);
        getMessageInfo({
          typeError: "Success",
          message: `Users ${data.newUser.name} created successfully`,
        });

        setTimeout(() => {
          getMessage(null);
          getMessageInfo({});
          router.push('/login');
        }, 3000);


      } catch (error) {
        getMessage(true);
        getMessageInfo({
          typeError: "Error",
          message: error.message,
        });

        setTimeout(() => {
          getMessage(null);
          getMessageInfo({});
        }, 3000);
      }
    },
  });

  const AlertMessage = () => {
    return (
      <div className=" absolute top-2 right-1/3 flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className={ messageInfo.typeError === "Error" ? "flex justify-center items-center w-12 bg-red-500" : "flex justify-center items-center w-12 bg-green-500" }>
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
            <span className={messageInfo.typeError === "Error" ? "text-red-500 font-semibold" : "text-green-500 font-semibold"}>
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
      <div className="flex max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden lg:max-w-5xl ">
        <div
          className="hidden lg:block lg:w-2/5 bg-cover bg-center"
          style={{
            backgroundImage: `url(/womanDashboard.svg)`,
          }}
        ></div>

        <div className="w-full py-8 px-6 md:px-8 lg:w-3/5 ">
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
            <div className="lg:flex justify-around">
              <div className="mt-4 lg:w-5/12">
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  className="bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:ring"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name ? (
                  <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.name}</p>
                  </div>
                ) : null}
              </div>
              <div className="mt-4 lg:w-5/12">
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  className="bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:ring"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.lastName ? (
                  <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.lastName}</p>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="lg:flex  justify-around">
              <div className="mt-4 lg:w-5/12">
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
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email ? (
                  <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.email}</p>
                  </div>
                ) : null}
              </div>

              <div className="mt-4 lg:w-5/12">
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
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password ? (
                  <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.password}</p>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-8 lg:flex justify-center">
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold py-2 px-4 w-11/12 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-gray-500 uppercase hover:underline"
            >
              or Login
            </a>

            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
