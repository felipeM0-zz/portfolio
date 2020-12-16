import styled from "styled-components";
// import { shade } from "polished";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.background_text};
  padding: 0.5rem 1rem 0.55rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.background};
  transition: all 0.3s;

  > div:nth-child(1) {
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

  > div:nth-child(2) {
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

      span {
        color: ${(props) => props.theme.colors.background_text};
        transition: all 0.2s;
      }

      :hover {
        span {
          color: ${(props) => props.theme.colors.background_dt};
        }
      }
    }
  }

  > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div:nth-child(1) {
      .react-switch-bg {
        background: ${(props) => props.theme.colors.background_darker} !important;

        > div {
          display: flex;
          justify-content: center;
          align-items: center;

          > svg {
            margin-top: 0.063rem;
            color: ${(props) => props.theme.colors.background_text};
            animation: rotating 10s infinite linear;
          }

          @keyframes rotating {
            from {
              transform: rotate(360deg);
            }
          }
        }
      }

      .react-switch-handle {
        background: ${(props) => props.theme.colors.background_text} !important;
      }
    }
  }
`;
