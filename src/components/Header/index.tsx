import React from "react";

import { Img, SelectBox, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
          <div className="header-row ">
            <Img
              src="images/img_car.svg"
              className="h-[30px] w-[90px]"
              alt="car"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul className="flex sm:flex-1 flex-row gap-[36px] sm:hidden items-center justify-between sm:w-[100%] w-[498px] common-row-list">
            <li className="mb-[1px] sm:w-[100%] sm:my-[10px] sm:mx-[0] w-[17%]">
              <SelectBox
                className="font-normal font-rubik leading-[normal] not-italic text-[18px] text-black_900 text-left tracking-[-0.50px]"
                placeholderClassName="text-black_900"
                name="frameFour"
                placeholder="Home"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
            </li>
            <li className="mt-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="cursor-pointer font-normal font-rubik not-italic text-[18px] text-black_900 text-left tracking-[-0.50px]"
                href="javascript:"
              >
                Shop
              </a>
            </li>
            <li className="mt-[3px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                className="cursor-pointer font-normal font-rubik not-italic text-[18px] text-black_900 text-left tracking-[-0.50px]"
                href="javascript:"
              >
                Blog
              </a>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
              <a
                className="cursor-pointer font-normal font-rubik not-italic text-[18px] text-black_900 text-left tracking-[-0.50px]"
                href="javascript:"
              >
                About
              </a>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
              <a
                className="cursor-pointer font-normal font-rubik not-italic text-[18px] text-black_900 text-left tracking-[-0.50px]"
                href="javascript:"
              >
                Contact
              </a>
            </li>
            <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
              <a
                className="cursor-pointer font-normal font-rubik not-italic text-[18px] text-black_900 text-left tracking-[-0.50px]"
                href="javascript:"
              >
                Team
              </a>
            </li>
          </ul>
          <Img
            src="images/img_icon.svg"
            className="h-[24px] sm:hidden w-[132px]"
            alt="icon"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
