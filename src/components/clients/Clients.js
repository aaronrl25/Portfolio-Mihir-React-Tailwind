import React from "react";
import Title from "../layouts/Title";
import {
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectEleven,
  projectTwelve,
  projectThirteen,
  ClientsOne,
  ClientsTwo,
  ClientsThree,
  ClientsFour,
} from "../../assets/index";
import ClientsCard from "./ClientsCard";

const Clients = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="clients" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 xl:gap-14">
        <ClientsCard
          title=" spark driver"
          src={ClientsTwo}
          githubLink=""
          websiteLink=""
        />
        <ClientsCard
          title="Gas vip "
          src={ClientsThree}
          githubLink=""
          websiteLink=""
        />
        <ClientsCard
          title="SAFEAT "
          src={ClientsFour}
          githubLink=""
          websiteLink=""
        />
      </div>
    </section>
  );
};

export default Clients;
