import React from "react";

import { Text, Button, Img } from "components";
import { useNavigate } from "react-router-dom";

type InteriorCardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const InteriorCard: React.FC<InteriorCardProps> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[30px] items-start justify-start sm:w-[100%] w-[525px]">
          <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
            <Text
              className="font-normal font-rubik not-italic text-bluegray_900 text-left tracking-[-0.50px] w-[auto]"
              as="h5"
              variant="h5"
            >
              Interior Modern
            </Text>
            <Text
              className="font-bold font-raleway leading-[60.00px] md:max-w-[100%] max-w-[525px] text-black_900 text-left tracking-[-0.50px]"
              as="h2"
              variant="h2"
            >
              Arrange your home in such a way with our modern interiors
            </Text>
          </div>
          <Button
            className="common-pointer border-[2px] border-bluegray_900 border-solid cursor-pointer font-medium font-rubik leading-[normal] min-w-[218px] py-[18px] text-[20px] text-bluegray_900 text-center tracking-[-0.50px] w-[auto]"
            onClick={() => navigate("/shopdetaildescription")}
          >
            Shop Now
          </Button>
        </div>
        <Img
          src="images/img_insideweather.png"
          className="h-[535px] md:h-[auto] object-cover sm:w-[100%] w-[535px]"
          alt="insideweather"
        />
      </div>
    </>
  );
};

InteriorCard.defaultProps = {};

export default InteriorCard;
