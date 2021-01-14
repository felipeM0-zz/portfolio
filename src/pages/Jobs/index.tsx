import React, { useState } from "react";
// UTILS
import { useWidth } from "../../utils/useSizeScreen";
// COMPONENTS
import Footer from "../../components/Footer";
// MATERIAL UI - COMPONENTS
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// INTERFACES
import { BtnFilterProps, HeaderWithFilterProps } from "./interfaces";
// DATA
import { Data } from "./utils/dataRecover";
// ICONS
import { BsFillCameraVideoFill } from "react-icons/bs";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaMobileAlt, FaDesktop } from "react-icons/fa";
import { BiDevices } from "react-icons/bi";
// STYLES
import { Container, GridItem, SpanTec, HeaderFilter } from "./styles";

const Jobs = () => {
  const width = useWidth(375);
  const [typeComplete, setTypeComplete] = useState("Todos");
  const [typeIncomplete, setTypeIncomplete] = useState("Todos");

  const VTarget = (target: string, desc: string) => {
    let complete = desc === "Completo";
    complete ? setTypeComplete(target) : setTypeIncomplete(target);
  };

  const setClass = (target: string, desc: string) => {
    let complete = desc === "Completo";

    return (complete && typeComplete === target) ||
      (!complete && typeIncomplete === target)
      ? "selected"
      : "";
  };

  const BtnFilter: React.FC<BtnFilterProps> = ({ desc, target, icon }) => {
    return (
      <Button className={setClass(target, desc)} onClick={() => VTarget(target, desc)}>
        {width ? target : icon}
      </Button>
    );
  };

  const HeaderWithFilter: React.FC<HeaderWithFilterProps> = ({ desc }) => {
    return (
      <HeaderFilter>
        <p>{desc}</p>
        <div>
          <BtnFilter desc={desc} target="Todos" icon={<BiDevices />} />
          <BtnFilter desc={desc} target="Web" icon={<FaDesktop />} />
          <BtnFilter desc={desc} target="Mobile" icon={<FaMobileAlt />} />
        </div>
      </HeaderFilter>
    );
  };

  return (
    <React.Fragment>
      <Container>
        {/* COMPLETO */}

        <HeaderWithFilter desc="Completo" />
        <Grid container>
          {Data.filter(
            (e) =>
              e.sts === "Completo" &&
              (typeComplete !== "Todos" ? e.type === typeComplete : e.type !== "Todos")
          ).map((e, i) => {
            return (
              <GridItem key={i} item md={4} sm={6} xs={12} link={e.link}>
                <Card>
                  <CardHeader title={e.name} />
                  {e.src.img[0] && <img src={e.src.img[0]} alt={e.name} />}
                  <CardContent>
                    <Typography component="p">{e.abs}</Typography>
                    <Divider />
                    <div className="type">
                      <span>{e.type}</span>
                      {e.type === "Mobile" ? <FaMobileAlt /> : <FaDesktop />}
                    </div>
                    <Divider />
                    <div className="tecs">
                      {e.tec.map((e, i) => {
                        return (
                          <SpanTec key={i} color={e[1]}>
                            {e[0]}
                          </SpanTec>
                        );
                      })}
                    </div>
                  </CardContent>
                  <CardActions>
                    {e.link !== "" && (
                      <Button endIcon={<RiExternalLinkFill />}>
                        <a href={e.link} target="_blank" rel="noreferrer">
                          Visitar
                        </a>
                      </Button>
                    )}
                    {e.src.vid[0] && (
                      <Button endIcon={<BsFillCameraVideoFill />}>Vídeo</Button>
                    )}
                  </CardActions>
                </Card>
              </GridItem>
            );
          })}
        </Grid>

        {/* INCOMPLETO */}
        <HeaderWithFilter desc="Incompleto" />
        <Grid container>
          {Data.filter(
            (e) =>
              e.sts === "Incompleto" &&
              (typeIncomplete !== "Todos"
                ? e.type === typeIncomplete
                : e.type !== "Todos")
          ).map((e, i) => {
            return (
              <GridItem key={i} item md={4} sm={6} xs={12} link={e.link}>
                <Card>
                  <CardHeader title={e.name} />
                  {e.src.img[0] && <img src={e.src.img[0]} alt={e.name} />}
                  <CardContent>
                    <Typography component="p">{e.abs}</Typography>
                    <Divider />
                    <div className="type">
                      <span>{e.type}</span>
                      {e.type === "Mobile" ? <FaMobileAlt /> : <FaDesktop />}
                    </div>
                    <Divider />
                    <div className="tecs">
                      {e.tec.map((e, i) => {
                        return (
                          <SpanTec key={i} color={e[1]}>
                            {e[0]}
                          </SpanTec>
                        );
                      })}
                    </div>
                  </CardContent>
                  <CardActions>
                    {e.link !== "" && (
                      <Button endIcon={<RiExternalLinkFill />}>
                        <a href={e.link} target="_blank" rel="noreferrer">
                          Visitar
                        </a>
                      </Button>
                    )}
                    {e.src.vid[0] && (
                      <Button endIcon={<BsFillCameraVideoFill />}>Vídeo</Button>
                    )}
                  </CardActions>
                </Card>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
      <Footer
        dual
        name_next="Contato"
        next="contacts"
        name_previous="Tecnologias"
        previous="tecnologies"
      />
    </React.Fragment>
  );
};

export default Jobs;
