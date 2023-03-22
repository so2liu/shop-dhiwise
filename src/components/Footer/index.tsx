import React from "react";

import { Text, Button, Img } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  function handleNavigate2() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate3() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[149px] md:gap-[40px] items-center justify-center w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
            <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
              <Text
                className="font-raleway text-gray_53 text-left tracking-[-0.50px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Furnit.
              </Text>
              <Text
                className="font-normal font-rubik leading-[35.00px] md:max-w-[100%] max-w-[360px] not-italic text-gray_50_a3 text-left tracking-[-0.50px]"
                variant="body2"
              >
                Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
                facilisi vivamus proin lit laoreet phasel alilus porttitor
                inter, facilisis condiment tarime egestas rhoncus dapibus
                iaculis alemir.
              </Text>
            </div>
            <div className="flex flex-col gap-[20px] items-start justify-start w-[209px]">
              <Text
                className="font-raleway font-semibold text-gray_53 text-left tracking-[-0.50px] w-[auto]"
                as="h6"
                variant="h6"
              >
                Customer
              </Text>
              <ul className="flex flex-col gap-[24px] items-start justify-start self-stretch md:w-[100%] w-[auto] common-column-list">
                <li className="w-[auto]">
                  <Text
                    className="cursor-pointer font-normal font-rubik not-italic text-gray_50_a3 text-left tracking-[-0.50px]"
                    variant="body3"
                  >
                    Order Status
                  </Text>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-rubik not-italic text-[14px] text-gray_50_a3 text-left tracking-[-0.50px]"
                    href="javascript:"
                  >
                    Collections
                  </a>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-rubik not-italic text-[14px] text-gray_50_a3 text-left tracking-[-0.50px]"
                    href="javascript:"
                  >
                    Our Story
                  </a>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-rubik not-italic text-[14px] text-gray_50_a3 text-left tracking-[-0.50px]"
                    href="javascript:"
                  >
                    Affiliates
                  </a>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-rubik not-italic text-[14px] text-gray_50_a3 text-left tracking-[-0.50px]"
                    href="javascript:"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[20px] items-start justify-start w-[209px]">
              <Text
                className="font-raleway font-semibold text-gray_53 text-left tracking-[-0.50px] w-[auto]"
                as="h6"
                variant="h6"
              >
                Information
              </Text>
              <ul className="flex flex-col gap-[24px] items-start justify-start self-stretch md:w-[100%] w-[auto] common-column-list">
                <li className="w-[auto]">
                  <Text
                    className="cursor-pointer font-normal font-rubik not-italic text-gray_50_a3 text-left tracking-[-0.50px]"
                    variant="body3"
                  >
                    Customer Service
                  </Text>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-rubik not-italic text-[14px] text-gray_50_a3 text-left tracking-[-0.50px]"
                    href="javascript:"
                  >
                    Careers
                  </a>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-rubik not-italic text-[14px] text-gray_50_a3 text-left tracking-[-0.50px]"
                    href="javascript:"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[20px] items-start justify-start w-[220px]">
              <Text
                className="font-raleway font-semibold text-gray_53 text-left tracking-[-0.50px] w-[auto]"
                as="h6"
                variant="h6"
              >
                Follow Us
              </Text>
              <div className="flex flex-row gap-[20px] items-start justify-start self-stretch w-[auto]">
                <Button className="bg-yellow_100 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                  <Img
                    src="images/img_camera.svg"
                    className="h-[24px]"
                    alt="camera_One"
                  />
                </Button>
                <Button
                  className="common-pointer bg-yellow_100 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]"
                  onClick={handleNavigate3}
                >
                  <Img
                    src="images/img_facebook.svg"
                    className="h-[24px]"
                    alt="facebook_One"
                  />
                </Button>
                <Button
                  className="common-pointer bg-yellow_100 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]"
                  onClick={handleNavigate2}
                >
                  <Img
                    src="images/img_twitter.svg"
                    className="h-[24px]"
                    alt="twitter_One"
                  />
                </Button>
                <Button className="bg-yellow_100 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                  <Img
                    src="images/img_music.svg"
                    className="h-[24px]"
                    alt="music_One"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
            <Text
              className="font-normal font-rubik not-italic text-gray_50_a3 text-left tracking-[-0.50px] w-[auto]"
              variant="body2"
            >
              © Copyright 2022. All Rights Reserved.
            </Text>
            <div className="flex flex-row gap-[41px] items-start justify-start w-[272px]">
              <Text
                className="flex-1 font-normal font-rubik not-italic text-gray_50_a3 text-left tracking-[-0.50px] w-[auto]"
                variant="body2"
              >
                Terms of condition
              </Text>
              <Text
                className="font-normal font-rubik not-italic text-gray_50_a3 text-left tracking-[-0.50px] w-[auto]"
                variant="body2"
              >
                Privacy Policy
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
