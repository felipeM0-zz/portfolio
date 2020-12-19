import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";
// HOOKS
import { useWidth } from "../../utils/useSizeScreen";
// COMPONENTS
import Switch from "../Switch";
// ICONS
import { BiIdCard, BiWrench, BiPhoneCall, BiCodeCurly } from "react-icons/bi";
// STYLES
import { Container } from "./styles";

interface OptionsProps {
  route: string;
  icon: JSX.Element;
  text: string;
}

interface SidebarProps {
  showOptions: boolean | undefined;
  setShowOptions: (arg0: boolean) => void;
}

const Sidebar = (props: SidebarProps) => {
  const width = useWidth();
  const loc = useLocation().pathname;

  const Options: React.FC<OptionsProps> = ({ route, icon, text }) => (
    <Link to={route}>
      <Button startIcon={icon} className={route === loc ? "active" : ""}>
        <span>{text}</span>
      </Button>
    </Link>
  );

  useEffect(() => {
    width && props.setShowOptions(false);
  }, [width, props]);

  return (
    <Container
      open={props.showOptions}
      onClose={() => props.setShowOptions(false)}
      anchor="right"
    >
      <div>
        <Options route="/" icon={<BiIdCard />} text="Sobre mim" />
        <Options route="/tecnologies" icon={<BiWrench />} text="Tecnologias" />
        <Options route="/jobs" icon={<BiCodeCurly />} text="Trabalhos" />
        <Options route="/contacts" icon={<BiPhoneCall />} text="Contato" />
      </div>

      <div>
        <Switch />
      </div>
    </Container>
  );
};

export default Sidebar;
