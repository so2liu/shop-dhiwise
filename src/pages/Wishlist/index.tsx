import React from "react";

import HeaderCard from "components/HeaderCard";
import { Text, List, Button, Img } from "components";
import SubscriptionCard from "components/SubscriptionCard";
import FooterCard from "components/FooterCard";
import { useNavigate } from "react-router-dom";

const WishlistPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-rubik gap-[100px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <HeaderCard className="bg-white_A700 flex items-center justify-center md:px-[20px] px-[75px] py-[35px] w-[100%]" />
        <div className="flex font-raleway items-center justify-start max-w-[1440px] sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
            <Text
              className="font-bold text-black_900 text-center tracking-[-0.50px] w-[auto]"
              as="h2"
              variant="h2"
            >
              Wishlist
            </Text>
            <List
              className="flex-col font-rubik gap-[30px] grid items-start w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row gap-[131px] md:gap-[40px] items-center justify-between my-[0] w-[100%]">
                <Button className="bg-gray_53 flex h-[50px] items-center justify-center p-[13px] w-[50px]">
                  <Img
                    src="images/img_signal.svg"
                    className="h-[24px]"
                    alt="signal"
                  />
                </Button>
                <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle1480_120x120.png"
                    className="h-[120px] md:h-[auto] object-cover w-[120px]"
                    alt="rectangle1480"
                  />
                  <div className="flex flex-col gap-[15px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-bold font-raleway leading-[35.00px] md:max-w-[100%] max-w-[294px] text-black_900 text-left tracking-[-0.50px]"
                      as="h6"
                      variant="h6"
                    >
                      Complete set of sofa, pillows and bed sheets
                    </Text>
                    <Text
                      className="font-bold font-poppins text-bluegray_900 text-left tracking-[-0.50px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $ 75.00
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                  variant="body1"
                >
                  $ 75.00
                </Text>
                <Text
                  className="font-semibold text-bluegray_900 text-left tracking-[-0.50px] w-[auto]"
                  variant="body1"
                >
                  In Stock
                </Text>
                <Button
                  className="common-pointer bg-black_900 cursor-pointer font-semibold leading-[normal] min-w-[146px] sm:px-[20px] px-[25px] py-[14px] text-[18px] text-center text-white_A700 tracking-[-0.50px] w-[auto]"
                  onClick={() => navigate("/")}
                >
                  Add to Cart
                </Button>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[127px] md:gap-[40px] items-center justify-between my-[0] w-[100%]">
                <Button className="bg-gray_53 flex h-[50px] items-center justify-center p-[13px] w-[50px]">
                  <Img
                    src="images/img_signal.svg"
                    className="h-[24px]"
                    alt="signal"
                  />
                </Button>
                <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle1480_1.png"
                    className="h-[120px] md:h-[auto] object-cover w-[120px]"
                    alt="rectangle1480"
                  />
                  <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-bold font-raleway text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Teak wood chair
                    </Text>
                    <Text
                      className="font-bold font-poppins text-bluegray_900 text-left tracking-[-0.50px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $ 24.00
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                  variant="body1"
                >
                  $ 24.00
                </Text>
                <Text
                  className="font-semibold text-deep_orange_A400 text-left tracking-[-0.50px] w-[auto]"
                  variant="body1"
                >
                  Out Stock
                </Text>
                <Button className="bg-bluegray_100 cursor-pointer font-semibold leading-[normal] min-w-[146px] sm:px-[20px] px-[25px] py-[14px] text-[18px] text-center text-white_A700 tracking-[-0.50px] w-[auto]">
                  Add to Cart
                </Button>
              </div>
            </List>
          </div>
        </div>
        <div className="flex font-rubik items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <SubscriptionCard className="bg-gradient  flex flex-col items-start justify-start max-w-[1290px] mx-[auto] pl-[59px] md:px-[20px] py-[46px] w-[100%]" />
        </div>
        <FooterCard className="bg-black_900 flex font-raleway items-center justify-center md:px-[20px] px-[75px] py-[50px] w-[100%]" />
      </div>
    </>
  );
};

export default WishlistPage;
