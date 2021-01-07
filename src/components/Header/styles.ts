import styled from "styled-components";
import { shade, setLightness } from "polished";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid
    ${(props) =>
      props.theme.title === "dark"
        ? shade(0.7, props.theme.colors.background_text)
        : setLightness(0.9, props.theme.colors.background_text)};
  padding: 0.5rem 1rem 0.55rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.background};
  transition: all 0.3s;

  > .prof {
    display: flex;
    flex-direction: row;
    align-items: center;

    > img {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      border: 2px solid ${(props) => props.theme.colors.background_text};
      padding: 2px;
      transition: all 0.2s;
      cursor: pointer;

      :hover {
        padding: 0;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      margin-left: 0.5rem;

      > span:nth-child(1) {
        font-weight: bold;
        color: ${(props) => props.theme.colors.background_text};
      }
      > span:nth-child(2) {
        font-size: 0.7rem;
        color: ${(props) => props.theme.colors.background_dt};
        letter-spacing: 1px;
      }
    }
  }

  > .options {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin-right: 1rem;
    flex-direction: row;

    a {
      padding: 0.5rem;
      text-decoration: none;
      outline: none;
      margin: 0 0.5rem;

      &.active {
        span {
          color: ${(props) =>
            props.theme.title === "dark"
              ? props.theme.colors.background_dt
              : props.theme.colors.background_text};
        }
      }

      span {
        color: ${(props) =>
          props.theme.title === "dark"
            ? props.theme.colors.background_text
            : setLightness(0.5, props.theme.colors.background_dt)};
        transition: all 0.2s;
      }

      :hover:not(.active) {
        transition: all 0.3s;
        animation: vibrationText 0.2s infinite linear;

        @keyframes vibrationText {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(5deg);
          }
          50% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        span {
          color: ${(props) => props.theme.colors.background_dt};
        }
      }
    }
  }

  .menu {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.colors.background_darker};
    border-radius: 2px;

    svg {
      font-size: 1.1rem;
      color: ${(props) => props.theme.colors.background_dt};
    }
  }
`;
