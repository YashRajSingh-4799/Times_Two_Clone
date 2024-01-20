import { useState } from "react";
import { motion } from "framer-motion";

import logo from "../assets/menu.png";
import popupIcon from "../assets/Pinecast_Thumbnail.webp";
import introVideo from "../assets/X2_Baloons.mp4";

const projectsData = [
    { id: 1, title: "Project 1", description: "Description 1" },
    { id: 2, title: "Project 2", description: "Description 2" },
    { id: 3, title: "Project 3", description: "Description 3" },
    { id: 4, title: "Project 4", description: "Description 4" },
    { id: 5, title: "Project 5", description: "Description 5" },
    { id: 6, title: "Project 6", description: "Description 6" }


];

const BottomBar = () => {
  const [isMainModalOpen, setMainModalOpen] = useState(false);
  const [isProjectListModal, setProjectListModal] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMainModal = () => {
    setMainModalOpen(!isMainModalOpen);
    setModalOpen(!isModalOpen);
  };

  const toggleProjectListModal = () => {
    setProjectListModal(!isProjectListModal);
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-center items-center bottom-bar">
      {/* Enlarged Bottom Bar */}
      <motion.div
        initial={{ height: 64 }}
        animate={{ height: isModalOpen ? "98vh" : 98 }}
        transition={{ duration: 0.5 }}
        className={`${
          isModalOpen
            ? "rounded-t-3xl bottom-0 bottom-bar"
            : "rounded-3xl bottom-4  p-2 sm:bottom-6 opacity-80"
        } fixed w-full max-w-screen-md bg-black-800 text-white flex items-center justify-between sm:h-24 rounded-t-3xl mx-4 bottom-bar bg-black `}
      >
        {/* Content (Title and Popup Icon) */}
        <div
          onClick={toggleMainModal}
          className={`flex items-center w-[80%] ${
            isModalOpen ? "hidden" : "block"
          }`}
        >
          <img
            src={popupIcon}
            alt="Popup Icon"
            className="h-24 w-24 rounded-3xl p-2 cursor-pointer"
          />
          <h2 className="mr-4 cursor-pointer font-semibold">Times Two</h2>
          <p className="text-gray-400">Project</p>
        </div>

        {/* Logo */}
        <div
          onClick={toggleProjectListModal}
          className={`W-36  Z-10 ${isModalOpen ? "hidden" : "block"}`}
        >
          <img src={logo} alt="Logo" className="h-8 w-8" />
        </div>

        {/* Project Details Content */}
        {isMainModalOpen && (
          <div className="absolute bottom-0 inset-0 flex flex-col ">
            {/* Fixed Navbar */}
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="overflow-y-auto flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="cursor-pointer z-10 absolute top-4 right-4 text-2xl"
                onClick={toggleMainModal}
              >
                &times;
              </span>

              {/* Project Details Content */}
              <div className="top-[-10]">
                {/* Navbar */}
                <nav className="bottom-bar p-4 rounded-t-2xl fixed h-24 w-full max-w-screen-md">
                  <div className="container mx-auto w-full">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-bold text-xl p-4">
                        Times Two
                      </div>
                    </div>
                  </div>
                </nav>

                {/* Project Details */}
                <div className="py-24">
                  <video
                    autoPlay
                    loop
                    muted
                    width="100%"
                    src={introVideo}
                    type="video/mp4"
                  />
                </div>
                <div className="flex w-full">
                  <div className="px-6 w-2/6">
                    {/* First column data */}
                    <div className="mb-24">
                      <h2 className="border-sm border-2 px-4 rounded-3xl w-fit border-gray-400">
                        ABOUT
                      </h2>
                    </div>

                    <div className="font-semibold text-white my-8">
                      <h3>Location</h3>
                      <p className="text-gray-500">New York</p>
                      <p className="text-gray-500">San Fransisco</p>
                    </div>

                    <div className="font-semibold my-8">
                      <h3>Service</h3>
                      <p className="text-gray-500">Branding</p>
                      <p className="text-gray-500">Product Designing</p>
                      <p className="text-gray-500">Web Development</p>
                    </div>

                    <div className="font-semibold my-4">
                      <h3>Initiatives</h3>
                      <p className="text-gray-500">Partnerships</p>
                      <p className="text-gray-500">Ventures</p>
                    </div>
                    {/* Add more data as needed */}
                  </div>

                  {/* Project Details */}
                  <div className="w-4/6 pr-8">
                    <h1 className="text-3xl font-semibold">Times Two</h1>
                    <h2 className="text-3xl mb-12 text-gray-400">
                      Takes two to tango
                    </h2>

                    <p className="text-gray-500">
                      We are Times Two, a collaborative design practice —
                      shaping brands through digital products and web
                      experiences, with a focus on aesthetics and function.{" "}
                      <br />
                      <br />
                      For us, it all starts with the power of a strong idea. Our
                      approach is rooted in translating narratives into
                      unconventional and flexible outputs built with scale and
                      clarity. <br /> <br />
                      The foundation of our practice is built on collaboration.
                      We believe the best solutions are surfaced when we are an
                      extension of your team; living by our motto, good times
                      are better times two.
                      <br /> <br />
                      <span className="text-white">
                        Our initiatives span between Partnerships & Ventures
                      </span>
                      <br />
                      <br />
                      We partner with ambitious brands and people that seek an
                      experience grounded in sophisticated and scalable design,
                      accelerating their growth, and creating unforgettable
                      experiences. We seek partners who are equally obsessed
                      with the final product and who believe in collaboration at
                      their core. <br />
                      <br />
                      We venture into new self-initiated opportunities, building
                      experiences that aim to improve peoples lives in new ways.
                      We rapidly build, test and learn from our experiments —
                      scaling them to their full potential when they show
                      promise. <br />
                      <br />
                      Founded by Keene Niemack and Marco Coppeto, the partners
                      bring 20+ years of combined experience working with brave
                      early-stage startups to some of the most admired brands in
                      the world including: <br />
                      <br />
                      Audi, Discovery, ESPN, Facebook, Fanatics, Fitbit, Ford,
                      Google, GoPro, Instagram, Meta, NBC, Netflix, Nike,
                      RedBull, Reebok, Reuters, Twitter, Uber, Venmo, Vevo,
                      Volkswagen, WeWork
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Project List Content */}

        {isProjectListModal && (
          <div className="absolute bottom-0 inset-0 flex flex-col ">
            {/* Fixed Navbar */}
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="overflow-y-auto flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="cursor-pointer z-10 absolute top-4 right-4 text-2xl"
                onClick={toggleProjectListModal}
              >
                &times;
              </span>

              {/* Project Details Content */}
              <div className="top-[-10]">
                {/* Navbar */}
                <nav className="bottom-bar p-4 rounded-t-2xl fixed h-24 w-full max-w-screen-md">
                  <div className="container mx-auto w-full">
                      <div className="flex text-white justify-center items-center w-full font-bold text-3xl p-4">
                        TIMES TWO
                    
                    </div>
                  </div>
                </nav>

                {/* Project Details */}
                <div className="py-12"></div>
                <div className="flex w-full">
                  {/*Array List of Projects */}

                  <div>
                    {projectsData.map((project) => (
                      <div
                        key={project.id}
                        className="flex p-2 justify-center items-center"
                      >
                        <img
                          className="h-20 rounded-2xl mx-2 w-20"
                          src={popupIcon}
                          alt=""
                        />
                        <h2 className="px-6 text-xl">{project.title}</h2>
                        <p className="px-12 text-lg text-gray-500">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BottomBar;
