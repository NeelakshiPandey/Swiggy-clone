import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";

function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu=()=>{
    setToggle(false);
  }

  const links = [
    {
      icon:<IoIosSearch/>,
      name:"Search"
    },
    {
      icon:<CiDiscount1/>,
      name:"Offers",
      sup:"New"
    },
    {
      icon:<IoIosHelpCircle/>,
      name:"Help"
    },
    {
      icon:<FaRegUser/>,
      name:"Sign In"
    },
    {
      icon:<FaShoppingCart/>,
      name:"Cart"
    }
  ]
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle? "visible" : "hidden",
        }}
      >
        <div
        onClick={(e)=>{
          e.stopPropagation();
        }}
         className='w-[500px] bg-white h-full absolute duration-[400ms]'style={{
          left:toggle?"0%":"-100%"
        }}></div>
      </div>

      <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img className="w-12" src="images/logo.png" alt="" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              Lucknow
            </span>
            Uttar Pradesh, India{" "}
            <RxCaretDown
              fontSize={25}
              className="inline text-[#fc8019] cursor-pointer"
              onClick={showSideMenu}
            />
          </div>
          <nav className="hidden md:flex list-none ml-auto text-[18px] font-semibold gap-8">
           {
           links.map((link,index)=>{
           return(
           <li key={index} className='cursor-pointer flex items-center hover:text-[#fc8019] gap-2'>
           {link.icon}
           {link.name}
           <sup>{link.sup}</sup>
            </li>)
           })
           }
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
