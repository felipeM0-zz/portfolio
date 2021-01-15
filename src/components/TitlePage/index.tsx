import React from "react";
// INTERFACES
import { TitlePageProps } from "./interfaces";
// STYLES
import { Container } from "./styles";

const TitlePage: React.FC<TitlePageProps> = ({ title }) => {
  return (
    <Container>
      <p>{title}</p>
    </Container>
  );
};

export default TitlePage;
