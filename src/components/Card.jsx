import React from "react";

const Card = (props) => {
  return (
    <div>
      <img
        className="w-[332px] h-[187px] object-cover"
        src={props.img}
        alt=""
      />
      <div className="flex items-center mt-3 gap-3">
        <img
          className="w-9 h-9 object-cover rounded-full"
          src={props.avatar}
          alt=""
        />
        <p>{props.title}</p>
      </div>
      <div className="flex text-[#333] text-xs">
        <p className="ml-12 text-[#333] text-xs">{props.name}</p>
        <p className="ml-2">{props.date}</p>
      </div>
    </div>
  );
};

export default Card;
