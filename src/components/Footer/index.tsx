import React from "react";
import { useHistory } from "react-router-dom";
// INTERFACES
import { FooterProps } from "./interfaces";
// ICONS
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// STYLES
import { Container } from "./styles";

const Footer = (props: FooterProps) => {
  const history = useHistory();

  const actionArrow = (elem: EventTarget & HTMLDivElement) => {
    elem.classList.add("active");
    elem.addEventListener("animationend", () => {
      elem.classList.contains("next")
        ? history.push(props.next)
        : history.push(typeof props.previous === "string" ? props.previous : "");
    });
  };

  return (
    <Container twoOptions={props.dual}>
      {props.dual && (
        <div className="previous" onClick={(e) => actionArrow(e.currentTarget)}>
          <BsArrowLeft />
          <span>{props.name_previous}</span>
        </div>
      )}

      <div className="next" onClick={(e) => actionArrow(e.currentTarget)}>
        <span>{props.name_next}</span>
        <BsArrowRight />
      </div>
    </Container>
  );
};

export default Footer;
