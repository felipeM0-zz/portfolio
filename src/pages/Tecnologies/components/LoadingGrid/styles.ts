import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  display: flex;
  padding: 0.7rem;
  flex-wrap: wrap;

  .MuiCard-root {
    margin: 1rem;
    padding: 1rem;
    display: flex;
    min-height: 200px;
    position: relative;
    transition: all 0.3s;
    background: ${(props) => props.theme.colors.background};

    .MuiCardMedia-root {
      display: flex;
      align-items: center;
    }

    > div:nth-child(2) {
      flex: 1;
      display: flex;
      flex-direction: column;

      span:nth-child(1) {
        top: 20px;
        width: 50%;
        right: 23px;
        position: absolute;
      }
      span:nth-child(2) {
        width: 93%;
        height: 100px;
        margin-left: 1rem;
        margin-top: 45px;
        border-radius: 4px;
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

        span {
          margin: 0.3rem 0 0 0.4rem;
        }
      }

      > div:nth-child(2) {
        span:nth-child(2) {
          margin-left: 0;
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .MuiCard-root {
      min-height: max-content;
    }
  }

  @media (max-width: 375px) {
    .MuiCard-root {
      margin: 0.3rem;
    }
  }
`;
