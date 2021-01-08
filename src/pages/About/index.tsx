import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
// INTERFACES
import { ElementProps } from "./interfaces";
// OBJECTS LOTTIE
import about from "../../images/lottie/about.json";
import studies from "../../images/lottie/studies.json";
import tecnologies from "../../images/lottie/tecnologies.json";
// ICONS
import { BsArrowRight } from "react-icons/bs";
// STYLES
import { Container } from "./styles";

const About = () => {
  const Element: React.FC<ElementProps> = ({ text, animation }) => {
    return (
      <div>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animation,
            rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
          }}
          isClickToPauseDisabled={true}
        />
        <p>{text}</p>
      </div>
    );
  };

  return (
    <Container>
      <Element
        animation={about}
        text="Me chamo Luis Felipe R. Moreira, tenho 24 anos, moro em São Luís - MA, sou programador FrontEnd Web/Desktop/Mobile a cerca de 5 anos, e sou Cientista Computacional."
      />
      <Element
        animation={studies}
        text="Formado na faculdade Pitágoras de São Luís no Maranhão, envolvido com tecnologia desde 2013, e um grande amante de tudo que envolve a área tecnológica."
      />
      <Element
        animation={tecnologies}
        text="No início de tudo optei por estudar muito sobre algoritmos - o que me ajudou a entender todo o ecossistema que viria junto á eles - assim, me deparei com JavaScript, HTML5 e CSS3, o que me despertou um gosto pelo FrontEnd. Atualmente trabalho diretamente com React (React JS para Web, e React Native para Mobile), assim como outros frameworks e tecnologias como Redux, Styled-Components, pré-processadores como o SASS, C#, Unity, MySQL, JQuery, MaterialUI, Bootstrap, consumo de API's restful e sempre estudando outras e novas tecnologias."
      />

      <div>
        <Link to="/tecnologies">
          <span>Tecnologias</span>
          <BsArrowRight />
        </Link>
      </div>
    </Container>
  );
};

export default About;
