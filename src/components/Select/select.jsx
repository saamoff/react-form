import React, { useEffect, useState } from "react";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import "./select.css"

function TableDatePicker(...props) {
  const [date, setDate] = useState(new Date())

  return (
    <div className="date-div">
      <label>Birthdate*</label>
      <DatePicker wrapperClassName="date-picker"
      name={props.name}
      placeholderText='yyyy/mm/dd'
      dateFormat="yyyy/MM/dd"
      selected={date}
      required='true'
      onChange={date => setDate(date)} 
      minDate={new Date("1945-01-01")} 
      maxDate={moment().toDate()}/>
    </div>
    
  )
}

export default TableDatePicker
