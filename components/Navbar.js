import Dropdown from "../components/Dropdown";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-2 bg-white h-20">
      <div className="hidden lg:block w-2/4 text-2xl font-semibold text-indigo-500">
        Panel Administrativo
      </div>
      <div className="hidden sm:block w-1/2 lg:w-1/4">
        <form>
          <div className="relative flex w-full flex-wrap items-stretch">
            <input
              type="text"
              placeholder="Type search"
              className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10 focus:border-blue-400 border-2"
            />
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
              <i className="bx bx-search-alt"></i>
            </span>
          </div>
        </form>
      </div>
     
          <Dropdown />
    </nav>
  );
};

export default Navbar;
