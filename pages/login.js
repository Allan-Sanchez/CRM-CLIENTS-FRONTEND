const Login = () => {
  return (
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

        <div className="mt-4">
          <label
            className="block text-gray-600 text-sm font-medium mb-2"
            htmlFor="LoggingEmailAddress"
          >
            Email Address
          </label>
          <input
            id="LoggingEmailAddress"
            className="bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:ring"
            type="email"
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="loggingPassword"
            >
              Password
            </label>
            <a href="#" className="text-xs text-gray-500 hover:underline">
              Forget Password?
            </a>
          </div>

          <input
            id="loggingPassword"
            className="bg-white text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:border-blue-500 focus:outline-none focus:ring"
            type="password"
          />
        </div>
        <div className="mt-8">
          <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Login
          </button>
        </div>
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
  );
};

export default Login;
