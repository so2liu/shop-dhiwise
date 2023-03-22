import React from "react";

import { Img, Button, Text } from "components";
import { useNavigate } from "react-router-dom";

type ProductCardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    image: string;
    category: string;
    status: string;
    furniturename: string;
    price: string;
  }>;

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={props.className}
        onClick={() => navigate("/shopdetaildescription")}
      >
        <div className="h-[400px] relative w-[100%]">
          <Img
            src={props?.image}
            className="absolute h-[400px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
            alt="image"
          />
          <Button className="absolute bg-bluegray_900 bottom-[4%] cursor-pointer font-normal font-rubik leading-[normal] left-[5%] not-italic px-[15px] py-[9px] text-[14px] text-center text-white_A700 tracking-[-0.50px] w-[106px]">
            {props?.category}
          </Button>
          <div className="absolute flex flex-col gap-[106px] md:gap-[40px] items-center justify-start right-[5%] self-stretch top-[4%] w-[auto]">
            {!!props?.status ? (
              <Text
                className="bg-red_A200 font-normal font-rubik justify-center not-italic px-[7px] py-[2px] self-stretch text-left text-white_A700 tracking-[-0.50px] w-[auto]"
                variant="body3"
              >
                {props?.status}
              </Text>
            ) : null}
            <Img
              src="images/img_save_yellow_100.svg"
              className="h-[100px] w-[40px]"
              alt="save"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-[100%]">
          <Text
            className="font-raleway font-semibold text-black_900 text-left tracking-[-0.50px] w-[auto]"
            as="h6"
            variant="h6"
          >
            {props?.furniturename}
          </Text>
          <Text
            className="font-normal font-rubik not-italic text-bluegray_900 text-left tracking-[-0.50px] w-[auto]"
            variant="body1"
          >
            {props?.price}
          </Text>
        </div>
      </div>
    </>
  );
};

ProductCard.defaultProps = {
  image: "images/img_image_400x308.png",
  category: "Living Room",
  furniturename: "Teak wood chair",
  price: "$24",
};

export default ProductCard;
