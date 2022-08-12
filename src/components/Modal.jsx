import React from "react";

const Modal = ({ data }) => {
  return (
    <div className="w-48 shadow bg-white rounded">
      {data.map((item) => (
        <button className="w-full py-2 shadow border-b select-none">
          {item?.title ? item?.title : item}
        </button>
      ))}
    </div>
  );
};

export default Modal;
