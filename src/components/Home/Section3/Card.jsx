import React from "react";
import "./CardStyle.css";
const list = [
  {
    title: "Graphic Design",
    description:
      "Desires to provide and enhance a creative marketing content within Egypt and worldwide.",
    image1: "Image.png",
    image2: "Rectangle.png",
  },
  {
    title: "Branding",
    description:
      "Desires to provide and enhance a creative marketing content within Egypt and worldwide.",
      image1: "Image2.png",
    image2: "Rectangle2.png",
  },
  {
    title:"Marketing",
    description:
      "Desires to provide and enhance a creative marketing content within Egypt and worldwide.",
      image1: "Image3.png",
    image2: "Rectangle3.png",
  }
]
const Card = () => {
  return (
    <div className="flex gap-10 relative">
     {list.map((item,i)=>(
      <div key={i}>
          <div style={{backgroundImage:`url(${item.image1})`}}  className="section1 "/>
          <div style={{backgroundImage:`url(${item.image2})`}} className="section2 p-7">
            <h1 className="text-[25px]">{item.title}</h1>
            <div className=" -translate-x-3 ">
              <img className="w-full p-0 m-0" src="./Line.png" alt="" />
            </div>
            <h2 className="text-[#C9C9C9]">
              {item.description}
            </h2>
          <div className="flex justify-center">
                <button className="button self-center shadow-lg text-[20px] shadow-[#383f5d80]">
                   Join Us
                </button>
          </div>
          </div>
      </div>
        ))}
    </div>
  );
};

export default Card;
