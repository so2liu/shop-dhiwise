import React from "react";

import Header from "components/Header";
import { Text, Img, Button } from "components";
import BlogCard from "components/BlogCard";
import SubscriptionCard from "components/SubscriptionCard";
import Footer from "components/Footer";

const BlogPage: React.FC = () => {
  const blogCardPropList = [
    { thumbnail: "images/img_rectangle18_400x416.png" },
    { thumbnail: "images/img_rectangle18_8.png" },
    { thumbnail: "images/img_rectangle18_9.png" },
    { thumbnail: "images/img_rectangle18_400x417.png" },
    { thumbnail: "images/img_rectangle18_10.png" },
    { thumbnail: "images/img_rectangle18_11.png" },
    { thumbnail: "images/img_rectangle18_12.png" },
    { thumbnail: "images/img_rectangle18_13.png" },
    { thumbnail: "images/img_rectangle18_14.png" },
  ];

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-rubik gap-[126px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <Header className="bg-white_A700 flex items-center justify-center md:px-[20px] px-[75px] py-[35px] w-[100%]" />
        <div className="flex items-start justify-center sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <div className="flex flex-col gap-[54px] items-center justify-start max-w-[1291px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[50px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
                <Text
                  className="font-bold font-raleway text-black_900 text-center tracking-[-0.50px] w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Read Our Latest Blog
                </Text>
                <Text
                  className="font-normal font-rubik leading-[35.00px] not-italic text-center text-gray_500 tracking-[-0.50px]"
                  variant="body1"
                >
                  <>
                    We write various things related to furniture, from tips and
                    what things <br />I need to pay attention to when choosing
                    furniture
                  </>
                </Text>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <div className="gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
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
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[10px] items-center justify-center w-[100%]">
              <Img
                src="images/img_arrowleft.svg"
                className="h-[15px] w-[15px]"
                alt="arrowleft"
              />
              <Button className="bg-bluegray_900 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded-[17px] text-[14px] text-center text-white_A700 tracking-[-0.50px] w-[35px]">
                1
              </Button>
              <Button className="bg-gray_100 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded-[17px] text-[14px] text-black_900 text-center tracking-[-0.50px] w-[35px]">
                2
              </Button>
              <Button className="bg-gray_100 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded-[17px] text-[14px] text-black_900 text-center tracking-[-0.50px] w-[35px]">
                3
              </Button>
              <Button className="bg-gray_100 flex h-[35px] items-center justify-center p-[7px] rounded-[17px] w-[35px]">
                <Img
                  src="images/img_user.svg"
                  className="h-[20px]"
                  alt="user"
                />
              </Button>
              <Img
                src="images/img_arrowright.svg"
                className="h-[15px] w-[15px]"
                alt="arrowright"
              />
            </div>
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

export default BlogPage;
