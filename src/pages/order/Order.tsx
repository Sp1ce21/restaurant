import React, { FC, useMemo } from "react";
import { useLocation } from "react-router-dom";
import GradientButton from "../../components/buttons/gradient/GradientButton";
import MainLayout from "../../components/layouts/main/MainLayout";
import './style.scss'

const Order: FC = () => {
  const date = useMemo(() => {
    return Date.now();
  }, []);
  const location = useLocation();

  const id = useMemo(() => {
    return location.pathname.split("/")[3];
  }, [location]);

  const subtitle = useMemo(() => {
    switch (id) {
      case "20":
        return "VIP зал";
      case "19":
        return "VIP столик №2";
      case "18":
        return "VIP столик №1";
      default:
        return `столик №${id}`;
    }
  }, [id]);

  return (
    <MainLayout>
      <div className="container__1200">
        <div className="order">
          <div className="order__block">
            <h2 className="order__title">Замовлення №{date}</h2>
            <div className="order__subtitle">
              Дякуємо за замовлення! Ви замовили&nbsp;{subtitle}
            </div>
            <div className="order__button">
              <GradientButton link="/">На головну</GradientButton>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Order;
