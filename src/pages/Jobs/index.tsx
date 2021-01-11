import React from "react";
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
// DATA
import { Data } from "./utils/dataRecover";
// ICONS
import { BsFillCameraVideoFill } from "react-icons/bs";
import { RiExternalLinkFill } from "react-icons/ri";
// STYLES
import { Container, GridItem } from "./styles";

const Jobs = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container>
          {Data.filter((e) => e.sts === "Completo").map((e, i) => {
            return (
              <GridItem key={i} item md={4} sm={6} xs={12} link={e.link}>
                <Card>
                  <CardHeader title={e.name} />
                  {e.src.img[0] && <img src={e.src.img[0]} alt={e.name} />}
                  <CardContent>
                    <Typography component="p">{e.abs}</Typography>
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
