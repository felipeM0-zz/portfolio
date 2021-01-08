import React from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
// MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
// DATA GRID/PARTICLES
import { params, sizes } from "./utils/particlesParams";
import { dataGridItem } from "./utils/dataGridItem";
// INTERFACES
import { GridItemProps } from "./interfaces";
// ICONS
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
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

      <div>
        <Link to="/">
          <BsArrowLeft />
          <span>Sobre mim</span>
        </Link>
        <Link to="/jobs">
          <span>Trabalhos</span>
          <BsArrowRight />
        </Link>
      </div>
    </Container>
  );
};

export default Tecnologies;
