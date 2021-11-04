import React from 'react';
import styles from './OrderOption.module.scss';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
    <div className={styles.component}>
      {required ? '' : (
        <div
          className={currentValue === '' ? `${styles.iconActive} ${styles.icon}` : styles.icon}
          onClick={() => (setOptionValue(''))}
        >
            <Icon name={'times-circle'}></Icon>
            <p>none</p>
        </div>
      )}

      {values.map(value => (
        <div
          className={currentValue === value.id ? `${styles.iconActive} ${styles.icon}` : styles.icon}
          key={value.id}
          onClick={value => (setOptionValue(value.id))}
        >
            <Icon name={value.icon}></Icon>
            {value.name}
            {formatPrice(value.price)}
        </div>)
      )}
    </div>
);

export default OrderOptionIcons;
