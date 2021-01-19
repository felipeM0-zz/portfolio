import { OutMode } from "react-particles-js";
// COLORS TECS
import { Tecs } from "./dataTecs";

interface PropsParams {
  particles: {
    number: {
      value: number;
      density: {
        enable: boolean;
        value_area: number;
      };
    };
    line_linked: {
      enable: boolean;
      opacity: number;
      color: string;
    };
    move: {
      speed: number;
      out_mode:
        | "out"
        | "none"
        | "bounce"
        | "bounceHorizontal"
        | "bounceVertical"
        | "destroy"
        | "bounce-horizontal"
        | "bounce-vertical"
        | OutMode
        | undefined;
    };
    shape: {
      type: string[];
      image: {
        src: string;
        height: number;
        width: number;
      }[];
    };
    opacity: {
      value: number;
    };
    size: {
      value: number;
      random: boolean;
      anim: {
        enable: boolean;
        speed: number;
        size_min: number;
        sync: boolean;
      };
    };
  };
  interactivity: {
    events: {
      onhover: {
        enable: boolean;
        parallax: {
          force: number;
          enable: boolean;
          smooth: number;
        };
      };
    };
  };
  retina_detect: boolean;
}

interface PropsSizes {
  width: string;
  height: string;
}

export const sizes: PropsSizes = {
  width: "100%",
  height: "100vh",
};

const hw = {
  height: 25,
  width: 25,
};

export const params: PropsParams = {
  particles: {
    number: {
      value: 35,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      enable: false,
      opacity: 0,
      color: "transparent",
    },
    move: {
      speed: 2,
      out_mode: "out",
    },
    shape: {
      type: ["image"],
      image: [
        { src: Tecs[0].img, ...hw },
        { src: Tecs[1].img, ...hw },
        { src: Tecs[2].img, ...hw },
        { src: Tecs[3].img, ...hw },
        { src: Tecs[4].img, ...hw },
        { src: Tecs[5].img, ...hw },
        { src: Tecs[6].img, ...hw },
        { src: Tecs[7].img, ...hw },
        { src: Tecs[8].img, ...hw },
        { src: Tecs[9].img, ...hw },
        { src: Tecs[10].img, ...hw },
        { src: Tecs[11].img, ...hw },
        { src: Tecs[12].img, ...hw },
        { src: Tecs[12].img, ...hw },
        { src: Tecs[14].img, ...hw },
        { src: Tecs[15].img, ...hw },
        { src: Tecs[16].img, ...hw },
        { src: Tecs[17].img, ...hw },
        { src: Tecs[18].img, ...hw },
        { src: Tecs[19].img, ...hw },
        { src: Tecs[20].img, ...hw },
        { src: Tecs[21].img, ...hw },
        { src: Tecs[22].img, ...hw },
        { src: Tecs[23].img, ...hw },
        { src: Tecs[24].img, ...hw },
        { src: Tecs[25].img, ...hw },
      ],
    },
    opacity: {
      value: 0.1,
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 15,
        sync: false,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        parallax: {
          force: 60,
          enable: true,
          smooth: 50,
        },
      },
    },
  },
  retina_detect: false,
};
