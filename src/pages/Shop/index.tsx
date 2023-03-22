import React from "react";

import HeaderCard from "components/HeaderCard";
import { Img, Text, Button, Input, SelectBox } from "components";
import ProductCard from "components/ProductCard";
import SubscriptionCard from "components/SubscriptionCard";
import FooterCard from "components/FooterCard";

const ShopPage: React.FC = () => {
  const productCardPropList = [
    { image: "images/img_image_400x308.png", status: "New" },
    { image: "images/img_image_12.png" },
    { image: "images/img_image_13.png" },
    { image: "images/img_image_15.png" },
    { image: "images/img_image_16.png" },
    { image: "images/img_image_17.png" },
    { image: "images/img_image_14.png" },
    { image: "images/img_image_18.png" },
    { image: "images/img_image_12.png" },
  ];

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-rubik gap-[100px] sm:gap-[40px] md:gap-[40px] items-center justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col md:gap-[40px] gap-[75px] items-start justify-start w-[100%]">
          <HeaderCard className="bg-white_A700 flex items-center justify-center md:px-[20px] px-[75px] py-[35px] w-[100%]" />
          <div className="flex font-poppins items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
            <div className="flex items-start justify-start max-w-[1290px] mx-[auto] w-[100%]">
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
          <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start max-w-[1290px] mx-[auto] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[308px]">
              <div className="flex flex-col gap-[22px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-black_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Filter By Price
                </Text>
                <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                  <Text
                    className="border-[1px] border-gray_500_87 border-solid font-normal font-rubik not-italic pl-[8px] sm:pr-[20px] pr-[35px] py-[7px] rounded-[4px] text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                    variant="body1"
                  >
                    $0
                  </Text>
                  <Text
                    className="font-plusjakartasans font-semibold text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    -
                  </Text>
                  <Text
                    className="border-[1px] border-gray_500_87 border-solid font-normal font-rubik not-italic pl-[8px] sm:pr-[20px] pr-[35px] py-[7px] rounded-[4px] text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                    variant="body1"
                  >
                    $2000
                  </Text>
                </div>
                <Img
                  src="images/img_slider.svg"
                  className="h-[16px] w-[233px]"
                  alt="slider"
                />
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-black_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Filter By Color
                </Text>
                <Img
                  src="images/img_frame48095956.svg"
                  className="h-[40px] w-[100%]"
                  alt="frame48095956"
                />
                <Img
                  src="images/img_frame48095957.svg"
                  className="h-[40px] w-[100%]"
                  alt="frame48095957"
                />
              </div>
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-black_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Product Categories
                </Text>
                <div className="flex flex-col font-poppins gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left tracking-[-0.50px] w-[auto]"
                    variant="body2"
                  >
                    Chair (9)
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                    variant="body2"
                  >
                    Lamp (10)
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                    variant="body2"
                  >
                    Table (12)
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                    variant="body2"
                  >
                    Sofa (6)
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                    variant="body2"
                  >
                    Table (12)
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                    variant="body2"
                  >
                    Clock (5)
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_500 text-left tracking-[-0.50px] w-[auto]"
                    variant="body2"
                  >
                    Pillow (3)
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-black_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Product Tag
                </Text>
                <div className="flex flex-col font-poppins gap-[15px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[10px] items-start justify-start w-[100%]">
                    <Button className="bg-bluegray_900 border-[1px] border-bluegray_900 border-solid cursor-pointer font-normal leading-[normal] min-w-[66px] not-italic py-[6px] rounded-[5px] text-[16px] text-center text-yellow_100 tracking-[-0.50px] w-[auto]">
                      Chair
                    </Button>
                    <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[68px] not-italic py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                      Lamp
                    </Button>
                    <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[101px] not-italic py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                      Minimalist
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[10px] items-start justify-start w-[100%]">
                    <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[59px] not-italic py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                      Sofa
                    </Button>
                    <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[58px] not-italic py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                      New
                    </Button>
                    <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[67px] not-italic py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                      Clock
                    </Button>
                  </div>
                  <Button className="border-[1px] border-gray_500 border-solid cursor-pointer font-normal leading-[normal] min-w-[66px] not-italic px-[12px] py-[6px] rounded-[5px] text-[16px] text-center text-gray_500 tracking-[-0.50px] w-[auto]">
                    Pillow
                  </Button>
                </div>
              </div>
              <div className="h-[400px] relative w-[100%]">
                <Img
                  src="images/img_rectangle29.png"
                  className="h-[400px] m-[auto] object-cover rounded-[10px] md:w-[100%] w-[308px]"
                  alt="rectangleTwentyNine"
                />
                <div className="absolute bottom-[10%] flex flex-col gap-[15px] inset-x-[0] items-center justify-start mx-[auto] self-stretch w-[auto]">
                  <Text
                    className="font-bold font-raleway leading-[35.00px] md:max-w-[100%] max-w-[265px] text-center text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    Make a purchase now and get 50% discount
                  </Text>
                  <Button className="bg-yellow_100 border-[1px] border-solid border-yellow_100 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[107px] px-[20px] py-[7px] rounded-[5px] text-[16px] text-black_900 text-center tracking-[-0.50px] w-[auto]">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-rubik gap-[50px] items-center justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex sm:flex-1 font-rubik items-start justify-start sm:w-[100%] w-[407px]">
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                    <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[74%]">
                      <Input
                        wrapClassName="bg-white_A700 p-[16px] w-[100%]"
                        className="font-normal leading-[normal] not-italic p-[0] placeholder:text-black_900_3f text-[14px] text-black_900_3f text-left tracking-[-0.50px] w-[100%]"
                        name="frame48095984"
                        placeholder="Office Chair"
                      ></Input>
                    </div>
                    <Button className="bg-bluegray_900 cursor-pointer font-semibold leading-[normal] min-w-[107px] sm:px-[20px] px-[30px] py-[16px] text-[14px] text-center text-yellow_100 tracking-[-0.50px] w-[auto]">
                      Search
                    </Button>
                  </div>
                </div>
                <SelectBox
                  className="sm:flex-1 font-medium font-raleway text-[14px] text-black_900 text-left sm:w-[100%] w-[8%]"
                  placeholderClassName="text-black_900"
                  name="sort"
                  placeholder="Sort By"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_black_900_1.svg"
                      className="h-[20px] w-[20px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <div className="gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                  {productCardPropList.map((props, index) => (
                    <React.Fragment key={`ProductCard${index}`}>
                      <ProductCard
                        className="flex flex-1 flex-col items-start justify-start w-[100%]"
                        category="Living Room"
                        furniturename="Teak wood chair"
                        price="$24"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="flex flex-row gap-[10px] items-center justify-center max-w-[962px] w-[100%]">
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
        </div>
        <div className="flex font-rubik items-start justify-start sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
          <SubscriptionCard className="bg-gradient  flex flex-col items-start justify-start max-w-[1290px] mx-[auto] pl-[59px] md:px-[20px] py-[46px] w-[100%]" />
        </div>
        <FooterCard className="bg-black_900 flex font-raleway items-center justify-center md:px-[20px] px-[75px] py-[50px] w-[100%]" />
      </div>
    </>
  );
};

export default ShopPage;
