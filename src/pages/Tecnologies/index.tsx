import React from "react";
// STYLES
import { Container } from "./styles";
import Particles from "react-particles-js";

import { params, sizes } from "./utils/particlesParams";

const Tecnologies = () => {
  return (
    <Container>
      <Particles {...sizes} params={params} />
    </Container>
  );
};

export default Tecnologies;
