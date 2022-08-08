import React, { useState } from "react";

// svg
import linkedin from "../assets/svg/linkedin.svg";
import google from "../assets/svg/google.svg";
import figma from "../assets/svg/figma.svg";
import telegram from "../assets/svg/telegram.svg";
import twitch from "../assets/svg/twitch.svg";
import facebook from "../assets/svg/facebook.svg";
import pinterest from "../assets/svg/pinterest.svg";
import youtube from "../assets/svg/youtube.svg";
import twitter from "../assets/svg/twitter.svg";

function Sidebar({ textOpen, openWithBtn }) {
  const [selected, setSelected] = useState(null);

  const open = (val) => {
    console.log(val);
  };

  const data = [
    { id: 1, img: linkedin, name: "LinkedIn", desc: "lorem ipsum lorem ipsum" },
    { id: 2, img: google, name: "Google", desc: "lorem ipsum lorem ipsum" },
    { id: 3, img: figma, name: "Figma", desc: "lorem ipsum lorem ipsum" },
    { id: 4, img: telegram, name: "Telegram", desc: "lorem ipsum lorem ipsum" },
    { id: 5, img: twitch, name: "Twitch", desc: "lorem ipsum lorem ipsum" },
    { id: 6, img: youtube, name: "YouTube", desc: "lorem ipsum lorem ipsum" },
    { id: 7, img: twitter, name: "Twitter", desc: "lorem ipsum lorem ipsum" },
    { id: 8, img: facebook, name: "FaceBook", desc: "lorem ipsum lorem ipsum" },
    {
      id: 9,
      img: pinterest,
      name: "Pinterest",
      desc: "lorem ipsum lorem ipsum",
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {data.map((val) => (
        <div
          key={val?.id}
          onClick={() => setSelected(val)}
          className="flex items-start gap-12 w-[280px] text-white py-2"
        >
          <button onClick={() => openWithBtn(val)}>
            <img src={val?.img} alt="" />
          </button>
          <div className={textOpen ? "hidden" : ""}>
            <p className="text-black">{val?.name}</p>
            <p
              className={
                selected?.id === val.id
                  ? "ease-in-out duration-300 h-16"
                  : "ease-in-out duration-300 h-0 opacity-0 text-white"
              }
            >
              upwork
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
