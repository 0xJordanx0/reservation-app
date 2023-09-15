"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import partySizes from "@/data/partySize";
import { times } from "@/data/times";
import useAvailabilities from "@/app/hooks/useAvailabilities";
import Link from "next/link";
import { Time, convertToDisplayTime } from "@/utils/convertToDisplayTime";

type Props = {
  openTime: string;
  closeTime: string;
  slug: string;
};

export default function Reservation({ openTime, closeTime, slug }: Props) {
  const { data, loading, error, fetchAvailabilities } = useAvailabilities();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState(openTime);
  const [partySize, setPartySize] = useState<Number>(1);
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

  function filterByOpenTime() {
    const openTimes: typeof times = [];

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
      setDay(date.toISOString().split("T")[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  }

  function handleClick() {
    fetchAvailabilities({
      slug: slug,
      day,
      time: selectedTime,
      partySize: partySize.toString(),
    });
  }

  return (
    <div className="h-fit flex flex-col gap-2 bg-white p-4 rounded-lg border-[1px]">
      <div className="prose text-xs text-center">
        <h1>Make a Reservation</h1>
      </div>
      <hr />
      <div>
        <p>People</p>
        <select
          className="p-2 w-full"
          value={partySize.toString()}
          onChange={(e) => setPartySize(parseInt(e.target.value))}
        >
          {partySizes.map((option) => (
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
          <select
            className="p-2"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            disabled={loading}
          >
            {filterByOpenTime().map((time) => (
              <option value={time.time}>{time.displayTime}</option>
            ))}
          </select>
        </div>
      </div>
      <hr />
      <button
        className="bg-orange text-white p-2 rounded-lg"
        onClick={() => handleClick()}
      >
        {loading ? "..." : "Find a Time"}
      </button>
      {data && data.length ? (
        <div className="flex gap-2 flex-wrap">
          {data.map((time) => {
            return time.available ? <Link href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`} className="bg-orange text-white p-4 rounded-lg cursor-pointer w-24">
              <span className="text-sm font-bold">{convertToDisplayTime(time.time as Time)}</span>
            </Link> : <p className="bg-gray-300 p-2 w-24 mb-3 rounded mr-3">No Time Available</p>;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
