import { setLightness, shade } from "polished";
import styled from "styled-components";

interface ContainerProps {
  twoOptions: boolean;
}

export const Container = styled.div.attrs((props: ContainerProps) => ({
  twoOptions: props.twoOptions,
}))`
  display: flex;
  padding: 1rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  transition: all 0.3s;
  margin: 2rem 1rem 1rem;
  justify-content: ${(props) => (props.twoOptions ? "space-between" : "flex-end")};
  border-top: 1px solid
    ${(props) =>
      props.theme.title === "dark"
        ? shade(0.8, props.theme.colors.background_text)
        : setLightness(0.8, props.theme.colors.background_text)};

  .previous,
  .next {
    opacity: 0.5;
    display: flex;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s;
    color: ${(props) => props.theme.colors.background_dt};

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
      margin: 0 0.5rem 0 0;
    }

    svg {
      font-size: 2rem;
    }
  }

  .next.active {
    animation: goingNext 0.4s forwards;

    @keyframes goingNext {
      to {
        opacity: 0;
      }
    }
  }

  .previous {
    span {
      margin: 0 0 0 0.5rem;
    }

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

    &.active {
      animation: goingPrevious 0.4s forwards;

      @keyframes goingPrevious {
        to {
          opacity: 0;
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 1.3rem 0 0.3rem;

    .previous,
    .next {
      span {
        font-size: 1rem;
      }

      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 425px) {
    .previous,
    .next {
      svg {
        animation: none !important;
      }
    }
  }
`;
