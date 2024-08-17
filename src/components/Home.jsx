import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dialogbox from "./Dialogbox";
import Card from "./Card";
import ped1 from "../assets/ped1.svg";
import ped2 from "../assets/ped2.svg";
import ped3 from "../assets/ped3.svg";
import ped4 from "../assets/ped4.svg";
import outcome from "../assets/Outcome.svg";
import CourseStructure from "../assets/CourseStructure.svg";

const Home = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("learning");
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const courses = [
    {
      step: "01",
      title: "Foundations of Counseling skills",
      description: [
        "Overview of Counseling: Definition, Scope, and Purpose",
        "Roles & Responsibilities of a Counselor",
        "Insights into the therapeutic alliance, case conceptualization",
      ],
    },
    {
      step: "02",
      title: "Understanding self & professional practice",
      description: [
        " Importance of Self-Reflection in Counseling",
        "Tools & Techniques for Reflective Practice",
        "⁠Receiving  & utilising Supervision",
        "⁠Managing Personal Reactions & Countertransference",
        "Ethical Decision-Making Models",
        "Confidentiality, Informed Consent, and Client Rights",
        "Dealing with Ethical Dilemmas",
        "Professional Boundaries and Dual Relationships",
        "Cultural Competence and Sensitivity in Counseling",
      ],
    },
    {
      step: "03",
      title: "Whisper catchers: tuning into the unspoken",
      description: [
        "Tech-based activities to Understand  Therapeutic Alliance",
        "Observation of Counseling Sessions via  Case Verbatims",
        "Handling silence in sessions",
      ],
    },
  ];
  // Function to handle button click
  const handleButtonClick = (section) => {
    setSelectedSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <div className="bg-background2 pb-10 rounded-b-[50px] relative ">
        <div className="w-full fixed top-0 z-50 ">
          <Header />
        </div>
        <div className="px-6 sm:px-12 md:px-12 w-full sm:w-[70%]  pt-[10rem] mb-10">
          <h1 className="text-primary text-[32px] sm:text-[64px] font-sans font-extrabold leading-[40px] sm:leading-[73px] tracking-tight">
            Mastering the Essentials: Foundations of Counseling Skills
          </h1>
          <div className="mt-8 max-w-screen-md ">
            <h6 className="text-tertiary font-sans text-[18px] font-normal leading-[25px]">
              This course provides postgraduate psychology students with a
              thorough introduction to essential counseling skills for effective
              practice. Combining theory and experiential learning, students
              will explore therapeutic relationships, case conceptualization,
              ethics, and self-reflection, with a strong focus on practical
              application through multimedia scenarios, role-plays, and
              reflective exercises.
            </h6>
          </div>
        </div>
        <div className="flex justify-evenly items-center absolute bottom-0 sm:h-[100px]  left-[200px] top-[90%] border bg-white rounded-lg border-border w-[70%]">
          <div className="border-r-[1px] border-[#614298] w-fit pr-4">
            <p className="font-sans text-[32px] font-extrabold text-primary leading-[43.65px] tracking-[0.005em] text-left">
              30 hours
            </p>
            <p className="text-primary">Intensive Offline Paid Training</p>
          </div>
          <div className="border-r-[1px] border-[#614298] w-fit pr-4">
            <p className="font-sans text-primary text-[32px] font-extrabold leading-[43.65px] tracking-[0.005em] text-left">
              3 Modules
            </p>
            <p className="text-primary">Intensive Offline Paid Training</p>
          </div>
          <div className="text-right">
            <p className="font-sans text-[32px] text-primary font-extrabold leading-[43.65px] tracking-[0.005em] text-left">
              For Post Graduate <br /> Students
            </p>
          </div>
        </div>
      </div>

      <div className="sticky top-[70px] flex justify-start items-center gap-6 mt-20 px-6 sm:px-12 md:px-12 bg-white  ">
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "learning"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("learning")}
        >
          Learning
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "skills"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("skills")}
        >
          Skills
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "outcomes"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("outcomes")}
        >
          Outcomes
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "course"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("course")}
        >
          Course Structure
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "pedagody"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("pedagody")}
        >
          Pedagogy
        </button>
      </div>

      <div className="px-6 sm:px-12 md:px-12">
        {/* <div id="learning" className="mt-20">
          Learning Content
        </div>
        <div id="skills" className="mt-20">
          Skills Content
        </div>
        <div id="outcomes" className="mt-20">
          Outcomes Content
        </div>
        <div id="course" className="mt-20">
          Course Structure Content
        </div>
        <div id="pedagody" className="mt-20">
          Pedagogy Content
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
          <div>vghvhvh</div>
        </div> */}
        <div className="bg-white text-gray-800 font-sans p-8">
          {/* What Will Students Learn Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              What will students learn:
            </h2>
            <p className="text-lg text-[#696984]">
              By the end of the course, students will be able to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-[#696984]">
              <li className="text-[#696984]">
                Establish and sustain effective therapeutic relationships with
                clients.
              </li>
              <li className="text-[#696984]">
                Accurately conceptualize cases and maintain detailed,
                confidential session documentation.
              </li>
              <li className="text-[#696984]">
                Apply self-reflection techniques to improve personal and
                professional development.
              </li>
              <li className="text-[#696984]">
                Utilize role-play and case scenarios to practice and refine
                their counseling skills in a controlled environment, preparing
                them for real-world counseling settings.
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Skills:</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Empathetic Listening",
                "Analytical Case Conceptualization",
                "Ethical Decision-Making",
                "Confidential Documentation",
                "Reflective Self-Awareness",
                "Effective Communication",
                "Relationship-Building",
                "Practical Problem-Solving",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#F5F5F5] text-[#7355A8] text-sm font-medium px-4 py-2 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Methods Section */}
          <div className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                img: ped1,
                title: "Interactive role-plays",
                description: "Simulating therapeutic environments",
              },
              {
                img: ped2,
                title: "Case Discussions",
                description: "Exploring diverse scenarios",
              },
              {
                img: ped3,
                title: "Project-based learning",
                description: "Hands-on practice with tools and book references",
              },
              {
                img: ped4,
                title: "Reflective activities",
                description: "For deeper understanding",
              },
            ].map((method) => (
              <div
                key={method.title}
                className="flex bg-gray-100 p-4 rounded-lg text-center"
              >
                <img src={method.img} alt="" />
                <div>
                  <h4 className="font-semibold text-lg">{method.title}</h4>
                  <p className="text-sm mt-2">{method.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Course Structure Section */}
          <div className="mb-8 w-full flex flex-row-reverse">
            <div className="w-1/2 p-4">
              <img src={CourseStructure} alt="" />
            </div>
            <div className="w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Course Structure
              </h2>
              <div className="space-y-6">
                {courses.map((course, index) => (
                  <div key={course.step} className="border-b pb-4  border-gray-300">
                    <div
                      className="flex items-center justify-between cursor-pointer mb-[18px]"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center">
                        <div className="text-[#101566] bg-secondary p-2 font-bold text-xl">
                          {course.step}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-3xl">
                            {course.title}
                          </h4>
                        </div>
                      </div>
                      <div className="mr-4">
                        {openSection === index ? (
                          <span className="text-disable">-</span>
                        ) : (
                          <span className="text-disable">+</span>
                        )}
                      </div>
                    </div>
                    {openSection === index && (
                      <ul className="ml-16 mt-2 text-sm text-gray-600 list-disc list-inside">
                        {course.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outcomes Section */}
          <div className="mb-8 flex w-full">
            <div className="w-1/2">
              <img src={outcome} alt="" />
            </div>
            <div className="w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Outcomes:
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Real-World Therapy Experience:Gain firsthand exposure to the
                  dynamics of a therapy space, learning to create a safe and
                  supportive environment for clients.
                </li>
                <li>
                  Client Interaction Mastery:Develop the ability to effectively
                  engage with clients, build trust, and navigate complex
                  emotional landscapes.
                </li>
                <li>
                  Advanced Case Handling:Learn to analyze and conceptualize
                  diverse case scenarios, enhancing decision-making and
                  problem-solving skills.
                </li>
                <li>
                  Role-Play Proficiency:Refine counseling techniques through
                  role-play exercises, simulating real-life situations to build
                  confidence and adaptability. .
                </li>
                <li>
                  Ethical and Professional Excellence:Internalize ethical
                  principles and best practices, ensuring high standards in
                  client care and professional conduct.
                </li>
                <li>
                  Enhanced Reflective Practice: Cultivate self-awareness and
                  reflective abilities, essential for continuous personal and
                  professional growth.
                </li>
                <li>
                  Competitive Edge: Acquire a comprehensive skill set that sets
                  you apart from peers, positioning you as a capable and
                  prepared mental health professional ready to
                  excel in the field.
                </li>
              </ul>
            </div>
          </div>

          {/* Enroll Now Button */}
          <div className="text-center">
            <button
              onClick={handleOpenDialog}
              className="bg-secondary text-primary px-8 py-4 rounded-lg uppercase text-lg font-semibold"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Dialogbox
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          title="Offline 30 hours internship fee structure"
        >
          <Card
            title={
              <span>
                Individual
                <br />
                fee
              </span>
            }
            price={4000}
            student={{ min: 1, max: 1 }}
          />
          <Card
            title={
              <span>
                {" "}
                Group of
                <br />
                3-5
              </span>
            }
            price={3600}
            discount={10}
            student={{ min: 3, max: 5 }}
          />
          <Card
            title={
              <span>
                {" "}
                Group of
                <br />
                6-9
              </span>
            }
            price={3200}
            discount={20}
            student={{ min: 6, max: 9 }}
          />
          <Card
            title={
              <span>
                {" "}
                Group of <br />
                10 or more{" "}
              </span>
            }
            price={3000}
            discount={30}
            student={{ min: 10, max: 100 }}
          />
        </Dialogbox>
      </div>
      <Footer />
    </>
  );
};

export default Home;
