"use client";

import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { ICalendar } from "./Interface";

const Calendar: React.FC<ICalendar> = ({
    value,
    disabledDates,
    onChange
}: ICalendar) => (
    <DateRange
        rangeColors={["#262626"]}
        ranges={[value]}
        date={new Date()}
        onChange={onChange}
        direction="vertical"
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={disabledDates}
    />
)

export default Calendar