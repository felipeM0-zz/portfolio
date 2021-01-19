import React from "react";
// INTERFACES
import { GridItemProps } from "./interfaces";
// COMPONENTS
import Footer from "../../components/Footer";
import TitlePage from "../../components/TitlePage";
// MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Skeleton from "@material-ui/lab/Skeleton";
// DATA GRID/PARTICLES
import { params, sizes } from "./utils/particlesParams";
import { Tecs } from "./utils/dataTecs";
// ICONS
import { CgExternal } from "react-icons/cg";
// STYLES
import { Container, GridItem, ParticlesTec } from "./styles";

const Tecnologies = () => {
  const GridContainer: React.FC<GridItemProps> = ({ img, text, link, name, color }) => {
    return (
      <GridItem item md={4} sm={6} xs={12} color={color}>
        <Card>
          <CardMedia>
            {img ? <img src={img} alt={name} /> : <Skeleton variant="rect" />}
          </CardMedia>
          <div>
            <span>
              <a rel="noreferrer" target="_blank" href={link}>
                <span>{name}</span>
                <CgExternal />
              </a>
            </span>
            <p>{text}</p>
          </div>
        </Card>
      </GridItem>
    );
  };

  return (
    <React.Fragment>
      <ParticlesTec {...sizes} params={params} />
      <TitlePage title="Tecnologias" sub="Utilizadas por mim" />
      <Container>
        <Grid container>
          {Tecs.map((dt, i) => {
            return (
              <GridContainer
                key={i}
                img={dt.img}
                text={dt.desc}
                link={dt.link}
                name={dt.name}
                color={dt.color}
              />
            );
          })}
        </Grid>
      </Container>
      <Footer
        dual={true}
        next="jobs"
        previous=""
        name_next="Trabalhos"
        name_previous="Sobre mim"
      />
    </React.Fragment>
  );
};

export default Tecnologies;
