import React from "react";
import Grid from "@material-ui/core/Grid";
import Particles from "react-particles-js";
import {
  Card,
  CardMedia,
  // CardContent,
  // CardActions,
  // Collapse,
} from "@material-ui/core";
// DATA PARAMS
import { params, sizes } from "./utils/particlesParams";
// DATA
import { dataGridItem } from "./utils/dataGridItem";
// STYLES
import { Container } from "./styles";

interface GridItemProps {
  img: string;
  text: string;
  link: string;
  name: string;
  color: string;
}

const Tecnologies = () => {
  const GridItem: React.FC<GridItemProps> = ({ img, text, link, name, color }) => {
    return (
      <Grid item md={4} sm={6} xs={12}>
        <Card>
          <CardMedia>
            <img src={img} alt={name} />
          </CardMedia>
          <div>
            <span>
              <a rel="noreferrer" target="_blank" style={{ color: color }} href={link}>
                {name}
              </a>
            </span>
            <p>{text}</p>
          </div>
        </Card>
      </Grid>
    );
  };

  return (
    <Container>
      <Particles {...sizes} params={params} />

      <Grid container>
        {Object.values(dataGridItem).map((dt, i) => {
          return (
            <GridItem
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
  );
};

export default Tecnologies;
