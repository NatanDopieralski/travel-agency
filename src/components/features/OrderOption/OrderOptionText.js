import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({currentValue, setOptionValue}) => {
  return (
    <label className={styles.component}>
      <input
        required
        type="text"
        value={currentValue}
        onChange={event => setOptionValue(event.currentTarget.value)}
      />
    </label>
  );
};

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func.isRequired,
};

export default OrderOptionText;