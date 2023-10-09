import localFont from "next/font/local";

const futural = localFont({
  src: [
    {
      path: "./SFUFuturaLight.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./SFUFuturaLightOblique.ttf",
      style: "italic",
      weight: "300",
    },
    {
      path: "./SFUFuturaRegular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./SFUFuturaOblique.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./SFUFuturaBook.ttf",
      style: "normal",
      weight: "500",
    },

    {
      path: "./SFUFuturaBookOblique.ttf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./SFUFuturaBold.ttf",
      style: "normal",
      weight: "700",
    },

    {
      path: "./SFUFuturaBoldOblique.ttf",
      style: "italic",
      weight: "700",
    },

    {
      path: "./SFUFuturaExtraBold.ttf",
      style: "normal",
      weight: "800",
    },

    {
      path: "./SFUFuturaExtraBoldOblique.ttf",
      style: "italic",
      weight: "800",
    },

    {
      path: "./SFUFuturaHeavy.ttf",
      style: "normal",
      weight: "900",
    },

    {
      path: "./SFUFuturaHeavyOblique.ttf",
      style: "italic",
      weight: "900",
    },
  ],
});

export default futural;