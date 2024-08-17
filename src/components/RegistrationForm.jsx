import React, { useState,useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import LEftArrow from "../assets/LeftArrow.svg";
import { useNavigate } from "react-router-dom";
import { paymentDetails } from "../store/slices/paymentSlice";
const RegistrationForm = () => {
    const navigate = useNavigate();
const dispatch=useDispatch()
    const { currentRegistrationDetails } = useSelector(
      (state) => state.registrationDetails
    );
    const { price,student } = currentRegistrationDetails;
  
    const [members, setMembers] = useState(
      Array(student.min).fill({ pronoun: "", name: "", email: "" })
    );
  
    const [formData, setFormData] = useState({
      members: members,
      year: "",
      coleg: "",
      number: "",
      teach: "",
      expectations: "",
      association: "",
      pack:student.min,
      price:price
    });
  
    useEffect(() => {
      setFormData((prevData) => ({
        ...prevData,
        members: members,
      }));
    }, [members]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Handle form submission
    const handleFormSubmit = (e) => {
      e.preventDefault();
      dispatch(paymentDetails(formData))
      navigate('/payment')
    };
  
    // Add a new member row
    const handleAddMember = () => {
      if (members.length < student.max) {
        setMembers([...members, { pronoun: "", name: "", email: "" }]);
      }
    };
  
    // Remove a member row
    const handleRemoveMember = (index) => {
      if (members.length > student.min) {
        const updatedMembers = members.filter((_, i) => i !== index);
        setMembers(updatedMembers);
      }
    };
  
    // Update a member's information
    const handleMemberChange = (index, field, value) => {
      const updatedMembers = members.map((member, i) =>
        i === index ? { ...member, [field]: value } : member
      );
      setMembers(updatedMembers);
    };
  
    console.log("pack",student.min,price);
  return (
    <>
      <div className="bg-background2 pb-10 rounded-b-[50px] relative ">
        <div className="w-full fixed top-0 z-50 ">
          <Header />
        </div>
      </div>
      <div className="flex flex-col justify-start px-44 pt-16 mt-8 bg-background2 w-full h-full pb-16">
        <div className="flex flex-col gap-4 border bg-white rounded-xl p-6">
          <div className="flex justify-start items-center gap-6">
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            >
              <img src={LEftArrow} alt="" />
            </div>
            <div className="font-sans font-bold text-[40px]">
              <p>Register Form</p>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className={`capitalize py-2.5 px-5 rounded-lg ${
                members.length >= student.max ? "bg-disable" : "bg-[#614298]"
              } text-white w-[297px]`}
              onClick={handleAddMember}
              disabled={members.length >= student.max}
            >
              Add Member
            </button>
          </div>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-4">
              {members.map((member, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <h6 className="text-[#000000] text-[16px] not-italic font-semibold leading-normal tracking-[0.12px]">
                        Pronoun(s)*
                      </h6>
                      <select
                        name="pronoun"
                        className="w-[100px] h-[48px] p-2 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                        value={member.pronoun}
                        onChange={(e) =>
                          handleMemberChange(index, "pronoun", e.target.value)
                        }
                        required
                      >
                        <option value="">Select</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                      </select>
                    </div>
                    <div className="flex flex-col w-[40%]">
                      <h6 className="text-[#000000] text-[20px] not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                        Name {index + 1}*
                      </h6>
                      <input
                        type="text"
                        className="w-full h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                        placeholder="Name"
                        value={member.name}
                        onChange={(e) =>
                          handleMemberChange(index, "name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="flex flex-col w-[40%]">
                      <h6 className="text-[#000000] text-[20px] not-italic font-semibold leading-normal tracking-[0.12px]">
                        Email*
                      </h6>
                      <input
                        type="email"
                        className="w-full h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                        placeholder="Email"
                        value={member.email}
                        onChange={(e) =>
                          handleMemberChange(index, "email", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="pt-6 text-2xl">
                      {members.length > student.min && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(index)}
                          className="text-red-500"
                        >
                          x
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  Course/Class & Year*
                </h6>
                <input
                  name="year"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="2000"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  University/School or organization you are associated with*
                </h6>
                <input
                  name="coleg"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="Colloge Name"
                  value={formData.coleg}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  Contact Number (WhatsApp enabled)*
                </h6>
                <input
                  name="number"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="0000000000"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  What according to you is the key thing which your module
                  should teach you?
                </h6>
                <input
                  name="teach"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="Answer"
                  value={formData.teach}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  What are your expectations from the internship program with
                  Daffodils?
                </h6>
                <input
                  name="expectations"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="Answer"
                  value={formData.expectations}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  Have you ever interned or associated with Daffodils before?
                  Describe the association and your experience.
                </h6>
                <input
                  name="association"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="Answer"
                  value={formData.association}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="capitalize py-2.5 px-5 rounded-lg bg-[#614298] text-white w-[250px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
