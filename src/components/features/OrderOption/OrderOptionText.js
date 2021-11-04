import React from 'react';
import styles from './OrderOption.module.scss';

const OrderOptionText = ({currentValue, setOptionValue}) => {
    return (
        <label className={styles.component}>
            <input
                type="text"
                value={currentValue}
                onChange={event => setOptionValue(event.currentTarget.value)}
            />
        </label>
    )
}

export default OrderOptionText;