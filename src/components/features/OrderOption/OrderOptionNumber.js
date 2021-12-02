import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue, limits, price, setOptionValue}) => {
  return (
    <div className={styles.number}>
      <input
        required
        type="number"
        className={styles.inputSmall}
        value={currentValue}
        min={limits.min}
        max={limits.max}
        onChange={event => setOptionValue(event.currentTarget.value)}
      />
      {formatPrice(price)}
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func.isRequired,
  price: PropTypes.string,
};

export default OrderOptionNumber;
