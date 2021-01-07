import { OutMode } from "react-particles-js";
// IMAGES
import csharp from "../../../images/tecnologies/csharp.png";
import redux from "../../../images/tecnologies/redux.png";
import react from "../../../images/tecnologies/react.png";
import css from "../../../images/tecnologies/css.webp";
import html from "../../../images/tecnologies/html.png";
import js from "../../../images/tecnologies/js.png";
import react_native from "../../../images/tecnologies/react-native.png";
import unity from "../../../images/tecnologies/unity.png";
import nodejs from "../../../images/tecnologies/nodejs.png";
import mysql from "../../../images/tecnologies/mysql.png";
import jquery from "../../../images/tecnologies/jquery.webp";
import git from "../../../images/tecnologies/git.png";
import typescript from "../../../images/tecnologies/typescript.png";
import styled from "../../../images/tecnologies/styled.png";
import sass from "../../../images/tecnologies/sass.png";

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
          src: js,
          height: 25,
          width: 25,
        },
        {
          src: html,
          height: 25,
          width: 25,
        },
        {
          src: css,
          height: 25,
          width: 25,
        },
        {
          src: redux,
          height: 25,
          width: 25,
        },
        {
          src: react,
          height: 25,
          width: 25,
        },
        {
          src: jquery,
          height: 25,
          width: 25,
        },
        {
          src: csharp,
          height: 25,
          width: 25,
        },
        {
          src: mysql,
          height: 25,
          width: 25,
        },
        {
          src: unity,
          height: 25,
          width: 25,
        },
        {
          src: git,
          height: 25,
          width: 25,
        },
        {
          src: nodejs,
          height: 25,
          width: 25,
        },
        {
          src: typescript,
          height: 25,
          width: 25,
        },
        {
          src: styled,
          height: 25,
          width: 25,
        },
        {
          src: sass,
          height: 25,
          width: 25,
        },
        {
          src: react_native,
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
