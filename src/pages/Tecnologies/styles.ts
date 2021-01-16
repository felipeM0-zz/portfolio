import styled from "styled-components";
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
    }

    > div:nth-child(2) {
      flex: 1;
      display: flex;
      flex-direction: column;

      span {
        display: flex;
        font-size: 1.3rem;
        justify-content: flex-end;
        font-family: "Poiret One", cursive;
        letter-spacing: 1px;

        a {
          display: flex;
          padding: 0 0.5rem;
          font-weight: bold;
          align-items: center;
          text-decoration: none;
          text-shadow: 1px 1px 1px
            ${(props) => (props.theme.title === "dark" ? "#262626" : "#808080")};

          span {
            margin-right: 0.3rem;
            color: ${(props) => props.color};
          }

          svg {
            opacity: 0.5;
            margin-top: 5px;
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
        color: ${(props) => props.theme.colors.background_text};
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
