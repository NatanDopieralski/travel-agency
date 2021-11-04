import React from 'react';
import DatePicker from "react-datepicker";
import styles from './OrderOption.module.scss';

import "react-datepicker/dist/react-datepicker.css";

const OrderOptionDate = ({currentValue, setOptionValue}) => {
    return (
        <label className={styles.number}>
            <DatePicker selected={currentValue} onChange={(date) => setOptionValue(date)} />
        </label>
    )
}

export default OrderOptionDate;
