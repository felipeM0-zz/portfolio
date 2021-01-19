import React, { useState } from "react";
import ReactPlayer from "react-player";
import Lottie from "react-lottie";
// UTILS
import { useWidth } from "../../utils/useSizeScreen";
// COMPONENTS
import TitlePage from "../../components/TitlePage";
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
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// INTERFACES
import { BtnFilterProps, HeaderWithFilterProps, VideoModalProps } from "./interfaces";
// DATA
import { Data } from "./utils/dataRecover";
// OBJECTS JSON
import Success from "../../images/lottie/success.json";
import Coding from "../../images/lottie/coding.json";
// ICONS
import { BsFillCameraVideoFill } from "react-icons/bs";
import { RiExternalLinkFill, RiCloseLine } from "react-icons/ri";
import { FaMobileAlt, FaDesktop } from "react-icons/fa";
import { BiDevices } from "react-icons/bi";
// STYLES
import {
  Container,
  GridItem,
  SpanTec,
  HeaderFilter,
  TooltipSpan,
  ModalVideoJob,
} from "./styles";

const Jobs = () => {
  const width = useWidth(425);
  // STATE HOOKS
  const [typeComplete, setTypeComplete] = useState("Todos");
  const [typeIncomplete, setTypeIncomplete] = useState("Todos");
  const [videoModal, setVideoModal] = useState<VideoModalProps>({
    state: false,
  });

  // SET TARGET FILTER
  const VTarget = (target: string, desc: string) => {
    let complete = desc === "Completos";
    complete ? setTypeComplete(target) : setTypeIncomplete(target);
  };

  // SET CLASS SELECTED
  const setClass = (target: string, desc: string) => {
    let complete = desc === "Completos";

    return (complete && typeComplete === target) ||
      (!complete && typeIncomplete === target)
      ? "selected"
      : "";
  };

  // BUTTON FILTER
  const BtnFilter: React.FC<BtnFilterProps> = ({ desc, target, icon }) => {
    return (
      <Button className={setClass(target, desc)} onClick={() => VTarget(target, desc)}>
        {width ? target : icon}
      </Button>
    );
  };

  // HEADER FILTER
  const HeaderWithFilter: React.FC<HeaderWithFilterProps> = ({ desc }) => {
    let anim = desc === "Completos" ? Success : Coding;

    return (
      <HeaderFilter>
        <div>
          <p>{desc}</p>

          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: anim,
              rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
            }}
            isClickToPauseDisabled={true}
          />
        </div>

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
      <TitlePage title="Meus trabalhos" />
      <Container>
        {/* COMPLETO */}

        <HeaderWithFilter desc="Completos" />
        <Grid container>
          {Data.filter(
            (e) =>
              e.sts === "Completos" &&
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
                          <TooltipSpan
                            arrow
                            key={i}
                            placement="top"
                            title={
                              <img width={50} height={50} src={e.img} alt={e.name} />
                            }
                          >
                            <SpanTec color={e.color}>{e.name}</SpanTec>
                          </TooltipSpan>
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
                      <Button
                        onClick={() => {
                          setVideoModal({
                            state: true,
                            link: e.src.vid[0],
                            name: e.name,
                          });
                        }}
                        endIcon={<BsFillCameraVideoFill />}
                      >
                        Vídeo
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </GridItem>
            );
          })}
        </Grid>

        {/* INCOMPLETO */}
        <HeaderWithFilter desc="Em Progresso" />
        <Grid container>
          {Data.filter(
            (e) =>
              e.sts === "Em Progresso" &&
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
                    <p>{e.abs}</p>
                    <Divider />
                    <div className="type">
                      <span>{e.type}</span>
                      {e.type === "Mobile" ? <FaMobileAlt /> : <FaDesktop />}
                    </div>
                    <Divider />
                    <div className="tecs">
                      {e.tec.map((e, i) => {
                        return (
                          <TooltipSpan
                            arrow
                            key={i}
                            placement="top"
                            title={
                              <img width={50} height={50} src={e.img} alt={e.name} />
                            }
                          >
                            <SpanTec color={e.color}>{e.name}</SpanTec>
                          </TooltipSpan>
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

      {/* MODAL VIDEO */}
      <ModalVideoJob
        open={videoModal.state}
        onClose={() => setVideoModal({ state: false })}
      >
        <DialogTitle>
          <span>{videoModal.name}</span>
          <RiCloseLine onClick={() => setVideoModal({ state: false })} />
        </DialogTitle>
        <DialogContent>
          <ReactPlayer url={videoModal.link} controls width="inherit" height="inherit" />
        </DialogContent>
      </ModalVideoJob>
    </React.Fragment>
  );
};

export default Jobs;
