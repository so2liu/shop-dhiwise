import React from "react";

import HeaderCard from "components/HeaderCard";
import { Text } from "components";
import TeamCard from "components/TeamCard";
import SubscriptionCard from "components/SubscriptionCard";
import FooterCard from "components/FooterCard";

const TeamPage: React.FC = () => {
  const teamCardPropList = [
    {
      name: "Make Jhane",
      profilePic: "images/img_rectangle1487_450x416.png",
      designation: "Finance Manager",
    },
    {
      name: "Jinny Owen",
      profilePic: "images/img_rectangle1487.png",
      designation: "Marketing Manager",
    },
    {
      name: "Mia Lobey",
      profilePic: "images/img_rectangle1487_450X417.png",
      designation: "Accountant",
    },
    {
      name: "Make Jhane",
      profilePic: "images/img_rectangle1487_1.png",
      designation: "Finance Manager",
    },
    {
      name: "Jinny Owen",
      profilePic: "images/img_rectangle1487_2.png",
      designation: "Marketing Manager",
    },
    {
      name: "Mia Lobey",
      profilePic: "images/img_rectangle1487_3.png",
      designation: "Accountant",
    },
  ];

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-rubik gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <HeaderCard className="bg-white_A700 flex items-center justify-center md:px-[20px] px-[75px] py-[35px] w-[100%]" />
        <div className="flex items-start justify-center sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
              <Text
                className="font-bold font-raleway text-black_900 text-center tracking-[-0.50px] w-[auto]"
                as="h2"
                variant="h2"
              >
                Meet Our Team
              </Text>
              <Text
                className="font-normal font-rubik leading-[35.00px] not-italic text-center text-gray_500 tracking-[-0.50px]"
                variant="body1"
              >
                <>
                  We write various things related to furniture, from tips and
                  what things <br />I need to pay attention to when choosing
                  furniture
                </>
              </Text>
            </div>
            <div className="gap-[56px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center min-h-[auto] w-[100%]">
              {teamCardPropList.map((props, index) => (
                <React.Fragment key={`TeamCard${index}`}>
                  <TeamCard
                    className="flex flex-1 flex-col items-start justify-start w-[100%]"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <SubscriptionCard className="bg-gradient  flex flex-col items-start justify-start max-w-[1290px] mx-[auto] pl-[59px] md:px-[20px] py-[46px] w-[100%]" />
        </div>
        <FooterCard className="bg-black_900 flex font-raleway items-center justify-center md:px-[20px] px-[75px] py-[50px] w-[100%]" />
      </div>
    </>
  );
};

export default TeamPage;
