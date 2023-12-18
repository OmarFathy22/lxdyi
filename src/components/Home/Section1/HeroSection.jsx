import React from "react";
import "./HeroSection.css";
const list = [
  {
    id: 1,
    title: "how to get linear gradient color from figma as developer",
    img: "./Group7.png",
  },
  {
    id: 2,
    title: "Custom solutions designed to meet your needs",
    img: "./Group8.png",
  },
  {
    id: 3,
    title: "Bring together people, process, and technology",
    img: "./Group9.png",
  },
];
const HeroSection = () => {
  return (
    <div className="pt-[25vh] flex flex-col items-center justify-center ">
      <div>
        <h1 className="flicker text-center">Flicker</h1>
        <h1 className="flicker !text-[30px]">
          Your Guide in the Creative Marketing Agency
        </h1>
      </div>
      <ul className="flex gap-[80px] mt-10">
        {list.map((item) => {
          const { id, title, img } = item;
          return (
            <div key={id}>
              <div className="flex flex-col items-center">
                <div className="mb-8">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="box">
                <h1 className="text-center">
                  {title}
                </h1>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default HeroSection;
