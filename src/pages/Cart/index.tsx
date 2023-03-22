import React from "react";

import HeaderCard from "components/HeaderCard";
import { Text, List, Img, Input, Button, Line } from "components";
import SubscriptionCard from "components/SubscriptionCard";
import FooterCard from "components/FooterCard";
import { useNavigate } from "react-router-dom";

const CartPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-rubik gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <HeaderCard className="bg-white_A700 flex items-center justify-center md:px-[20px] px-[75px] py-[35px] w-[100%]" />
          <div className="flex font-raleway items-center justify-start pt-[75px] sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
            <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
              <Text
                className="font-bold text-black_900 text-center tracking-[-0.50px] w-[auto]"
                as="h2"
                variant="h2"
              >
                Your Cart
              </Text>
              <div className="flex md:flex-col flex-row font-rubik md:gap-[40px] gap-[61px] items-center justify-start w-[100%]">
                <List
                  className="flex-1 flex-col gap-[30px] grid items-start w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-[49px] items-center justify-start my-[0] w-[100%]">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle1480_120x120.png"
                        className="h-[120px] md:h-[auto] object-cover w-[120px]"
                        alt="rectangle1480"
                      />
                      <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
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
                    <div className="border-[1px] border-black_900 border-solid flex items-start justify-start px-[15px] py-[5px] self-stretch w-[auto]">
                      <div className="flex flex-row gap-[15px] items-center justify-start self-stretch w-[auto]">
                        <Img
                          src="images/img_google.svg"
                          className="h-[24px] w-[24px]"
                          alt="google"
                        />
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                          variant="body1"
                        >
                          1
                        </Text>
                        <Img
                          src="images/img_plus.svg"
                          className="h-[24px] w-[24px]"
                          alt="plus"
                        />
                      </div>
                    </div>
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      variant="body1"
                    >
                      $ 75.00
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="h-[50px] w-[50px]"
                      alt="trash"
                    />
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-[49px] items-center justify-start my-[0] w-[100%]">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle1480_120x120.png"
                        className="h-[120px] md:h-[auto] object-cover w-[120px]"
                        alt="rectangle1480"
                      />
                      <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
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
                    <div className="border-[1px] border-black_900 border-solid flex items-start justify-start px-[15px] py-[5px] self-stretch w-[auto]">
                      <div className="flex flex-row gap-[15px] items-center justify-start self-stretch w-[auto]">
                        <Img
                          src="images/img_google.svg"
                          className="h-[24px] w-[24px]"
                          alt="google"
                        />
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                          variant="body1"
                        >
                          1
                        </Text>
                        <Img
                          src="images/img_plus.svg"
                          className="h-[24px] w-[24px]"
                          alt="plus"
                        />
                      </div>
                    </div>
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      variant="body1"
                    >
                      $ 75.00
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="h-[50px] w-[50px]"
                      alt="trash"
                    />
                  </div>
                </List>
                <div className="bg-gray_53 flex sm:flex-1 items-start justify-start sm:px-[20px] px-[27px] py-[31px] self-stretch sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[27px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-bold font-raleway text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Cart Total
                    </Text>
                    <div className="flex flex-col font-rubik gap-[20px] items-start justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-normal font-raleway not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Subtotal
                        </Text>
                        <Text
                          className="font-poppins font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $ 99.00
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <Input
                          wrapClassName="bg-white_A700 flex-1 px-[17px] py-[14px] w-[73%]"
                          className="font-normal leading-[normal] not-italic p-[0] placeholder:text-black_900_3f text-[14px] text-black_900_3f text-left tracking-[-0.50px] w-[100%]"
                          name="frame48096036"
                          placeholder="Your Voucher"
                        ></Input>
                        <Button className="bg-bluegray_900 cursor-pointer font-semibold leading-[normal] min-w-[98px] py-[14px] text-[14px] text-center text-yellow_100 tracking-[-0.50px] w-[auto]">
                          Apply
                        </Button>
                      </div>
                    </div>
                    <Line className="bg-black_900 h-[1px] w-[100%]" />
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-normal font-raleway not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Total
                      </Text>
                      <Text
                        className="font-poppins font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $ 99.00
                      </Text>
                    </div>
                    <Button
                      className="common-pointer bg-bluegray_900 cursor-pointer font-rubik font-semibold leading-[normal] px-[120px] sm:px-[20px] md:px-[40px] py-[15px] text-[18px] text-center text-yellow_100 tracking-[-0.50px] w-[100%]"
                      onClick={() => navigate("/checkout")}
                    >
                      Checkout Now
                    </Button>
                  </div>
                </div>
              </div>
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

export default CartPage;
