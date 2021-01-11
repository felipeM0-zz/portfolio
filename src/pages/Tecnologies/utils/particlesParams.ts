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
        {
          src: Tecs.c_csharp[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_css[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_git[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_github[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_html[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_jquery[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_js[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_materialize[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_materialui[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_mysql[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_nodejs[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_react[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_react_native[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_reactbt[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_redux[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_sass[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_styled[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_typescript[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_unity[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_lottie[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_axios[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_react_icons[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_sweetalert[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_react_router[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_react_navigation[4],
          height: 25,
          width: 25,
        },
        {
          src: Tecs.c_react_leaflet[4],
          height: 25,
          width: 25,
        },
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
