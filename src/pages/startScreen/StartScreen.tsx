import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const StartScreen: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="start">
      <div className="start__column">
        <div className="start__title">Restaurant App</div>
        <button
          onClick={() => navigate("/serve/table")}
          className="start__button"
          data-back="Start"
          data-front="Hover me"
        />
      </div>
    </div>
  );
};

export default StartScreen;
