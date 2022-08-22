import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ data }) => {
  return (
    <div className="w-48 shadow bg-white rounded">
      {data.map((item) => (
        <Link to={item.title}>
          <button className="w-full py-2 shadow border-b select-none">
            {item?.title ? item?.title : item}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Modal;
