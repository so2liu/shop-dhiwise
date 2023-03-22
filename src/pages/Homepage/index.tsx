import React from "react";

import HeaderCard from "components/HeaderCard";
import { Text, Button, Img, List, Slider, PagerIndicator } from "components";
import ProductCard from "components/ProductCard";
import InteriorCard from "components/InteriorCard";
import BlogCard from "components/BlogCard";
import SubscriptionCard from "components/SubscriptionCard";
import FooterCard from "components/FooterCard";
import { useNavigate } from "react-router-dom";

const HomepagePage: React.FC = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const productCardPropList = [
    { image: "images/img_image_400x308.png" },
    { image: "images/img_image_12.png" },
    { image: "images/img_image_13.png" },
    { image: "images/img_image_14.png" },
    { image: "images/img_image_15.png" },
    { image: "images/img_image_16.png" },
    { image: "images/img_image_17.png" },
    { image: "images/img_image_18.png" },
  ];
  const blogCardPropList = [
    { thumbnail: "images/img_rectangle18_400x416.png" },
    { thumbnail: "images/img_rectangle18_8.png" },
    { thumbnail: "images/img_rectangle18_9.png" },
  ];

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-rubik gap-[100px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <HeaderCard className="bg-white_A700 flex items-center justify-center md:px-[20px] px-[75px] py-[35px] w-[100%]" />
          <div className="bg-orange_50 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] py-[80px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[60px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[26px] items-start justify-start w-[100%]">
                  <Text
                    className="font-normal font-rubik not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Interior Needs
                  </Text>
                  <Text
                    className="font-normal font-pollerone leading-[60.00px] md:max-w-[100%] max-w-[615px] not-italic text-black_900 text-left tracking-[-0.50px]"
                    as="h2"
                    variant="h2"
                  ></Text>
                </div>
                <Button
                  className="common-pointer bg-bluegray_900 border-[2px] border-bluegray_900 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-[20px] text-center text-yellow_100 tracking-[-0.50px] w-[auto]"
                  onClick={() => navigate("/shop")}
                >
                  Shop Now
                </Button>
              </div>
              <Img
                src="images/img_nathanoakleyo.png"
                className="flex-1 md:flex-none h-[566px] sm:h-[auto] max-h-[566px] object-cover w-[auto] sm:w-[auto] md:w-[auto]"
                alt="nathanoakleyo"
              />
            </div>
          </div>
        </div>
        <div className="bg-black_900 flex items-center justify-center px-[173px] sm:px-[20px] md:px-[40px] py-[41px] w-[100%]">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1094px] mx-[auto] w-[100%]">
            <Text
              className="font-normal not-italic text-center text-gray_53 tracking-[-0.50px] w-[auto]"
              as="h6"
              variant="h6"
            >
              Various brands have used our products
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-[100%]">
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
        <div className="flex items-center justify-center sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <List
            className="sm:flex-col flex-row gap-[20px] grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1290px] mx-[auto] w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-gradient  flex flex-1 items-start justify-start sm:px-[20px] px-[30px] py-[24px] w-[100%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[76px] items-center justify-start w-[100%]">
                <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[31px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal font-rubik not-italic text-gray_53 text-left tracking-[-0.50px] w-[auto]"
                      variant="body1"
                    >
                      Living Room
                    </Text>
                    <Text
                      className="font-raleway md:max-w-[100%] max-w-[320px] text-gray_53 text-left tracking-[-0.50px]"
                      as="h3"
                      variant="h3"
                    >
                      The best foam padded chair
                    </Text>
                  </div>
                  <Button
                    className="common-pointer border-[2px] border-gray_50 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[15px] text-[16px] text-center text-gray_50 tracking-[-0.50px] w-[auto]"
                    onClick={() => navigate("/shop")}
                  >
                    Shop Now
                  </Button>
                </div>
                <Img
                  src="images/img_sammoghadamkh.png"
                  className="h-[301px] md:h-[auto] max-h-[301px] object-cover w-[auto] sm:w-[auto]"
                  alt="sammoghadamkh"
                />
              </div>
            </div>
            <div className="bg-gradient  flex flex-1 items-center justify-center sm:px-[20px] px-[30px] py-[24px] w-[100%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[79px] h-[301px] md:h-[auto] items-center justify-start w-[100%]">
                <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[31px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal font-rubik not-italic text-gray_53 text-left tracking-[-0.50px] w-[auto]"
                      variant="body1"
                    >
                      Living Room
                    </Text>
                    <Text
                      className="font-raleway md:max-w-[100%] max-w-[306px] text-gray_53 text-left tracking-[-0.50px]"
                      as="h3"
                      variant="h3"
                    >
                      Latest model chandelier
                    </Text>
                  </div>
                  <Button
                    className="common-pointer border-[2px] border-gray_50 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[15px] text-[16px] text-center text-gray_50 tracking-[-0.50px] w-[auto]"
                    onClick={() => navigate("/shop")}
                  >
                    Shop Now
                  </Button>
                </div>
                <Img
                  src="images/img_phildesforges.png"
                  className="h-[244px] md:h-[auto] max-h-[244px] object-cover w-[auto] sm:w-[auto]"
                  alt="phildesforges"
                />
              </div>
            </div>
          </List>
        </div>
        <div className="flex items-center justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
              <Text
                className="font-bold font-raleway text-black_900 text-center tracking-[-0.50px] w-[auto]"
                as="h2"
                variant="h2"
              ></Text>
              <Text
                className="font-normal font-rubik not-italic text-center text-gray_500 tracking-[-0.50px] w-[auto]"
                variant="body1"
              >
                Made of the best materials and with a design that follows the
                times
              </Text>
            </div>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-[100%]"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <List
                    className="flex-col gap-[47px] grid items-center mx-[10px]"
                    orientation="vertical"
                  >
                    <div className="gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-[100%]">
                      <ProductCard
                        className="flex flex-1 flex-col items-start justify-start w-[100%]"
                        image="images/img_image_400x308.png"
                        category="Living Room"
                        status="New"
                        furniturename="Teak wood chair"
                        price="$24"
                      />
                      <ProductCard
                        className="flex flex-1 flex-col items-start justify-start w-[100%]"
                        image="images/img_image_5.png"
                        category="Living Room"
                        status="New"
                        furniturename="Teak wood chair"
                        price="$24"
                      />
                      <ProductCard
                        className="flex flex-1 flex-col items-start justify-start w-[100%]"
                        image="images/img_image_6.png"
                        category="Living Room"
                        status="New"
                        furniturename="Teak wood chair"
                        price="$24"
                      />
                      <ProductCard
                        className="flex flex-1 flex-col items-start justify-start w-[100%]"
                        image="images/img_image_7.png"
                        category="Living Room"
                        status="New"
                        furniturename="Teak wood chair"
                        price="$24"
                      />
                    </div>
                    <div className="gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-[100%]">
                      <ProductCard
                        className="flex flex-1 flex-col items-start justify-start w-[100%]"
                        image="images/img_image_8.png"
                        category="Living Room"
                        status="New"
                        furniturename="Teak wood chair"
                        price="$24"
                      />
                      <ProductCard
                        className="flex flex-1 flex-col items-start justify-start w-[100%]"
                        image="images/img_image_9.png"
                        category="Living Room"
                        status="New"
                        furniturename="Teak wood chair"
                        price="$24"
                      />
                      <ProductCard
                        className="flex flex-1 flex-col items-start justify-start w-[100%]"
                        image="images/img_image_10.png"
                        category="Living Room"
                        status="New"
                        furniturename="Teak wood chair"
                        price="$24"
                      />
                      <ProductCard
                        className="flex flex-1 flex-col items-start justify-start w-[100%]"
                        image="images/img_image_11.png"
                        category="Living Room"
                        status="New"
                        furniturename="Teak wood chair"
                        price="$24"
                      />
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
              className="flex gap-[15px] h-[15px] items-center justify-center max-w-[1289px] w-[100%]"
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
        <div className="flex font-raleway items-center justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[67px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
            <Text
              className="text-bluegray_900 text-center tracking-[-0.50px] w-[auto]"
              as="h4"
              variant="h4"
            >
              New Arrival
            </Text>
            <div className="flex font-rubik items-start justify-start w-[100%]">
              <div className="gap-[19px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                {productCardPropList.map((props, index) => (
                  <React.Fragment key={`ProductCard${index}`}>
                    <ProductCard
                      className="flex flex-1 flex-col items-start justify-start w-[100%]"
                      category="Living Room"
                      status="New"
                      furniturename="Teak wood chair"
                      price="$24"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-raleway items-center justify-center sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[85px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
            <div className="flex flex-1 flex-col gap-[50px] h-[100%] items-start justify-start w-[100%]">
              <Text
                className="font-bold leading-[60.00px] md:max-w-[100%] max-w-[602px] text-black_900 text-left tracking-[-0.50px]"
                as="h2"
                variant="h2"
              >
                We guarantee the safety of your shopping
              </Text>
              <div className="flex items-start justify-start w-[100%]">
                <div className="sm:gap-[20px] gap-[50px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-col gap-[40px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_volume.svg"
                      className="h-[60px] w-[63px]"
                      alt="volume"
                    />
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[276px]">
                      <Text
                        className="font-raleway font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Fast Shipping
                      </Text>
                      <Text
                        className="font-normal font-rubik leading-[25.00px] md:max-w-[100%] max-w-[276px] not-italic text-gray_500 text-left tracking-[-0.50px]"
                        variant="body3"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[40px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_lock_gray_53.svg"
                      className="h-[60px] w-[63px]"
                      alt="lock"
                    />
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[276px]">
                      <Text
                        className="font-raleway font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Safe Delivery
                      </Text>
                      <Text
                        className="font-normal font-rubik leading-[25.00px] md:max-w-[100%] max-w-[276px] not-italic text-gray_500 text-left tracking-[-0.50px]"
                        variant="body3"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[40px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_clock.svg"
                      className="h-[60px] w-[63px]"
                      alt="clock"
                    />
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[276px]">
                      <Text
                        className="font-raleway font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        365 Days Return
                      </Text>
                      <Text
                        className="font-normal font-rubik leading-[25.00px] md:max-w-[100%] max-w-[276px] not-italic text-gray_500 text-left tracking-[-0.50px]"
                        variant="body3"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[40px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_call_gray_53.svg"
                      className="h-[60px] w-[63px]"
                      alt="call"
                    />
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[276px]">
                      <Text
                        className="font-raleway font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        24 hours CS
                      </Text>
                      <Text
                        className="font-normal font-rubik leading-[25.00px] md:max-w-[100%] max-w-[276px] not-italic text-gray_500 text-left tracking-[-0.50px]"
                        variant="body3"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_rectangle16_640x602.png"
              className="flex-1 md:flex-none h-[100%] md:h-[640px] sm:h-[auto] max-h-[640px] object-cover w-[auto] sm:w-[auto] md:w-[auto]"
              alt="rectangleSixteen"
            />
          </div>
        </div>
        <div className="flex items-center justify-center sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
              <Text
                className="font-raleway font-semibold text-black_900 text-center tracking-[-0.50px] w-[auto]"
                as="h2"
                variant="h2"
              >
                Read Our Latest Blog
              </Text>
              <Text
                className="font-normal font-rubik not-italic text-center text-gray_500 tracking-[-0.50px] w-[auto]"
                variant="body1"
              >
                We write various things related to furniture, from tips and what
                things I need to pay attention to when choosing furniture
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-[100%]"
              orientation="horizontal"
            >
              {blogCardPropList.map((props, index) => (
                <React.Fragment key={`BlogCard${index}`}>
                  <BlogCard
                    className="flex flex-1 flex-col items-start justify-start w-[100%]"
                    title="Why should you choose good wood"
                    author="By Admin"
                    publishDate="December 10, 2022"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever."
                    read_More="Read More"
                    {...props}
                  />
                </React.Fragment>
              ))}
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

export default HomepagePage;
