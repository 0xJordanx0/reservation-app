import DatePicker from "./DatePicker";

export default function Reservation() {
  return (
    <div className="h-fit flex flex-col gap-2 bg-white p-4 rounded-lg border-[1px]">
      <div className="prose text-xs text-center">
        <h1>Make a Reservation</h1>
      </div>
      <hr />
      <div>
        <p>People</p>
        <select className="p-2 w-full">
          <option value="1" selected>
            1 person
          </option>
          <option value="2" selected>
            2 person
          </option>
          <option value="3" selected>
            3 person
          </option>
          <option value="4" selected>
            4 person
          </option>
          <option value="5" selected>
            5 person
          </option>
          <option value="6" selected>
            6 person
          </option>
          <option value="7" selected>
            7 person
          </option>
          <option value="8" selected>
            8 person
          </option>
        </select>
      </div>
      <hr />
      <div className="flex justify-between mt-1">
        <div>
          <p>Date</p>
          <DatePicker />
        </div>
        <div>
          <p>Time</p>
          <select className="p-2">
            <option value="1" selected>
              1 person
            </option>
            <option value="2" selected>
              2 person
            </option>
            <option value="3" selected>
              3 person
            </option>
            <option value="4" selected>
              4 person
            </option>
            <option value="5" selected>
              5 person
            </option>
            <option value="6" selected>
              6 person
            </option>
            <option value="7" selected>
              7 person
            </option>
            <option value="8" selected>
              8 person
            </option>
          </select>
        </div>
      </div>
      <hr />
      <button className="bg-orange text-white p-2 rounded-lg">Reserve</button>
    </div>
  );
}
