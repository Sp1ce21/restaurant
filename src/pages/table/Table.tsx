import React, { useMemo } from "react";
import { TableIcon } from "../../assets/images/svg";
import MainLayout from "../../components/layouts/main/MainLayout";
import "./style.scss";

const Table = () => {
  const table = [];
  const vip = [];
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const isBigOrdered = useMemo(() => {
    return getRandomInt(100) > 80;
  }, []);
  for (let i = 1; i < 18; i++) {
    table.push({ index: i, isOrdered: getRandomInt(100) > 80 });
  }
  for (let i = 1; i < 3; i++) {
    vip.push({ index: i, isOrdered: getRandomInt(100) > 80 });
  }
  return (
    <MainLayout>
      <div className="table__wrapper">
        <div className="container__1200">
          <div className="table__block">
            <TableIcon />
            {table.map(({ index, isOrdered }) => (
              <div
                className={`table__table table__table${index} ${
                  isOrdered && "table__ordered"
                }`}
                key={index}
                onClick={() => console.log(index)}
              >
                {isOrdered ? (
                  <span className="table__text">Занято</span>
                ) : (
                  <span className="table__text">
                    Столик №{index} <br />
                    Замовити?
                  </span>
                )}
              </div>
            ))}

            {vip.map(({ index, isOrdered }) => (
              <div
                className={`table__tableVIP table__tableVIP${index} ${
                  isOrdered && "table__ordered"
                }`}
                key={index}
                onClick={() => console.log(index)}
              >
                {isOrdered ? (
                  <span className="table__text">Занято</span>
                ) : (
                  <span className="table__text">
                    VIP Столик №{index} <br />
                    Замовити?
                  </span>
                )}
              </div>
            ))}
            <div
              className={`table__tableVIP_big ${
                isBigOrdered && "table__ordered"
              }`}
            >
              {isBigOrdered ? (
                <span className="table__text">Занято</span>
              ) : (
                <span className="table__text">
                  VIP зал <br />
                  Замовити?
                </span>
              )}
            </div>
            <div className="table__entrance">Вхід</div>
            <div className="table__entranceVIP">VIP</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Table;
