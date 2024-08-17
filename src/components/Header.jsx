import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Dialogbox from "./Dialogbox";
import Card from "./Card";
import { useLocation, useNavigate } from "react-router-dom";


const Header = () => {
    const navigate=useNavigate()
  const [isDialogOpen, setDialogOpen] = useState(false);
  const {pathname}=useLocation();

  const bgColor = pathname !== '/registration' && pathname !== '/payment' ? "bg-background2" : "bg-white";

  console.log(pathname);
  const handleOpenDialog = () => {
    setDialogOpen(true);
    
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <div className={`flex justify-between items-center p-6 sm:px-12 py-3 shadow-md ${bgColor} `}>
        <div className="w-[120px] sm:w-[200px] md:[320px] cursor-pointer"
          onClick={()=>{
            navigate('/')
          }}
        >
          <img src={Logo} alt="" />
        </div>
        {
  pathname !== '/registration' && pathname !== '/payment' && (
    <div className="sm:w-[96px] md:w-[140px]">
      <button
        className="bg-secondary p-4 rounded-lg uppercase text-primary font-sans text-[12px] sm:text-[16px]"
        onClick={handleOpenDialog}
      >
        Enroll Now
      </button>
    </div>
  )
}
  
      </div>
      <div className="w-full">
       <Dialogbox
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        title="Offline 30 hours internship fee structure"
  
      >
        <Card title={<span>Individual<br />fee</span>} price={4000} student={{min:1,max:1}}/>
        <Card title={<span> Group of<br />3-5</span>} price={3600} discount={10} student={{min:3,max:5}}/>
        <Card title={<span> Group of<br />6-9</span>} price={3200} discount={20} student={{min:6,max:9}}/>
        <Card title={<span> Group of <br />10 or more </span>} price={3000} discount={30} student={{min:10,max:100}}/>
      </Dialogbox>

      </div>
    
    </>
  );
};

export default Header;
