import { useCallback, useState } from "react";
import "./style.scss";

interface IDates {
  dates: {
    day: string;
  }[];
  onChange: (date: string) => void;
  currentDay: string
}

const Dates = ({ dates, onChange, currentDay }: IDates) => {
  const [currentDateIndex, setCurrentDateIndex] = useState(0);

  const onNext = useCallback(() => {
    setCurrentDateIndex((prev) => prev + 1);
    onChange(dates[currentDateIndex + 1]?.day);
  }, [currentDateIndex, dates]);

  const onPrev = useCallback(() => {
    setCurrentDateIndex((prev) => prev - 1);
    onChange(dates[currentDateIndex - 1]?.day);
  }, [currentDateIndex, dates]);

  return (
    <div className="dates__wrapper">
      <button
        className="dates__left"
        onClick={onPrev}
        disabled={currentDateIndex === 0}
      >
        <Arrow />
      </button>
      <div className="dates__center">{currentDay}</div>
      <button onClick={onNext} disabled={currentDateIndex === dates.length - 1}>
        <Arrow />
      </button>
    </div>
  );
};

export default Dates;

const Arrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#efefef"
        d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"
      />
    </svg>
  );
};
