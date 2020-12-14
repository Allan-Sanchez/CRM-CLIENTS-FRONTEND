import { useFormik } from "formik";
import * as yup from 'yup';
import { useQuery, gql } from '@apollo/client';


const QUERY = gql`
  query getProducts{
  getProducts{
    name
    stock
    price
  }
}
`;

const Register = () => {

  const {data} = useQuery(QUERY);
  console.log(data);
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
        name: yup.string().required('Name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email('Invalid Email').required('Email is required'),
        password: yup.string().required('Password is required').min(6,'Password must be at least 6 characteres')
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
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
              {formik.errors.name ?(
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
               {formik.errors.lastName ?(
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
              {formik.errors.email ?(
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
              {formik.errors.password ?(
                  <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 ">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.password}</p>
              </div>
              ) : null}
            </div>
          </div>

          <div className="mt-8 lg:flex justify-center">
            <button type="submit" className="bg-blue-700 text-white font-bold py-2 px-4 w-11/12 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
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
  );
};

export default Register;
