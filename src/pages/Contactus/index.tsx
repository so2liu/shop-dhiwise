import React from "react";

import Header from "components/Header";
import { Img, Text, Button, Line, Input } from "components";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import SubscriptionCard from "components/SubscriptionCard";
import Footer from "components/Footer";

const ContactusPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-rubik gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col md:gap-[40px] gap-[75px] items-start justify-start w-[100%]">
          <Header className="bg-white_A700 flex items-center justify-center md:px-[20px] px-[75px] py-[35px] w-[100%]" />
          <div className="flex font-poppins items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
            <div className="flex items-start justify-start max-w-[1291px] mx-[auto] w-[100%]">
              <div className="h-[450px] relative w-[100%]">
                <Img
                  src="images/img_rectangle28.png"
                  className="h-[450px] m-[auto] object-cover w-[100%]"
                  alt="rectangleTwentyEight"
                />
                <div className="absolute flex flex-col gap-[30px] h-[max-content] inset-y-[0] items-start justify-start left-[5%] my-[auto] self-stretch w-[auto]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <Text
                      className="font-rubik font-semibold text-left text-yellow_100 tracking-[-0.50px] w-[auto]"
                      variant="body1"
                    >
                      Best Room Decor Items
                    </Text>
                    <Text
                      className="font-raleway leading-[60.00px] md:max-w-[100%] max-w-[465px] text-left text-white_A700 tracking-[-0.50px]"
                      as="h3"
                      variant="h3"
                    >
                      Our goods have the best quality and materials in the world
                    </Text>
                  </div>
                  <Button className="bg-yellow_100 cursor-pointer font-bold leading-[normal] min-w-[170px] py-[15px] text-[20px] text-bluegray_900 text-center tracking-[-0.50px] w-[auto]">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-raleway items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[71px] items-start justify-start max-w-[1291px] mx-[auto] w-[100%]">
            <div className="flex flex-1 items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[44px] items-start justify-start w-[100%]">
                <Text
                  className="text-black_900 text-left tracking-[-0.50px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Frequently asked questions
                </Text>
                <Accordion
                  preExpanded={[0]}
                  className="flex flex-col gap-[30px] w-[100%]"
                >
                  {[...Array(3)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="flex flex-col gap-[29px] items-center justify-start w-[100%]">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {({ expanded }) => (
                                <div className="flex flex-col gap-[26px] items-start justify-start w-[100%]">
                                  <div className="flex md:flex-col flex-row md:gap-[40px] gap-[88px] items-start justify-start w-[100%]">
                                    <Text
                                      className="flex-1 font-normal not-italic text-black_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      How can I make refund from your website?
                                    </Text>
                                    {expanded && (
                                      <Img
                                        src="images/img_plus_24X24.svg"
                                        className="h-[24px] w-[24px]"
                                        alt="plus_One"
                                      />
                                    )}
                                    {!expanded && (
                                      <Img
                                        src="images/img_plus_24X24.svg"
                                        className="h-[24px] w-[24px]"
                                        alt="plus"
                                      />
                                    )}
                                  </div>
                                  {expanded && (
                                    <Line className="bg-black_900_19 h-[1px] w-[100%]" />
                                  )}
                                </div>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="w-[100%] ">
                          <div className="flex flex-col gap-[30px] items-start justify-start mx-[auto] w-[100%]">
                            <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                              <div className="flex flex-row font-raleway sm:gap-[40px] items-start justify-between w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  How to buy a product?
                                </Text>
                                <Img
                                  src="images/img_ticket.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="ticket"
                                />
                              </div>
                              <Text
                                className="font-normal font-rubik leading-[35.00px] md:max-w-[100%] max-w-[610px] not-italic text-gray_500 text-left tracking-[-0.50px]"
                                variant="body3"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Id a enim, consectetur cursus.
                                At mattis nulla in pretium. Condimentum sagittis
                                mauris augue maecenas fusce commodo neque purus
                                et. Integer eu amet at pretium id ultrices
                                faucibus. In vestibulum pretium, potenti
                                molestie.
                              </Text>
                            </div>
                            <Line className="bg-black_900_19 h-[1px] w-[100%]" />
                          </div>
                        </AccordionItemPanel>
                      </div>
                      <Line className="self-center h-[1px] bg-black_900_19 w-[100%]" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[24px] items-center justify-start w-[100%]">
              <Text
                className="font-bold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                as="h5"
                variant="h5"
              >
                Contact Us
              </Text>
              <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[31px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start w-[100%]">
                    <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-[100%]">
                      <Text
                        className="font-raleway font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                        variant="body1"
                      >
                        Your Name
                      </Text>
                      <Input
                        wrapClassName="border-[1px] border-bluegray_100 border-solid px-[18px] py-[12px] w-[100%]"
                        className="font-normal font-rubik not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left tracking-[-0.50px] w-[100%]"
                        type="text"
                        name="frame48096015"
                        placeholder="Write your name here...."
                      ></Input>
                    </div>
                    <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-[100%]">
                      <Text
                        className="font-raleway font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                        variant="body1"
                      >
                        Your Email
                      </Text>
                      <Input
                        wrapClassName="border-[1px] border-bluegray_100 border-solid px-[18px] py-[12px] w-[100%]"
                        className="font-normal font-rubik not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left tracking-[-0.50px] w-[100%]"
                        type="email"
                        name="frame48096015_One"
                        placeholder="Write your email here...."
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      variant="body1"
                    >
                      Your Comment
                    </Text>
                    <div className="border-[1px] border-bluegray_100 border-solid flex font-rubik h-[218px] md:h-[auto] items-start justify-start p-[16px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                        variant="body3"
                      >
                        Write your review here....
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex font-poppins items-start justify-start w-[100%]">
                  <Button className="bg-bluegray_900 border-[2px] border-bluegray_900 border-solid cursor-pointer font-medium leading-[normal] min-w-[140px] sm:px-[20px] md:px-[40px] px-[50px] py-[13px] text-[16px] text-center text-white_A700 tracking-[-0.50px] w-[auto]">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-rubik items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <SubscriptionCard className="bg-gradient  flex flex-col items-start justify-start max-w-[1291px] mx-[auto] pl-[59px] md:px-[20px] py-[46px] w-[100%]" />
        </div>
        <Footer className="bg-black_900 flex font-raleway items-center justify-center md:px-[20px] px-[75px] py-[50px] w-[100%]" />
      </div>
    </>
  );
};

export default ContactusPage;
