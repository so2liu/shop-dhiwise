import React from "react";

import { Text, Input, Button, Img } from "components";

type SubscriptionCardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const SubscriptionCard: React.FC<SubscriptionCardProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[44px] items-center justify-start ml-[auto] w-[100%]">
          <div className="flex flex-1 flex-col gap-[40px] items-start justify-start w-[100%]">
            <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
              <Text
                className="font-bold font-raleway leading-[60.00px] md:max-w-[100%] max-w-[593px] text-gray_53 text-left tracking-[-0.50px]"
                as="h2"
                variant="h2"
              >
                Subscribe now and get 10% off all items
              </Text>
              <Text
                className="font-normal font-rubik leading-[35.00px] md:max-w-[100%] max-w-[593px] not-italic text-gray_53 text-left tracking-[-0.50px]"
                variant="body2"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text.
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[1px] items-start justify-start w-[100%]">
              <Input
                wrapClassName="bg-white_A700 flex-1 sm:flex-1 px-[20px] py-[24px] sm:w-[100%] w-[74%]"
                className="font-normal font-rubik leading-[normal] not-italic p-[0] placeholder:text-gray_500 text-[18px] text-gray_500 text-left tracking-[-0.50px] w-[100%]"
                name="frame48095972"
                placeholder="Your email here.."
              ></Input>
              <Button className="bg-bluegray_900 cursor-pointer font-bold font-rubik leading-[normal] sm:px-[20px] px-[35px] py-[24px] text-[18px] text-center text-yellow_100 tracking-[-0.50px] w-[157px]">
                Subscribe
              </Button>
            </div>
          </div>
          <Img
            src="images/img_pexelsphotoby.png"
            className="flex-1 md:flex-none h-[100%] md:h-[309px] sm:h-[auto] max-h-[309px] object-cover w-[auto] sm:w-[auto] md:w-[auto]"
            alt="pexelsphotoby"
          />
        </div>
      </div>
    </>
  );
};

SubscriptionCard.defaultProps = {};

export default SubscriptionCard;
