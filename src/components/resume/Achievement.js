import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row">
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
          </p>
          <h2 className="text-4xl font-bold">Awards</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Tokyo Game Show 2018 Participation "
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title="First Place Hackathon Centro Fox 2016"
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title="Second Place Hack Puebla 2017"
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title="First Place Global Game Jam  2015"
            subTitle=""
            result=""
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
