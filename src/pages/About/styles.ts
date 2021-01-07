import { setLightness, shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 4rem;
  transition: all 0.3s;

  > div:not(:last-child) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 4rem 0;
    margin-bottom: 7rem;
    transition: all 0.3s;

    > div {
      animation: pulseLottie 2s infinite;
      transition: all 0.3s;
      width: 200px !important;
      height: 200px !important;

      @keyframes pulseLottie {
        0% {
          padding: 0.5rem;
        }
        50% {
          padding: 0;
        }
        100% {
          padding: 0.5rem;
        }
      }
    }

    p {
      padding: 0 1rem;
      flex: 1;
      font-size: 1.6rem;
      line-height: 1.6;
      margin-left: 2rem;
      color: ${(props) => props.theme.colors.background_text};
      font-family: "Architects Daughter", cursive;
      transition: all 0.3s;
    }
  }

  > div:last-child {
    display: flex;
    transition: all 0.3s;
    justify-content: flex-end;
    margin: 2rem 0 1rem 0;
    padding-top: 2rem;
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
        font-weight: bold;
      }

      svg {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 1rem 2rem;

    > div:not(:last-child) {
      margin: 2rem 0;

      > div {
        width: 150px !important;
        height: 150px !important;
      }

      p {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 768px) {
    > div:not(:last-child) {
      p {
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: 600px) {
    > div:not(:last-child) {
      flex-direction: column;

      p {
        font-size: 1rem;
        margin-left: 0;
        padding: 0 0.5rem;
        text-align: justify;
        font-weight: bold;
      }
    }

    > div:last-child {
      padding-top: 1rem;
      margin: 2rem 0 0 0;

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
    padding: 1rem 0.5rem;

    > div:not(:last-child) {
      p {
        line-height: 1.25;
      }
    }

    > div:last-child {
      a {
        svg {
          animation: none !important;
        }
      }
    }
  }
`;
