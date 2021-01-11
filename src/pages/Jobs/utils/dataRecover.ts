// INFO MOVIES - SRC
import info1 from "../src/infomovies/infomovies1.png";
import info2 from "../src/infomovies/infomovies2.png";
// import info3 from "../src/infomovies/infomovies3.png";
import infovd from "../src/infomovies/infomoviesvideo.mp4";

// INFO MOVIES - SRC
import chall1 from "../src/webchallenge/webchallenge1.png";
import chall2 from "../src/webchallenge/webchallenge2.png";
import challvd from "../src/webchallenge/webchallengevideo.mp4";

export const Data = [
  {
    type: "Web",
    sts: "Completo",
    name: "Info Movies",
    src: { img: [info1, info2], vid: [infovd] },
    tec: ["React", "JavaScript", "CSS"],
    link: "https://infomovies.netlify.app",
    abs: "Site para buscar de filmes e séries através do consumo de API.",
  },
  {
    type: "Web",
    sts: "Completo",
    name: "Build Box - Web Challenge",
    src: { img: [chall1, chall2], vid: [challvd] },
    tec: ["React", "JavaScript", "CSS"],
    link: "https://web-challenge.netlify.app/",
    abs:
      "FrontEnd Build Box para postagens de mensagens, e exclusão, com uso de animações.",
  },
  {
    link: "",
    type: "Web",
    sts: "Completo",
    name: "Projeto Gaia",
    src: { img: [], vid: [] },
    tec: ["React", "JavaScript", "TypeScript", "SASS", "CSS"],
    abs:
      "FrontEnd Gaia para criação, exclusão, atualização e leitura de dados consumidos por sua API.",
  },
  {
    link: "",
    type: "Mobile",
    sts: "Completo",
    name: "Block Age",
    src: { img: [], vid: [] },
    tec: ["React Native", "JavaScript", "CSS"],
    abs:
      "Aplicativo Android para criação e gestão de listas de tarefas e notas personalizadas.",
  },
  {
    link: "",
    type: "Mobile",
    sts: "Incompleto",
    name: "Water Call Me",
    src: { img: [], vid: [] },
    tec: ["React Native", "JavaScript", "CSS"],
    abs: "Aplicativo Android focado em saúde, notificações push, e lembretes periódicos.",
  },
  {
    link: "",
    type: "Web",
    sts: "Incompleto",
    name: "Eater",
    src: { img: [], vid: [] },
    tec: ["React", "JavaScript", "CSS"],
    abs:
      "Projeto web com foco e-commerce, distribuição e encontro de locais com objetivo alimentício.",
  },
];
