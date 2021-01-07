import styled from "styled-components";

export const Container = styled.div`
  #tsparticles canvas {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: fixed;
  }

  .MuiGrid-container {
    padding: 1rem;

    .MuiGrid-item {
      .MuiCard-root {
        margin: 1rem;
        padding: 1rem;
        min-height: 200px;
        display: flex;
        transition: all .5s;
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
      }
    }
  }

  @media (max-width: 768px) {
    .MuiGrid-container {
      padding: 0.2rem;

      .MuiGrid-item {
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
    }
  }

  @media (max-width: 375px) {
    .MuiGrid-container {
      .MuiGrid-item {
        .MuiCard-root {
          margin: 0.3rem;
        }
      }
    }
  }
`;
