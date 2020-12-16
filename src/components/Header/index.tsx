import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
// CONTEXT
import ContextTheme from "../../contexts/ContextTheme";
// IMAGES
import ImgProf from "../../images/prof.jpg";
// ICONS
import { MdWbSunny, MdBrightness2 } from "react-icons/md";
// STYLES
import { Container } from "./styles";

const Header = () => {
  const ContTheme = useContext(ContextTheme);

  const changeTheme = () => {
    ContTheme.setTheme({ checked: !ContTheme.theme.checked });
    localStorage.setItem("theme", JSON.stringify(!ContTheme.theme.checked));
  };

  return (
    <Container>
      <div>
        <img src={ImgProf} alt="Felipe" />
        <div>
          <span>Felipe Moreira</span>
          <span>{`{ Programador / FrontEnd }`}</span>
        </div>
      </div>

      <div>
        <Link to="/">
          <span>Sobre mim</span>
        </Link>
        <Link to="/tecnologies">
          <span>Tecnologias</span>
        </Link>
        <Link to="/jobs">
          <span>Trabalhos</span>
        </Link>
        <Link to="/contacts">
          <span>Contato</span>
        </Link>
      </div>

      <div>
        <Switch
          checked={ContTheme.theme.checked}
          onChange={() => changeTheme()}
          width={50}
          height={25}
          handleDiameter={19}
          uncheckedIcon={<MdBrightness2 />}
          checkedIcon={<MdWbSunny />}
        />
      </div>
    </Container>
  );
};

export default Header;
