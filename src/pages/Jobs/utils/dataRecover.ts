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
      Tecs[19], // REACT
      Tecs[7], // JS
      Tecs[2], // CSS
      Tecs[0], // AXIOS
      Tecs[8], // LOTIE
      Tecs[21], // SASS
      Tecs[9], // MATERIAL UI
      Tecs[5], // HTML
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
      Tecs[19], // REACT
      Tecs[7], // JS
      Tecs[2], // CSS
      Tecs[24], // TYPESCRIPT
      Tecs[22], // STYLED
      Tecs[9], // MATERIAL UI
      Tecs[14], // REACT ICONS
      Tecs[5], // HTML
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
      Tecs[19], // REACT
      Tecs[7], // JS
      Tecs[2], // CSS
      Tecs[0], // AXIOS
      Tecs[13], // REACT BOOTSTRAP
      Tecs[14], // REACT ICONS
      Tecs[21], // SASS
      Tecs[23], // SWEETALERT
      Tecs[24], // TYPESCRIPT
      Tecs[5], // HTML
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
      Tecs[16], // REACT NATIVE
      Tecs[7], // JS
      Tecs[2], // CSS
      Tecs[20], // REDUX
      Tecs[22], // STYLED
      Tecs[17], // REACT NAVIGATION
      Tecs[8], // LOTTIE
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
      Tecs[16], // REACT NATIVE
      Tecs[7], // JS
      Tecs[2], // CSS
      Tecs[17], // REACT NAVIGATION
      Tecs[8], // LOTTIE
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
      Tecs[19], // REACT
      Tecs[7], // JS
      Tecs[2], // CSS
      Tecs[5], // HTML
      Tecs[9], // MATERIAL UI
      Tecs[15], // REACT LEAFLET
        Tecs[18], // REACT ROUTER
      Tecs[23], // SWEETALERT
    ],
    abs:
      "Projeto web com foco e-commerce, distribuição e encontro de locais com objetivo alimentício.",
  },
];
