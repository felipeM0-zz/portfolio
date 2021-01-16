import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  padding: 1.2rem 1rem 0.5rem;

  > p {
    font-size: 2.3rem;
    text-align: center;
    transition: all 0.4s;
    font-family: "Poiret One", cursive;
    color: ${(props) => props.theme.colors.background_text};
    font-weight: ${(props) => (props.theme.title === "dark" ? "normal" : "bold")};
  }

  > span {
    display: flex;
    padding-left: 7rem;
    transition: all 0.4s;
    justify-content: center;
    font-family: "Poiret One", cursive;
    font-weight: ${(props) => (props.theme.title === "dark" ? "normal" : "bold")};
    color: ${(props) =>
      props.theme.title === "dark"
        ? transparentize(0.4, props.theme.colors.background_text)
        : props.theme.colors.background_text};
  }

  @media (max-width: 425px) {
    > p {
      font-size: 1.8rem;
    }

    > span {
      font-size: 0.8rem;
    }
  }
`;
