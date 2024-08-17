import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';




const RazorPay = ({currentPayementDetails}) => {

  const navigate = useNavigate(); // Hook for navigation


  // using handler method
  const checkoutHandler = async () => {
    try {

      const  {data}  = await axios.post(
        "https://4cqpxyld9l.execute-api.ap-south-1.amazonaws.com/dev/createOrder", {
        data: currentPayementDetails
      }
      );
      console.log("data>>", data);
      const options = {
        key: "rzp_live_IIwhdZvx1c4BGz",
        amount: data.data.amount,
        currency: "INR",
        name: "Sage Turtle",
        description: "Test Transaction",
        payment_capture: true,
        image:
          "https://firebasestorage.googleapis.com/v0/b/sage-turtle-website.appspot.com/o/logo.jpeg?alt=media&token=97d30b20-63fb-461e-8063-ca619ffaa7e3",
        order_id: data.data.id,
        handler: function (response) {
          console.log("res>>>", response);

          let paymentData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            currentPayementDetails
          }
          axios
            .post("https://4cqpxyld9l.execute-api.ap-south-1.amazonaws.com/dev/verifyOrder", paymentData)
            .then((verificationResponse) => {
              if (verificationResponse.status === 200) {
                console.log("Payment verification Success");
                toast.success("Payment Verification Success");
                setTimeout(() => {
                  navigate('/');
                }, 1000);
              } else {
                toast.error("Payment Verification Failed");
              }
            })
            .catch((error) => {
              console.error("Error during payment verification:", error);
              toast.error("Error during payment verification");
            });
        },
        prefill: {
          name: "Sumeet",
          email: "sumeet.singh@ensolab.in",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#614298",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <button
                className="capitalize py-2.5 px-5 rounded-lg w-[250px] bg-[#614298] text-white"
         
        //   disabled={!agree}
          onClick={checkoutHandler}
        >
          <span className="btn1">Continue To Payment </span>
        </button>
      </div>
    </div>
  )
}

export default RazorPay