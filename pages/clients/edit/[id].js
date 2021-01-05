import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import { PushSpinner } from "react-spinners-kit";
import { Formik } from "formik";
import * as yup from "yup";
import Swal from 'sweetalert2';

const GET_CLIENT_FOR_ID = gql`
  query getClient($id: ID!) {
    getClient(id: $id) {
      id
      name
      lastName
      company
      email
      phone
    }
  }
`;

const UPDATE_CLIENT = gql`
mutation updateClient($id: ID!, $input: ClientInput){
  updateClient(id: $id,input: $input){
    id
    name
    lastName
    email
  }
}
`;

const EditClient = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const { loading, data, error } = useQuery(GET_CLIENT_FOR_ID, {
    variables: {
      id,
    },
  });
  console.log(data);
  const [updateClient] = useMutation(UPDATE_CLIENT);

  const validationSchemaUpdate = yup.object({
    name: yup.string().required("Name is required"),
    lastName: yup.string().required("Last name is required"),
    company: yup.string().required("company name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    phone: yup.string().min(8, "phone number must at least 8 characters"),
  });

  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/3 sm:left-1/2 ">
        <PushSpinner size={50} color="#686769" loading={loading} />
      </div>
    );
  }
  // console.log(data);
  const handleUpdateClient = async(values) => {
    const {name,lastName, email, company, phone} = values;

    try {
      const {data} = await updateClient({
        variables:{
          id,
          input:{
            name,
            lastName,
            email,
            company,
            phone
          }
        }
      });
      Swal.fire("Updated!", `Client ${data.updateClient.name} updated successfully`, "success");
      router.push('/clients')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="sm:p-10 w-full min-w-full  flex justify-center">
        <div className="w-full sm:w-10/12 lg:w-1/2 bg-gray-100 p-10 rounded-xl">
          <h1 className="text-center font-bold text-4xl text-indigo-500 block mb-3">
            Update Client
          </h1>
          <Formik
            validationSchema={validationSchemaUpdate}
            enableReinitialize
            initialValues={data.getClient}
            onSubmit={(values) => {
              handleUpdateClient(values);
            }}
          >
            {(props) => {
              return (
                <form onSubmit={props.handleSubmit}>
                  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      autoFocus
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10 focus:border-blue-400 border"
                      onChange={props.handleChange}
                      value={props.values.name}
                      onBlur={props.handleBlur}
                    />
                    <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                      <i className="bx bxs-user"></i>
                    </span>
                    {props.touched.name && props.errors.name ? (
                      <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                        <p className="font-bold">Error</p>
                        {/* <p>Lorem ipsum dolor sit amet.</p> */}
                        <p>{props.errors.name}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10  focus:border-blue-400 border"
                      id="lastName"
                      onChange={props.handleChange}
                      value={props.values.lastName}
                      onBlur={props.handleBlur}
                    />
                    <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                      <i className="bx bxs-user"></i>
                    </span>
                    {props.touched.lastName && props.errors.lastName ? (
                      <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                        <p className="font-bold">Error</p>
                        <p>{props.errors.lastName}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="text"
                      placeholder="company"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10  focus:border-blue-400 border"
                      id="company"
                      onChange={props.handleChange}
                      value={props.values.company}
                      onBlur={props.handleBlur}
                    />
                    <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                      <i className="bx bxs-business"></i>
                    </span>
                    {props.touched.company && props.errors.company ? (
                      <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                        <p className="font-bold">Error</p>
                        <p>{props.errors.company}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="text"
                      placeholder="Email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10  focus:border-blue-400 border"
                      id="email"
                      onChange={props.handleChange}
                      value={props.values.email}
                      onBlur={props.handleBlur}
                    />
                    <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                      <i className="bx bxs-envelope"></i>
                    </span>
                    {props.touched.email && props.errors.email ? (
                      <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                        <p className="font-bold">Error</p>
                        <p>{props.errors.email}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10 focus:border-blue-400 border"
                      id="phone"
                      onChange={props.handleChange}
                      value={props.values.phone}
                      onBlur={props.handleBlur}
                    />
                    <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                      <i className="bx bxs-phone"></i>
                    </span>
                    {props.touched.phone && props.errors.phone ? (
                      <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                        <p className="font-bold">Error</p>
                        <p>{props.errors.phone}</p>
                      </div>
                    ) : null}
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="text-indigo-500 bg-transparent border border-solid border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3  rounded outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      <i className="bx bxs-user mr-2"></i> Update Client
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default EditClient;
