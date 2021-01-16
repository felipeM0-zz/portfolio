import React from "react";
// INTERFACES
import { TitlePageProps } from "./interfaces";
// STYLES
import { Container } from "./styles";

const TitlePage: React.FC<TitlePageProps> = ({ title, sub }) => {
  return (
    <Container>
      <p>{title}</p>
      <span>{sub}</span>
    </Container>
  );
};

export default TitlePage;
