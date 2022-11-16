import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TableIcon } from "../../assets/images/svg";
import MainLayout from "../../components/layouts/main/MainLayout";
import { closeModal, setModal } from "../../redux/reducers/modal-reducer";
import "./style.scss";

const Table = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const isBigOrdered = useMemo(() => {
    return getRandomInt(100) > 80;
  }, []);

  const table = useMemo(() => {
    const arr = [];
    for (let i = 1; i < 18; i++) {
      arr.push({ index: i, isOrdered: getRandomInt(100) > 80 });
    }
    return arr;
  }, []);

  const vip = useMemo(() => {
    const arr = [];
    for (let i = 18; i < 20; i++) {
      arr.push({ index: i, isOrdered: getRandomInt(100) > 80 });
    }
    return arr;
  }, []);

  const onTableClick = useCallback<any>(
    (number: number, isOrdered: boolean) => {
      if (!isOrdered) {
        dispatch(
          setModal(
            "Замовлення столика",
            `Ви впевнені, що хочете замовити столик №${number}?`,
            "Замовити",
            () => {
              navigate("/serve/table/" + number);
              dispatch(closeModal());
            }
          )
        );
      } else {
        dispatch(
          setModal(
            "Замовлення столика",
            `Даний столик зайнятий. Будь ласка, виберіть вільний`,
            "Продовжити",
            () => {
              dispatch(closeModal());
            }
          )
        );
      }
    },
    [dispatch, navigate]
  );

  const onVipTableClick = useCallback<any>(
    (number: number, isOrdered: boolean) => {
      if (!isOrdered) {
        dispatch(
          setModal(
            "Замовлення VIP столика",
            `Ви впевнені, що хочете замовити VIP столик №${
              number === 18 ? "1" : "2"
            }`,
            "Замовити",
            () => {
              navigate("/serve/table/" + number);
              dispatch(closeModal());
            }
          )
        );
      } else {
        dispatch(
          setModal(
            "Замовлення VIP столика",
            `Даний VIP столик зайнятий. Будь ласка, виберіть вільний`,
            "Продовжити",
            () => {
              dispatch(closeModal());
            }
          )
        );
      }
    },
    [dispatch, navigate]
  );

  const onVipHallTableClick = useCallback<any>(() => {
    if (!isBigOrdered) {
      dispatch(
        setModal(
          "Замовлення залу",
          `Ви впевнені, що хочете замовити VIP зал?`,
          "Замовити",
          () => {
            navigate("/serve/table/20");
            dispatch(closeModal());
          }
        )
      );
    } else {
      dispatch(
        setModal(
          "Замовлення залу",
          `Даний VIP зал зайнятий. Будь ласка, зачекайте поки звільниться, або візьміть інший вільний столик`,
          "Продовжити",
          () => {
            dispatch(closeModal());
          }
        )
      );
    }
  }, [dispatch, navigate, isBigOrdered]);

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
                onClick={() => onTableClick(index, isOrdered)}
              >
                {isOrdered ? (
                  <span className="table__text">Зайнято</span>
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
                onClick={() => onVipTableClick(index, isOrdered)}
              >
                {isOrdered ? (
                  <span className="table__text">Зайнято</span>
                ) : (
                  <span className="table__text">
                    VIP Столик №{index === 18 ? '1' : '2'} <br />
                    Замовити?
                  </span>
                )}
              </div>
            ))}
            <div
              className={`table__tableVIP_big ${
                isBigOrdered && "table__ordered"
              }`}
              onClick={onVipHallTableClick}
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
