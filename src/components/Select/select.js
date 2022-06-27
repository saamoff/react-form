import React, { useEffect, useState } from "react";
import styled from 'styled-components'

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import "./select.css"

function TableDatePicker() {
  const [date, setDate] = useState(new Date())

  return (
    <DatePicker wrapperClassName="date-picker" placeholderText='yyyy/mm/dd' dateFormat="yyyy/MM/dd" selected={date} onChange={date => setDate(date)} minDate={new Date("1945-01-01")} maxDate={moment().toDate()}/>
  )
}

export default TableDatePicker
