import logo from "../assets/Logo.svg";
import React,{useState} from "react";
import location from "../assets/Location.png";
import calling from "../assets/Calling.png";
import message from "../assets/Message.png";
import axios from 'axios';
import { toast } from 'react-hot-toast';


const Footer = () => {
  const [email, setEmail] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      if (!email) {
        toast.error("Please enter an email address.");
        return;
      }

      const response = await axios.post('https://4cqpxyld9l.execute-api.ap-south-1.amazonaws.com/dev/getNotification', { email });
      
      if (response.status === 200) {
        toast.success("Email Saved successfully!");
        setEmail(''); // Clear the input field after successful submission
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error during email submission:", error);
      toast.error("Error during email submission.");
    }
  };
  return (
    <div className="h-[300px] bg-[#F4EDFF] p-32 flex justify-between">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex gap-4">
            <img src={location} alt="" />
            <p>Address:</p>
          </div>

          <p>C-47, Shivalik, Malviya Nagar,New Delhi, Delhi -110017</p>
        </div>

        <div className="flex gap-4">
          <img src={calling} alt="" />
          <p>Tel :+9229341037</p>
        </div>
        <div className="flex gap-4">
          <img src={message} alt="" />
          <p>Email: info@onlearn.com</p>
        </div>
      </div>
      <div className="flex flex-col items-center relative">
        <h6 className="text-[#000000] text-[15px] font-sans   leading-normal tracking-[0.12px]s">
          Stay up to date with the latest courses
        </h6>
        <input
          name="year"
          type="email"
          className="w-[300px]  h-[70px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-2xl outline-none"
          placeholder="email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <div className="absolute top-[30px] left-[190px]">
           <button  onClick={handleSubmit} className="bg-primary text-white  rounded-3xl w-[100px] h-[40px]">Send</button>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
