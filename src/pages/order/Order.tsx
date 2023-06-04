import axios from "axios";
import { FC, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import GradientButton from "../../components/buttons/gradient/GradientButton";
import MainLayout from "../../components/layouts/main/MainLayout";
import "./style.scss";

const Order: FC = () => {
  const date = useMemo(() => {
    return Date.now();
  }, []);
  const location = useLocation();

  const url = useMemo(() => {
    const pathname = location.pathname.split("/");
    return {
      day: pathname[3],
      hour: pathname[4],
      id: pathname[5],
    };
  }, [location]);

  const subtitle = useMemo(() => {
    switch (url.id) {
      case "20":
        return "VIP зал";
      case "19":
        return "VIP столик №2";
      case "18":
        return "VIP столик №1";
      default:
        return `столик №${url.id}`;
    }
  }, [url]);

  useEffect(() => {
    axios.post("https://restaurant-back.herokuapp.com/date/order", {
      day: url.day,
      hour: url.hour,
      tableNumber: url.id,
    });
  }, [url]);

  return (
    <MainLayout>
      <div className="container__1200">
        <div className="order">
          <div className="order__block">
            <h2 className="order__title">Замовлення №{date}</h2>
            <div className="order__subtitle">
              Дякуємо за замовлення! Ви замовили&nbsp;{subtitle} {url.day} на{" "}
              {url.hour}
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
