import React from 'react';
import styles from './OrderSummary.module.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = ({cost, options}) => {
    return (
        <h2 className={styles.component}>
            Total: <strong>{formatPrice(calculateTotal(cost, options))}</strong>
        </h2>
    )
}

export default OrderSummary;
