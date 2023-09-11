"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import partySize from "@/data/partySize";
import { times } from "@/data/times";

type Props = {
  openTime: string;
  closeTime: string;
};

export default function Reservation({ openTime, closeTime }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  function filterByOpenTime() {
    const openTimes:typeof times = [];

    let isWithinOpenTime = false;

    times.forEach((time) => {
      if (!isWithinOpenTime && time.time == openTime) {
        isWithinOpenTime = true;
      }
      if (isWithinOpenTime) {
        openTimes.push(time);
      }
      if (time.time === closeTime) {
        isWithinOpenTime = false;
      }
    });

    return openTimes;
  }

  function handleChangeDate(date: Date) {
    if (date) {
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  }

  return (
    <div className="h-fit flex flex-col gap-2 bg-white p-4 rounded-lg border-[1px]">
      <div className="prose text-xs text-center">
        <h1>Make a Reservation</h1>
      </div>
      <hr />
      <div>
        <p>People</p>
        <select className="p-2 w-full">
          {partySize.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <hr />
      <div className="flex justify-between mt-1">
        <div>
          <p>Date</p>
          <DatePicker
            selected={selectedDate}
            onChange={handleChangeDate}
            className="py-3 border-b font-light w-28"
            dateFormat={"MMMM d"}
            wrapperClassName="w-[48%]"
          />
        </div>
        <div>
          <p>Time</p>
          <select className="p-2">
            {filterByOpenTime().map((time) => (
              <option value={time.time}>{time.displayTime}</option>
            ))}
          </select>
        </div>
      </div>
      <hr />
      <button className="bg-orange text-white p-2 rounded-lg">Reserve</button>
    </div>
  );
}
