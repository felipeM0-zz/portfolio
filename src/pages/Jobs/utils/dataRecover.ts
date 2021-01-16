// COLORS TEC
import { Tecs } from "../../Tecnologies/utils/dataTecs";
// INFO MOVIES - SRC
import info1 from "../src/infomovies/infomovies1.png";
import info2 from "../src/infomovies/infomovies2.png";
import infovd from "../src/infomovies/infomoviesvideo.mp4";
// INFO MOVIES - SRC
import chall1 from "../src/webchallenge/webchallenge1.png";
import chall2 from "../src/webchallenge/webchallenge2.png";
import challvd from "../src/webchallenge/webchallengevideo.mp4";

export const Data = [
  {
    type: "Web",
    sts: "Completos",
    name: "Info Movies",
    src: { img: [info1, info2], vid: [infovd] },
    tec: [
      Tecs.c_react,
      Tecs.c_js,
      Tecs.c_css,
      Tecs.c_axios,
      Tecs.c_lottie,
      Tecs.c_sass,
      Tecs.c_materialui,
      Tecs.c_html,
    ],
    link: "https://infomovies.netlify.app",
    abs: "Site para buscar de filmes e séries através do consumo de API.",
  },
  {
    type: "Web",
    sts: "Completos",
    name: "Build Box - Web Challenge",
    src: { img: [chall1, chall2], vid: [challvd] },
    tec: [
      Tecs.c_react,
      Tecs.c_js,
      Tecs.c_css,
      Tecs.c_typescript,
      Tecs.c_styled,
      Tecs.c_materialui,
      Tecs.c_react_icons,
      Tecs.c_html,
    ],
    link: "https://web-challenge.netlify.app/",
    abs:
      "FrontEnd Build Box para postagens de mensagens, e exclusão, com uso de animações.",
  },
  {
    link: "",
    type: "Web",
    sts: "Completos",
    name: "Projeto Gaia",
    src: { img: [], vid: [] },
    tec: [
      Tecs.c_react,
      Tecs.c_js,
      Tecs.c_css,
      Tecs.c_axios,
      Tecs.c_reactbt,
      Tecs.c_react_icons,
      Tecs.c_sass,
      Tecs.c_sweetalert,
      Tecs.c_typescript,
      Tecs.c_html,
    ],
    abs:
      "FrontEnd Gaia para criação, exclusão, atualização e leitura de dados consumidos por sua API.",
  },
  {
    link: "",
    type: "Mobile",
    sts: "Completos",
    name: "Block Age",
    src: { img: [], vid: [] },
    tec: [
      Tecs.c_react_native,
      Tecs.c_js,
      Tecs.c_css,
      Tecs.c_redux,
      Tecs.c_styled,
      Tecs.c_react_navigation,
      Tecs.c_lottie,
    ],
    abs:
      "Aplicativo Android para criação e gestão de listas de tarefas e notas personalizadas.",
  },
  {
    link: "",
    type: "Mobile",
    sts: "Em Progresso",
    name: "Water Call Me",
    src: { img: [], vid: [] },
    tec: [
      Tecs.c_react_native,
      Tecs.c_js,
      Tecs.c_css,
      Tecs.c_react_navigation,
      Tecs.c_lottie,
    ],
    abs: "Aplicativo Android focado em saúde, notificações push, e lembretes periódicos.",
  },
  {
    link: "",
    type: "Web",
    sts: "Em Progresso",
    name: "Eater",
    src: { img: [], vid: [] },
    tec: [
      Tecs.c_react,
      Tecs.c_js,
      Tecs.c_css,
      Tecs.c_html,
      Tecs.c_materialui,
      Tecs.c_react_leaflet,
      Tecs.c_react_router,
      Tecs.c_sweetalert,
    ],
    abs:
      "Projeto web com foco e-commerce, distribuição e encontro de locais com objetivo alimentício.",
  },
];
