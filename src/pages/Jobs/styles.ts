import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export const Container = styled.div``;

interface GridProps {
  link: string;
}

export const GridItem = styled(Grid).attrs((props: GridProps) => ({
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
