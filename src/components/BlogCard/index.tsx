import React from "react";

import { Img, Text, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

type BlogCardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    thumbnail: string;
    title: string;
    author: string;
    publishDate: string;
    description: string;
    read_More: string;
  }>;

const BlogCard: React.FC<BlogCardProps> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
          <Img
            src={props?.thumbnail}
            className="h-[400px] sm:h-[auto] object-cover w-[100%]"
            alt="rectangleEighteen"
          />
          <div className="flex flex-col gap-[19px] items-start justify-start w-[100%]">
            <Text
              className="font-bold font-raleway text-black_900 text-left tracking-[-0.50px] w-[auto]"
              as="h5"
              variant="h5"
            >
              {props?.title}
            </Text>
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-row gap-[17px] items-center justify-start md:w-[100%] w-[416px]">
                <div className="flex flex-row gap-[5px] items-center justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_edit.svg"
                    className="h-[18px] w-[18px]"
                    alt="edit"
                  />
                  <Text
                    className="font-normal font-rubik not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                    variant="body3"
                  >
                    {props?.author}
                  </Text>
                </div>
                <Line className="bg-gray_500 h-[15px] w-[1px]" />
                <div className="flex flex-row gap-[5px] items-center justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_calendar.svg"
                    className="h-[18px] w-[18px]"
                    alt="calendar"
                  />
                  <Text
                    className="font-normal font-rubik not-italic text-black_900 text-left tracking-[-0.50px] w-[auto]"
                    variant="body3"
                  >
                    {props?.publishDate}
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="font-normal font-rubik leading-[35.00px] md:max-w-[100%] max-w-[416px] not-italic text-gray_500 text-left tracking-[-0.50px]"
              variant="body3"
            >
              {props?.description}
            </Text>
            <Button
              className="common-pointer border-[1px] border-black_900 border-solid cursor-pointer font-rubik font-semibold leading-[normal] min-w-[139px] py-[11px] text-[18px] text-black_900 text-center tracking-[-0.50px] w-[auto]"
              onClick={() => navigate("/blogdetail")}
            >
              {props?.read_More}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

BlogCard.defaultProps = {
  thumbnail: "images/img_rectangle18_400x416.png",
  title: "Why should you choose good wood",
  author: "By Admin",
  publishDate: "December 10, 2022",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever.",
  read_More: "Read More",
};

export default BlogCard;
