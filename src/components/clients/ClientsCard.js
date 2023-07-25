import React from "react";

const ClientsCard = ({ title, des, src, githubLink, websiteLink }) => {
  return (
    <div className="w-full h-[80%] overflow-hidden rounded-lg">
      <img
        className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        src={src}
        alt="src"
      />
    </div>
  );
};

export default ClientsCard;
