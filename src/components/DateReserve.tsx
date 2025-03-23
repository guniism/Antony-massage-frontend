"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function DateReserve({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: dayjs.Dayjs | null;
  setSelectedDate: (date: dayjs.Dayjs | null) => void;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="w-full">
        <DatePicker
          className="w-full bg-white"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
      </div>
    </LocalizationProvider>
  );
}
