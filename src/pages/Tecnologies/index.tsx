import React from "react";
import Particles from "react-particles-js";
// INTERFACES
import { GridItemProps } from "./interfaces";
// COMPONENTS
import Footer from "../../components/Footer";
// MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
// DATA GRID/PARTICLES
import { params, sizes } from "./utils/particlesParams";
import { dataGridItem } from "./utils/dataGridItem";
// STYLES
import { Container, GridItem } from "./styles";

const Tecnologies = () => {
  const GridContainer: React.FC<GridItemProps> = ({ img, text, link, name, color }) => {
    return (
      <GridItem item md={4} sm={6} xs={12} color={color}>
        <Card>
          <CardMedia>
            <img src={img} alt={name} />
          </CardMedia>
          <div>
            <span>
              <a rel="noreferrer" target="_blank" href={link}>
                {name}
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
      <Container>
        <Particles {...sizes} params={params} />

        <Grid container>
          {Object.values(dataGridItem).map((dt, i) => {
            return (
              <GridContainer
                key={i}
                img={dt.img}
                text={dt.text}
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
