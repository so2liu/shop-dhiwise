import React from "react";

import Header from "components/Header";
import { Text, Img, Line, Button, Input, CheckBox, List } from "components";
import BlogDetailCardrecent from "components/BlogDetailCardrecent";
import BlogCard from "components/BlogCard";
import SubscriptionCard from "components/SubscriptionCard";
import Footer from "components/Footer";

const BlogDetailPage: React.FC = () => {
  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate1() {
    window.location.href = "https://www.facebook.com/login/";
  }

  const blogDetailCardrecentPropList = [
    { image: "images/img_rectangle1480_1.png" },
    { image: "images/img_image_70x70.png" },
    { image: "images/img_image_19.png" },
    { image: "images/img_image_20.png" },
  ];
  const blogCardPropList = [
    { thumbnail: "images/img_rectangle18_400x416.png" },
    { thumbnail: "images/img_rectangle18_8.png" },
    { thumbnail: "images/img_rectangle18_9.png" },
  ];

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-rubik gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <Header className="bg-white_A700 flex items-center justify-center md:px-[20px] px-[75px] py-[35px] w-[100%]" />
        <div className="flex items-start justify-center sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[85px] items-center justify-start max-w-[1291px] mx-[auto] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                <div className="flex flex-col font-raleway gap-[16px] items-center justify-start w-[100%]">
                  <Text
                    className="font-bold text-black_900 text-center tracking-[-0.50px] w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Why should you choose good wood
                  </Text>
                  <div className="flex flex-row font-rubik gap-[18px] items-center justify-center max-w-[1290px] w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-start self-stretch w-[auto]">
                      <Img
                        src="images/img_edit.svg"
                        className="h-[24px] w-[24px]"
                        alt="edit"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                        variant="body1"
                      >
                        By Admin
                      </Text>
                    </div>
                    <Line className="bg-gray_500 h-[15px] w-[1px]" />
                    <div className="flex flex-row gap-[10px] items-center justify-start self-stretch w-[auto]">
                      <Img
                        src="images/img_calendar.svg"
                        className="h-[24px] w-[24px]"
                        alt="calendar"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                        variant="body1"
                      >
                        December 10, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-normal font-rubik not-italic text-center text-gray_500 tracking-[-0.50px] w-[auto]"
                  variant="body2"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever.
                </Text>
              </div>
              <Img
                src="images/img_rectangle1488_450x1291.png"
                className="h-[450px] md:h-[auto] object-cover w-[100%]"
                alt="rectangle1488"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[110px] md:gap-[40px] items-start justify-between w-[100%]">
              <div className="flex flex-1 flex-col gap-[50px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="font-raleway text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      How to choose the best chair
                    </Text>
                    <Text
                      className="font-normal font-rubik leading-[35.00px] md:max-w-[100%] max-w-[853px] not-italic text-gray_500 text-left tracking-[-0.50px]"
                      variant="body2"
                    >
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      dictumst posuere, lectus dis vehicula augue elementum quam
                      risus. Placerat dictum lobortis lacinia volutpat morbi cum
                      justo commodo est aliquam, facilisi consequat ligula
                      vivamus faucibus ac sociis cubilia neque, felis fringilla
                      aenean hac eleifend tellus pellentesque quis suspendisse.
                      Sociosqu suscipit sodales taciti rutrum condimentum
                      conubia volutpat cubilia mi, velit curabitur consequat
                      proin neque commodo interdum eleifend dui, ac magna leo
                      ridiculus facilisi duis sapien etiam.
                    </Text>
                    <Text
                      className="font-normal font-rubik leading-[35.00px] md:max-w-[100%] max-w-[853px] not-italic text-gray_500 text-left tracking-[-0.50px]"
                      variant="body2"
                    >
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      dictumst posuere, lectus dis vehicula augue elementum quam
                      risus. Placerat dictum lobortis lacinia volutpat morbi cum
                      justo commodo est aliquam, facilisi consequat ligula
                      vivamus faucibus ac sociis cubilia neque.
                    </Text>
                  </div>
                  <Img
                    src="images/img_rectangle1489_500x853.png"
                    className="h-[500px] sm:h-[auto] object-cover w-[100%]"
                    alt="rectangle1489"
                  />
                  <Text
                    className="font-normal leading-[35.00px] md:max-w-[100%] max-w-[853px] not-italic text-gray_500 text-left tracking-[-0.50px]"
                    variant="body2"
                  >
                    Massa mus mattis natoque ante sapien venenatis nisl, mauris
                    malesuada parturient fringilla dignissim tortor morbi,
                    imperdiet quam faucibus id nunc cum. Suscipit lectus curae
                    cum in taciti ullamcorper accumsan luctus, euismod ornare
                    fames aenean ultrices odio ultricies et mus, gravida
                    condimentum senectus hendrerit lobortis sociis quam. Blandit
                    placerat cras suscipit egestas arcu nam ligula rhoncus,
                    tortor purus proin nulla faucibus odio molestie semper,
                    venenatis urna mollis libero praesent cum nec.
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_rectangle1490_500x417.png"
                      className="flex-1 h-[500px] md:h-[auto] max-h-[500px] object-cover w-[auto] sm:w-[auto]"
                      alt="rectangle1490"
                    />
                    <Img
                      src="images/img_rectangle1491_500x417.png"
                      className="flex-1 h-[500px] md:h-[auto] max-h-[500px] object-cover w-[auto] sm:w-[auto]"
                      alt="rectangle1491"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-raleway gap-[50px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[100%]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Tag :
                    </Text>
                    <div className="flex flex-row font-rubik gap-[10px] items-start justify-start self-stretch w-[auto]">
                      <Button className="bg-bluegray_900 border-[1px] border-bluegray_900 border-solid cursor-pointer font-normal leading-[normal] min-w-[62px] not-italic px-[12px] py-[6px] rounded-[5px] text-[16px] text-center text-yellow_100 tracking-[-0.50px] w-[auto]">
                        Chair
                      </Button>
                      <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[65px] not-italic px-[12px] py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                        Lamp
                      </Button>
                      <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[96px] not-italic px-[12px] py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                        Minimalist
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-black_900 text-left tracking-[-0.50px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Leave a Comment
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
              </div>
              <div className="flex flex-col gap-[50px] items-start justify-start w-[328px]">
                <div className="flex flex-row items-start justify-start w-[100%]">
                  <Input
                    wrapClassName="bg-gray_53 px-[12px] py-[16px] w-[68%]"
                    className="font-normal leading-[normal] md:h-[auto] not-italic p-[0] placeholder:text-black_900_3f sm:h-[auto] text-[14px] text-black_900_3f text-left tracking-[-0.50px] w-[100%]"
                    name="frame48096101"
                    placeholder="Find Something..."
                  ></Input>
                  <Button className="bg-bluegray_900 cursor-pointer font-semibold leading-[normal] min-w-[107px] sm:px-[20px] px-[30px] py-[16px] text-[14px] text-center text-yellow_100 tracking-[-0.50px] w-[auto]">
                    Search
                  </Button>
                </div>
                <div className="flex flex-col font-raleway gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Recent Post
                  </Text>
                  <List
                    className="flex-col gap-[20px] grid items-start w-[100%]"
                    orientation="vertical"
                  >
                    {blogDetailCardrecentPropList.map((props, index) => (
                      <React.Fragment key={`BlogDetailCardrecent${index}`}>
                        <BlogDetailCardrecent
                          className="flex flex-1 flex-col items-start justify-center my-[0] w-[100%]"
                          furniture="How to choose a chair at home"
                          date="December 27, 2021"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                </div>
                <div className="flex flex-col font-josefinsans gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Follow Us
                  </Text>
                  <div className="flex flex-row gap-[20px] items-start justify-start w-[100%]">
                    <Button className="bg-yellow_100 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_camera.svg"
                        className="h-[24px]"
                        alt="camera"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-yellow_100 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]"
                      onClick={handleNavigate1}
                    >
                      <Img
                        src="images/img_facebook.svg"
                        className="h-[24px]"
                        alt="facebook"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-yellow_100 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]"
                      onClick={handleNavigate}
                    >
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button className="bg-yellow_100 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_music.svg"
                        className="h-[24px]"
                        alt="music"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col font-josefinsans gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Our Gallery
                  </Text>
                  <List
                    className="flex-col gap-[18px] grid items-start w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-[14px] items-start justify-start my-[0] w-[100%]">
                      <Img
                        src="images/img_rectangle21_100x100.png"
                        className="h-[100px] md:h-[auto] object-cover w-[100px]"
                        alt="rectangleTwentyOne"
                      />
                      <Img
                        src="images/img_image_19.png"
                        className="h-[100px] md:h-[auto] object-cover w-[100px]"
                        alt="image_One"
                      />
                      <Img
                        src="images/img_image_100x100.png"
                        className="h-[100px] md:h-[auto] object-cover w-[100px]"
                        alt="image_Two"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[14px] items-start justify-start my-[0] w-[100%]">
                      <Img
                        src="images/img_image_21.png"
                        className="h-[100px] md:h-[auto] object-cover w-[100px]"
                        alt="image"
                      />
                      <Img
                        src="images/img_image_22.png"
                        className="h-[100px] md:h-[auto] object-cover w-[100px]"
                        alt="image_One"
                      />
                      <Img
                        src="images/img_image_20.png"
                        className="h-[100px] md:h-[auto] object-cover w-[100px]"
                        alt="image_Two"
                      />
                    </div>
                  </List>
                </div>
                <div className="flex flex-col font-josefinsans gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Tags
                  </Text>
                  <div className="flex flex-col font-poppins gap-[15px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[10px] items-start justify-start w-[100%]">
                      <Button className="bg-bluegray_900 border-[1px] border-bluegray_900 border-solid cursor-pointer font-normal leading-[normal] min-w-[66px] not-italic px-[12px] py-[6px] rounded-[5px] text-[16px] text-center text-yellow_100 tracking-[-0.50px] w-[auto]">
                        Chair
                      </Button>
                      <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[68px] not-italic px-[12px] py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                        Lamp
                      </Button>
                      <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[101px] not-italic px-[12px] py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                        Minimalist
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[10px] items-start justify-start w-[100%]">
                      <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[59px] not-italic px-[12px] py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                        Sofa
                      </Button>
                      <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[58px] not-italic px-[12px] py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                        New
                      </Button>
                      <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[67px] not-italic px-[12px] py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                        Clock
                      </Button>
                    </div>
                    <div className="flex items-start justify-start px-[8px] w-[100%]">
                      <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[66px] not-italic px-[12px] py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                        Pillow
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1291px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
              <Text
                className="font-raleway font-semibold text-black_900 text-center tracking-[-0.50px] w-[auto]"
                as="h2"
                variant="h2"
              >
                Other blogs
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
        <div className="flex items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <SubscriptionCard className="bg-gradient  flex flex-col items-start justify-start max-w-[1291px] mx-[auto] pl-[59px] md:px-[20px] py-[46px] w-[100%]" />
        </div>
        <Footer className="bg-black_900 flex font-raleway items-center justify-center md:px-[20px] px-[75px] py-[50px] w-[100%]" />
      </div>
    </>
  );
};

export default BlogDetailPage;
