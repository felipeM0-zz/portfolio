import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { setLightness, shade } from "polished";

export const Container = styled.div`
  #tsparticles canvas {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: fixed;
  }

  .MuiGrid-container {
    padding: 0.7rem;
  }

  > div:last-child {
    display: flex;
    padding: 1rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    transition: all 0.3s;
    margin: 2rem 1rem 1rem;
    justify-content: space-between;
    border-top: 1px solid
      ${(props) =>
        props.theme.title === "dark"
          ? shade(0.8, props.theme.colors.background_text)
          : setLightness(0.8, props.theme.colors.background_text)};

    > a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${(props) => props.theme.colors.background_dt};
      transition: all 0.3s;
      opacity: 0.5;

      &:hover {
        opacity: 1;

        svg {
          animation: pulseArrowNext 0.7s infinite;

          @keyframes pulseArrowNext {
            0% {
              transform: translate(0px, 0px);
            }
            50% {
              transform: translate(10px, 0px);
            }
            100% {
              transform: translate(0px, 0px);
            }
          }
        }
      }

      span {
        font-size: 1.2rem;
        margin-right: 0.5rem;
      }

      svg {
        font-size: 2rem;
      }
    }

    > a:first-child {
      &:hover {
        svg {
          animation: pulseArrowPrevious 0.7s infinite;

          @keyframes pulseArrowPrevious {
            0% {
              transform: translate(0px, 0px);
            }
            50% {
              transform: translate(-10px, 0px);
            }
            100% {
              transform: translate(0px, 0px);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .MuiGrid-container {
      padding: 0.2rem;
    }
  }

  @media (max-width: 600px) {
    > div:last-child {
      padding: 1.3rem 0 0;

      a {
        span {
          font-size: 1rem;
        }

        svg {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 425px) {
    > div:last-child {
      a {
        svg {
          animation: none !important;
        }
      }
    }
  }
`;

//

export const GridItem = styled(Grid).attrs((props) => ({
  color: props.color,
}))`
  .MuiCard-root {
    margin: 0.7rem;
    padding: 1rem;
    min-height: 200px;
    display: flex;
    transition: all 0.3s;
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
        font-family: "Architects Daughter", cursive;

        a {
          padding: 0 0.5rem;
          font-weight: bold;
          border-radius: 4px;
          text-decoration: none;
          color: ${(props) => props.color};
          text-shadow: 1px 1px 1px
            ${(props) => (props.theme.title === "dark" ? "#262626" : "#adadad")};
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

  @media (max-width: 375px) {
    .MuiCard-root {
      margin: 0.3rem;
    }
  }
`;
