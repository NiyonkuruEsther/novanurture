import React from "react";
import ImageTextCard from "../components/ImageTextCard";
import { FaHeadSideVirus } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex flex-col items-center justify-center pt-20">
        <p className="text-base font-semibold pb-5">About</p>
        <h1 className="text-5xl font-semibold w-1/2 text-center m-0">
          Why Should NovaNurture be your Best Choice
        </h1>

        <div className="flex pt-20 pb-28">
          <ImageTextCard title={"Freedom of speech"} imageStyles="w-32">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris.
          </ImageTextCard>
          <ImageTextCard
            title={"Daily refreshment"}
            icon={
              <FaHeadSideVirus
                size={100}
                color=""
                className="group-hover:text-white"
              />
            }
          >
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris.
          </ImageTextCard>
          <ImageTextCard
            title={"Tour others life"}
            icon={
              <FaHeadSideVirus
                size={100}
                color=""
                className="group-hover:text-white"
              />
            }
          >
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris.
          </ImageTextCard>
        </div>
      </div>
    </div>
  );
};

export default About;
