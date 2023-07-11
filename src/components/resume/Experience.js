import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row">
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 20XX</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Walmart (bhuvi it solutions) Nov2022 to present"
            result="USA"
            des="Worked alongside  with other developers to implement  front end  in React Native and ionic , built out a unit testing infrastructure for 1 mobile  applications ,Provided project updates to leadership team of 4 devs and offered recommendations for design
            Diagnosed issues causing slow speeds in applications, and documented the process"
          />
          <ResumeCard
            title="Full stack Engineer"
            subTitle="Walmart  (bhuvi it solutions) Nov2021 to oct2022"
            result="USA"
            des="Worked alongside  with other developers to implement  front end  in React Native , built out a unit testing infrastructure for 3 different mobile  applications ,Provided project updates to leadership team of 6 , and offered recommendations for design
            Diagnosed issues causing slow speeds in applications, and documented the process"
          />
          <ResumeCard
            title="Lead  Software Engineer"
            subTitle="Eurybia Studio"
            result="Mexico"
            des="Helped clients designed   native app and web applications by using React Native alongside React native ,firebase,laravel php
            Heavily used npm famous JavaScript modules and learned about many Web and Mobile Development good practices; Use React Native to develop a dynamic and secure website that provides the users a broad diversity of services. Using React Native for creating interactive UI using One-way data flow, Virtual DOM, JSX, React Native concepts."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4"></div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Roambee  Jun2017 to Oct2018"
            result="Mexico"
            des="Designed and developed ios versions using APIs like Google Cloud Messaging and Facebook login; The backend was implemented as a RESTful API based on node.js and firebase. "
          />
          <ResumeCard
            title="Lonewolf"
            subTitle="Aug2015 to Jun2017"
            result="Mexico"
            des="Developed prototypes of multi-platform games using unity engine.
            Develop each screen of the Site Admin Tool with React Nativefunctional components and hooks
            Developed user interface by using the React JS, Flux for SPA development.
            "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
