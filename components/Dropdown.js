import React from "react";
import Popper from "popper.js";
import { gql, useQuery } from "@apollo/client";
import Avatar from 'react-avatar';
import { PushSpinner } from "react-spinners-kit";
import {useRouter} from 'next/router';


const CURRENT_USER = gql`
  query getUser {
    getUser {
      id
      name
      lastName
      email
    }
  }
`;
const Dropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const router = useRouter();
  const {loading, data} = useQuery(CURRENT_USER);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  
  if (loading) {
    return (
      <PushSpinner size={30} color="#686769" loading={loading} />
      )
    }
    
    if (!data.getUser) {      
        router.push('/login');
        return null;
    }
  
  const {name, lastName} = data.getUser;

  
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };


  const logout = () =>{
    localStorage.removeItem('token');
    router.push('/login');
  }

  return (
    <>
      <div className="w-full sm:w-1/2 lg:w-1/4 flex items-center justify-end">
        <Avatar size="50" round  name={`${name} ${lastName}`} className="shadow-lg border-none" />
        <div className="px-2">
          <div className="relative inline-flex align-middle w-full ">
            <button
              className={"uppercase text-sm xl:text-lg outline-none focus:outline-none"}
              style={{ transition: "all .15s ease" }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
             {`${name} ${lastName}`}
              <span className="mx-2">
                <i className="bx bxs-chevron-down"></i>
              </span>
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-white"
                }
                onClick={(e) => e.preventDefault()}
              >
                Action
              </a>
              <div className="h-0  border border-solid border-t-2 border-gray-300 opacity-25" />
              <a
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-white"
                }
                onClick={() => logout()}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
