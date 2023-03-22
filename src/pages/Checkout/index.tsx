import React from "react";

import HeaderCard from "components/HeaderCard";
import { Text, Input, Button, Img, SelectBox, Line } from "components";
import SubscriptionCard from "components/SubscriptionCard";
import FooterCard from "components/FooterCard";

const CheckoutPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-rubik gap-[100px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <HeaderCard className="bg-white_A700 flex items-center justify-center md:px-[20px] px-[75px] py-[35px] w-[100%]" />
        <div className="flex font-raleway items-center justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
            <Text
              className="font-bold text-black_900 text-center tracking-[-0.50px] w-[auto]"
              as="h2"
              variant="h2"
            >
              Checkout
            </Text>
            <div className="flex md:flex-col flex-row gap-[19px] items-start justify-center w-[100%]">
              <div className="flex flex-1 flex-col gap-[53px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[36px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Contact Information
                  </Text>
                  <div className="flex flex-col gap-[35px] items-start justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                      <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal font-raleway not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          First Name
                        </Text>
                        <Input
                          wrapClassName="border-[1px] border-bluegray_100 border-solid px-[22px] py-[19px] w-[100%]"
                          className="font-normal font-rubik leading-[normal] not-italic p-[0] placeholder:text-gray_500 sm:px-[20px] text-[14px] text-gray_500 text-left tracking-[-0.50px] w-[100%]"
                          type="text"
                          name="frame48096050"
                          placeholder="Your first name here.."
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal font-raleway not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Last Name
                        </Text>
                        <Input
                          wrapClassName="border-[1px] border-bluegray_100 border-solid px-[22px] py-[19px] w-[100%]"
                          className="font-normal font-rubik leading-[normal] not-italic p-[0] placeholder:text-gray_500 sm:px-[20px] text-[14px] text-gray_500 text-left tracking-[-0.50px] w-[100%]"
                          type="text"
                          name="frame48096051"
                          placeholder="Your last name here.."
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                      <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal font-raleway not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Phone
                        </Text>
                        <Input
                          wrapClassName="border-[1px] border-bluegray_100 border-solid px-[22px] py-[19px] w-[100%]"
                          className="font-normal font-rubik leading-[normal] not-italic p-[0] placeholder:text-gray_500 sm:px-[20px] text-[14px] text-gray_500 text-left tracking-[-0.50px] w-[100%]"
                          type="number"
                          name="frame48096053"
                          placeholder="Your phone here.."
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal font-raleway not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Email
                        </Text>
                        <Input
                          wrapClassName="border-[1px] border-bluegray_100 border-solid px-[22px] py-[19px] w-[100%]"
                          className="font-normal font-rubik leading-[normal] not-italic p-[0] placeholder:text-gray_500 sm:px-[20px] text-[14px] text-gray_500 text-left tracking-[-0.50px] w-[100%]"
                          type="email"
                          name="frame48096054"
                          placeholder="Your email here.."
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[36px] items-start justify-start w-[100%]">
                    <Text
                      className="font-bold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Shipping Method
                    </Text>
                    <div className="flex flex-row font-rubik gap-[21px] items-start justify-start w-[100%]">
                      <Button
                        className="border-[1px] border-bluegray_100 border-solid cursor-pointer flex items-center justify-center min-w-[154px] px-[30px] py-[15px] w-[auto]"
                        leftIcon={
                          <div className="h-[40px] mr-[10px] w-[40px] bg-gray_201 p-[8px] rounded-[50%] flex justify-center items-center">
                            <Img
                              src="images/img_computer.svg"
                              className=""
                              alt="computer"
                            />
                          </div>
                        }
                      >
                        <div className="font-normal leading-[normal] not-italic sm:px-[20px] text-[18px] text-gray_500 text-left tracking-[-0.50px]">
                          Store
                        </div>
                      </Button>
                      <Button
                        className="bg-gray_100 border-[1px] border-bluegray_900 border-solid cursor-pointer flex items-center justify-center min-w-[175px] px-[30px] py-[15px] w-[auto]"
                        leftIcon={
                          <div className="h-[40px] mr-[10px] w-[40px] bg-bluegray_900 p-[8px] rounded-[50%] flex justify-center items-center">
                            <Img
                              src="images/img_airplane.svg"
                              className=""
                              alt="airplane"
                            />
                          </div>
                        }
                      >
                        <div className="font-normal leading-[normal] not-italic sm:px-[20px] text-[18px] text-black_900 text-left tracking-[-0.50px]">
                          Delivery
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal font-raleway not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Country / Region{" "}
                    </Text>
                    <SelectBox
                      className="border-[1px] border-bluegray_100 border-solid font-normal font-rubik leading-[normal] not-italic sm:px-[20px] px-[25px] py-[18px] text-[14px] text-gray_500 text-left tracking-[-0.50px] w-[100%]"
                      placeholderClassName="text-gray_500"
                      name="frame48096062"
                      placeholder="United States (US)"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_black_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Street address{" "}
                    </Text>
                    <div className="border-[1px] border-bluegray_100 border-solid flex font-rubik h-[150px] md:h-[auto] items-start justify-start sm:px-[20px] px-[22px] py-[19px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                        variant="body3"
                      >
                        Write your full address
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[36px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Payment Method
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[20px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                    <div className="border-[1px] border-bluegray_100 border-solid flex h-[73px] md:h-[auto] items-center justify-center p-[25px] sm:px-[20px] w-[155px]">
                      <Img
                        src="images/img_visaseeklogocom.png"
                        className="h-[19px] md:h-[auto] object-cover sm:w-[100%] w-[60px]"
                        alt="visa"
                      />
                    </div>
                    <div className="border-[1px] border-bluegray_100 border-solid flex h-[73px] md:h-[auto] items-center justify-center p-[25px] sm:px-[20px] w-[155px]">
                      <Img
                        src="images/img_signal_gray_700.svg"
                        className="h-[23px] w-[60px]"
                        alt="signal"
                      />
                    </div>
                    <div className="border-[1px] border-bluegray_100 border-solid flex h-[73px] md:h-[auto] items-center justify-center p-[25px] sm:px-[20px] w-[155px]">
                      <Img
                        src="images/img_refresh.svg"
                        className="h-[19px] w-[80px]"
                        alt="refresh"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_53 flex sm:flex-1 items-start justify-start sm:px-[20px] px-[27px] py-[34px] sm:w-[100%] w-[416px]">
                <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Your Order
                  </Text>
                  <div className="flex flex-col font-rubik gap-[25px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-normal font-raleway not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Complete set of sofa... 1x
                        </Text>
                        <Text
                          className="font-poppins font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $ 75.00
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-normal font-raleway not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Teak wood chair 1x
                        </Text>
                        <Text
                          className="font-poppins font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $ 24.00
                        </Text>
                      </div>
                      <Line className="bg-black_900 h-[1px] w-[100%]" />
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[100%]">
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
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-normal font-raleway not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Discount (30%)
                        </Text>
                        <Text
                          className="font-poppins font-semibold text-deep_orange_A400 text-left tracking-[-0.50px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          - $ 29.70
                        </Text>
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
                        $ 69.30
                      </Text>
                    </div>
                    <Button className="bg-bluegray_900 cursor-pointer font-semibold leading-[normal] sm:px-[20px] px-[30px] py-[14.5px] text-[18px] text-center text-yellow_100 tracking-[-0.50px] w-[100%]">
                      Place Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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

export default CheckoutPage;
