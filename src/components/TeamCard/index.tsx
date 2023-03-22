import React from "react";

import { Img, Button, Text } from "components";

type TeamCardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ profilePic: string; name: string; designation: string }>;

const TeamCard: React.FC<TeamCardProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
          <div className="h-[450px] relative w-[100%]">
            <Img
              src={props?.profilePic}
              className="h-[100%] md:h-[450px] m-[auto] object-cover w-[100%]"
              alt="rectangle1487"
            />
            <div className="absolute bottom-[5%] flex flex-row gap-[25px] inset-x-[0] items-center justify-center mx-[auto] self-stretch w-[auto]">
              <Button className="bg-yellow_100 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                <Img
                  src="images/img_linkedin.svg"
                  className="h-[24px]"
                  alt="linkedin"
                />
              </Button>
              <Button className="bg-gray_53 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                <Img
                  src="images/img_facebook.svg"
                  className="h-[24px]"
                  alt="facebook"
                />
              </Button>
              <Button className="bg-gray_53 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                <Img
                  src="images/img_twitter.svg"
                  className="h-[24px]"
                  alt="twitter"
                />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
            <Text
              className="font-raleway text-black_900 text-center tracking-[-0.50px] w-[auto]"
              as="h4"
              variant="h4"
            >
              {props?.name}
            </Text>
            <Text
              className="font-normal font-rubik not-italic text-center text-gray_500 tracking-[-0.50px] w-[auto]"
              variant="body1"
            >
              {props?.designation}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TeamCard.defaultProps = {
  profilePic: "images/img_rectangle1487_450x416.png",
  name: "Make Jhane",
  designation: "Finance Manager",
};

export default TeamCard;
