"use client";

import { useState } from "react"
import Datepicker from "tailwind-datepicker-react"


const options = {
	title: "Reservation Date",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	datepickerClassNames: "top-12",
	language: "en",
    theme: {
		background: "dark:bg-white",
		todayBtn: "",
		clearBtn: "dark:bg-orange dark:border-none dark:focus:ring-0 dark:hover:bg-yellow-700",
		icons: "",
		text: "dark:text-black",
		disabledText: "dark:text-gray-500 hover:bg-white",
		input: "",
		inputIcon: "",
		selected: "bg-orange",
	},
}

export default function DatePicker(){
	const [show, setShow] = useState<boolean>(false)
	const handleChange = (selectedDate: Date) => {
		console.log(selectedDate)
	}
	const handleClose = (state: boolean) => {
		setShow(state)
	}

	return (
		<div>
			<Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
		</div>
	)
}