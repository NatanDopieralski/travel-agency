import React from 'react';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

const OrderOptionDate = ({currentValue, setOptionValue}) => {
  return (
    <label className={styles.number}>
      <DatePicker selected={currentValue} onChange={(date) => setOptionValue(date)} />
    </label>
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,

};

export default OrderOptionDate;
