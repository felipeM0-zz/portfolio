import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 4rem;
  transition: all 0.3s;

  > div {
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
      flex: 1;
      padding: 0 1rem;
      line-height: 1.6;
      margin-left: 2rem;
      transition: all 0.3s;
      font: bold 1.7rem "Poiret One", cursive;
      color: ${(props) => props.theme.colors.background_text};
    }
  }

  > div:last-child {
    margin: 0;
  }

  @media (max-width: 1024px) {
    padding: 1rem 2rem;

    > div {
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
    > div {
      p {
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: 600px) {
    > div {
      flex-direction: column;

      p {
        font-size: 1rem;
        margin-left: 0;
        text-align: justify;
      }
    }
  }

  @media (max-width: 425px) {
    padding: 1rem 0.5rem;

    > div {
      p {
        line-height: 1.25;
      }
    }
  }
`;
