import React from "react";

import { Img, Text } from "components";

type BlogDetailCardrecentProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ image: string; furniture: string; date: string }>;

const BlogDetailCardrecent: React.FC<BlogDetailCardrecentProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[15px] items-center justify-start w-[100%]">
          <Img
            src={props?.image}
            className="h-[70px] md:h-[auto] object-cover w-[70px]"
            alt="image"
          />
          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
            <Text
              className="font-bold font-raleway text-black_900 text-left w-[auto]"
              variant="body2"
            >
              {props?.furniture}
            </Text>
            <Text
              className="font-normal font-rubik not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
              variant="body3"
            >
              {props?.date}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

BlogDetailCardrecent.defaultProps = {
  image: "images/img_rectangle1480_1.png",
  furniture: "How to choose a chair at home",
  date: "December 27, 2021",
};

export default BlogDetailCardrecent;
