import React from "react";
import Title from "../layouts/Title";
import {
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectEight,
  projectEleven,
  projectTen,
  projectTwelve,
  projectThirteen,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Check these out on my github" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=" Receiving 1.0 "
          des=" Take ownership and lead the maintenance and development of Receiving 1.0, an application designed to assist with Walmart inventory management.
          Responsibilities:
          Utilize Ionic framework to create interactive UI components, leveraging its capabilities for seamless user experience and responsiveness.
          Implement the One-way data flow architecture pattern, ensuring data flows in a single direction, simplifying debugging and maintenance.
          Utilize TSX (TypeScript + JSX) to enhance code quality, improve productivity, and facilitate code reusability.
          Leverage Angular concepts and integrate them with Ionic to build robust and scalable applications.
          "
          src={projectTwelve}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="Receiving 2.0"
          des="Played a key role in the development team for Receiving 2.0, an application aimed at assisting Walmart with inventory management.
          Responsibilities:
          Implemented Agile SCRUM methodology, participating in Sprint meetings and planning sessions to refine the product and meet project deadlines.
          Utilized React Native framework and TypeScript modules to create interactive UI components, leveraging concepts such as One-way data flow, Virtual DOM, and TSX.
          Collaborated closely with stakeholders, conducted thorough testing, and maintained proper documentation to ensure a stable and performant application"
          src={projectTwelve}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title=" FAAS "
          des="Lead a team who designs, develops, tests . Using  React native building the Store Assist  fulfillment-as-a-service (FaaS)
          Responsibilities:
          Use all the obtained and created information to create useful interface guide by  figma ,cloudfluence and github .
          Create a mobile version for some of the company most used applications using Javascript Frameworks react ntaive .
          Collaborated with internal teams, including graphic design and QA testers to develop and launch a new application in just 3 months.
          Wrote reusable unit test documents to ensure quality control and detect bugs.
          "
          src={projectEleven}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title=" spark driver"
          des="be part of the develop  of  Spark Driver™ an  application that helps you to start earning money on your own schedule by delivering groceries
          With the Spark Driver App, you will help bring smiles to many busy families as you monetize your spare  time and empower yourself to be your own boss. 
         Responsibilities:
         Use all the obtained and created information to create useful interface guide by  figma ,cloudfluence and github .
         Create a mobile version for some of the company most used applications using Javascript Frameworks Electrode Native is a mobile platform that streamlines the integration of React Native components into existing mobile applications.  .
         Collaborated with internal teams, including graphic design and QA testers to develop 
         Wrote reusable unit test documents to ensure quality control and detect bugs.
         "
          src={projectTen}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="Gas vip "
          des="Designed and developed both Android and ios versions using APIs like Google Cloud Messaging and Facebook login; The backend was implemented as a RESTful API based on node.js and firebase.
          Responsibilities:
          This project was developed using the Agile SCRUM methodology. With Sprint meetings and planning sessions for refinement of the product to meet proposed deadline and delivery.
          Create a new firebase for deliver gasoline to your house Stored Procedures, Views and Functions to manage all the needed information for the web solution, and 2 apps
          Use an SMS service to send update status messages about the service to the customer.
          Environment: expo , react native,react JS"
          src={projectEight}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="SAFEAT "
          des="This Contactless Restaurant Menu Maker within 5 minutes. With the help of this digital menu, customers can scan the QR code and check the menu
          Responsibilities:
          This project was developed using the Agile SCRUM methodology. With Sprint meetings and planning sessions for refinement of the product to meet proposed deadline and delivery.
          Mock up the first look of the mobile views to start getting feedback .
          Create a new SQL Server Laravel Stored Procedures, Views and Functions in react to manage all the needed information for the web solution, all this following the web pack JS.
          Environment: Laravel (PHP),React
          "
          src={projectSix}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="Hmedic"
          des=" This is a eather website created using wordpress, ."
          src={projectTwo}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title=" ubj"
          des="This is a eather website created using React ."
          src={projectFive}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title=" BNI"
          des="This is a eather website created using  WORDPREES."
          src={projectThirteen}
          githubLink="https://bnipuebla.com/"
          websiteLink="https://bnipuebla.com/"
        />{" "}
        <ProjectsCard
          title="camafra "
          des="This is a eather website created using React ."
          src={projectFour}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="central house "
          des="This is a eather website created using React ."
          src={projectThree}
          githubLink=""
          websiteLink=""
        />
      </div>
    </section>
  );
};

export default Projects;
