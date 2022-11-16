import React, { FC } from "react";
import "./style.scss";

interface IGradientButton {
  children: string;
  link?: string;
  isBlank?: boolean;
}

const GradientButton: FC<IGradientButton> = ({
  children,
  link,
  isBlank = false,
}) => {
  return (
    <div className="container">
      <a
        href={link ? link : ""}
        className="btn"
        target={isBlank ? "_blank" : ""}
        rel="noreferrer"
      >
        <svg width="277" height="62">
          <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stopColor="#FF8282" />
              <stop offset="100%" stopColor="#E178ED" />
            </linearGradient>
          </defs>
          <rect
            x="5"
            y="5"
            rx="25"
            fill="none"
            stroke="url(#grad1)"
            width="266"
            height="50"
          ></rect>
        </svg>
        <span>{children}</span>
      </a>
    </div>
  );
};

export default GradientButton;
