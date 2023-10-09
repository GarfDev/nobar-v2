"use client";

import { Navbar } from "@/app/components";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, easings, useSpring, useTrail } from "@react-spring/web";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import BarSpace from "../../../public/bar-space.jpg";
import Barview from "../../../public/bar-view.jpg";
import GirlOutside from "../../../public/girl-outside.jpg";
import OthersAndLook from "../../../public/others-and-looks.png";
import NguyetVongLauView from "../../../public/nguyet-vong-lau-view.jpg";
import NoBarBlackWhite from "../../../public/no-bar-black-white.png";
import NoBarPurpleGreen from "../../../public/no-bar-purple-green.png";
import { MAIN_SLIDESHOW, OFFSET_ARR, PAGE_COUNT } from "./constants";

interface Props {
  params: { locale: string };
}

export default function Home({ params }: Props) {
  const containerRef = useRef<IParallax>(null!);

  //States
  const [activityMap, setActivityMap] = useState<any>({});

  // Mapped to values

  // Animations
  const navbar = useSpring({
    from: { top: "-100%", right: "0%" },
    to: { top: "0", right: "0%" },
    config: { duration: 1000, easing: easings.easeInOutCirc },
    delay: 700,
  });

  const gradientBackground = useSpring({
    from: { top: "-100%", opacity: 0 },
    to: { top: "0%", opacity: 1 },
    config: { duration: 400 },
    delay: 700,
  });
  const background = useSpring({
    from: { background: "#533A70" },
    to: { background: "#321C48" },
    config: { duration: 700 },
  });

  const coloredLogo = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 700 },
  });
  const blackWhiteLogo = useSpring({
    from: { opacity: 0 },
    to: [
      { opacity: 0.3 },
      { opacity: 0 },
      { opacity: 0.5 },
      { opacity: 0.3 },
      { opacity: 1 },
    ],
    config: { duration: 300 },
  });

  // Functions
  const scrollMapper = () => {
    if (containerRef.current) {
      OFFSET_ARR.forEach((offset, index) => {
        if (activityMap[index + 1]) return;
        if (containerRef.current.current >= offset) {
          setActivityMap((pre: any) => ({ ...pre, [index + 1]: true }));
        }
      });
    }
  };

  // Side-Effect
  useEffect(() => {
    const container = document.querySelector(".container-main");
    container?.addEventListener("wheel", scrollMapper);

    return () => {
      container?.removeEventListener("wheel", scrollMapper);
    };
  }, []);

  // Main return
  return (
    <main className="scroll-smooth w-full h-full">
      <Parallax
        ref={containerRef}
        config={{ friction: 40 }}
        className="scroll-smooth container-main"
        style={{ top: "0", left: "0" }}
        pages={PAGE_COUNT}
      >
        {/* FIRST PAGE */}

        <ParallaxLayer className=" z-[2]" offset={0} speed={0.5} factor={1}>
          <animated.div
            style={{ ...navbar }}
            className="absolute w-full h-[100px] z-[20]"
          >
            <Navbar params={params} />
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} factor={8}>
          <animated.div style={{ ...background }} className="relative h-full" />
        </ParallaxLayer>

        <ParallaxLayer
          className="relative z-[1]"
          offset={0}
          speed={0.5}
          factor={3}
        >
          <animated.div className="relative h-[100vh]">
            <animated.img
              className="absolute left-[0] right-[0] top-[0] z-[2] bottom-[0] m-[auto]"
              style={{ ...blackWhiteLogo }}
              src={NoBarBlackWhite.src}
              width={500}
              height={500}
              alt="no-bar-logo"
            />
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer className="relative" offset={0} speed={0.5} factor={3}>
          <animated.div className="relative h-[100vh]">
            <animated.img
              className="absolute left-[0] right-[0] top-[0] z-[0] bottom-[0] m-[auto]"
              style={{ ...coloredLogo }}
              src={NoBarPurpleGreen.src}
              width={500}
              height={500}
              alt="no-bar-logo"
            />
            <animated.div
              className="absolute left-[0] top-[0] w-[100%] z-1 bg-gradient-to-b from-[rgba(33,18,11,0.75)] to-[#321C48] object-cover h-full"
              style={{ ...gradientBackground }}
            ></animated.div>
          </animated.div>
        </ParallaxLayer>

        {/* SEC PAGE */}

        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.8}
          className="relative z-[3]"
        >
          <div className="absolute right-[-750px] left-[0] bottom-[0] top-[-200px] m-[auto] w-[600px] h-[600px]">
            <FirstPageTextTrail open={activityMap[2] === true}>
              <h3 className="text-2xl">
                xin chào bạn mến đã đến với NO bar Đà Lạt!
              </h3>
              <p className="text-3xl font-light mt-10">Về chúng tôi</p>
              <p className="text-3xl font-light mt-2">một nơi KHÔNG NƠI CHỐN</p>
              <p className="text-3xl font-light mt-2">
                một nơi THỜI GIAN MẤT DẤU
              </p>
              <p className="text-3xl font-light mt-2">
                một nơi của KHOẢNG TRỜI TÍM NGẮT
              </p>
              <p className="text-3xl font-light mt-2">
                và chỉ còn lại NHỮNG KẺ MỘNG MƠ
              </p>

              <p className="text-3xl font-light mt-10">Về chúng tôi</p>
              <p className="text-3xl font-light mt-2">không có gì để nói về.</p>
            </FirstPageTextTrail>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.3}
          className="relative z-[2]"
        >
          <FirstPageImageTrail delay={20} open={activityMap[2] === true}>
            <animated.img
              className="absolute left-[0] right-[750px] bottom-[0] top-[0] m-[auto] w-[700px] h-[900px] rounded-xl"
              src={NguyetVongLauView.src}
              width={500}
              height={500}
              alt="no-bar-logo"
            />
          </FirstPageImageTrail>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.5}
          className="relative z-[2]"
        >
          <FirstPageImageTrail delay={120} open={activityMap[2] === true}>
            <animated.img
              className="absolute left-[30px] bottom-[-250px] w-[400px] h-[600px] rounded-xl object-cover"
              src={GirlOutside.src}
              width={500}
              height={500}
              alt="no-bar-logo"
            />
          </FirstPageImageTrail>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.7}
          className="relative z-[2]"
        >
          <FirstPageImageTrail delay={50} open={activityMap[2] === true}>
            <animated.img
              className="absolute right-[10px] bottom-[-400px] w-[400px] h-[600px] rounded-xl"
              src={Barview.src}
              width={500}
              height={500}
              alt="no-bar-logo"
            />
          </FirstPageImageTrail>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.5}
          className="relative z-[1]"
        >
          <FirstPageImageTrail delay={50} open={activityMap[2] === true}>
            <animated.img
              className="absolute right-[370px] bottom-[-500px] w-[400px] h-[600px] object-cover rounded-xl"
              src={MAIN_SLIDESHOW[3].src}
              width={500}
              height={500}
              alt="no-bar-logo"
            />
          </FirstPageImageTrail>
        </ParallaxLayer>

        {/** THIRD PAGE */}
        <ParallaxLayer
          offset={2.2}
          factor={1}
          speed={1}
          className="relative flex z-[1] flex-col items-center"
        >
          <FirstPageImageTrail delay={60} open={activityMap[3] === true}>
            <div className="flex flex-col items-center">
              <p className="font-light text-xl">Branding concept</p>
              <p className="mt-12 text-5xl text-center px-[20%]">
                mỗi chúng ta là mỗi cá thể hiện sinh độc nhất, nhiều lúc lạc
                lối, đôi lúc đúng đường. Và không gian này được tạo ra để tôn
                vinh tất thảy sự hiện diện bên trong bạn.
              </p>
            </div>
          </FirstPageImageTrail>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.6}
          factor={1}
          speed={0.7}
          className="relative flex flex-col justify-center items-center"
        >
          <animated.img
            className="absolute z-[1] w-[1500px] h-[900px] object-cover rounded-xl"
            src={BarSpace.src}
            width={500}
            height={500}
            alt="no-bar-logo"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.99}
          factor={1}
          speed={1.3}
          className="relative flex z-[1] justify-end pt-[100px] px-[100px]"
        >
          <animated.img
            className="absolute w-[400px] h-[700px] object-cover"
            src={MAIN_SLIDESHOW[1].src}
            width={500}
            height={500}
            alt="no-bar-logo"
          />
        </ParallaxLayer>

        {/** FOUR PAGE*/}

        <ParallaxLayer
          offset={3}
          factor={1}
          speed={1}
          className="relative px-[200px]  z-[1]"
        >
          <h2 className="font-bold text-9xl">MODERN COCKTAILS</h2>
          <p className="text-3xl mt-6">
            lấy cảm hứng từ những thành tố cơ bản bên trong ta
          </p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.95}
          factor={1}
          speed={0.1}
          className="relative px-[200px] z-[1]"
        >
          <div className="absolute flex flex-col top-[0] bottom-[0] left-[-50%] right-[0] m-[auto] w-[600px]">
            <p className="font-bold uppercase text-2xl mb-5">
              NO.5 - người khác và cái nhìn
            </p>
            <p className="font-thin text-xl mb-10">asdasdasdasdasd</p>
            <animated.img
              className="w-[100%] h-[800px] object-cover"
              src={OthersAndLook.src}
              width={500}
              height={500}
              alt="no-bar-logo"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          factor={0.5}
          speed={-0.1}
          className="relative px-[200px] z-[1]"
        >
          <div className="absolute flex flex-col top-[0] bottom-[0] left-[0] right-[-50%] m-[auto] w-[600px]">
            <animated.img
              className="w-[100%] h-[700px] object-cover rounded-xl"
              src={OthersAndLook.src}
              width={500}
              height={500}
              alt="no-bar-logo"
            />
            <p className="font-bold uppercase text-2xl mt-5">
              NO.5 - người khác và cái nhìn
            </p>
            <p className="font-thin text-xl mt-10">asdasdasdasdasd</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}

const FirstPageTextTrail: React.FC<{ open: boolean; children: ReactNode }> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    delay: 50,
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });
  return (
    <>
      {trail.map(({ ...style }, index) => (
        <animated.div key={index} className="" style={style}>
          <animated.div>{items[index]}</animated.div>
        </animated.div>
      ))}
    </>
  );
};

const FirstPageImageTrail: React.FC<{
  delay: number;
  open: boolean;
  children: ReactNode;
}> = ({ open, delay, children }) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    delay,
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <>
      {trail.map(({ ...style }, index) => (
        <animated.div key={index} className="" style={style}>
          {items[index]}
        </animated.div>
      ))}
    </>
  );
};
