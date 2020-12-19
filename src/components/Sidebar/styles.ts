import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import { setLightness, shade } from "polished";

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
                : setLightness(0.91, props.theme.colors.background_darker)};
          }

          .MuiButton-label {
            display: flex;

            > span {
              color: ${(props) => props.theme.colors.background_text};
            }

            > span:nth-child(2) {
              display: flex;
              flex: 1;
              justify-content: center;
            }
          }
        }
      }
    }

    > div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
  }
`;
