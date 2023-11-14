import cloudImg from "./images/michael-diane-weidner-h-rP5KSC2W0-unsplash.jpg";
import sunnyImg from "./images/dedu-adrian-BxT5oqgztNc-unsplash.jpg";
import rainImg from "./images/frame-harirak-5Q5jtb1SEVo-unsplash.jpg";
import snowImg from "./images/ali-inay-yNaGxHqjOuw-unsplash.jpg";
import nightSnow from "./images/aditya-vyas-PzhmEp_aDU4-unsplash.jpg";
import nightRain from "./images/benjamin-sow-QjR_snVQn4c-unsplash.jpg";
import nightClear from "./images/chan-hoi-uj-w-v7OFT4-unsplash.jpg";
import nightCloud from "./images/chuttersnap-rk2s0sm8xF4-unsplash.jpg";

export const images = [
  {
    id: 0,
    name: "Clouds",
    dayImage: cloudImg,
    nightImage: nightCloud,
    color: "#fff",
  },
  {
    id: 1,
    name: "Clear",
    dayImage: sunnyImg,
    nightImage: nightClear,
    color: "#111",
  },
  {
    id: 2,
    name: "Rain",
    dayImage: rainImg,
    nightImage: nightRain,
    color: "#fff",
  },
  {
    id: 3,
    name: "Snow",
    dayImage: snowImg,
    nightImage: nightSnow,
    color: "#111",
  },
];
