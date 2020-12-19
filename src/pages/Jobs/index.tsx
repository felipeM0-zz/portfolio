import React, { useState } from "react";
// COMPONENTS
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
// STYLES
import { Container } from "./styles";

const Jobs = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Container>
      <Header setShowOptions={(v) => setShowOptions(v)} />
      <Sidebar showOptions={showOptions} setShowOptions={(v) => setShowOptions(v)} />
    </Container>
  );
};

export default Jobs;
