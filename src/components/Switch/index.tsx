import React, { useContext } from "react";
// CONTEXTS
import ContextTheme from "../../contexts/ContextTheme";
// ICONS
import { MdWbSunny, MdBrightness2 } from "react-icons/md";
// STYLES
import { Container } from "./styles";

const Switch = () => {
  const ContTheme = useContext(ContextTheme);

  const changeTheme = () => {
    ContTheme.setTheme({ checked: !ContTheme.theme.checked });
    localStorage.setItem("theme", JSON.stringify(!ContTheme.theme.checked));
  };

  return (
    <Container
      checked={ContTheme.theme.checked}
      onChange={() => changeTheme()}
      width={50}
      height={25}
      handleDiameter={19}
      uncheckedIcon={<MdBrightness2 />}
      checkedIcon={<MdWbSunny />}
    />
  );
};

export default Switch;
