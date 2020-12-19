import styled from "styled-components";
import Switch from "react-switch";

export const Container = styled(Switch)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
`;
