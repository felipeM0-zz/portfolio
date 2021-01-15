import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 1rem 0;

  p {
    font-size: 2.3rem;
    text-align: center;
    transition: all 0.4s;
    font-family: "Poiret One", cursive;
    color: ${(props) => props.theme.colors.background_text};
    font-weight: ${(props) => (props.theme.title === "dark" ? "normal" : "bold")};
  }

  @media (max-width: 425px) {
    p {
      font-size: 1.8rem;
    }
  }
`;
