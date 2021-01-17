import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import { transparentize } from "polished";

export const Container = styled(Drawer)`
  .MuiDrawer-paper {
    background: ${(props) => props.theme.colors.background};
    justify-content: space-between;

    > div:nth-child(1) {
      padding: 1.4rem;
      display: flex;
      flex-direction: column;

      a {
        outline: none;
        text-decoration: none;

        button {
          text-transform: none;
          padding: 10px 20px;
          width: 100%;
          margin-bottom: 0.5rem;

          &.active {
            background: ${(props) =>
              props.theme.title === "dark"
                ? props.theme.colors.background_darker
                : transparentize(0.3, props.theme.colors.background_darker)};
          }

          .MuiButton-label {
            display: flex;

            > span {
              color: ${(props) => props.theme.colors.background_text};
            }

            > span:nth-child(2) {
              flex: 1;
              display: flex;
              justify-content: center;
              font: bold 1rem "Poiret One", cursive;
            }
          }
        }
      }
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      padding: 1rem;

      > div:nth-child(1) {
        display: flex;
        align-items: center;
        flex-direction: row;

        > p {
          font-size: 0.7rem;
          color: ${(props) => transparentize(0.6, props.theme.colors.background_text)};
        }

        > div {
          flex: 1;
          height: 2px;
          display: flex;
          background-color: ${(props) =>
            transparentize(0.95, props.theme.colors.background_text)};
        }

        > div:nth-child(1) {
          margin-right: 0.3rem;
        }

        > div:nth-child(3) {
          margin-left: 0.3rem;
        }
      }

      > div:nth-child(2) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0 0 0;

        span {
          font-size: 0.8rem;
          color: ${(props) => transparentize(0.3, props.theme.colors.background_text)};
        }
      }
    }
  }
`;
