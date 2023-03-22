import React from "react";

import HeaderCard from "components/HeaderCard";
import { Text, Button, Img, Slider, PagerIndicator, List } from "components";
import TeamCard from "components/TeamCard";
import InteriorCard from "components/InteriorCard";
import SubscriptionCard from "components/SubscriptionCard";
import FooterCard from "components/FooterCard";

const AboutusPage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-rubik gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <HeaderCard className="bg-white_A700 flex items-center justify-center md:px-[20px] px-[75px] py-[35px] w-[100%]" />
        <div className="flex items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[138px] md:gap-[40px] items-center justify-between max-w-[1290px] mx-[auto] w-[100%]">
            <div className="flex flex-1 flex-col gap-[56px] items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[25px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[25px] items-start justify-start w-[100%]">
                  <Text
                    className="font-raleway leading-[60.00px] md:max-w-[100%] max-w-[626px] text-black_900 text-left tracking-[-0.50px]"
                    as="h1"
                    variant="h1"
                  >
                    Provide the best quality ingredients for home products
                  </Text>
                  <Text
                    className="font-normal font-rubik leading-[35.00px] md:max-w-[100%] max-w-[626px] not-italic text-gray_500 text-left tracking-[-0.50px]"
                    variant="body2"
                  >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    dictumst posuere, lectus dis vehicula augue elementum quam
                    risus. Placerat dictum lobortis lacinia volutpat morbi cum
                    justo commodo est aliquam, facilisi consequat ligula vivamus
                    faucibus
                  </Text>
                </div>
                <Button className="border-[1px] border-black_900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[172px] sm:px-[20px] px-[25px] py-[12px] text-[18px] text-black_900 text-center tracking-[-0.50px] w-[auto]">
                  Meet our Team
                </Button>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[7px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-row font-raleway gap-[10px] items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-bold text-black_900 text-left tracking-[0.12px] w-[auto]"
                      variant="body1"
                    >
                      Ratings
                    </Text>
                    <div className="flex flex-row gap-[5px] items-center justify-start self-stretch w-[auto]">
                      <Img
                        src="images/img_star.svg"
                        className="h-[30px] w-[30px]"
                        alt="star"
                      />
                      <Text
                        className="font-bold text-black_900 text-left tracking-[0.12px] w-[auto]"
                        variant="body1"
                      >
                        5.0
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-rubik not-italic text-black_900_7f text-left tracking-[-0.50px] w-[auto]"
                    variant="body4"
                  >
                    Trusted by many people from all over the world
                  </Text>
                </div>
                <div className="flex relative w-[230px]">
                  <div className="flex my-[auto] w-[81%]">
                    <div className="flex my-[auto] w-[76%]">
                      <div className="flex my-[auto] w-[68%]">
                        <Img
                          src="images/img_unsplashwnolnjo7ts8.png"
                          className="h-[50px] my-[auto] rounded-[50%] w-[50px]"
                          alt="unsplashwnolnjo"
                        />
                        <Img
                          src="images/img_unsplashrtvgs4vgkgm.png"
                          className="h-[50px] ml-[-5px] my-[auto] rounded-[50%] w-[50px] z-[1]"
                          alt="unsplashrtvgs4v"
                        />
                      </div>
                      <Img
                        src="images/img_unsplashd1upkifd04a.png"
                        className="h-[50px] ml-[-5px] my-[auto] rounded-[50%] w-[50px] z-[1]"
                        alt="unsplashd1upkif"
                      />
                    </div>
                    <Img
                      src="images/img_unsplashplsf6obtgms.png"
                      className="h-[50px] ml-[-5px] my-[auto] rounded-[50%] w-[50px] z-[1]"
                      alt="unsplashplsf6ob"
                    />
                  </div>
                  <Text
                    className="bg-bluegray_900 flex font-semibold h-[50px] items-center justify-center ml-[-5px] my-[auto] rounded-[50%] text-center text-yellow_100 tracking-[-0.50px] w-[50px] z-[1]"
                    variant="body3"
                  >
                    3K+
                  </Text>
                </div>
              </div>
            </div>
            <Img
              src="images/img_rectangle1492_650x526.png"
              className="h-[650px] sm:h-[auto] max-h-[650px] object-cover rounded-bl-[300px] rounded-br-[0] rounded-tl-[300px] rounded-tr-[300px] w-[auto] sm:w-[auto] md:w-[auto]"
              alt="rectangle1492"
            />
          </div>
        </div>
        <div className="bg-black_900 flex items-start justify-start px-[173px] sm:px-[20px] md:px-[40px] py-[41px] w-[100%]">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1094px] mx-[auto] w-[100%]">
            <Text
              className="font-normal not-italic text-center text-gray_53 tracking-[-0.50px] w-[auto]"
              as="h6"
              variant="h6"
            >
              Various brands have used our products
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-[100%]">
              <Img
                src="images/img_search.svg"
                className="h-[48px] w-[220px]"
                alt="search"
              />
              <Img
                src="images/img_vector_gray_51.svg"
                className="h-[48px] w-[125px]"
                alt="companylogocomp"
              />
              <Img
                src="images/img_vector.svg"
                className="h-[48px] w-[92px]"
                alt="companylogocomp_One"
              />
              <Img
                src="images/img_vector_gray_51_24X141.svg"
                className="h-[48px] w-[141px]"
                alt="companylogocomp_Two"
              />
              <Img
                src="images/img_vector_gray_51_29X133.svg"
                className="h-[48px] w-[134px]"
                alt="companylogocomp_Three"
              />
              <Img
                src="images/img_vector_gray_51_32X131.svg"
                className="h-[48px] w-[132px]"
                alt="companylogocomp_Four"
              />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex flex-col gap-[53px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
              <Text
                className="font-bold font-raleway text-black_900 text-center tracking-[-0.50px] w-[auto]"
                as="h2"
                variant="h2"
              >
                Meet Our Team
              </Text>
              <Text
                className="font-normal font-rubik not-italic text-center text-gray_500 tracking-[-0.50px] w-[auto]"
                variant="body1"
              >
                We write various things related to furniture, from tips and what
                things I need to pay attention to when choosing furniture
              </Text>
            </div>
            <div className="flex items-start justify-start w-[100%]">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="gap-[20px] w-[100%]"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <TeamCard
                      className="flex flex-col items-start justify-start mx-[10px]"
                      profilePic="images/img_rectangle1487_450x416.png"
                      name="Make Jhane"
                      designation="Finance Manager"
                    />
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray_900 w-[15px]" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray_200 w-[15px]"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
            </div>
            <PagerIndicator
              className="flex gap-[15px] h-[15px] items-start justify-start self-stretch w-[75px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray_900 w-[15px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray_200 w-[15px]"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
        </div>
        <div className="h-[535px] md:px-[20px] relative w-[100%]">
          <div className="absolute bg-yellow_100 bottom-[0] h-[440px] inset-x-[0] mx-[auto] w-[100%]"></div>
          <InteriorCard className="absolute flex flex-row flex-wrap h-[100%] inset-y-[0] items-center justify-between max-w-[1365px] my-[auto] right-[0] w-[100%]" />
        </div>
        <div className="flex font-poppins items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
            <Text
              className="font-semibold text-black_900 text-center tracking-[0.12px] w-[auto]"
              as="h2"
              variant="h2"
            ></Text>
            <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState1}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState1(e?.item);
                }}
                ref={sliderRef1}
                className="w-[100%]"
                items={[...Array(5)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <List
                      className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mx-[10px]"
                      orientation="horizontal"
                    >
                      <div className="flex items-start justify-start sm:px-[20px] px-[26px] py-[30px] w-[100%]">
                        <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[50px] w-[50px]"
                            alt="eye"
                          />
                          <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                              <Text
                                className="font-semibold leading-[35.00px] md:max-w-[100%] max-w-[364px] text-black_900 text-left tracking-[0.12px]"
                                variant="body1"
                              >
                                For the material and the chair as we expected
                                it&#39;s good
                              </Text>
                              <Text
                                className="font-normal leading-[35.00px] md:max-w-[100%] max-w-[364px] not-italic text-black_900_87 text-left tracking-[0.12px]"
                                variant="body3"
                              >
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&#39;s standard dummy text ever.
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[19px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_unsplashwnolnjo7ts8_56x56.png"
                                className="h-[56px] md:h-[auto] rounded-[50%] w-[56px]"
                                alt="unsplashwnolnjo"
                              />
                              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-semibold text-black_900 text-left tracking-[0.12px] w-[auto]"
                                  variant="body1"
                                >
                                  Dagruel Manulo
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_7f1 text-left tracking-[0.12px] w-[auto]"
                                  variant="body3"
                                >
                                  Sydney, Australia
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start justify-start sm:px-[20px] px-[26px] py-[30px] w-[100%]">
                        <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[50px] w-[50px]"
                            alt="eye"
                          />
                          <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                              <Text
                                className="font-semibold leading-[35.00px] md:max-w-[100%] max-w-[364px] text-black_900 text-left tracking-[0.12px]"
                                variant="body1"
                              >
                                For the material and the chair as we expected
                                it&#39;s good
                              </Text>
                              <Text
                                className="font-normal leading-[35.00px] md:max-w-[100%] max-w-[364px] not-italic text-black_900_87 text-left tracking-[0.12px]"
                                variant="body3"
                              >
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&#39;s standard dummy text ever.
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[19px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_unsplashwnolnjo7ts8_1.png"
                                className="h-[56px] md:h-[auto] rounded-[50%] w-[56px]"
                                alt="unsplashwnolnjo"
                              />
                              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-semibold text-black_900 text-left tracking-[0.12px] w-[auto]"
                                  variant="body1"
                                >
                                  Zambi Owel
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_7f1 text-left tracking-[0.12px] w-[auto]"
                                  variant="body3"
                                >
                                  Sydney, Australia
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start justify-start sm:px-[20px] px-[26px] py-[30px] w-[100%]">
                        <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                          <Img
                            src="images/img_eye.svg"
                            className="h-[50px] w-[50px]"
                            alt="eye"
                          />
                          <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                              <Text
                                className="font-semibold leading-[35.00px] md:max-w-[100%] max-w-[364px] text-black_900 text-left tracking-[0.12px]"
                                variant="body1"
                              >
                                For the material and the chair as we expected
                                it&#39;s good
                              </Text>
                              <Text
                                className="font-normal leading-[35.00px] md:max-w-[100%] max-w-[364px] not-italic text-black_900_87 text-left tracking-[0.12px]"
                                variant="body3"
                              >
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&#39;s standard dummy text ever.
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[19px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_unsplashwnolnjo7ts8_2.png"
                                className="h-[56px] md:h-[auto] rounded-[50%] w-[56px]"
                                alt="unsplashwnolnjo"
                              />
                              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-semibold text-black_900 text-left tracking-[0.12px] w-[auto]"
                                  variant="body1"
                                >
                                  Mario
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_7f1 text-left tracking-[0.12px] w-[auto]"
                                  variant="body3"
                                >
                                  Sydney, Australia
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray_900 w-[15px]" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray_200 w-[15px]"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <PagerIndicator
                className="flex gap-[10px] h-[15px] items-center justify-center max-w-[1290px] w-[100%]"
                count={5}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray_900 w-[15px]"
                activeIndex={sliderState1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray_200 w-[15px]"
                sliderRef={sliderRef1}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
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

export default AboutusPage;
