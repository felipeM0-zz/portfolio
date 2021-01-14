import React from "react";
import { Link, useLocation } from "react-router-dom";
// HOOKS
import { useWidth } from "../../utils/useSizeScreen";
// INTERFACES
import { OptionsProps } from "./interfaces";
// COMPONENTS
import Switch from "../Switch";
// IMAGES
import ImgProf from "../../images/prof.jpg";
// ICONS
import { MdMenu } from "react-icons/md";
// STYLES
import { Container } from "./styles";

const Header = (props: { setShowOptions: (arg0: boolean) => void }) => {
  const width = useWidth(768);
  const loc = useLocation().pathname;

  const Options: React.FC<OptionsProps> = ({ route, text }) => {
    return (
      <Link to={route} className={route === loc ? "active" : ""}>
        <span>{text}</span>
      </Link>
    );
  };

  return (
    <Container>
      <div className="prof">
        <img src={ImgProf} alt="Felipe" />
        <div>
          <span>Felipe Moreira</span>
          <span>{`{ Programador / FrontEnd }`}</span>
        </div>
      </div>

      {width ? (
        <React.Fragment>
          <div className="options">
            <Options route="/" text="Sobre mim" />
            <Options route="/tecnologies" text="Tecnologias" />
            <Options route="/jobs" text="Trabalhos" />
            <Options route="/contacts" text="Contato" />
          </div>

          <Switch />
        </React.Fragment>
      ) : (
        <div className="menu" onClick={() => props.setShowOptions(true)}>
          <MdMenu />
        </div>
      )}
    </Container>
  );
};

export default Header;
