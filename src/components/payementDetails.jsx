import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import sage from "../assets/sage.svg";
import visa from "../assets/visa.svg";
import RazorPay from "./Razorpay";
const payementDetails = () => {
  const navigate = useNavigate();

  const { currentPayementDetails } = useSelector(
    (state) => state.paymentDetails
  );

  console.log(currentPayementDetails);
 
  return (
    <>
      <div className="bg-background2 pb-10 rounded-b-[50px] relative ">
        <div className="w-full fixed top-0 z-50 ">
          <Header />
        </div>
      </div>
      <div className="h-screen bg-background2">
        <div className="flex justify-evenly p-16  bg-background2 w-full gap-4 ">
          <div className="w-[35%]  p-8 flex flex-col justify-around">
            <p className="font-sans font-bold text-4xl text-[#565857]">
              Check Out
            </p>
            <img className="h-[50px] w-[250px]" src={visa} alt="" />
            <p>
              By continuing to payment, I agree to the{" "}
              <a
                className="text-[#0056D2] underline"
                target="_blank"
                href="https://sageturtle.in/privacyPolicyPage"
              >
                 Refund Policy,
              </a>{" "}
              and{" "}
              <a
                className="text-[#0056D2] underline"
                target="_blank"
                href="https://sageturtle.in/privacyPolicyPage"
              >
                Privacy Policy.
              </a>
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="capitalize py-2.5 px-5 rounded-lg w-[150px] bg-white border border-border text-disable1"
              >
                Back
              </button>
             
              <RazorPay currentPayementDetails={currentPayementDetails}/>
            </div>
          </div>
          <div className="w-[40%] p-8 bg-white border border-disable rounded-3xl flex flex-col gap-10">
            <div className="flex gap-8">
              <div>
                <img src={sage} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-sans text-2xl text-[#06030D]">
                  Sage Tutle Therapist Training
                  <br />
                  Professional Certificate{" "}
                </p>
                <p className="font-sans text-base">By Enso Lab</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="font-sans text-[20px] font-semibold">Group of {currentPayementDetails.members.length}</p>
                <p>₹{currentPayementDetails.price}/- (x{currentPayementDetails.members.length})</p>
              </div>
              <div className="flex justify-between">
                <p className="font-sans text-[20px] font-semibold">Total</p>
                <p >₹{currentPayementDetails.price*currentPayementDetails.members.length}/-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default payementDetails;
