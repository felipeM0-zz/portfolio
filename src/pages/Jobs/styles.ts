import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { transparentize } from "polished";

export const Container = styled.div``;

interface StylesProps {
  link: string;
  color: string;
}

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
          transition: all 0.4s;
          color: ${(props) => props.theme.colors.background_text};
        }
      }
    }

    .MuiCardContent-root {
      .MuiTypography-root {
        transition: all 0.4s;
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

export const SpanTec = styled("span").attrs((props: StylesProps) => ({
  color: props.color,
}))`
  font-size: 0.8rem;
  border-radius: 4px;
  transition: all 0.3s;
  margin: 0 0.3rem 0.3rem 0;
  padding: 0.2rem 0.4rem 0.1rem;
  color: ${(props) => props.theme.colors.background_text};
  background: ${(props) =>
    transparentize(props.theme.title === "dark" ? 0.8 : 0.3, props.color)};
`;
