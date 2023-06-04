import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TableIcon } from "../../assets/images/svg";
import Dates from "../../components/dates/Dates";
import MainLayout from "../../components/layouts/main/MainLayout";
import CustomSelect from "../../components/select/CustomSelect";
import { closeModal, setModal } from "../../redux/reducers/modal-reducer";
import { formatDate } from "../../utils/formatDate";
import "./style.scss";

const Table = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dates, setDates] = useState<any>([]);
  const [currentDay, setCurrentDay] = useState("");
  const [currentHour, setCurrentHour] = useState("");

  const isBigOrdered = useMemo(() => {
    const findByDay = dates.find((date: any) => date.day === currentDay);
    const findByHour = findByDay?.hours?.find(
      (hour: any) => hour.time === currentHour
    );
    return findByHour?.tablesOrdered?.includes("20");
  }, [dates, currentDay, currentHour]);

  const table = useMemo(() => {
    const arr = [];

    const findByDay = dates.find((date: any) => date.day === currentDay);
    const findByHour = findByDay?.hours?.find(
      (hour: any) => hour.time === currentHour
    );

    for (let i = 1; i < 18; i++) {
      arr.push({
        index: i,
        isOrdered: findByHour?.tablesOrdered?.includes(i + ""),
      });
    }
    return arr;
  }, [dates, currentDay, currentHour]);

  const vip = useMemo(() => {
    const arr = [];

    const findByDay = dates.find((date: any) => date.day === currentDay);
    const findByHour = findByDay?.hours?.find(
      (hour: any) => hour.time === currentHour
    );

    for (let i = 18; i < 20; i++) {
      arr.push({
        index: i,
        isOrdered: findByHour?.tablesOrdered?.includes(i + ""),
      });
    }
    return arr;
  }, [dates, currentDay, currentHour]);

  const onTableClick = useCallback<any>(
    (number: number, isOrdered: boolean) => {
      if (!isOrdered) {
        dispatch(
          setModal(
            "Замовлення столика",
            `Ви впевнені, що хочете замовити столик №${number}?`,
            "Замовити",
            () => {
              navigate(`/serve/table/${currentDay}/${currentHour}/${number}`);
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
    [dispatch, navigate, currentDay, currentHour]
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
              navigate(`/serve/table/${currentDay}/${currentHour}/${number}`);
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
    [dispatch, navigate, currentDay, currentHour ]
  );

  const onVipHallTableClick = useCallback<any>(() => {
    if (!isBigOrdered) {
      dispatch(
        setModal(
          "Замовлення залу",
          `Ви впевнені, що хочете замовити VIP зал?`,
          "Замовити",
          () => {
            navigate(`/serve/table/${currentDay}/${currentHour}/20`);
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
  }, [dispatch, navigate, isBigOrdered, currentDay, currentHour]);

  const getDatesAsync = useCallback(async () => {
    const response = await axios.get(
      "https://restaurant-back.herokuapp.com/date"
    );
    let currentDay = response.data[0]?.day;

    const findByDay = response.data.find(
      (date: any) => date.day === currentDay
    );

    let currentHour = "";

    findByDay?.hours?.forEach((item: any) => {
      const date = new Date();
      const hour = date.getHours();

      if (!currentHour) {
        const substr = item.time.split(":")[0];

        if (+substr > hour) {
          currentHour = item.time;
        }
      }
    });

    if (!currentHour) {
      setDates(response.data.filter((date: any, index: number) => index !== 0));
      setCurrentDay(response.data[1]?.day);
      setCurrentHour(response.data[1]?.hours[0].time);
    } else {
      setDates(response.data);
      setCurrentDay(response.data[0]?.day);
      setCurrentHour(currentHour);
    }
  }, []);

  useEffect(() => {
    getDatesAsync();
  }, [getDatesAsync]);

  const onSelect = (value: string) => {
    setCurrentHour(value);
  };

  const selectOptions = useMemo(() => {
    if (dates.length === 0) return [{ label: "", value: "" }];

    const findByDay = dates.find((date: any) => date.day === currentDay);

    const options: any = [];

    let isIncluded = false;

    findByDay?.hours?.forEach((item: any) => {
      const date = new Date();
      const hour = date.getHours();
      const day = formatDate(date);

      if (!isIncluded && day === currentDay) {
        const substr = item.time.split(":")[0];
        if (+substr >= hour) {
          isIncluded = true;
        }
      } else {
        options.push({ label: item.time, value: item.time });
      }
    });

    return options;
  }, [dates, currentDay]);

  return (
    <MainLayout>
      <div className="table__wrapper">
        <div className="container__1200">
          <div className="table__time">
            <div className="table__dates">
              <Dates
                dates={dates}
                onChange={(date) => setCurrentDay(date)}
                currentDay={currentDay}
              />
            </div>
            <div className="table__select">
              <CustomSelect
                name="time"
                options={selectOptions}
                onChange={onSelect}
              />
            </div>
          </div>
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
                    VIP Столик №{index === 18 ? "1" : "2"} <br />
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
