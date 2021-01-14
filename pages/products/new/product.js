import { useFormik } from "formik";
import * as yup from "yup";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const NEW_PRODUCT = gql`
  mutation newProduct($input: ProductInput) {
    newProduct(input: $input) {
      id
      name
      stock
      price
      createdAt
    }
  }
`;

const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      id
      name
      stock
      price
      createdAt
    }
  }
`;
const Product = () => {
  const router = useRouter();
  const [newProduct] = useMutation(NEW_PRODUCT, {
    update(cache, { data: { newProduct } }) {
      //get data
      const { getProducts } = cache.readQuery({ query: GET_PRODUCTS });
      //update cache
      cache.writeQuery({
        query: GET_PRODUCTS,
        data: {
            getProducts: [...getProducts, newProduct],
        },
      });
    },
  });
  const formik = useFormik({
    initialValues: {
      stock: "",
      price: "",
      name: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      price: yup
        .number()
        .required("Product price is rquired")
        .positive("Number must be positive"),
      stock: yup
        .number()
        .required("Quantity is required")
        .positive("Number must be positive")
        .integer("Number must be integer"),
    }),
    onSubmit: async (values) => {
      const { name, price, stock } = values;

      try {
        const { data } = await newProduct({
          variables: {
            input: {
              name,
              price,
              stock,
            },
          },
        });
        //   console.log(data);
        router.push("/products");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      {/* {message ? <AlertMessage messageInfo={messageInfo} /> : null} */}
      <div className="sm:p-10 w-full min-w-full  flex justify-center">
        <div className="w-full sm:w-10/12 lg:w-1/2 bg-gray-100 p-10 rounded-xl">
          <h1 className="text-center font-bold text-4xl text-indigo-500 block mb-3">
            New Product
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
              {formik.touched.name && formik.errors.name ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                  <p className="font-bold">Error</p>
                  {/* <p>Lorem ipsum dolor sit amet.</p> */}
                  <p>{formik.errors.name}</p>
                </div>
              ) : null}
            </div>

            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <input
                type="number"
                placeholder="price"
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10  focus:border-blue-400 border"
                id="price"
                onChange={formik.handleChange}
                value={formik.values.price}
                onBlur={formik.handleBlur}
              />
              <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <i className="bx bx-money"></i>
              </span>
              {formik.touched.price && formik.errors.price ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.price}</p>
                </div>
              ) : null}
            </div>

            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <input
                type="number"
                placeholder="Quantity"
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10  focus:border-blue-400 border"
                id="stock"
                onChange={formik.handleChange}
                value={formik.values.stock}
                onBlur={formik.handleBlur}
              />
              <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <i className="bx bxs-cart"></i>
              </span>
              {formik.touched.stock && formik.errors.stock ? (
                <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.stock}</p>
                </div>
              ) : null}
            </div>

            <div className="flex justify-end">
              <button
                className="text-indigo-500 bg-transparent border border-solid border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3  rounded outline-none focus:outline-none mr-1 mb-1"
                type="submit"
                style={{ transition: "all .15s ease" }}
              >
                <i className="bx bxs-user mr-2"></i> New Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
