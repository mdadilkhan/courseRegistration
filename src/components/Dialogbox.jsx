import React from "react";

const Dialogbox = ({ isOpen, onClose, title, children }) => {

  console.log(children);


  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-3xl shadow-lg w-full h-full max-h-screen p-6 sm:max-w-[90%] sm:h-auto sm:mx-auto">
        <div className="flex justify-start  items-center ">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-bold text-2xl"

          >
            &#10005;
          </button>
        </div>
        <div className="flex justify-center items-center w-full mb-10 ">
            <h3 className="font-semibold text-price text-center text-4xl">{title}</h3>
          </div>
        <div className="mb-4 flex justify-evenly items-center">{children}</div>
       
      </div>
    </div>
  );
};

export default Dialogbox;
