import React from "react";
// MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Skeleton from "@material-ui/lab/Skeleton";
// STYLES
import { Container } from "./styles";

export const LoadingGrid = () => (
  <Container>
    <Grid item md={4} sm={6} xs={12}>
      <Card>
        <CardMedia>
          <Skeleton variant="circle" width={40} height={40} />
        </CardMedia>
        <div>
          <Skeleton variant="text" />
          <Skeleton variant="rect" />
        </div>
      </Card>
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <Card>
        <CardMedia>
          <Skeleton variant="circle" width={40} height={40} />
        </CardMedia>
        <div>
          <Skeleton variant="text" />
          <Skeleton variant="rect" />
        </div>
      </Card>
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <Card>
        <CardMedia>
          <Skeleton variant="circle" width={40} height={40} />
        </CardMedia>
        <div>
          <Skeleton variant="text" />
          <Skeleton variant="rect" />
        </div>
      </Card>
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <Card>
        <CardMedia>
          <Skeleton variant="circle" width={40} height={40} />
        </CardMedia>
        <div>
          <Skeleton variant="text" />
          <Skeleton variant="rect" />
        </div>
      </Card>
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <Card>
        <CardMedia>
          <Skeleton variant="circle" width={40} height={40} />
        </CardMedia>
        <div>
          <Skeleton variant="text" />
          <Skeleton variant="rect" />
        </div>
      </Card>
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <Card>
        <CardMedia>
          <Skeleton variant="circle" width={40} height={40} />
        </CardMedia>
        <div>
          <Skeleton variant="text" />
          <Skeleton variant="rect" />
        </div>
      </Card>
    </Grid>
    <Grid item md={4} sm={6} xs={12}>
      <Card>
        <CardMedia>
          <Skeleton variant="circle" width={40} height={40} />
        </CardMedia>
        <div>
          <Skeleton variant="text" />
          <Skeleton variant="rect" />
        </div>
      </Card>
    </Grid>
  </Container>
);
