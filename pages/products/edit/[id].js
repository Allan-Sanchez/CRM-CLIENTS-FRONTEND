import { Formik } from "formik";
import { fromPromise, gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { PushSpinner } from "react-spinners-kit";
import * as yup from "yup";
import Swal from "sweetalert2";

const GET_PRODUCT_FOR_ID = gql`
  query getProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      stock
      price
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation updateProduct($id: ID!, $input: ProductInput) {
    updateProduct(id: $id, input: $input) {
      id
      name
      stock
      price
    }
  }
`;
const EditProduct = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const { loading, data } = useQuery(GET_PRODUCT_FOR_ID, {
    variables: {
      id,
    },
  });

  const validationSchemaProduct = yup.object({
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
  });

  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/3 sm:left-1/2 ">
        <PushSpinner size={50} color="#686769" loading={loading} />
      </div>
    );
  }

  const handleUpdateProduct = async(values) => {
    const {name, price, stock} = values

    try {
        const {data} =await updateProduct({
            variables:{
                id,
                input:{
                    name,
                    price,
                    stock
                }
            }
        });
        Swal.fire("Updated!", `Product ${data.updateProduct.name} updated successfully`, "success");
        router.push('/products')
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <>
      <div className="sm:p-10 w-full min-w-full  flex justify-center">
        <div className="w-full sm:w-10/12 lg:w-1/2 bg-gray-100 p-10 rounded-xl">
          <h1 className="text-center font-bold text-4xl text-indigo-500 block mb-3">
            Update Product
          </h1>
          <Formik
            validationSchema={validationSchemaProduct}
            enableReinitialize
            initialValues={data.getProduct}
            onSubmit={(values) => {
              handleUpdateProduct(values);
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
                      type="number"
                      placeholder="price"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10  focus:border-blue-400 border"
                      id="price"
                      onChange={props.handleChange}
                      value={props.values.price}
                      onBlur={props.handleBlur}
                    />
                    <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                      <i className="bx bx-money"></i>
                    </span>
                    {props.touched.price && props.errors.price ? (
                      <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                        <p className="font-bold">Error</p>
                        <p>{props.errors.price}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="number"
                      placeholder="Quantity"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 relative  bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10  focus:border-blue-400 border"
                      id="stock"
                      onChange={props.handleChange}
                      value={props.values.stock}
                      onBlur={props.handleBlur}
                    />
                    <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                      <i className="bx bxs-cart"></i>
                    </span>
                    {props.touched.stock && props.errors.stock ? (
                      <div className="py-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-4 w-full">
                        <p className="font-bold">Error</p>
                        <p>{props.errors.stock}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="text-indigo-500 bg-transparent border border-solid border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3  rounded outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      <i className="bx bxs-user mr-2"></i> Update Product
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

export default EditProduct;
