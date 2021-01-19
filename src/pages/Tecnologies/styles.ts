import styled from "styled-components";
import { transparentize } from "polished";
// MATERIAL UI
import Grid from "@material-ui/core/Grid";
// PARTICLES
import Particles from "react-particles-js";

export const ParticlesTec = styled(Particles)`
  canvas {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: fixed;
  }
`;

export const Container = styled.div`
  .MuiGrid-container {
    padding: 0.7rem;
  }

  @media (max-width: 768px) {
    .MuiGrid-container {
      padding: 0.7rem 0.2rem 0.2rem;
    }
  }
`;

//

export const GridItem = styled(Grid).attrs((props) => ({
  color: props.color,
}))`
  .MuiCard-root {
    transition: all 0.3s;
    margin: 1rem;
    padding: 1rem;
    min-height: 200px;
    display: flex;
    position: relative;
    background: ${(props) => props.theme.colors.background};

    .MuiCardMedia-root {
      display: flex;
      align-items: center;

      img {
        padding: 0.5rem;
        margin-right: 1rem;
        border-radius: 10px;
        transition: all 0.3s;
        width: 80px;
        height: 80px;
      }

      span {
        width: 70px;
        height: 70px;
        margin: 0 1rem 0 0.4rem;
        border-radius: 4px;
        background: ${(props) =>
          transparentize(0.75, typeof props.color === "string" ? props.color : "")};
      }
    }

    > div:nth-child(2) {
      flex: 1;
      display: flex;
      flex-direction: column;

      span {
        display: flex;
        justify-content: flex-end;
        font: bold 1.3rem "Poiret One", cursive;

        a {
          transition: all 0.4s;

          display: flex;
          padding: 0.2rem 0.5rem 0.2rem 0;
          border-radius: 4px;
          align-items: center;
          text-decoration: none;
          text-shadow: ${(props) =>
            props.theme.title === "dark" ? "1px 1px 1px #2b2b2b" : "none"};

          span {
            margin-right: 0.3rem;
            color: ${(props) => props.color};
          }

          svg {
            margin-top: 0.1rem;
            color: ${(props) => props.color};
          }
        }
      }

      p {
        flex: 1;
        font-size: 0.9rem;
        margin-top: 0.8rem;
        margin-bottom: 0.8rem;
        transition: all 0.3s;
        color: ${(props) => transparentize(0.3, props.theme.colors.background_text)};
      }
    }

    &:hover {
      transform: scale(1.02, 1.02);
    }
  }

  @media (max-width: 768px) {
    .MuiCard-root {
      margin: 0.5rem;

      .MuiCardMedia-root {
        position: absolute;
        left: 10px;
        top: 5px;

        img {
          width: 50px;
          height: 50px;
        }

        span {
          width: 40px;
          height: 40px;
          margin: 0.3rem 0 0 0.4rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .MuiCard-root {
      min-height: max-content;
    }
  }

  @media (max-width: 375px) {
    .MuiCard-root {
      margin: 0.3rem;
    }
  }
`;
