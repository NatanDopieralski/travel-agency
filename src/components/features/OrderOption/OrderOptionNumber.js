import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.module.scss';

const OrderOptionNumber = ({currentValue, limits, price, setOptionValue}) => {
    return (
        <div className={styles.number}>
            <input
            type="number"
            className={styles.inputSmall}
            value={currentValue}
            min={limits.min}
            max={limits.max}
            onChange={event => setOptionValue(event.currentTarget.value)}
            />
            {formatPrice(price)}
        </div>
    )
}

export default OrderOptionNumber;
