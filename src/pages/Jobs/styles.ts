import styled from "styled-components";
import { transparentize } from "polished";
// MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
// INTERFACES
import { StylesProps } from "./interfaces";
import { Dialog } from "@material-ui/core";

// ------------------------------------------

// CONTAINER
export const Container = styled.div``;

// GRID
export const GridItem = styled(Grid).attrs((props: StylesProps) => ({
  link: props.link,
}))`
  .MuiCard-root {
    padding: 0.5rem 1;
    margin: 1rem;
    transition: all 0.4s;
    background: ${(props) => props.theme.colors.background};

    > img {
      width: 100%;
      height: 100%;
    }

    .MuiCardHeader-root {
      .MuiCardHeader-content {
        span {
          font-weight: bold;
          transition: all 0.4s;
          font-family: "Poiret One", cursive;
          color: ${(props) => props.theme.colors.background_text};
        }
      }
    }

    .MuiCardContent-root {
      p:first-child {
        margin-bottom: 1rem;
        transition: all 0.4s;
        font: bold 1rem "Poiret One", cursive;
        color: ${(props) => props.theme.colors.background_text};
      }

      > .MuiDivider-root {
        margin: 0.7rem 0;
      }

      .type {
        display: flex;
        align-items: center;
        transition: all 0.3s;
        justify-content: flex-end;
        opacity: 0.4;
        color: ${(props) => props.theme.colors.background_text};

        span {
          font-size: 0.8rem;
          border-radius: 4px;
          margin: 0.1rem 0.3rem 0 0;
        }
      }

      .tecs {
        display: flex;
        flex-wrap: wrap;
      }
    }

    .MuiCardActions-root {
      justify-content: ${(props) => (props.link !== "" ? "space-between" : "center")};

      .MuiButton-root {
        text-transform: none;

        .MuiButton-label {
          transition: all 0.4s;
          color: ${(props) => props.theme.colors.background_text};

          a {
            transition: all 0.4s;
            color: ${(props) => props.theme.colors.background_text};
            text-decoration: none;
          }
        }
      }
    }
  }
`;

// SPAN TECS
export const SpanTec = styled("span").attrs((props: StylesProps) => ({
  color: props.color,
}))`
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 4px;
  transition: all 0.3s;
  margin: 0 0.3rem 0.3rem 0;
  padding: 0.2rem 0.4rem 0.1rem;
  color: ${(props) =>
    props.theme.title === "dark" ? transparentize(0.2, "#fff") : "#fff"};
  text-shadow: 0.5px 0.5px 2px #333;
  background: ${(props) =>
    transparentize(props.theme.title === "dark" ? 0.8 : 0.15, props.color)};
`;

// TOOLTIPS
export const TooltipSpan = withStyles({
  tooltip: {
    backgroundColor: "#333",
  },
  arrow: {
    color: "#333",
  },
})(Tooltip);

// MODAL VIDEO DIALOG
export const ModalVideoJob = styled(Dialog)`
  .MuiDialog-paper {
    .MuiDialogTitle-root {
      h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          font-size: 1.5rem;
          cursor: pointer;
        }
      }
    }

    .MuiDialogContent-root {
      padding: 3px 0 0;
    }
  }

  @media (max-width: 425px) {
    .MuiDialog-paper {
      transition: all 0.4s;
      margin: 0;
      height: 100%;
      max-width: 100%;
      border-radius: 0;
      max-height: 100%;

      .MuiDialogContent-root {
        display: flex;
        align-items: center;
      }
    }
  }
`;

// HEADER FILTER DEVICES
export const HeaderFilter = styled("div")`
  margin: 1.5rem 1rem 1rem;

  div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: center;

    > p {
      font-size: 1.4rem;
      font-weight: bold;
      font-family: "Poiret One", cursive;
      color: ${(props) => props.theme.colors.background_dt};
    }

    > div {
      width: 60px !important;
      height: 60px !important;
      margin: initial !important;
    }
  }

  div:nth-child(2) {
    .MuiButton-root {
      min-width: auto;
      padding: 4px 6px;
      margin-right: 0.2rem;
      border-bottom: 2px solid transparent;
      color: ${(props) => props.theme.colors.background_text};
      background: ${(props) => transparentize(0.95, props.theme.colors.background_text)};

      .MuiButton-label {
        margin-top: 0.1rem;
        text-transform: capitalize;
        font: normal 0.8rem "Balsamiq Sans", cursive;
      }

      &.selected {
        border-color: ${(props) =>
          transparentize(0.75, props.theme.colors.background_dt)};
      }
    }
  }

  @media (max-width: 425px) {
    > div {
      display: flex;
      justify-content: center;

      .MuiButton-root {
        padding: 8px 8.5px 6px;
        border-radius: 50%;

        .MuiButton-label {
          font-size: 1rem;
        }
      }
    }
  }
`;
