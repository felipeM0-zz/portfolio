import { OutMode } from "react-particles-js";

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
      value: 30,
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
          src:
            "https://trickdroid.org/wp-content/uploads/2019/12/Sobre-JavaScript-Definicao-Historia-Usos-e-Forcas.png",
          height: 25,
          width: 25,
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png",
          height: 25,
          width: 25,
        },
        {
          src:
            "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
          height: 25,
          width: 25,
        },
        {
          src: "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
          height: 25,
          width: 25,
        },
        {
          src: "https://png.pngtree.com/svg/20170719/react_1353128.png",
          height: 25,
          width: 25,
        },
        {
          src: "https://cdn.iconscout.com/icon/free/png-256/jquery-7-1175152.png",
          height: 25,
          width: 25,
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/1200px-C_Sharp_logo.svg.png",
          height: 25,
          width: 25,
        },
        {
          src: "https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png",
          height: 25,
          width: 25,
        },
        {
          src: "https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png",
          height: 25,
          width: 25,
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png",
          height: 25,
          width: 25,
        },
        {
          src: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
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
