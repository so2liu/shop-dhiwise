import React from "react";

import HeaderCard from "components/HeaderCard";
import {
  Img,
  Text,
  Button,
  Line,
  List,
  Input,
  CheckBox,
  PagerIndicator,
  Slider,
} from "components";
import ProductCard from "components/ProductCard";
import SubscriptionCard from "components/SubscriptionCard";
import FooterCard from "components/FooterCard";
import { useNavigate } from "react-router-dom";

const DetailReviewPage: React.FC = () => {
  const navigate = useNavigate();

  const productCardPropList = [
    { image: "images/img_image_15.png" },
    { image: "images/img_image_16.png" },
    { image: "images/img_image_17.png" },
    { image: "images/img_image_18.png" },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const productCardPropList1 = [
    { image: "images/img_image_15.png" },
    { image: "images/img_image_16.png" },
    { image: "images/img_image_17.png" },
    { image: "images/img_image_18.png" },
  ];

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-rubik gap-[100px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <HeaderCard className="bg-white_A700 flex items-center justify-center md:px-[20px] px-[75px] py-[35px] w-[100%]" />
          <div className="flex items-start justify-start pt-[75px] sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
            <div className="flex md:flex-col flex-row gap-[47px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
              <Img
                src="images/img_rectangle1475_595x621.png"
                className="flex-1 md:flex-none h-[100%] md:h-[595px] sm:h-[auto] max-h-[595px] object-cover w-[auto] sm:w-[auto] md:w-[auto]"
                alt="rectangle1475"
              />
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[33px] items-start justify-start w-[100%]">
                  <Text
                    className="font-raleway md:max-w-[100%] max-w-[621px] text-black_900 text-left tracking-[-0.50px]"
                    as="h4"
                    variant="h4"
                  >
                    Complete set of sofa, pillows and bed sheets
                  </Text>
                  <div className="flex flex-row font-rubik gap-[15px] items-center justify-start w-[100%]">
                    <Img
                      src="images/img_group135.svg"
                      className="h-[20px] w-[140px]"
                      alt="frame135"
                    />
                    <Text
                      className="font-normal not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                      variant="body3"
                    >
                      ( 1 review )
                    </Text>
                  </div>
                  <Text
                    className="font-rubik text-bluegray_900 text-left tracking-[-0.50px] w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    $ 75.00
                  </Text>
                  <div className="flex flex-col font-rubik gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      variant="body1"
                    ></Text>
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      variant="body1"
                    ></Text>
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      variant="body1"
                    ></Text>
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      variant="body1"
                    ></Text>
                  </div>
                  <Text
                    className="font-normal font-rubik leading-[35.00px] md:max-w-[100%] max-w-[621px] not-italic text-gray_500 text-left tracking-[-0.50px]"
                    variant="body1"
                  >
                    In order to sit comfortably for long periods, people need
                    freedom of movement. The Form rocking chair has a molded
                    plastic shell with a wide, curved seat, which gives plenty
                    of opportunity for changing one’s sitting position.
                  </Text>
                </div>
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[19px] items-start justify-start w-[337px]">
                    <div className="border-[1px] border-black_900 border-solid flex flex-row gap-[15px] items-center justify-start p-[10px] w-[38%]">
                      <Img
                        src="images/img_google.svg"
                        className="h-[24px] ml-[4px] w-[24px]"
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
                    <Text
                      className="common-pointer bg-black_900 flex-1 font-normal h-[45px] not-italic sm:pl-[20px] pl-[25px] pr-[13px] py-[11px] text-left text-white_A700 tracking-[-0.50px] w-[128px]"
                      variant="body1"
                      onClick={() => navigate("/")}
                    >
                      Add to Cart
                    </Text>
                    <Button className="border-[1px] border-bluegray_100 border-solid flex h-[43px] items-center justify-center px-[12px] py-[13px] w-[43px]">
                      <Img
                        src="images/img_favorite.svg"
                        className=""
                        alt="favorite"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-josefinsans items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start max-w-[1290px] mx-[auto] w-[100%]">
            <div className="flex flex-1 flex-col gap-[50px] items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[49px] items-start justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-row gap-[50px] items-start justify-start w-[100%] md:w-[100%]">
                    <Text
                      className="common-pointer font-bold text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                      as="h5"
                      variant="h5"
                      onClick={() => navigate("/shopdetaildescription")}
                    >
                      Description
                    </Text>
                    <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="font-bold text-bluegray_900 text-left tracking-[-0.50px] w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Review
                      </Text>
                      <Line className="bg-bluegray_900 h-[6px] w-[100%]" />
                    </div>
                  </div>
                </div>
                <List
                  className="flex-col font-rubik gap-[30px] grid items-start w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-[10px] items-end justify-start my-[0] w-[100%]">
                    <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-[160px]">
                        <Img
                          src="images/img_image_54x54.png"
                          className="h-[54px] md:h-[auto] rounded-[50%] w-[54px]"
                          alt="image"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[91px]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                            variant="body3"
                          >
                            Ralph Edwards
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left tracking-[-0.50px] w-[auto]"
                            variant="body4"
                          >
                            2 minutes ago
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_star_orange_400.svg"
                        className="h-[16px] w-[128px]"
                        alt="star"
                      />
                    </div>
                    <Text
                      className="font-normal leading-[35.00px] md:max-w-[100%] max-w-[565px] not-italic text-black_900 text-left tracking-[-0.50px]"
                      variant="body3"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      justo turpis massa tristique augue dignissim volutpat.
                      Quis ultricies eu libero tortor dictumst.
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[10px] items-end justify-start my-[0] w-[100%]">
                    <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-[160px]">
                        <Img
                          src="images/img_image_54x54.png"
                          className="h-[54px] md:h-[auto] rounded-[50%] w-[54px]"
                          alt="image"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[91px]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                            variant="body3"
                          >
                            Ralph Edwards
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left tracking-[-0.50px] w-[auto]"
                            variant="body4"
                          >
                            2 minutes ago
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_star_orange_400.svg"
                        className="h-[16px] w-[128px]"
                        alt="star"
                      />
                    </div>
                    <Text
                      className="font-normal leading-[35.00px] md:max-w-[100%] max-w-[565px] not-italic text-black_900 text-left tracking-[-0.50px]"
                      variant="body3"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      justo turpis massa tristique augue dignissim volutpat.
                      Quis ultricies eu libero tortor dictumst.
                    </Text>
                  </div>
                </List>
              </div>
              <div className="flex flex-col font-raleway gap-[24px] items-center justify-start w-[100%]">
                <Text
                  className="font-bold text-black_900 text-center tracking-[-0.50px] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Write your review
                </Text>
                <div className="flex flex-col gap-[32px] items-start justify-start w-[100%] md:w-[100%]">
                  <div className="flex flex-col gap-[50px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[17px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                        variant="body1"
                      >
                        Your Rating
                      </Text>
                      <Img
                        src="images/img_star_bluegray_100.svg"
                        className="h-[16px] w-[128px]"
                        alt="star"
                      />
                    </div>
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
                          Your Review
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
                  </div>
                  <div className="flex flex-col font-poppins gap-[30px] items-start justify-start w-[100%]">
                    <CheckBox
                      className="font-normal italic leading-[normal] text-[14px] text-gray_500 text-left tracking-[-0.50px]"
                      inputClassName="border-[1px] border-bluegray_100 border-solid h-[18px] mr-[5px] w-[18px]"
                      name="savemynameemail_One"
                      id="savemynameemail_One"
                      label="Save my name, email, and website in this browser for the next time I comment."
                    ></CheckBox>
                    <Button className="bg-bluegray_900 border-[2px] border-bluegray_900 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[13px] text-[16px] text-center text-white_A700 tracking-[-0.50px] w-[auto]">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-poppins gap-[21px] items-center justify-start w-[100%]">
              <div className="bg-gray_53 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[43px] py-[24px] w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[42px] items-start justify-start w-[100%]">
                  <div className="flex flex-1 flex-col gap-[23px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[31px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal font-rubik not-italic text-bluegray_900 text-left tracking-[-0.50px] w-[auto]"
                        variant="body1"
                      >
                        Living Room
                      </Text>
                      <Text
                        className="font-raleway md:max-w-[100%] max-w-[313px] text-black_900 text-left tracking-[-0.50px]"
                        as="h3"
                        variant="h3"
                      >
                        The best foam padded chair
                      </Text>
                    </div>
                    <Button className="border-[2px] border-bluegray_900 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[13px] text-[16px] text-bluegray_900 text-center tracking-[-0.50px] w-[auto]">
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
              <PagerIndicator
                className="flex h-[15px] justify-center w-[75px]"
                count={3}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray_900 w-[15px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray_200 w-[15px]"
                selectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
              />
            </div>
          </div>
        </div>
        <div className="flex font-raleway items-center justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex flex-col gap-[43px] items-center justify-start max-w-[1290px] mx-[auto] w-[100%]">
            <Text
              className="font-bold text-black_900 text-center tracking-[-0.50px] w-[auto]"
              as="h2"
              variant="h2"
            >
              Related Products
            </Text>
            <div className="flex flex-col font-rubik gap-[43px] items-center justify-start w-[100%]">
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
                      className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mx-[10px]"
                      orientation="horizontal"
                    >
                      {productCardPropList1.map((props, index) => (
                        <React.Fragment key={`ProductCard${index}`}>
                          <ProductCard
                            className="flex flex-col items-start justify-start w-[100%]"
                            category="Living Room"
                            furniturename="Teak wood chair"
                            price="$24"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
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
                className="flex gap-[15px] h-[15px] items-start justify-center max-w-[1289px] w-[100%]"
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
        </div>
        <div className="flex font-rubik items-start justify-start max-w-[1428px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
          <SubscriptionCard className="bg-gradient  flex flex-col items-start justify-start max-w-[1278px] sm:pl-[20px] md:pl-[40px] pl-[59px] py-[46px] w-[100%]" />
        </div>
        <FooterCard className="bg-black_900 flex font-raleway items-center justify-center md:px-[20px] px-[75px] py-[50px] w-[100%]" />
      </div>
    </>
  );
};

export default DetailReviewPage;
