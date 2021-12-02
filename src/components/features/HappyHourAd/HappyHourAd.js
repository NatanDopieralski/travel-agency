import React from 'react';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  render() {
    return (
      <div>
        <h3 className={styles.title}>title</h3>
        <div className={styles.promoDescription}>countdown</div>
      </div>
    );
  }
}

export default HappyHourAd;