import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import AlertMessage from "../../components/AlertMessage";

const NEW_CLIENT = gql`
  mutation newClient($input: ClientInput) {
    newClient(input: $input) {
      id
      name
      lastName
      company
      email
      phone
      seller
      createdAt
    }
  }
`;

const GET_CLIENT = gql`
  query getClientsSeller {
    getClientsSeller {
      id
      name
      lastName
      company
      email
      phone
      seller
      createdAt
    }
  }
`;

const NewClient = () => {
  const router = useRouter();
  const [message, getMessage] = useState(null);
  const [messageInfo, getMessageInfo] = useState({});

  const [newClient] = useMutation(NEW_CLIENT, {
    update(cache, { data: { newClient } }) {
      //get data cache
      const { getClientsSeller } = cache.readQuery({ query: GET_CLIENT });
      //update cache
      cache.writeQuery({
        query: GET_CLIENT,
        data: {
          getClientsSeller: [...getClientsSeller, newClient],
        },
      });
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      lastName: yup.string().required("Last name is required"),
      company: yup.string().required("company name is required"),
      email: yup.string().email("Invalid Email").required("Email is required"),
      phone: yup.string().min(8, "phone number must at least 8 characters"),
    }),
    onSubmit: async (values) => {
      const { name, lastName, email, company, phone } = values;

      try {
        const { data } = await newClient({
          variables: {
            input: {
              name,
              lastName,
              email,
              company,
              phone,
            },
          },
        });
        router.push("/clients");
      } catch (error) {
        console.log(`${error} entro`);

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
  return (
    <>
      {message ? <AlertMessage messageInfo={messageInfo} /> : null}
      <div className="sm:p-10 w-full min-w-full  flex justify-center">
        <div className="w-full sm:w-10/12 lg:w-1/2 bg-gray-100 p-10 rounded-xl">
          <h1 className="text-center font-bold text-4xl text-indigo-500 block mb-3">
            New Client
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <input
                type="text"
                id="name"
                placeholder="Name"
                autoFocus
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10 focus:border-blue-400 border"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <i className="bx bxs-user"></i>
              </span>
              {formik.errors.name ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                  <p className="font-bold">Error</p>
                  {/* <p>Lorem ipsum dolor sit amet.</p> */}
                  <p>{formik.errors.name}</p>
                </div>
              ) : null}
            </div>

            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <input
                type="text"
                placeholder="Last Name"
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10  focus:border-blue-400 border"
                id="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
              />
              <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <i className="bx bxs-user"></i>
              </span>
              {formik.errors.lastName ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.lastName}</p>
                </div>
              ) : null}
            </div>

            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <input
                type="text"
                placeholder="company"
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10  focus:border-blue-400 border"
                id="company"
                onChange={formik.handleChange}
                value={formik.values.company}
                onBlur={formik.handleBlur}
              />
              <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <i className="bx bxs-business"></i>
              </span>
              {formik.errors.company ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.company}</p>
                </div>
              ) : null}
            </div>

            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <input
                type="text"
                placeholder="Email"
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10  focus:border-blue-400 border"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <i className="bx bxs-envelope"></i>
              </span>
              {formik.errors.email ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.email}</p>
                </div>
              ) : null}
            </div>

            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <input
                type="text"
                placeholder="Phone"
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10 focus:border-blue-400 border"
                id="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />
              <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <i className="bx bxs-phone"></i>
              </span>
              {formik.errors.phone ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.phone}</p>
                </div>
              ) : null}
            </div>
            <div className="flex justify-end">
              <button
                className="text-indigo-500 bg-transparent border border-solid border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3  rounded outline-none focus:outline-none mr-1 mb-1"
                type="submit"
                style={{ transition: "all .15s ease" }}
              >
                <i className="bx bxs-user mr-2"></i> New Client
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewClient;
