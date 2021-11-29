import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Section from '../../layout/Section/Section';
import OrderSummary from '../OrderSummary/OrderSummary';
//import styles from './OrderForm.scss';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import PropTypes from 'prop-types';


const OrderForm = ({tripCost, options, setOrderOption}) => {
  return (
    <Section>
      <Grid>
        <Row>
          {pricing.map(option => (
            <Col md={4} key={option.id}>
              <OrderOption
                {...option}
                currentValue={options[option.id]}
                setOrderOption={setOrderOption}
              />
            </Col>
          ))}
          <Col xs={12}>
            <OrderSummary cost={tripCost} options={options} >
            </OrderSummary>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  options: PropTypes.object,
};

export default OrderForm;
